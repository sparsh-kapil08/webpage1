import { ExternalLink, Eye } from 'lucide-react';

export default function PortfolioSection() {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Modern online store with seamless shopping experience',
      category: 'E-commerce',
      image: '/assets/hero-website-mockup.png',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Portfolio Website',
      description: 'Elegant portfolio showcasing creative work and achievements',
      category: 'Portfolio',
      image: '/assets/hero-website-mockup_variant_1.png',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Business Landing Page',
      description: 'High-converting landing page for service-based business',
      category: 'Landing Page',
      image: '/assets/hero-website-mockup_variant_2.png',
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Corporate Website',
      description: 'Professional corporate website with modern design',
      category: 'Corporate',
      image: '/assets/hero-website-mockup_variant_3.png',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Explore our recent projects and see how we've helped businesses succeed online.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="group relative bg-slate-800/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 shadow-2xl hover-lift"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20`}></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-slate-900/90 backdrop-blur-sm text-slate-200 px-3 py-1 rounded-full text-sm font-medium border border-slate-700">
                    {project.category}
                  </span>
                </div>

                {/* Hover Actions */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <button className="bg-white text-slate-900 p-3 rounded-full hover:bg-slate-100 transition-colors duration-200">
                    <Eye className="w-5 h-5" />
                  </button>
                  <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-3 rounded-full hover:from-purple-700 hover:to-blue-700 transition-colors duration-200">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Project Features */}
                <div className="flex flex-wrap gap-2">
                  {['Responsive', 'Fast', 'Modern'].map((feature) => (
                    <span 
                      key={feature}
                      className="bg-slate-700/50 text-slate-300 px-3 py-1 rounded-full text-sm border border-slate-600"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Accent Border */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-3 bg-slate-800/80 backdrop-blur-sm rounded-2xl px-8 py-4 border border-slate-700 shadow-lg">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <p className="text-slate-200 font-semibold">
              Ready to see your project here?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}