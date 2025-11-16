import { Clock, MessageCircle, Rocket } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      icon: MessageCircle,
      title: 'Consultation',
      description: 'We discuss your vision, goals, and requirements to understand your unique needs.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Clock,
      title: 'Development',
      description: 'Our team builds your website with modern technologies and best practices.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Rocket,
      title: 'Launch',
      description: 'Your website goes live, and we provide support to ensure everything runs smoothly.',
      color: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <section id="process" className="py-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How It
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Simple, transparent process from consultation to launch in just 24 hours.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.title}
              className="relative group"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-slate-700 to-slate-600 rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                {index + 1}
              </div>

              {/* Step Card */}
              <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 shadow-2xl hover-lift h-full">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white text-center mb-4">
                  {step.title}
                </h3>
                <p className="text-slate-300 text-center leading-relaxed">
                  {step.description}
                </p>

                {/* Hover Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${step.color} opacity-0 transition-opacity duration-300 -z-10 group-hover:opacity-10`}></div>
              </div>

              {/* Connecting Line (except last step) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 w-full h-0.5 bg-gradient-to-r from-slate-600 to-slate-700 transform translate-x-1/2 -translate-y-1/2 z-0"></div>
              )}
            </div>
          ))}
        </div>

        {/* Timeline Indicator */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm rounded-full px-6 py-3 border border-slate-700">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-slate-300 font-medium">24-hour delivery guaranteed</span>
          </div>
        </div>
      </div>
    </section>
  );
}