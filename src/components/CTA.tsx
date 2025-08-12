import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Sparkles, 
  Rocket,
  Star,
  Zap
} from 'lucide-react';

type CTAProps = object;

const CTA = ({}: CTAProps) => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-purple/5 rounded-full blur-3xl animate-drift-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary-magenta/8 rounded-full blur-2xl animate-drift-slower" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary-purple/3 rounded-full blur-xl animate-drift-slowest" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-primary-purple/20 rounded-full animate-float-${i % 3 + 1}`}
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container-custom">
        <div className="max-w-5xl mx-auto">
          {/* Main CTA Card */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900/60 via-gray-800/40 to-black/60 backdrop-blur-xl border border-white/10 p-12 lg:p-16 animate-fade-in-up">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/5 via-secondary-magenta/3 to-primary-purple/5 rounded-3xl" />
            
            {/* Floating accent shapes */}
            <div className="absolute top-8 right-8 w-16 h-16 bg-primary-purple/10 rounded-full blur-xl opacity-60" />
            <div className="absolute bottom-8 left-8 w-12 h-12 bg-secondary-magenta/10 rounded-full blur-lg opacity-40" />
            
            <div className="relative z-10 text-center">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-purple/20 to-secondary-magenta/20 backdrop-blur-sm border border-white/10 mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <Rocket size={32} className="text-primary-purple" />
              </div>

              {/* Overline */}
              <div className="mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <span className="inline-block px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/20 text-primary-purple font-medium text-sm tracking-wide uppercase font-inter">
                  Ready to Launch?
                </span>
              </div>

              {/* Main heading */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-black tracking-tight text-white mb-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <span className="block">Start Your Project</span>
                <span className="block mt-2 bg-gradient-to-r from-primary-purple via-secondary-magenta to-primary-purple bg-clip-text text-transparent">
                  Today
                </span>
              </h2>

              {/* Description */}
              <p className="text-xl lg:text-2xl text-gray-300 font-inter leading-relaxed max-w-3xl mx-auto mb-10 animate-fade-in-up opacity-90" style={{ animationDelay: '0.4s' }}>
                Ready to transform your business with powerful digital solutions? Let&apos;s discuss your vision and bring your ideas to life with cutting-edge technology.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                {/* Primary CTA */}
                <Link href="/contact" className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary-purple to-secondary-magenta p-0.5 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary-purple/25">
                  <div className="rounded-2xl bg-black px-8 py-4 group-hover:bg-transparent transition-colors duration-300">
                    <div className="flex items-center space-x-3">
                      <span className="font-montserrat font-bold text-lg text-white">
                        Start Your Project
                      </span>
                      <ArrowRight size={20} className="text-primary-purple group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </Link>

                {/* Secondary CTA */}
                <Link href="#portfolio" className="group px-8 py-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/20 hover:border-primary-purple/50 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <Sparkles size={20} className="text-primary-purple group-hover:rotate-12 transition-transform duration-300" />
                    <span className="font-montserrat font-semibold text-white">
                      View Our Work
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            {[
              {
                icon: <Zap size={24} />,
                title: "Fast Delivery",
                description: "Launch in weeks, not months"
              },
              {
                icon: <Star size={24} />,
                title: "Premium Quality",
                description: "Pixel-perfect, scalable solutions"
              },
              {
                icon: <Sparkles size={24} />,
                title: "Ongoing Support",
                description: "24/7 maintenance & updates"
              }
            ].map((benefit, index) => (
              <div key={index} className="group text-center p-6 rounded-2xl bg-gradient-to-br from-gray-900/30 via-gray-800/20 to-black/30 backdrop-blur-sm border border-white/5 hover:border-primary-purple/30 hover:bg-gradient-to-br hover:from-gray-800/40 hover:via-gray-700/30 hover:to-black/40 transition-all duration-500">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-purple/10 border border-primary-purple/20 mb-4 group-hover:bg-primary-purple/20 group-hover:scale-110 transition-all duration-300">
                  <div className="text-primary-purple">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="font-montserrat font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary-purple group-hover:to-secondary-magenta group-hover:bg-clip-text transition-all duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 font-inter text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;