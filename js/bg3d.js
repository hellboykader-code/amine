/* =========================================================================
   bg3d.js — fond animé « 3D » du hero : sphère de points en rotation,
   projetée en perspective, avec quelques points accent orange.
   Canvas natif, sans dépendance. Respecte prefers-reduced-motion.
   ========================================================================= */
(function () {
  "use strict";
  var canvas = document.getElementById("bg3d");
  if (!canvas) return;
  var ctx = canvas.getContext("2d");
  if (!ctx) return;

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var DPR = Math.min(window.devicePixelRatio || 1, 2);
  var W = 0, H = 0;

  function resize() {
    var r = canvas.getBoundingClientRect();
    W = r.width; H = r.height;
    canvas.width = Math.max(1, Math.round(W * DPR));
    canvas.height = Math.max(1, Math.round(H * DPR));
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  }
  resize();
  window.addEventListener("resize", resize);

  /* Points répartis sur une sphère (spirale de Fibonacci) */
  var N = 540, pts = [];
  for (var i = 0; i < N; i++) {
    var y = 1 - (i / (N - 1)) * 2;
    var rad = Math.sqrt(Math.max(0, 1 - y * y));
    var theta = i * 2.399963229;
    pts.push({
      x: Math.cos(theta) * rad,
      y: y,
      z: Math.sin(theta) * rad,
      accent: (i % 13 === 0)
    });
  }

  var ang = 0;
  var tiltC = Math.cos(0.45), tiltS = Math.sin(0.45);

  function draw() {
    ang += 0.0016;
    ctx.clearRect(0, 0, W, H);
    var cx = W * 0.5, cy = H * 0.5;
    var R = Math.min(W, H) * 0.46;
    var cosA = Math.cos(ang), sinA = Math.sin(ang);

    for (var i = 0; i < pts.length; i++) {
      var p = pts[i];
      // rotation autour de Y
      var x = p.x * cosA - p.z * sinA;
      var z = p.x * sinA + p.z * cosA;
      var y = p.y;
      // léger basculement autour de X
      var y2 = y * tiltC - z * tiltS;
      var z2 = y * tiltS + z * tiltC;

      var persp = 1 / (2.3 - z2);
      var sx = cx + x * R * persp * 1.15;
      var sy = cy + y2 * R * persp * 1.15;
      var depth = (z2 + 1) / 2;              // 0 (loin) → 1 (proche)
      var size = Math.max(0.4, (0.5 + depth * 1.9) * persp * 1.5);

      ctx.beginPath();
      if (p.accent) {
        ctx.fillStyle = "rgba(249,115,22," + (0.30 + depth * 0.55).toFixed(3) + ")";
      } else {
        var c = Math.round(110 + depth * 120);
        ctx.fillStyle = "rgba(" + c + "," + (c + 22) + "," + (c + 66) + "," + (0.10 + depth * 0.5).toFixed(3) + ")";
      }
      ctx.arc(sx, sy, size, 0, 6.28318);
      ctx.fill();
    }
    if (!reduce) requestAnimationFrame(draw);
  }

  requestAnimationFrame(draw);
})();
