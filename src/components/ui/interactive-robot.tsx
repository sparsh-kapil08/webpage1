import { useEffect, useRef, useState } from 'react';

interface InteractiveRobotProps {
  className?: string;
}

export default function InteractiveRobot({ className = '' }: InteractiveRobotProps) {
  const robotRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [eyeMovement, setEyeMovement] = useState({ left: 0, right: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!robotRef.current) return;

      const robotRect = robotRef.current.getBoundingClientRect();
      const robotCenterX = robotRect.left + robotRect.width / 2;
      const robotCenterY = robotRect.top + robotRect.height / 2;

      const deltaX = event.clientX - robotCenterX;
      const deltaY = event.clientY - robotCenterY;

      // Calculate tilt based on mouse position (limited range)
      const maxTilt = 15;
      const tiltX = (deltaY / robotRect.height) * maxTilt;
      const tiltY = -(deltaX / robotRect.width) * maxTilt;

      setTilt({
        x: Math.max(-maxTilt, Math.min(maxTilt, tiltX)),
        y: Math.max(-maxTilt, Math.min(maxTilt, tiltY))
      });

      // Calculate eye movement (more subtle)
      const eyeMax = 2;
      const eyeX = (deltaX / robotRect.width) * eyeMax;
      const eyeY = (deltaY / robotRect.height) * eyeMax;
      
      setEyeMovement({
        left: Math.max(-eyeMax, Math.min(eyeMax, eyeX)),
        right: Math.max(-eyeMax, Math.min(eyeMax, eyeX))
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={robotRef}
      className={`relative ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      }}
    >
      {/* Robot Body */}
      <div className="relative w-40 h-48 mx-auto">
        {/* Head */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full border-4 border-white/90 shadow-2xl">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full animate-pulse"></div>
          
          {/* Eyes with movement */}
          <div 
            className="absolute top-8 left-6 w-5 h-5 bg-white rounded-full shadow-inner overflow-hidden"
            style={{ transform: `translate(${eyeMovement.left}px, ${eyeMovement.left}px)` }}
          >
            <div className="absolute top-1 left-1 w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
          </div>
          <div 
            className="absolute top-8 right-6 w-5 h-5 bg-white rounded-full shadow-inner overflow-hidden"
            style={{ transform: `translate(${eyeMovement.right}px, ${eyeMovement.right}px)` }}
          >
            <div className="absolute top-1 left-1 w-3 h-3 bg-blue-600 rounded-full animate-pulse delay-150"></div>
          </div>
          
          {/* Mouth */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-white/80 rounded-full"></div>
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          
          {/* Antenna */}
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-3 h-6 bg-purple-500 rounded-t-full">
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full animate-pulse shadow-lg"></div>
          </div>
        </div>

        {/* Body */}
        <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-28 h-20 bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl border-4 border-white/90 shadow-xl">
          {/* Screen */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
            <div className="w-3 h-1 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          
          {/* Buttons */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
            <div className="w-3 h-3 bg-green-400 rounded-full shadow-inner"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full shadow-inner"></div>
            <div className="w-3 h-3 bg-red-400 rounded-full shadow-inner"></div>
          </div>
        </div>

        {/* Arms */}
        <div className="absolute top-28 -left-3 w-6 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-lg"></div>
        <div className="absolute top-28 -right-3 w-6 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-lg"></div>

        {/* Legs */}
        <div className="absolute bottom-0 left-8 w-8 h-10 bg-gradient-to-br from-blue-600 to-purple-700 rounded-b-full shadow-lg"></div>
        <div className="absolute bottom-0 right-8 w-8 h-10 bg-gradient-to-br from-blue-600 to-purple-700 rounded-b-full shadow-lg"></div>
      </div>

      {/* Floating particles around robot */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-r from-purple-400/60 to-blue-400/60 rounded-full animate-float-slow backdrop-blur-sm"
            style={{
              left: `${15 + (i * 10)}%`,
              top: `${25 + (i * 6)}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${4 + (i * 0.4)}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}