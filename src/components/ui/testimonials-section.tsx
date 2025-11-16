import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';

const testimonials = [
  {
    name: "Sarah Chen",
    company: "TechFlow Solutions",
    role: "Marketing Director",
    content: "Site Karo transformed our online presence completely. Our new website has increased our lead generation by 200% in just three months. The team's attention to detail and modern design approach is exceptional.",
    avatar: "👩‍💼"
  },
  {
    name: "Marcus Rodriguez",
    company: "Urban Eats",
    role: "Founder & CEO",
    content: "Working with Site Karo was a game-changer for our restaurant. The website they built is not only beautiful but also incredibly functional. Online orders have tripled since launch!",
    avatar: "👨‍🍳"
  },
  {
    name: "Emily Watson",
    company: "Creative Canvas",
    role: "Creative Director",
    content: "The portfolio website they created for our agency perfectly captures our creative vision. It's fast, responsive, and has helped us land several high-profile clients.",
    avatar: "🎨"
  },
  {
    name: "David Kim",
    company: "Nexus Analytics",
    role: "Product Manager",
    content: "Site Karo delivered our SaaS platform ahead of schedule with flawless execution. Their technical expertise and design sensibility are truly impressive.",
    avatar: "👨‍💻"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-purple-600 to-blue-600">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Client Success Stories
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Don't just take our word for it - hear what our clients have to say about their experience
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="glass-effect border-white/20 bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover-lift cursor-pointer"
            >
              <CardHeader className="p-0 mb-6">
                <div className="flex items-center gap-4">
                  <div className="text-3xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      {testimonial.name}
                    </h4>
                    <CardDescription className="text-white/80">
                      {testimonial.role} at {testimonial.company}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-white/90 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}