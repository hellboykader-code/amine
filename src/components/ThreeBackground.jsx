import { useEffect, useRef } from "react";
import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

// Fond animé 3D : petits appareils réalistes (iPhone, MacBook, Apple Watch, iPad)
// écran allumé (fond d'écran dégradé), encoche, bords fins, boutons, module caméra.
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
    } catch { return; }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(w(), h());
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, w() / h(), 0.1, 100);
    camera.position.z = 16;

    const pmrem = new THREE.PMREMGenerator(renderer);
    const envRT = pmrem.fromScene(new RoomEnvironment(), 0.04);
    scene.environment = envRT.texture;

    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const kl = new THREE.DirectionalLight(0xffffff, 1.15); kl.position.set(6, 9, 8); scene.add(kl);
    const fl = new THREE.DirectionalLight(0x9fc0ff, 0.5); fl.position.set(-8, -4, 6); scene.add(fl);

    // --- Ressources partagées ---
    const geos = [], mats = [], texs = [];
    const G = (g) => { geos.push(g); return g; };
    const M = (o) => { const m = new THREE.MeshStandardMaterial({ transparent: true, opacity: 0.97, ...o }); mats.push(m); return m; };

    // Texture d'écran (fond d'écran dégradé) via canvas
    function screenTexture() {
      const c = document.createElement("canvas"); c.width = 128; c.height = 256;
      const x = c.getContext("2d");
      const g = x.createLinearGradient(0, 0, 128, 256);
      g.addColorStop(0, "#1d4ed8"); g.addColorStop(0.5, "#7c3aed"); g.addColorStop(1, "#db2777");
      x.fillStyle = g; x.fillRect(0, 0, 128, 256);
      x.globalAlpha = 0.18; x.fillStyle = "#fff";
      x.beginPath(); x.arc(38, 70, 46, 0, 7); x.fill();
      const t = new THREE.CanvasTexture(c); texs.push(t); return t;
    }
    const scrTex = screenTexture();

    const titanium = M({ color: 0xb9bfc7, metalness: 1.0, roughness: 0.34 });
    const graphite = M({ color: 0x33373d, metalness: 0.95, roughness: 0.4 });
    const desert = M({ color: 0xccb79a, metalness: 1.0, roughness: 0.36 });
    const black = M({ color: 0x06080c, metalness: 0.6, roughness: 0.3 });
    const lensMat = M({ color: 0x0a0d13, metalness: 0.8, roughness: 0.12 });
    const glass = M({ color: 0x1b2233, metalness: 0.5, roughness: 0.08 });
    const band = M({ color: 0x39404b, metalness: 0.25, roughness: 0.7 });
    const screenMat = M({ color: 0xffffff, map: scrTex, emissive: 0xffffff, emissiveMap: scrTex, emissiveIntensity: 0.9, metalness: 0.0, roughness: 0.16, opacity: 1 });

    const rb = (x, y, z, r = 0.05) => G(new RoundedBoxGeometry(x, y, z, 4, r));
    const gPhone = rb(0.64, 1.3, 0.085, 0.13);
    const gPhoneScr = G(new THREE.PlaneGeometry(0.58, 1.22));
    const gIsland = rb(0.16, 0.05, 0.012, 0.025);
    const gCamMod = rb(0.26, 0.26, 0.045, 0.06);
    const gLens = G(new THREE.CylinderGeometry(0.052, 0.052, 0.03, 18));
    const gFlash = G(new THREE.CylinderGeometry(0.02, 0.02, 0.028, 12));
    const gBtn = rb(0.02, 0.12, 0.03, 0.008);
    const gTab = rb(1.0, 1.32, 0.06, 0.06);
    const gTabScr = G(new THREE.PlaneGeometry(0.9, 1.22));
    const gCamDot = G(new THREE.CylinderGeometry(0.028, 0.028, 0.02, 12));
    const gLapBase = rb(1.42, 0.06, 0.96, 0.03);
    const gLapKeys = G(new THREE.PlaneGeometry(1.22, 0.74));
    const gLapLid = rb(1.42, 0.9, 0.045, 0.03);
    const gLapScr = G(new THREE.PlaneGeometry(1.3, 0.78));
    const gWatch = rb(0.42, 0.5, 0.16, 0.12);
    const gWatchScr = G(new THREE.PlaneGeometry(0.32, 0.4));
    const gWBand = rb(0.32, 0.34, 0.08, 0.05);
    const gCrown = G(new THREE.CylinderGeometry(0.032, 0.032, 0.05, 14));

    const frames = [titanium, graphite, desert];
    const pick = (i) => frames[i % frames.length];

    function iphone(i) {
      const g = new THREE.Group();
      g.add(new THREE.Mesh(gPhone, pick(i)));                       // châssis
      const scr = new THREE.Mesh(gPhoneScr, screenMat); scr.position.z = 0.044; g.add(scr); // écran
      const isl = new THREE.Mesh(gIsland, black); isl.position.set(0, 0.5, 0.05); g.add(isl); // dynamic island
      // module caméra à l'arrière
      const cam = new THREE.Mesh(gCamMod, graphite); cam.position.set(-0.15, 0.44, -0.05); g.add(cam);
      const lp = [[-0.05, 0.05], [-0.05, -0.05], [0.05, 0.0]];
      lp.forEach(([lx, ly]) => {
        const l = new THREE.Mesh(gLens, lensMat); l.rotation.x = Math.PI / 2; l.position.set(lx, ly, -0.03); cam.add(l);
      });
      const fl2 = new THREE.Mesh(gFlash, glass); fl2.rotation.x = Math.PI / 2; fl2.position.set(0.055, 0.09, -0.03); cam.add(fl2);
      // boutons latéraux
      const b1 = new THREE.Mesh(gBtn, pick(i)); b1.position.set(-0.325, 0.28, 0); g.add(b1);
      const b2 = new THREE.Mesh(gBtn, pick(i)); b2.position.set(-0.325, 0.1, 0); g.add(b2);
      const b3 = new THREE.Mesh(gBtn, pick(i)); b3.position.set(0.325, 0.28, 0); g.add(b3);
      return g;
    }
    function ipad(i) {
      const g = new THREE.Group();
      g.add(new THREE.Mesh(gTab, pick(i)));
      const scr = new THREE.Mesh(gTabScr, screenMat); scr.position.z = 0.032; g.add(scr);
      const dot = new THREE.Mesh(gCamDot, lensMat); dot.rotation.x = Math.PI / 2; dot.position.set(0, 0.58, -0.032); g.add(dot);
      return g;
    }
    function macbook() {
      const g = new THREE.Group();
      const base = new THREE.Mesh(gLapBase, titanium); base.position.set(0, -0.44, 0.48); g.add(base);
      const keys = new THREE.Mesh(gLapKeys, graphite); keys.rotation.x = -Math.PI / 2; keys.position.set(0, -0.405, 0.5); g.add(keys);
      const hinge = new THREE.Group(); hinge.position.set(0, -0.47, 0.0);
      const lid = new THREE.Mesh(gLapLid, titanium); lid.position.y = 0.45; hinge.add(lid);
      const scr = new THREE.Mesh(gLapScr, screenMat); scr.position.set(0, 0.45, 0.026); hinge.add(scr);
      hinge.rotation.x = -1.22; g.add(hinge);
      g.scale.setScalar(0.9); return g;
    }
    function watch() {
      const g = new THREE.Group();
      g.add(new THREE.Mesh(gWatch, graphite));
      const scr = new THREE.Mesh(gWatchScr, screenMat); scr.position.z = 0.085; g.add(scr);
      const bTop = new THREE.Mesh(gWBand, band); bTop.position.set(0, 0.41, 0); g.add(bTop);
      const bBot = new THREE.Mesh(gWBand, band); bBot.position.set(0, -0.41, 0); g.add(bBot);
      const cr = new THREE.Mesh(gCrown, titanium); cr.rotation.z = Math.PI / 2; cr.position.set(0.23, 0.07, 0); g.add(cr);
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
      scene.add(d); devices.push(d);
    }

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
      geos.forEach((g) => g.dispose()); mats.forEach((m) => m.dispose()); texs.forEach((t) => t.dispose());
      envRT.dispose(); pmrem.dispose(); renderer.dispose();
      if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="three-bg" aria-hidden="true" ref={ref} />;
}
