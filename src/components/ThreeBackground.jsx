import { useEffect, useRef } from "react";
import * as THREE from "three";

// Fond animé 3D : cristaux colorés translucides qui flottent doucement,
// avec une légère parallaxe à la souris. Optimisé (DPR limité, formes low-poly)
// et désactivé si l'utilisateur préfère moins d'animations.
export default function ThreeBackground() {
  const ref = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mount = ref.current;
    if (!mount) return;

    const w = () => window.innerWidth;
    const h = () => window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, w() / h(), 0.1, 100);
    camera.position.z = 16;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    } catch {
      return; // WebGL non disponible : on laisse le fond CSS (aurora)
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(w(), h());
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Lumières
    scene.add(new THREE.AmbientLight(0xffffff, 0.7));
    const dir = new THREE.DirectionalLight(0xffffff, 1.1);
    dir.position.set(5, 8, 10);
    scene.add(dir);
    const p1 = new THREE.PointLight(0x7c3aed, 0.8, 60);
    p1.position.set(-12, 6, 6);
    scene.add(p1);
    const p2 = new THREE.PointLight(0x06b6d4, 0.7, 60);
    p2.position.set(12, -6, 4);
    scene.add(p2);

    // Cristaux flottants
    const COLORS = [0x2563eb, 0x7c3aed, 0xec4899, 0x06b6d4, 0x3b82f6];
    const geos = [
      new THREE.IcosahedronGeometry(1, 0),
      new THREE.OctahedronGeometry(1, 0),
      new THREE.DodecahedronGeometry(1, 0),
      new THREE.TetrahedronGeometry(1, 0),
    ];
    const N = window.innerWidth < 720 ? 11 : 20;
    const shapes = [];
    const edgeGeos = [];
    const group = new THREE.Group();
    for (let i = 0; i < N; i++) {
      const geo = geos[i % geos.length];
      const color = COLORS[i % COLORS.length];
      const mat = new THREE.MeshStandardMaterial({
        color,
        roughness: 0.25,
        metalness: 0.35,
        transparent: true,
        opacity: 0.82,
        emissive: color,
        emissiveIntensity: 0.18,
        flatShading: true,
      });
      const m = new THREE.Mesh(geo, mat);
      // Arêtes lumineuses pour un rendu "cristal" plus net
      const eg = new THREE.EdgesGeometry(geo);
      edgeGeos.push(eg);
      const edges = new THREE.LineSegments(eg, new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.35 }));
      m.add(edges);
      const s = 0.9 + Math.random() * 2.2;
      m.scale.setScalar(s);
      m.position.set((Math.random() - 0.5) * 32, (Math.random() - 0.5) * 18, (Math.random() - 0.5) * 10);
      m.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      m.userData = {
        rx: (Math.random() - 0.5) * 0.008,
        ry: (Math.random() - 0.5) * 0.008,
        fy: 0.3 + Math.random() * 0.5,
        ph: Math.random() * Math.PI * 2,
        baseY: m.position.y,
      };
      group.add(m);
      shapes.push(m);
    }
    scene.add(group);

    // Parallaxe souris
    const mouse = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    const onMove = (e) => {
      mouse.x = (e.clientX / w()) * 2 - 1;
      mouse.y = (e.clientY / h()) * 2 - 1;
    };
    if (!reduce) window.addEventListener("pointermove", onMove, { passive: true });

    const onResize = () => {
      camera.aspect = w() / h();
      camera.updateProjectionMatrix();
      renderer.setSize(w(), h());
    };
    window.addEventListener("resize", onResize);

    let raf;
    const clock = new THREE.Clock();
    const render = () => {
      const t = clock.getElapsedTime();
      for (const m of shapes) {
        m.rotation.x += m.userData.rx;
        m.rotation.y += m.userData.ry;
        m.position.y = m.userData.baseY + Math.sin(t * m.userData.fy + m.userData.ph) * 0.6;
      }
      target.x += (mouse.x - target.x) * 0.04;
      target.y += (mouse.y - target.y) * 0.04;
      group.rotation.y = target.x * 0.25;
      group.rotation.x = target.y * 0.15;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(render);
    };

    if (reduce) {
      renderer.render(scene, camera); // image statique
    } else {
      // Pause quand l'onglet est masqué (économie)
      const onVis = () => {
        if (document.hidden) cancelAnimationFrame(raf);
        else { clock.start(); raf = requestAnimationFrame(render); }
      };
      document.addEventListener("visibilitychange", onVis);
      raf = requestAnimationFrame(render);
      // nettoyage du listener de visibilité via closure
      mount._onVis = onVis;
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("resize", onResize);
      if (mount._onVis) document.removeEventListener("visibilitychange", mount._onVis);
      geos.forEach((g) => g.dispose());
      edgeGeos.forEach((g) => g.dispose());
      shapes.forEach((m) => {
        m.material.dispose();
        m.children.forEach((c) => c.material && c.material.dispose());
      });
      renderer.dispose();
      if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="three-bg" aria-hidden="true" ref={ref} />;
}
