import { Button } from '@/components/ui/button';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    scrollToSection('contact');
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-purple-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">SK</span>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Site Karo
              </h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              We create stunning, high-converting websites that help businesses 
              establish their digital presence and drive growth.
            </p>
            <Button 
              onClick={handleContactClick}
              className="bg-white text-purple-600 hover:bg-white/90 px-6 py-3 font-semibold rounded-xl transition-all duration-300 active:scale-95"
            >
              Let's Build Your Website Today
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline active:scale-95"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('why-choose-us')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline active:scale-95"
                >
                  Why Choose Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('process')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline active:scale-95"
                >
                  Our Process
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline active:scale-95"
                >
                  Portfolio
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('pricing')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline active:scale-95"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('testimonials')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline active:scale-95"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline active:scale-95"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Site Karo. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 active:scale-95">
              Terms
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 active:scale-95">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 active:scale-95">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}