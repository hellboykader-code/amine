import { useEffect, useRef } from "react";
import * as THREE from "three";

// Fond animé : de VRAIES photos d'appareils qui flottent doucement en 3D
// (billboards texturés), avec parallaxe souris. Réaliste car ce sont des photos.
const PHOTOS = [
  "./img/models/apple.jpg",
  "./img/models/by-model/iphone-15-pro-max.jpg",
  "./img/models/by-model/iphone-13.jpg",
  "./img/models/by-model/galaxy-s24.jpg",
  "./img/models/by-model/pixel-8.jpg",
  "./img/models/macbook.jpg",
  "./img/models/watch.jpg",
  "./img/models/by-model/ipad-air.png",
];

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
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, w() / h(), 0.1, 100);
    camera.position.z = 16;

    // ---- Champ d'étoiles 3D + alignements (constellations) ----
    const SN = w() < 720 ? 160 : 320;      // étoiles
    const SBX = 30, SBY = 20, SBZ = 16;
    const starPos = new Float32Array(SN * 3);
    const starVel = [];
    for (let i = 0; i < SN; i++) {
      starPos[i * 3] = (Math.random() - 0.5) * 2 * SBX;
      starPos[i * 3 + 1] = (Math.random() - 0.5) * 2 * SBY;
      starPos[i * 3 + 2] = (Math.random() - 0.5) * 2 * SBZ;
      starVel.push([(Math.random() - 0.5) * 0.006, (Math.random() - 0.5) * 0.006, (Math.random() - 0.5) * 0.004]);
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
    const starMat = new THREE.PointsMaterial({ color: 0x3b5bd9, size: 0.11, sizeAttenuation: true, transparent: true, opacity: 0.7 });
    const stars = new THREE.Points(starGeo, starMat);
    scene.add(stars);

    // Lignes de constellation entre étoiles proches (sur un sous-ensemble)
    const CN = Math.min(SN, 110), LINK = 4.2;
    const linePos = new Float32Array(CN * CN * 3);
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute("position", new THREE.BufferAttribute(linePos, 3));
    const lineMat = new THREE.LineBasicMaterial({ color: 0x7c93e8, transparent: true, opacity: 0.2 });
    const constellation = new THREE.LineSegments(lineGeo, lineMat);
    scene.add(constellation);
    const starAttr = starGeo.getAttribute("position");
    const lineAttr = lineGeo.getAttribute("position");

    const BX = 12, BY = 7, BZ = 4;
    const NB = w() < 720 ? 8 : 14;
    const cards = [];
    const geos = [], mats = [], texs = [];
    const loader = new THREE.TextureLoader();

    // Charge chaque photo puis crée des billboards (sans contour)
    PHOTOS.forEach((src, idx) => {
      loader.load(src, (tex) => {
        tex.colorSpace = THREE.SRGBColorSpace; texs.push(tex);
        const iw = tex.image.width, ih = tex.image.height;
        const ar = iw / ih;
        const geo = new THREE.PlaneGeometry(ar, 1); geos.push(geo);
        const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, side: THREE.DoubleSide }); mats.push(mat);
        const copies = idx < 6 ? 2 : 1;
        for (let c = 0; c < copies; c++) {
          const g = new THREE.Group();
          const pic = new THREE.Mesh(geo, mat);
          g.add(pic);
          const s = 1.1 + Math.random() * 1.3;
          g.scale.setScalar(s);
          g.position.set((Math.random() - 0.5) * 2 * BX, (Math.random() - 0.5) * 2 * BY, (Math.random() - 0.5) * 2 * BZ);
          g.rotation.set((Math.random() - 0.5) * 0.5, (Math.random() - 0.5) * 0.6, (Math.random() - 0.5) * 0.3);
          g.userData = {
            v: [(Math.random() - 0.5) * 0.018, (Math.random() - 0.5) * 0.018, (Math.random() - 0.5) * 0.01],
            ry: (Math.random() - 0.5) * 0.004, phase: Math.random() * 6.28,
          };
          scene.add(g); cards.push(g);
          if (cards.length >= NB) return;
        }
      });
    });

    const mouse = { x: 0, y: 0 }, target = { x: 0, y: 0 };
    const onMove = (e) => { mouse.x = (e.clientX / w()) * 2 - 1; mouse.y = (e.clientY / h()) * 2 - 1; };
    if (!reduce) window.addEventListener("pointermove", onMove, { passive: true });
    const onResize = () => { camera.aspect = w() / h(); camera.updateProjectionMatrix(); renderer.setSize(w(), h()); };
    window.addEventListener("resize", onResize);

    let t = 0;
    const step = () => {
      t += 0.01;

      // Étoiles : léger déplacement + scintillement
      for (let i = 0; i < SN; i++) {
        const ix = i * 3;
        for (let k = 0; k < 3; k++) {
          starPos[ix + k] += starVel[i][k];
          const b = k === 0 ? SBX : k === 1 ? SBY : SBZ;
          if (starPos[ix + k] > b || starPos[ix + k] < -b) starVel[i][k] *= -1;
        }
      }
      starAttr.needsUpdate = true;
      starMat.opacity = 0.55 + Math.sin(t * 1.6) * 0.18;

      // Alignements (constellation) : relie les étoiles proches
      let v = 0;
      for (let i = 0; i < CN; i++) {
        const ax = starPos[i * 3], ay = starPos[i * 3 + 1], az = starPos[i * 3 + 2];
        for (let j = i + 1; j < CN; j++) {
          const dx = ax - starPos[j * 3], dy = ay - starPos[j * 3 + 1], dz = az - starPos[j * 3 + 2];
          if (dx * dx + dy * dy + dz * dz < LINK * LINK) {
            linePos[v++] = ax; linePos[v++] = ay; linePos[v++] = az;
            linePos[v++] = starPos[j * 3]; linePos[v++] = starPos[j * 3 + 1]; linePos[v++] = starPos[j * 3 + 2];
          }
        }
      }
      lineGeo.setDrawRange(0, v / 3);
      lineAttr.needsUpdate = true;

      for (const g of cards) {
        const u = g.userData, v = u.v;
        g.position.x += v[0]; g.position.y += v[1]; g.position.z += v[2];
        if (g.position.x > BX || g.position.x < -BX) v[0] *= -1;
        if (g.position.y > BY || g.position.y < -BY) v[1] *= -1;
        if (g.position.z > BZ || g.position.z < -BZ) v[2] *= -1;
        g.rotation.y += u.ry;
        g.rotation.z = Math.sin(t + u.phase) * 0.08;
      }
      target.x += (mouse.x - target.x) * 0.04;
      target.y += (mouse.y - target.y) * 0.04;
      scene.rotation.y = target.x * 0.1;
      scene.rotation.x = target.y * 0.06;
    };

    let raf;
    const render = () => { step(); renderer.render(scene, camera); raf = requestAnimationFrame(render); };
    if (reduce) { setTimeout(() => { step(); renderer.render(scene, camera); }, 400); }
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
      geos.forEach((g) => g.dispose()); mats.forEach((m) => m.dispose()); texs.forEach((x) => x.dispose());
      starGeo.dispose(); starMat.dispose(); lineGeo.dispose(); lineMat.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="three-bg" aria-hidden="true" ref={ref} />;
}
