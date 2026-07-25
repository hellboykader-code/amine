import { useEffect, useRef } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

// Fond animé 3D professionnel : un réseau de particules relié par de fines
// lignes (constellation), lent et sobre, avec parallaxe à la souris.
// Optimisé (peu de points, DPR limité, pause onglet caché) et désactivé
// si l'utilisateur préfère moins d'animations.
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
    const camera = new THREE.PerspectiveCamera(60, w() / h(), 0.1, 100);
    camera.position.z = 18;

    // Environnement neutre : donne aux billes des reflets pour un rendu métallisé
    const pmrem = new THREE.PMREMGenerator(renderer);
    const envRT = pmrem.fromScene(new RoomEnvironment(), 0.04);
    scene.environment = envRT.texture;

    // Bornes de l'espace
    const BX = 20, BY = 12, BZ = 7;
    const N = w() < 720 ? 45 : 80;
    const LINK = 3.4; // distance de liaison

    const pos = new Float32Array(N * 3);
    const vel = [];
    for (let i = 0; i < N; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 2 * BX;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 2 * BY;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 2 * BZ;
      vel.push([(Math.random() - 0.5) * 0.02, (Math.random() - 0.5) * 0.02, (Math.random() - 0.5) * 0.012]);
    }

    const group = new THREE.Group();
    scene.add(group);

    // Points
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    const pMat = new THREE.PointsMaterial({ color: 0x2563eb, size: 0.13, transparent: true, opacity: 0.75, sizeAttenuation: true });
    const points = new THREE.Points(pGeo, pMat);
    group.add(points);

    // Lignes (recalculées à chaque frame)
    const maxLineVerts = N * N;
    const linePos = new Float32Array(maxLineVerts * 3);
    const lGeo = new THREE.BufferGeometry();
    lGeo.setAttribute("position", new THREE.BufferAttribute(linePos, 3));
    const lMat = new THREE.LineBasicMaterial({ color: 0x6b8cff, transparent: true, opacity: 0.22 });
    const lines = new THREE.LineSegments(lGeo, lMat);
    group.add(lines);

    // Lumières (pour les billes)
    scene.add(new THREE.AmbientLight(0xffffff, 0.75));
    const dir = new THREE.DirectionalLight(0xffffff, 0.9);
    dir.position.set(6, 10, 8);
    scene.add(dir);

    // Petits appareils 3D qui flottent (iPhone/Samsung, MacBook, iPad, Apple Watch)
    const geos2 = []; // à disposer
    const mats2 = [];
    const G = (g) => { geos2.push(g); return g; };
    const M = (opts) => { const m = new THREE.MeshStandardMaterial({ transparent: true, opacity: 0.94, ...opts }); mats2.push(m); return m; };

    const matSilver = M({ color: 0xc3cad4, metalness: 0.95, roughness: 0.28 });
    const matDark = M({ color: 0x30353d, metalness: 0.75, roughness: 0.35 });
    const matScreen = M({ color: 0x0a1020, metalness: 0.2, roughness: 0.12, emissive: 0x1e40af, emissiveIntensity: 0.55 });
    const matBand = M({ color: 0x3b4250, metalness: 0.4, roughness: 0.6 });

    const gPhoneBody = G(new THREE.BoxGeometry(0.5, 1, 0.07));
    const gPhoneScr = G(new THREE.BoxGeometry(0.44, 0.9, 0.02));
    const gTabBody = G(new THREE.BoxGeometry(0.82, 1.06, 0.06));
    const gTabScr = G(new THREE.BoxGeometry(0.74, 0.96, 0.02));
    const gLapBase = G(new THREE.BoxGeometry(1.02, 0.055, 0.68));
    const gLapScr = G(new THREE.BoxGeometry(1.02, 0.62, 0.05));
    const gLapScrPanel = G(new THREE.BoxGeometry(0.92, 0.54, 0.02));
    const gWatchBody = G(new THREE.BoxGeometry(0.3, 0.36, 0.12));
    const gWatchScr = G(new THREE.BoxGeometry(0.24, 0.3, 0.02));
    const gWatchBand = G(new THREE.BoxGeometry(0.24, 0.26, 0.07));

    function phone(dark) {
      const g = new THREE.Group();
      const body = new THREE.Mesh(gPhoneBody, dark ? matDark : matSilver);
      const scr = new THREE.Mesh(gPhoneScr, matScreen); scr.position.z = 0.036;
      g.add(body, scr); return g;
    }
    function tablet() {
      const g = new THREE.Group();
      g.add(new THREE.Mesh(gTabBody, matSilver));
      const scr = new THREE.Mesh(gTabScr, matScreen); scr.position.z = 0.031; g.add(scr);
      return g;
    }
    function laptop() {
      const g = new THREE.Group();
      const base = new THREE.Mesh(gLapBase, matSilver); base.position.set(0, -0.28, 0.34);
      const screen = new THREE.Mesh(gLapScr, matSilver);
      const panel = new THREE.Mesh(gLapScrPanel, matScreen); panel.position.z = 0.026;
      const hinge = new THREE.Group(); hinge.add(screen, panel);
      hinge.position.set(0, -0.30, 0.0); hinge.rotation.x = -1.15;
      screen.position.y = 0.31; panel.position.y = 0.31;
      g.add(base, hinge); g.scale.setScalar(0.9); return g;
    }
    function watch() {
      const g = new THREE.Group();
      g.add(new THREE.Mesh(gWatchBody, matDark));
      const scr = new THREE.Mesh(gWatchScr, matScreen); scr.position.z = 0.066; g.add(scr);
      const b1 = new THREE.Mesh(gWatchBand, matBand); b1.position.y = 0.3;
      const b2 = new THREE.Mesh(gWatchBand, matBand); b2.position.y = -0.3;
      g.add(b1, b2); return g;
    }
    const builders = [() => phone(false), () => phone(true), tablet, laptop, watch];

    const NB = w() < 720 ? 12 : 20;
    const balls = []; // (appareils)
    for (let i = 0; i < NB; i++) {
      const d = builders[i % builders.length]();
      d.scale.multiplyScalar(0.5 + Math.random() * 0.7);
      d.position.set((Math.random() - 0.5) * 2 * BX, (Math.random() - 0.5) * 2 * BY, (Math.random() - 0.5) * 2 * BZ);
      d.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * 0.6);
      d.userData = {
        v: [(Math.random() - 0.5) * 0.025, (Math.random() - 0.5) * 0.025, (Math.random() - 0.5) * 0.016],
        rx: (Math.random() - 0.5) * 0.01, ry: (Math.random() - 0.5) * 0.012,
      };
      group.add(d);
      balls.push(d);
    }

    // Parallaxe souris
    const mouse = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    const onMove = (e) => { mouse.x = (e.clientX / w()) * 2 - 1; mouse.y = (e.clientY / h()) * 2 - 1; };
    if (!reduce) window.addEventListener("pointermove", onMove, { passive: true });

    const onResize = () => {
      camera.aspect = w() / h();
      camera.updateProjectionMatrix();
      renderer.setSize(w(), h());
    };
    window.addEventListener("resize", onResize);

    const posAttr = pGeo.getAttribute("position");
    const lineAttr = lGeo.getAttribute("position");

    const step = () => {
      // Déplacement + rebond dans les bornes
      for (let i = 0; i < N; i++) {
        const ix = i * 3;
        for (let k = 0; k < 3; k++) {
          pos[ix + k] += vel[i][k];
          const b = k === 0 ? BX : k === 1 ? BY : BZ;
          if (pos[ix + k] > b || pos[ix + k] < -b) vel[i][k] *= -1;
        }
      }
      posAttr.needsUpdate = true;

      // Appareils : déplacement + rebond + rotation lente
      for (const ball of balls) {
        const u = ball.userData, v = u.v;
        ball.position.x += v[0]; ball.position.y += v[1]; ball.position.z += v[2];
        if (ball.position.x > BX || ball.position.x < -BX) v[0] *= -1;
        if (ball.position.y > BY || ball.position.y < -BY) v[1] *= -1;
        if (ball.position.z > BZ || ball.position.z < -BZ) v[2] *= -1;
        ball.rotation.x += u.rx; ball.rotation.y += u.ry;
      }

      // Lignes entre points proches
      let v = 0;
      for (let i = 0; i < N; i++) {
        const ax = pos[i * 3], ay = pos[i * 3 + 1], az = pos[i * 3 + 2];
        for (let j = i + 1; j < N; j++) {
          const dx = ax - pos[j * 3], dy = ay - pos[j * 3 + 1], dz = az - pos[j * 3 + 2];
          if (dx * dx + dy * dy + dz * dz < LINK * LINK) {
            linePos[v++] = ax; linePos[v++] = ay; linePos[v++] = az;
            linePos[v++] = pos[j * 3]; linePos[v++] = pos[j * 3 + 1]; linePos[v++] = pos[j * 3 + 2];
          }
        }
      }
      lGeo.setDrawRange(0, v / 3);
      lineAttr.needsUpdate = true;

      target.x += (mouse.x - target.x) * 0.04;
      target.y += (mouse.y - target.y) * 0.04;
      group.rotation.y = target.x * 0.18;
      group.rotation.x = target.y * 0.1;
    };

    let raf;
    const render = () => { step(); renderer.render(scene, camera); raf = requestAnimationFrame(render); };

    if (reduce) {
      step(); renderer.render(scene, camera);
    } else {
      const onVis = () => {
        if (document.hidden) cancelAnimationFrame(raf);
        else raf = requestAnimationFrame(render);
      };
      document.addEventListener("visibilitychange", onVis);
      mount._onVis = onVis;
      raf = requestAnimationFrame(render);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("resize", onResize);
      if (mount._onVis) document.removeEventListener("visibilitychange", mount._onVis);
      pGeo.dispose(); lGeo.dispose(); pMat.dispose(); lMat.dispose();
      geos2.forEach((g) => g.dispose());
      mats2.forEach((m) => m.dispose());
      envRT.dispose(); pmrem.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="three-bg" aria-hidden="true" ref={ref} />;
}
