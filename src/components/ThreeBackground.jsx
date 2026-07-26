import { useEffect, useRef } from "react";
import * as THREE from "three";

// Fond animé : « tunnel » digital façon réseaux sociaux.
// Traînées de lumière bleues/orange qui jaillissent du centre + icônes néon
// (cœur, like, utilisateur, message, étoile, +) qui foncent vers la caméra.
const BLUE = "#3d8bff";
const ORANGE = "#ff8a2a";
const CYAN = "#38e0ff";
const KINDS = ["heart", "like", "user", "chat", "star", "plus", "heart", "like"];

function roundRect(x, X, Y, W, H, r) {
  x.beginPath();
  x.moveTo(X + r, Y);
  x.arcTo(X + W, Y, X + W, Y + H, r);
  x.arcTo(X + W, Y + H, X, Y + H, r);
  x.arcTo(X, Y + H, X, Y, r);
  x.arcTo(X, Y, X + W, Y, r);
  x.closePath();
}

function iconTexture(kind, color) {
  const s = 128, c = document.createElement("canvas"); c.width = c.height = s;
  const x = c.getContext("2d");
  x.translate(s / 2, s / 2);
  x.strokeStyle = color; x.fillStyle = color;
  x.lineWidth = 9; x.lineJoin = "round"; x.lineCap = "round";
  x.shadowColor = color; x.shadowBlur = 16;
  const P = 34;

  if (kind === "heart") {
    x.beginPath();
    x.moveTo(0, P * 0.75);
    x.bezierCurveTo(-P * 1.45, -P * 0.25, -P * 0.55, -P * 1.15, 0, -P * 0.3);
    x.bezierCurveTo(P * 0.55, -P * 1.15, P * 1.45, -P * 0.25, 0, P * 0.75);
    x.closePath(); x.stroke();
  } else if (kind === "star") {
    x.beginPath();
    for (let i = 0; i < 5; i++) {
      const a = -Math.PI / 2 + (i * 2 * Math.PI) / 5;
      const ox = Math.cos(a) * P, oy = Math.sin(a) * P;
      i ? x.lineTo(ox, oy) : x.moveTo(ox, oy);
      const a2 = a + Math.PI / 5;
      x.lineTo(Math.cos(a2) * P * 0.44, Math.sin(a2) * P * 0.44);
    }
    x.closePath(); x.stroke();
  } else if (kind === "check") {
    x.beginPath();
    x.moveTo(-P * 0.7, 0); x.lineTo(-P * 0.12, P * 0.55); x.lineTo(P * 0.78, -P * 0.62);
    x.stroke();
  } else if (kind === "chat") {
    roundRect(x, -P, -P * 0.85, P * 2, P * 1.35, 12); x.stroke();
    x.beginPath();
    x.moveTo(-P * 0.45, P * 0.5); x.lineTo(-P * 0.62, P * 0.98); x.lineTo(-P * 0.02, P * 0.5);
    x.closePath(); x.fill();
    x.fillStyle = color;
    for (let d = -1; d <= 1; d++) { x.beginPath(); x.arc(d * P * 0.5, -P * 0.15, 3.6, 0, 7); x.fill(); }
  } else if (kind === "user") {
    x.beginPath(); x.arc(0, -P * 0.35, P * 0.42, 0, 7); x.stroke();
    x.beginPath(); x.arc(0, P * 0.95, P * 0.78, Math.PI * 1.15, Math.PI * 1.85); x.stroke();
  } else if (kind === "plus") {
    x.beginPath();
    x.moveTo(0, -P * 0.7); x.lineTo(0, P * 0.7); x.moveTo(-P * 0.7, 0); x.lineTo(P * 0.7, 0);
    x.stroke();
  } else { // like (pouce)
    x.lineWidth = 8;
    x.beginPath();
    roundRect(x, -P * 0.85, -P * 0.05, P * 0.5, P * 0.85, 5); x.stroke(); // poignet
    x.beginPath();
    x.moveTo(-P * 0.3, P * 0.8);
    x.lineTo(-P * 0.3, -P * 0.2);
    x.lineTo(P * 0.05, -P * 0.72);
    x.quadraticCurveTo(P * 0.22, -P * 0.9, P * 0.28, -P * 0.55);
    x.lineTo(P * 0.2, -P * 0.12);
    x.lineTo(P * 0.62, -P * 0.12);
    x.quadraticCurveTo(P * 0.82, -P * 0.1, P * 0.74, P * 0.14);
    x.lineTo(P * 0.6, P * 0.66);
    x.quadraticCurveTo(P * 0.54, P * 0.82, P * 0.34, P * 0.8);
    x.closePath(); x.stroke();
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

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
    renderer.setClearColor(0x000000, 0); // le dégradé CSS fait le fond
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(72, w() / h(), 0.1, 240);
    camera.position.set(0, 0, 0);

    const DEPTH = 110;          // profondeur du tunnel
    const RES = () => 22 * (w() < 720 ? 0.7 : 1); // rayon d'apparition

    // ---------- Traînées de lumière (rayons du tunnel) ----------
    const NS = w() < 720 ? 220 : 420;
    const sPos = new Float32Array(NS * 2 * 3);
    const sCol = new Float32Array(NS * 2 * 3);
    const sData = []; // {x,y,z,len,speed}
    const cA = new THREE.Color(), cB = new THREE.Color();
    const palette = [BLUE, CYAN, ORANGE, BLUE, "#8fb4ff"];
    for (let i = 0; i < NS; i++) {
      const ang = Math.random() * Math.PI * 2;
      const rad = (0.06 + Math.random()) * RES();
      const x = Math.cos(ang) * rad, y = Math.sin(ang) * rad * 0.62;
      const z = -Math.random() * DEPTH;
      const len = 5 + Math.random() * 16;
      const speed = 0.5 + Math.random() * 1.4;
      sData.push({ x, y, z, len, speed });
      const col = palette[(Math.random() * palette.length) | 0];
      cA.set(col); cB.set(col);
      const a = i * 6;
      sCol[a] = cA.r; sCol[a + 1] = cA.g; sCol[a + 2] = cA.b;               // tête (vive)
      sCol[a + 3] = cB.r * 0.15; sCol[a + 4] = cB.g * 0.15; sCol[a + 5] = cB.b * 0.15; // queue (sombre)
    }
    const sGeo = new THREE.BufferGeometry();
    sGeo.setAttribute("position", new THREE.BufferAttribute(sPos, 3));
    sGeo.setAttribute("color", new THREE.BufferAttribute(sCol, 3));
    const sMat = new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false });
    const streaks = new THREE.LineSegments(sGeo, sMat);
    scene.add(streaks);
    const sAttr = sGeo.getAttribute("position");

    const writeStreaks = () => {
      for (let i = 0; i < NS; i++) {
        const d = sData[i], a = i * 6;
        sPos[a] = d.x; sPos[a + 1] = d.y; sPos[a + 2] = d.z;
        sPos[a + 3] = d.x; sPos[a + 4] = d.y; sPos[a + 5] = d.z - d.len;
      }
      sAttr.needsUpdate = true;
    };
    writeStreaks();

    // ---------- Icônes néon ----------
    const texs = [];
    const mkTex = (kind, color) => { const t = iconTexture(kind, color); texs.push(t); return t; };
    const NI = w() < 720 ? 16 : 30;
    const icons = [];
    const iconMats = [];
    for (let i = 0; i < NI; i++) {
      const kind = KINDS[(Math.random() * KINDS.length) | 0];
      const color = Math.random() < 0.5 ? ORANGE : (Math.random() < 0.6 ? BLUE : CYAN);
      const mat = new THREE.SpriteMaterial({ map: mkTex(kind, color), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.95 });
      iconMats.push(mat);
      const sp = new THREE.Sprite(mat);
      const ang = Math.random() * Math.PI * 2;
      const rad = (0.12 + Math.random()) * RES();
      sp.userData = {
        x: Math.cos(ang) * rad, y: Math.sin(ang) * rad * 0.62,
        z: -Math.random() * DEPTH, speed: 0.35 + Math.random() * 0.9,
        size: 1.5 + Math.random() * 1.8,
      };
      sp.position.set(sp.userData.x, sp.userData.y, sp.userData.z);
      sp.scale.setScalar(sp.userData.size);
      scene.add(sp); icons.push(sp);
    }

    const mouse = { x: 0, y: 0 }, target = { x: 0, y: 0 };
    const onMove = (e) => { mouse.x = (e.clientX / w()) * 2 - 1; mouse.y = (e.clientY / h()) * 2 - 1; };
    if (!reduce) window.addEventListener("pointermove", onMove, { passive: true });
    const onResize = () => { camera.aspect = w() / h(); camera.updateProjectionMatrix(); renderer.setSize(w(), h()); };
    window.addEventListener("resize", onResize);

    const resetDepth = (o, R) => {
      const ang = Math.random() * Math.PI * 2;
      const rad = (0.06 + Math.random()) * R;
      o.x = Math.cos(ang) * rad; o.y = Math.sin(ang) * rad * 0.62;
      o.z = -DEPTH;
    };

    const step = () => {
      const R = RES();
      for (let i = 0; i < NS; i++) {
        const d = sData[i];
        d.z += d.speed;
        if (d.z > 6) resetDepth(d, R);
      }
      writeStreaks();

      for (const sp of icons) {
        const u = sp.userData;
        u.z += u.speed;
        if (u.z > 5) { resetDepth(u, R); u.speed = 0.35 + Math.random() * 0.9; }
        sp.position.set(u.x, u.y, u.z);
        const near = THREE.MathUtils.clamp((u.z + DEPTH) / DEPTH, 0, 1);
        sp.material.opacity = 0.15 + near * 0.85;
      }

      target.x += (mouse.x - target.x) * 0.05;
      target.y += (mouse.y - target.y) * 0.05;
      camera.position.x = target.x * 2.2;
      camera.position.y = -target.y * 1.6;
      camera.lookAt(0, 0, -30);
    };

    let raf;
    const render = () => { step(); renderer.render(scene, camera); raf = requestAnimationFrame(render); };
    if (reduce) { camera.lookAt(0, 0, -30); renderer.render(scene, camera); }
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
      sGeo.dispose(); sMat.dispose();
      iconMats.forEach((m) => m.dispose());
      texs.forEach((t) => t.dispose());
      renderer.dispose();
      if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="three-bg three-bg--tunnel" aria-hidden="true" ref={ref} />;
}
