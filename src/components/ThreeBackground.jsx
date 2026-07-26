import { useEffect, useRef } from "react";
import * as THREE from "three";

// Fond animé : appareils 3D (iPhone, iPad, MacBook, Apple Watch) dessinés en
// fil-de-fer vert, qui flottent et tournent doucement. Fond transparent.
const GREEN = 0x00c853;
const GLOW = 0x5df2a0;

export default function ThreeBackground() {
  const ref = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mount = ref.current;
    if (!mount) return;
    const w = () => window.innerWidth;
    const h = () => window.innerHeight;

    let renderer;
    try { renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" }); }
    catch { return; }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(w(), h());
    renderer.setClearColor(0x000000, 0); // transparent
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, w() / h(), 0.1, 100);
    camera.position.z = 16;

    // ---------- Appareils 3D fil-de-fer verts ----------
    const world = new THREE.Group(); scene.add(world);
    const lineMat = new THREE.LineBasicMaterial({ color: GREEN, transparent: true, opacity: 0.9 });
    const glowMat = new THREE.LineBasicMaterial({ color: GLOW, transparent: true, opacity: 0.32 });
    const faceMat = new THREE.MeshBasicMaterial({ color: GREEN, transparent: true, opacity: 0.05, side: THREE.DoubleSide, depthWrite: false });
    const geos = [];

    const wire = (geo) => {
      geos.push(geo);
      const eg = new THREE.EdgesGeometry(geo); geos.push(eg);
      const g = new THREE.Group();
      g.add(new THREE.LineSegments(eg, lineMat));
      const halo = new THREE.LineSegments(eg, glowMat); halo.scale.setScalar(1.05);
      g.add(halo);
      g.add(new THREE.Mesh(geo, faceMat));
      return g;
    };

    const mkPhone = () => wire(new THREE.BoxGeometry(0.8, 1.7, 0.09));
    const mkTablet = () => wire(new THREE.BoxGeometry(1.5, 2.05, 0.08));
    const mkWatch = () => {
      const g = new THREE.Group();
      g.add(wire(new THREE.BoxGeometry(0.55, 0.66, 0.22)));
      const b1 = wire(new THREE.BoxGeometry(0.34, 0.5, 0.06)); b1.position.y = 0.55;
      const b2 = wire(new THREE.BoxGeometry(0.34, 0.5, 0.06)); b2.position.y = -0.55;
      g.add(b1); g.add(b2);
      return g;
    };
    const mkMac = () => {
      const g = new THREE.Group();
      const base = wire(new THREE.BoxGeometry(2.3, 0.08, 1.55)); base.position.y = -0.45;
      const screen = wire(new THREE.BoxGeometry(2.3, 1.45, 0.06));
      screen.position.set(0, 0.28, -0.74); screen.rotation.x = -0.38;
      g.add(base); g.add(screen);
      return g;
    };

    const factories = [mkPhone, mkPhone, mkMac, mkTablet, mkWatch, mkPhone, mkMac, mkWatch];
    const NB = w() < 720 ? 7 : 12;
    const BX = 13, BY = 8, BZ = 6;
    const devices = [];
    for (let i = 0; i < NB; i++) {
      const g = factories[i % factories.length]();
      g.scale.setScalar(0.9 + Math.random() * 1.1);
      g.position.set((Math.random() - 0.5) * 2 * BX, (Math.random() - 0.5) * 2 * BY, (Math.random() - 0.5) * 2 * BZ - 2);
      g.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, (Math.random() - 0.5) * 0.5);
      g.userData = {
        v: [(Math.random() - 0.5) * 0.02, (Math.random() - 0.5) * 0.02, (Math.random() - 0.5) * 0.012],
        rx: (Math.random() - 0.5) * 0.009, ry: (Math.random() - 0.5) * 0.012,
      };
      world.add(g); devices.push(g);
    }

    const mouse = { x: 0, y: 0 }, target = { x: 0, y: 0 };
    const onMove = (e) => { mouse.x = (e.clientX / w()) * 2 - 1; mouse.y = (e.clientY / h()) * 2 - 1; };
    if (!reduce) window.addEventListener("pointermove", onMove, { passive: true });
    const onResize = () => { camera.aspect = w() / h(); camera.updateProjectionMatrix(); renderer.setSize(w(), h()); };
    window.addEventListener("resize", onResize);

    const step = () => {
      for (const g of devices) {
        const u = g.userData, v = u.v;
        g.position.x += v[0]; g.position.y += v[1]; g.position.z += v[2];
        if (g.position.x > BX || g.position.x < -BX) v[0] *= -1;
        if (g.position.y > BY || g.position.y < -BY) v[1] *= -1;
        if (g.position.z > BZ || g.position.z < -BZ - 4) v[2] *= -1;
        g.rotation.x += u.rx; g.rotation.y += u.ry;
      }
      target.x += (mouse.x - target.x) * 0.04;
      target.y += (mouse.y - target.y) * 0.04;
      world.rotation.y = target.x * 0.12;
      world.rotation.x = target.y * 0.08;
    };

    let raf;
    const render = () => { step(); renderer.render(scene, camera); raf = requestAnimationFrame(render); };
    if (reduce) { renderer.render(scene, camera); }
    else {
      const onVis = () => { if (document.hidden) cancelAnimationFrame(raf); else raf = requestAnimationFrame(render); };
      document.addEventListener("visibilitychange", onVis); mount._onVis = onVis;
      raf = requestAnimationFrame(render);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("resize", onResize);
      if (mount._onVis) document.removeEventListener("visibilitychange", mount._onVis);
      geos.forEach((g) => g.dispose());
      lineMat.dispose(); glowMat.dispose(); faceMat.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="three-bg" aria-hidden="true" ref={ref} />;
}
