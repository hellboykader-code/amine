import { useEffect, useRef } from "react";
import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

// Fond animé 3D : de vrais petits appareils (iPhone, MacBook, Apple Watch, iPad)
// métallisés, écran allumé, qui flottent et tournent doucement + parallaxe souris.
// Optimisé (peu d'objets, DPR limité, pause onglet caché, respect reduced-motion).
export default function ThreeBackground() {
  const ref = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mount = ref.current;
    if (!mount) return;
    const w = () => window.innerWidth;
    const h = () => window.innerHeight;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    } catch {
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(w(), h());
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, w() / h(), 0.1, 100);
    camera.position.z = 16;

    // Environnement neutre → reflets métalliques réalistes
    const pmrem = new THREE.PMREMGenerator(renderer);
    const envRT = pmrem.fromScene(new RoomEnvironment(), 0.04);
    scene.environment = envRT.texture;

    scene.add(new THREE.AmbientLight(0xffffff, 0.55));
    const key = new THREE.DirectionalLight(0xffffff, 1.1); key.position.set(6, 9, 8); scene.add(key);
    const fill = new THREE.DirectionalLight(0x88aaff, 0.5); fill.position.set(-8, -4, 6); scene.add(fill);

    // ---- Matériaux & géométries partagés (dispose à la fin) ----
    const geos = [];
    const mats = [];
    const G = (g) => { geos.push(g); return g; };
    const M = (o) => { const m = new THREE.MeshStandardMaterial({ transparent: true, opacity: 0.96, ...o }); mats.push(m); return m; };

    const silver = M({ color: 0xcbd2db, metalness: 1.0, roughness: 0.28 });
    const graphite = M({ color: 0x2a2e35, metalness: 0.9, roughness: 0.34 });
    const gold = M({ color: 0xd9c3a0, metalness: 1.0, roughness: 0.3 });
    const screen = M({ color: 0x0a1020, metalness: 0.2, roughness: 0.1, emissive: 0x2563eb, emissiveIntensity: 0.7 });
    const lens = M({ color: 0x0c0f14, metalness: 0.6, roughness: 0.2 });
    const band = M({ color: 0x39404b, metalness: 0.3, roughness: 0.7 });

    const rb = (x, y, z, r = 0.05) => G(new RoundedBoxGeometry(x, y, z, 3, r));
    const gPhoneBody = rb(0.62, 1.26, 0.09, 0.09);
    const gPhoneScreen = G(new THREE.PlaneGeometry(0.54, 1.14));
    const gPhoneCam = rb(0.22, 0.22, 0.05, 0.04);
    const gLens = G(new THREE.CylinderGeometry(0.045, 0.045, 0.03, 16));
    const gTabBody = rb(0.98, 1.3, 0.07, 0.06);
    const gTabScreen = G(new THREE.PlaneGeometry(0.88, 1.2));
    const gLapBase = rb(1.4, 0.07, 0.95, 0.04);
    const gLapKeys = G(new THREE.PlaneGeometry(1.2, 0.72));
    const gLapLid = rb(1.4, 0.86, 0.05, 0.04);
    const gLapScreen = G(new THREE.PlaneGeometry(1.26, 0.74));
    const gWatchBody = rb(0.4, 0.48, 0.16, 0.1);
    const gWatchScreen = G(new THREE.PlaneGeometry(0.3, 0.36));
    const gWatchBand = rb(0.3, 0.34, 0.08, 0.05);
    const gCrown = G(new THREE.CylinderGeometry(0.03, 0.03, 0.06, 12));

    const bodyMats = [silver, graphite, gold];
    const pick = (i) => bodyMats[i % bodyMats.length];

    function iphone(i) {
      const g = new THREE.Group();
      const body = new THREE.Mesh(gPhoneBody, pick(i)); g.add(body);
      const scr = new THREE.Mesh(gPhoneScreen, screen); scr.position.z = 0.046; g.add(scr);
      // module caméra à l'arrière
      const cam = new THREE.Mesh(gPhoneCam, graphite); cam.position.set(-0.16, 0.42, -0.05); g.add(cam);
      for (let k = 0; k < 3; k++) {
        const l = new THREE.Mesh(gLens, lens);
        l.rotation.x = Math.PI / 2;
        l.position.set(-0.16 + (k % 2) * 0.09 - 0.04, 0.49 - Math.floor(k / 1) * 0.07, -0.075);
        cam.add(l);
      }
      return g;
    }
    function ipad(i) {
      const g = new THREE.Group();
      g.add(new THREE.Mesh(gTabBody, pick(i)));
      const scr = new THREE.Mesh(gTabScreen, screen); scr.position.z = 0.037; g.add(scr);
      return g;
    }
    function macbook() {
      const g = new THREE.Group();
      const base = new THREE.Mesh(gLapBase, silver); base.position.set(0, -0.42, 0.47); g.add(base);
      const keys = new THREE.Mesh(gLapKeys, graphite); keys.rotation.x = -Math.PI / 2;
      keys.position.set(0, -0.385, 0.5); g.add(keys);
      const hinge = new THREE.Group(); hinge.position.set(0, -0.45, 0.0);
      const lid = new THREE.Mesh(gLapLid, silver); lid.position.y = 0.43; hinge.add(lid);
      const scr = new THREE.Mesh(gLapScreen, screen); scr.position.set(0, 0.43, 0.03); hinge.add(scr);
      hinge.rotation.x = -1.2; g.add(hinge);
      g.scale.setScalar(0.92);
      return g;
    }
    function watch() {
      const g = new THREE.Group();
      g.add(new THREE.Mesh(gWatchBody, graphite));
      const scr = new THREE.Mesh(gWatchScreen, screen); scr.position.z = 0.085; g.add(scr);
      const b1 = new THREE.Mesh(gWatchBand, band); b1.position.y = 0.4; g.add(b1);
      const b2 = new THREE.Mesh(gWatchBand, band); b2.position.y = -0.4; g.add(b2);
      const cr = new THREE.Mesh(gCrown, silver); cr.rotation.z = Math.PI / 2; cr.position.set(0.22, 0.05, 0); g.add(cr);
      return g;
    }
    const builders = [iphone, iphone, macbook, ipad, watch];

    const BX = 11, BY = 6.5, BZ = 4;
    const NB = w() < 720 ? 10 : 18;
    const devices = [];
    for (let i = 0; i < NB; i++) {
      const d = builders[i % builders.length](i);
      d.scale.multiplyScalar(0.85 + Math.random() * 0.7);
      d.position.set((Math.random() - 0.5) * 2 * BX, (Math.random() - 0.5) * 2 * BY, (Math.random() - 0.5) * 2 * BZ);
      d.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, (Math.random() - 0.5) * 0.5);
      d.userData = {
        v: [(Math.random() - 0.5) * 0.02, (Math.random() - 0.5) * 0.02, (Math.random() - 0.5) * 0.012],
        rx: (Math.random() - 0.5) * 0.006, ry: (Math.random() - 0.5) * 0.008,
      };
      scene.add(d);
      devices.push(d);
    }

    // Parallaxe souris
    const mouse = { x: 0, y: 0 }, target = { x: 0, y: 0 };
    const onMove = (e) => { mouse.x = (e.clientX / w()) * 2 - 1; mouse.y = (e.clientY / h()) * 2 - 1; };
    if (!reduce) window.addEventListener("pointermove", onMove, { passive: true });
    const onResize = () => { camera.aspect = w() / h(); camera.updateProjectionMatrix(); renderer.setSize(w(), h()); };
    window.addEventListener("resize", onResize);

    const step = () => {
      for (const d of devices) {
        const u = d.userData, v = u.v;
        d.position.x += v[0]; d.position.y += v[1]; d.position.z += v[2];
        if (d.position.x > BX || d.position.x < -BX) v[0] *= -1;
        if (d.position.y > BY || d.position.y < -BY) v[1] *= -1;
        if (d.position.z > BZ || d.position.z < -BZ) v[2] *= -1;
        d.rotation.x += u.rx; d.rotation.y += u.ry;
      }
      target.x += (mouse.x - target.x) * 0.04;
      target.y += (mouse.y - target.y) * 0.04;
      scene.rotation.y = target.x * 0.12;
      scene.rotation.x = target.y * 0.08;
    };

    let raf;
    const render = () => { step(); renderer.render(scene, camera); raf = requestAnimationFrame(render); };
    if (reduce) { step(); renderer.render(scene, camera); }
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
      mats.forEach((m) => m.dispose());
      envRT.dispose(); pmrem.dispose(); renderer.dispose();
      if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="three-bg" aria-hidden="true" ref={ref} />;
}
