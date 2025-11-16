import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    title: "Lightning Fast Delivery",
    description: "Get your website live in days, not weeks. We prioritize speed without compromising quality.",
    icon: "⚡"
  },
  {
    title: "Modern UI/UX Design",
    description: "Contemporary designs that captivate users and provide exceptional user experiences.",
    icon: "🎯"
  },
  {
    title: "Mobile-First Approach",
    description: "Every website is optimized for mobile devices first, ensuring perfect performance everywhere.",
    icon: "📱"
  },
  {
    title: "SEO-Ready Builds",
    description: "Websites built with SEO best practices to help you rank higher and attract more visitors.",
    icon: "🔍"
  },
  {
    title: "Affordable Excellence",
    description: "Premium quality websites at competitive prices that deliver exceptional value.",
    icon: "💰"
  },
  {
    title: "Ongoing Support",
    description: "Continuous support and maintenance to keep your website running smoothly.",
    icon: "🛠️"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-purple-600 to-blue-600">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose Site Karo
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            We combine cutting-edge technology with creative excellence to deliver websites that stand out
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="glass-effect border-white/20 bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover-lift cursor-pointer"
            >
              <CardHeader className="p-0 mb-4">
                <div className="text-3xl mb-3">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-white">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <CardDescription className="text-white/80 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}