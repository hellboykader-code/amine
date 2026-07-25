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

    // Billes 3D métallisées qui flottent (petites et nombreuses)
    const ballColors = [0xcbd5e1, 0x94a3b8, 0xb8c0cc, 0x8fa0c0, 0xdbe2ea, 0x7f8ea3];
    const NB = w() < 720 ? 18 : 34;
    const ballGeo = new THREE.SphereGeometry(1, 24, 16);
    const balls = [];
    for (let i = 0; i < NB; i++) {
      const mat = new THREE.MeshStandardMaterial({
        color: ballColors[i % ballColors.length],
        roughness: 0.15,
        metalness: 1.0,
        transparent: true,
        opacity: 0.9,
      });
      const m = new THREE.Mesh(ballGeo, mat);
      m.scale.setScalar(0.16 + Math.random() * 0.42);
      m.position.set((Math.random() - 0.5) * 2 * BX, (Math.random() - 0.5) * 2 * BY, (Math.random() - 0.5) * 2 * BZ);
      m.userData = { v: [(Math.random() - 0.5) * 0.03, (Math.random() - 0.5) * 0.03, (Math.random() - 0.5) * 0.02] };
      group.add(m);
      balls.push(m);
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

      // Billes : déplacement + rebond dans les bornes
      for (const ball of balls) {
        const v = ball.userData.v;
        ball.position.x += v[0]; ball.position.y += v[1]; ball.position.z += v[2];
        if (ball.position.x > BX || ball.position.x < -BX) v[0] *= -1;
        if (ball.position.y > BY || ball.position.y < -BY) v[1] *= -1;
        if (ball.position.z > BZ || ball.position.z < -BZ) v[2] *= -1;
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
      ballGeo.dispose(); balls.forEach((b) => b.material.dispose());
      envRT.dispose(); pmrem.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="three-bg" aria-hidden="true" ref={ref} />;
}
