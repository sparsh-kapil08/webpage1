import { useEffect, useState } from 'react';
import InteractiveRobot from './interactive-robot';
import { Code, Palette, Zap, Globe, Smartphone, ShoppingCart } from 'lucide-react';

export default function ServicesSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const services = [
    {
      icon: Code,
      title: 'Custom Business Websites',
      description: 'Tailored web solutions built from scratch to meet your unique business requirements.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Palette,
      title: 'Portfolio Sites',
      description: 'Beautiful, intuitive interfaces designed to showcase your work and enhance user experience.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Globe,
      title: 'Landing Pages for Ads',
      description: 'High-converting landing pages optimized for advertising campaigns and lead generation.',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Starter Sites',
      description: 'Complete e-commerce solutions ready to launch and start selling online immediately.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Zap,
      title: 'Brand + UI/UX Design',
      description: 'Comprehensive branding and user experience design for cohesive digital presence.',
      color: 'from-red-500 to-pink-500'
    }
  ];

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const calculateOrbitPosition = (index: number, total: number) => {
    const angle = (index / total) * 2 * Math.PI;
    const radius = 200; // Increased orbit radius
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    
    // Add subtle mouse influence
    const mouseInfluence = 0.08;
    const mouseX = (mousePosition.x - window.innerWidth / 2) * mouseInfluence;
    const mouseY = (mousePosition.y - window.innerHeight / 2) * mouseInfluence;
    
    return {
      x: x + mouseX,
      y: y + mouseY,
      rotation: 0 // Remove card rotation to prevent inverted text
    };
  };

  return (
    <section id="services" className="py-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Clean background with subtle 3D elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* 3D floating geometric elements */}
        <div className="absolute top-20 left-10 w-8 h-8 bg-blue-500/20 rounded-lg transform rotate-45 animate-float opacity-60"></div>
        <div className="absolute top-40 right-16 w-6 h-6 bg-purple-500/20 rounded-full animate-float-slow opacity-50 delay-100"></div>
        <div className="absolute bottom-32 left-20 w-10 h-10 bg-cyan-500/15 transform rotate-12 animate-float opacity-40 delay-200"></div>
        <div className="absolute bottom-20 right-24 w-7 h-7 bg-green-500/20 rounded-lg animate-float-slow opacity-45 delay-300"></div>
        <div className="absolute top-60 left-32 w-5 h-5 bg-pink-500/20 rounded-full animate-float opacity-55 delay-400"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Premium
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Professional web development services to elevate your digital presence and drive business growth.
          </p>
        </div>

        {/* Robot and Orbital Services Layout */}
        <div className="relative min-h-[600px] flex items-center justify-center">
          {/* Interactive Robot */}
          <div className="relative z-20">
            <InteractiveRobot className="scale-150" />
          </div>

          {/* Orbital Service Cards */}
          <div className="absolute inset-0">
            {services.map((service, index) => {
              const position = calculateOrbitPosition(index, services.length);
              return (
                <div
                  key={service.title}
                  className={`absolute backdrop-blur-sm rounded-2xl p-6 border transition-all duration-700 hover-lift bg-slate-800/90 border-slate-700 shadow-2xl w-64 orbital-transition`}
                  style={{
                    transform: `translate(${position.x}px, ${position.y}px)`,
                    left: '50%',
                    top: '50%',
                    marginLeft: '-128px', // Half of card width
                    marginTop: '-80px', // Half of card height
                  }}
                >
                  {/* Service Icon */}
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 mx-auto shadow-md`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Service Content */}
                  <h3 className="text-lg font-bold text-white text-center mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 text-center text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover Effect Border */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} opacity-0 transition-opacity duration-300 -z-10 hover:opacity-20`}></div>
                </div>
              );
            })}
          </div>

          {/* Orbital Guide Lines (subtle) */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-slate-600/30 rounded-full opacity-20"></div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-4 bg-slate-800/80 backdrop-blur-sm rounded-2xl px-8 py-4 border border-slate-700 shadow-lg">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <p className="text-slate-200 font-semibold">
              Ready to launch your professional website?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}