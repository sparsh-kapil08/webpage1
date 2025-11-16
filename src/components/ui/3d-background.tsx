import { useEffect, useRef } from 'react';

export default function ThreeDBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // 3D shapes configuration
    const shapes = [
      { type: 'cube', x: 100, y: 150, size: 40, speedX: 0.2, speedY: 0.1, rotation: 0 },
      { type: 'sphere', x: 300, y: 80, size: 30, speedX: -0.15, speedY: 0.2, rotation: 0 },
      { type: 'pyramid', x: 500, y: 200, size: 35, speedX: 0.1, speedY: -0.15, rotation: 0 },
      { type: 'cube', x: 700, y: 120, size: 45, speedX: -0.25, speedY: 0.1, rotation: 0 },
      { type: 'sphere', x: 900, y: 180, size: 25, speedX: 0.15, speedY: 0.15, rotation: 0 },
      { type: 'pyramid', x: 1100, y: 90, size: 40, speedX: -0.1, speedY: -0.2, rotation: 0 },
    ];

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      shapes.forEach(shape => {
        // Update position
        shape.x += shape.speedX;
        shape.y += shape.speedY;
        shape.rotation += 0.01;

        // Bounce off edges
        if (shape.x < 0 || shape.x > canvas.width) shape.speedX *= -1;
        if (shape.y < 0 || shape.y > canvas.height) shape.speedY *= -1;

        // Draw shape with gradient
        const gradient = ctx.createRadialGradient(
          shape.x, shape.y, 0,
          shape.x, shape.y, shape.size * 2
        );
        gradient.addColorStop(0, 'rgba(147, 51, 234, 0.1)');
        gradient.addColorStop(1, 'rgba(59, 130, 246, 0.05)');

        ctx.save();
        ctx.translate(shape.x, shape.y);
        ctx.rotate(shape.rotation);

        ctx.fillStyle = gradient;
        ctx.strokeStyle = 'rgba(147, 51, 234, 0.2)';
        ctx.lineWidth = 1;

        switch (shape.type) {
          case 'cube':
            ctx.fillRect(-shape.size/2, -shape.size/2, shape.size, shape.size);
            ctx.strokeRect(-shape.size/2, -shape.size/2, shape.size, shape.size);
            break;
          case 'sphere':
            ctx.beginPath();
            ctx.arc(0, 0, shape.size/2, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
            break;
          case 'pyramid':
            ctx.beginPath();
            ctx.moveTo(0, -shape.size/2);
            ctx.lineTo(shape.size/2, shape.size/2);
            ctx.lineTo(-shape.size/2, shape.size/2);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            break;
        }

        ctx.restore();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
}