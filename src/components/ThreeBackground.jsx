import { useEffect, useRef } from "react";
import * as THREE from "three";

// Fond animé : « tunnel » digital façon réseaux sociaux.
// Traînées de lumière bleues/orange qui jaillissent du centre + icônes néon
// (cœur, like, utilisateur, message, étoile, +) qui foncent vers la caméra.
const BLUE = "#2f6bff";
const ORANGE = "#ff7a1a";
const CYAN = "#10b5c9";
const KINDS = ["phone", "laptop", "tablet", "watch", "gear", "headphone", "phone", "laptop"];

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
  x.shadowColor = color; x.shadowBlur = 11;
  const P = 34;

  if (kind === "phone") {
    roundRect(x, -P * 0.5, -P * 0.85, P * 1.0, P * 1.7, 11); x.stroke();
    x.beginPath(); x.moveTo(-P * 0.14, -P * 0.66); x.lineTo(P * 0.14, -P * 0.66); x.stroke(); // écouteur
    x.beginPath(); x.arc(0, P * 0.62, 3.4, 0, 7); x.stroke();                                // bouton
  } else if (kind === "laptop") {
    roundRect(x, -P * 0.72, -P * 0.64, P * 1.44, P * 0.92, 6); x.stroke();                   // écran
    x.beginPath();
    x.moveTo(-P * 0.92, P * 0.42); x.lineTo(P * 0.92, P * 0.42);
    x.lineTo(P * 0.76, P * 0.64); x.lineTo(-P * 0.76, P * 0.64); x.closePath(); x.stroke();  // base
  } else if (kind === "tablet") {
    roundRect(x, -P * 0.82, -P * 0.62, P * 1.64, P * 1.24, 9); x.stroke();
    x.beginPath(); x.arc(P * 0.64, 0, 3, 0, 7); x.stroke();                                  // caméra
  } else if (kind === "watch") {
    roundRect(x, -P * 0.4, -P * 0.4, P * 0.8, P * 0.8, 12); x.stroke();                      // boîtier
    roundRect(x, -P * 0.26, -P * 0.86, P * 0.52, P * 0.44, 4); x.stroke();                   // bracelet haut
    roundRect(x, -P * 0.26, P * 0.42, P * 0.52, P * 0.44, 4); x.stroke();                    // bracelet bas
    x.beginPath(); x.moveTo(P * 0.42, -P * 0.08); x.lineTo(P * 0.52, -P * 0.08); x.stroke(); // couronne
  } else if (kind === "gear") {
    const teeth = 8, ro = P * 0.74, ri = P * 0.52;
    x.beginPath();
    for (let i = 0; i < teeth * 2; i++) {
      const a = (i * Math.PI) / teeth, r = i % 2 ? ri : ro;
      const px = Math.cos(a) * r, py = Math.sin(a) * r;
      i ? x.lineTo(px, py) : x.moveTo(px, py);
    }
    x.closePath(); x.stroke();
    x.beginPath(); x.arc(0, 0, P * 0.24, 0, 7); x.stroke();
  } else { // headphone
    x.beginPath(); x.arc(0, 0, P * 0.62, Math.PI * 1.06, Math.PI * 1.94); x.stroke();       // arceau
    roundRect(x, -P * 0.82, -P * 0.12, P * 0.32, P * 0.62, 6); x.stroke();                   // oreillette g
    roundRect(x, P * 0.5, -P * 0.12, P * 0.32, P * 0.62, 6); x.stroke();                     // oreillette d
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
    const WHITE = new THREE.Color(0xffffff);
    const palette = [BLUE, CYAN, ORANGE, BLUE, ORANGE];
    for (let i = 0; i < NS; i++) {
      const ang = Math.random() * Math.PI * 2;
      const rad = (0.06 + Math.random()) * RES();
      const x = Math.cos(ang) * rad, y = Math.sin(ang) * rad * 0.62;
      const z = -Math.random() * DEPTH;
      const len = 5 + Math.random() * 16;
      const speed = 0.5 + Math.random() * 1.4;
      sData.push({ x, y, z, len, speed });
      const col = palette[(Math.random() * palette.length) | 0];
      cA.set(col); cB.set(col).lerp(WHITE, 0.9); // queue qui s'estompe vers le clair
      const a = i * 6;
      sCol[a] = cA.r; sCol[a + 1] = cA.g; sCol[a + 2] = cA.b;               // tête (vive)
      sCol[a + 3] = cB.r; sCol[a + 4] = cB.g; sCol[a + 5] = cB.b;           // queue (claire)
    }
    const sGeo = new THREE.BufferGeometry();
    sGeo.setAttribute("position", new THREE.BufferAttribute(sPos, 3));
    sGeo.setAttribute("color", new THREE.BufferAttribute(sCol, 3));
    const sMat = new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.55, depthWrite: false });
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
      const mat = new THREE.SpriteMaterial({ map: mkTex(kind, color), transparent: true, depthWrite: false, opacity: 0.92 });
      iconMats.push(mat);
      const sp = new THREE.Sprite(mat);
      const ang = Math.random() * Math.PI * 2;
      const rad = (0.12 + Math.random()) * RES();
      sp.userData = {
        x: Math.cos(ang) * rad, y: Math.sin(ang) * rad * 0.62,
        z: -Math.random() * DEPTH, speed: 0.35 + Math.random() * 0.9,
        size: 1.9 + Math.random() * 2.3,
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
