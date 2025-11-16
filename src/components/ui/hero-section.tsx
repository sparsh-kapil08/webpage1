import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-500/10 rounded-full animate-float-slow delay-200"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-cyan-500/10 rounded-full animate-float delay-400"></div>
        <div className="absolute bottom-20 right-32 w-12 h-12 bg-green-500/10 rounded-full animate-float-slow delay-600"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Main Heading */}
        <div className="space-y-6 mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Make Websites
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Instantly
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Professional websites delivered in days, not months. 
            <span className="block text-slate-400">Start your website journey with Site Karo today.</span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            onClick={() => scrollToSection('services')}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            Start Your Website
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button 
            onClick={() => scrollToSection('process')}
            variant="outline"
            className="bg-slate-800/50 border-slate-600 text-slate-200 hover:bg-slate-700/50 hover:text-white px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 backdrop-blur-sm"
          >
            <Play className="mr-2 w-5 h-5" />
            How It Works
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white mb-2">24h</div>
            <div className="text-slate-400 text-sm">Delivery Time</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white mb-2">50+</div>
            <div className="text-slate-400 text-sm">Projects Done</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-slate-400 text-sm">Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white mb-2">4.9★</div>
            <div className="text-slate-400 text-sm">Rating</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}