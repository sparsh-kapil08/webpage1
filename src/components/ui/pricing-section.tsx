import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

export default function PricingSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const plans = [
    {
      name: 'Starter',
      price: '$499',
      description: 'Perfect for small businesses and startups',
      features: [
        '5 Pages Website',
        'Mobile Responsive Design',
        'Basic SEO Setup',
        'Contact Form',
        '1 Month Support',
        'Basic Analytics'
      ],
      popular: false
    },
    {
      name: 'Business',
      price: '$999',
      description: 'Ideal for growing businesses',
      features: [
        '10 Pages Website',
        'Advanced Mobile Design',
        'Advanced SEO Setup',
        'E-commerce Integration',
        '3 Months Support',
        'Advanced Analytics',
        'Social Media Integration',
        'Blog Setup'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      description: 'For established businesses and corporations',
      features: [
        'Unlimited Pages',
        'Custom Design & Development',
        'Complete SEO Strategy',
        'Full E-commerce Solution',
        '6 Months Support',
        'Custom Analytics Dashboard',
        'Multi-language Support',
        'Priority Support',
        'Custom Integrations',
        'Performance Optimization'
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your business. All plans include our signature 
            quality and dedicated support.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 backdrop-blur-sm border transition-all duration-500 hover-lift ${
                plan.popular
                  ? 'bg-white border-purple-200 shadow-2xl scale-105'
                  : 'bg-white/80 border-gray-200 shadow-xl'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center space-x-1 mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-500">one-time</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                onClick={scrollToContact}
                className={`w-full py-6 text-lg font-semibold rounded-xl transition-all duration-300 active:scale-95 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Need a custom solution?{' '}
            <button 
              onClick={scrollToContact}
              className="text-purple-600 hover:text-purple-700 font-semibold underline transition-colors duration-200 active:scale-95"
            >
              Contact us for a quote
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}