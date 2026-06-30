'use client';

import React, { useEffect, useRef } from 'react';

export default function CoCreationAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    // Set canvas resolution
    const updateSize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    updateSize();
    window.addEventListener('resize', updateSize);

    // Nodes representing co-creation infrastructure & sanctuary nodes
    const nodes = [
      { x: 0.5, y: 0.25, label: 'Core', radius: 8, pulse: 0 },
      { x: 0.25, y: 0.45, label: 'Node A', radius: 6, pulse: 1.2 },
      { x: 0.75, y: 0.45, label: 'Node B', radius: 6, pulse: 2.4 },
      { x: 0.35, y: 0.7, label: 'Node C', radius: 7, pulse: 3.6 },
      { x: 0.65, y: 0.7, label: 'Node D', radius: 7, pulse: 4.8 },
      { x: 0.5, y: 0.52, label: 'Nexus', radius: 9, pulse: 0.5 },
    ];

    const edges = [
      [0, 1], [0, 2], [0, 5],
      [1, 3], [2, 4], [1, 5], [2, 5],
      [3, 5], [4, 5], [3, 4]
    ];

    const particles: { x: number; y: number; vx: number; vy: number; size: number; alpha: number }[] = [];
    for (let i = 0; i < 35; i++) {
      particles.push({
        x: Math.random(),
        y: Math.random(),
        vx: (Math.random() - 0.5) * 0.002,
        vy: -Math.random() * 0.003 - 0.001,
        size: Math.random() * 2 + 1,
        alpha: Math.random() * 0.6 + 0.2,
      });
    }

    const render = () => {
      time += 0.015;
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      ctx.clearRect(0, 0, w, h);

      // Draw subtle radial glow background
      const grad = ctx.createRadialGradient(w * 0.5, h * 0.5, 10, w * 0.5, h * 0.5, w * 0.7);
      grad.addColorStop(0, 'rgba(255, 0, 153, 0.08)');
      grad.addColorStop(0.5, 'rgba(20, 20, 25, 0.4)');
      grad.addColorStop(1, 'rgba(10, 10, 15, 0.8)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // Draw floating background particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < 0) {
          p.y = 1;
          p.x = Math.random();
        }
        if (p.x < 0) p.x = 1;
        if (p.x > 1) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x * w, p.y * h, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 0, 153, ${p.alpha * 0.5})`;
        ctx.fill();
      });

      // Draw isometric grid lines building up at the bottom
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
      ctx.lineWidth = 1;
      const gridCount = 8;
      for (let i = 0; i <= gridCount; i++) {
        const py = h * 0.65 + (i / gridCount) * (h * 0.35);
        ctx.beginPath();
        ctx.moveTo(0, py);
        ctx.lineTo(w, py);
        ctx.stroke();
      }

      // Draw edges with animated data flow
      edges.forEach(([i1, i2], idx) => {
        const n1 = nodes[i1];
        const n2 = nodes[i2];
        const x1 = n1.x * w;
        const y1 = n1.y * h + Math.sin(time + n1.pulse) * 6;
        const x2 = n2.x * w;
        const y2 = n2.y * h + Math.sin(time + n2.pulse) * 6;

        // Base connecting line
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = 'rgba(255, 0, 153, 0.25)';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Traveling data packet along the edge
        const progress = (time * 0.8 + idx * 0.35) % 1;
        const px = x1 + (x2 - x1) * progress;
        const py = y1 + (y2 - y1) * progress;

        ctx.beginPath();
        ctx.arc(px, py, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#FF0099';
        ctx.shadowColor = '#FF0099';
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw nodes
      nodes.forEach((n) => {
        const nx = n.x * w;
        const ny = n.y * h + Math.sin(time + n.pulse) * 6;

        // Outer pulsing ring
        const ringRadius = n.radius + (Math.sin(time * 2 + n.pulse) + 1) * 6;
        ctx.beginPath();
        ctx.arc(nx, ny, ringRadius, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(255, 0, 153, 0.3)';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Inner glowing core
        ctx.beginPath();
        ctx.arc(nx, ny, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#FF0099';
        ctx.shadowColor = '#FF0099';
        ctx.shadowBlur = 15;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Core highlight
        ctx.beginPath();
        ctx.arc(nx - 2, ny - 2, n.radius * 0.35, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border-main glass-surface aspect-[3/4] shadow-md group">
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}
