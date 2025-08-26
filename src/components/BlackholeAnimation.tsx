import { useEffect, useRef } from "react";
import styles from "./BlackholeAnimation.module.css";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  element: HTMLDivElement;
  trail: { x: number; y: number; opacity: number }[];
}

const BlackholeAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, lastX: 0, lastY: 0 });
  const animationRef = useRef<number | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Blackhole position (center of container)
  const blackholePos = useRef({ x: 0, y: 0 });
  const blackholeMass = 1000; // Gravitational strength

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      blackholePos.current = {
        x: rect.width / 2,
        y: rect.height / 2,
      };
    };

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    // Mouse tracking with velocity
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const newX = e.clientX - rect.left;
      const newY = e.clientY - rect.top;

      // Calculate mouse velocity
      const velocityX = newX - mouseRef.current.x;
      const velocityY = newY - mouseRef.current.y;

      mouseRef.current.lastX = mouseRef.current.x;
      mouseRef.current.lastY = mouseRef.current.y;
      mouseRef.current.x = newX;
      mouseRef.current.y = newY;

      // Create particles with initial velocity based on mouse movement
      if (Math.abs(velocityX) > 0.5 || Math.abs(velocityY) > 0.5) {
        createParticle(newX, newY, velocityX * 0.3, velocityY * 0.3);
      }
    };

    // Create particle function with initial velocity
    const createParticle = (
      x: number,
      y: number,
      vx: number = 0,
      vy: number = 0
    ) => {
      if (particlesRef.current.length > 200) {
        // Remove oldest particle
        const oldParticle = particlesRef.current.shift();
        if (oldParticle) {
          oldParticle.element.remove();
        }
      }

      const particle = document.createElement("div");
      particle.className = styles.particle;
      container.appendChild(particle);

      const particleData: Particle = {
        x,
        y,
        vx: vx + (Math.random() - 0.5) * 1,
        vy: vy + (Math.random() - 0.5) * 1,
        life: 0,
        maxLife: 300, // Longer life for more dramatic trails
        element: particle,
        trail: [],
      };

      particlesRef.current.push(particleData);
    };

    // Animation loop
    const animate = () => {
      // Clear canvas for trail drawing
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle, index) => {
        // Store current position in trail
        particle.trail.push({
          x: particle.x,
          y: particle.y,
          opacity: 1.0,
        });

        // Limit trail length
        if (particle.trail.length > 50) {
          particle.trail.shift();
        }

        // Calculate distance to blackhole
        const dx = blackholePos.current.x - particle.x;
        const dy = blackholePos.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > 5) {
          // Don't apply gravity if too close
          // Realistic gravity calculation: F = G * m1 * m2 / r^2
          const force = blackholeMass / (distance * distance);
          const angle = Math.atan2(dy, dx);

          // Apply gravitational acceleration
          particle.vx += Math.cos(angle) * force * 0.01;
          particle.vy += Math.sin(angle) * force * 0.01;
        }

        // Apply slight damping for more realistic physics
        particle.vx *= 0.999;
        particle.vy *= 0.999;

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Update life
        particle.life++;

        // Calculate opacity based on life and distance
        const lifeRatio = 1 - particle.life / particle.maxLife;
        const distanceRatio = Math.min(distance / 300, 1);
        const opacity = lifeRatio * distanceRatio * 0.8;

        // Draw trail on canvas
        if (particle.trail.length > 1) {
          ctx.strokeStyle = `rgba(100, 100, 100, ${opacity * 0.3})`;
          ctx.lineWidth = 1;
          ctx.beginPath();

          for (let i = 1; i < particle.trail.length; i++) {
            const prev = particle.trail[i - 1];
            const curr = particle.trail[i];
            const trailOpacity = (i / particle.trail.length) * opacity * 0.5;

            ctx.strokeStyle = `rgba(120, 120, 120, ${trailOpacity})`;
            ctx.beginPath();
            ctx.moveTo(prev.x, prev.y);
            ctx.lineTo(curr.x, curr.y);
            ctx.stroke();
          }
        }

        // Update particle visual
        particle.element.style.left = `${particle.x}px`;
        particle.element.style.top = `${particle.y}px`;
        particle.element.style.opacity = `${opacity}`;

        // Remove particle if dead or absorbed by blackhole
        if (particle.life >= particle.maxLife || distance < 20) {
          particle.element.remove();
          particlesRef.current.splice(index, 1);
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    container.addEventListener("mousemove", handleMouseMove);
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      container.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      // Clean up particles
      particlesRef.current.forEach((particle) => {
        particle.element.remove();
      });
      particlesRef.current = [];
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.animationContainer}>
      {/* Canvas for drawing particle trails */}
      <canvas ref={canvasRef} className={styles.trailCanvas} />

      {/* Blackhole visual */}
      <div className={styles.blackhole}>
        <div className={styles.blackholeCore}></div>
        <div className={styles.blackholeRing}></div>
        <div className={styles.blackholeAccretion}></div>
      </div>

      {/* Event horizon glow */}
      <div className={styles.eventHorizon}></div>
    </div>
  );
};

export default BlackholeAnimation;
