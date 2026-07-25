import { useEffect, useRef } from "react";
import * as THREE from "three";

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
      renderer.dispose();
      if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="three-bg" aria-hidden="true" ref={ref} />;
}
