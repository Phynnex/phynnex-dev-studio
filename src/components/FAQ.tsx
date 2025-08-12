import React, { useState } from 'react';
import { 
  Plus, 
  Minus, 
  HelpCircle,
  Clock,
  Shield,
  Zap,
  Users,
  MessageCircle
} from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  icon: React.ReactNode;
  delay: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem = ({ question, answer, icon, delay, isOpen, onToggle }: FAQItemProps) => {
  return (
    <div 
      className="
        group relative overflow-hidden rounded-2xl
        bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-black/40
        backdrop-blur-sm border border-white/10
        hover:border-primary-purple/50 hover:bg-gradient-to-br hover:from-gray-800/60 hover:via-gray-700/40 hover:to-black/50
        transition-all duration-500 ease-out
        animate-fade-in-up
      "
      style={{ animationDelay: delay }}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-br from-primary-purple via-secondary-magenta to-primary-purple transition-opacity duration-500 rounded-2xl" />
      
      {/* Question Header */}
      <button
        onClick={onToggle}
        className="w-full text-left p-6 flex items-center justify-between focus:outline-none relative z-10"
      >
        <div className="flex items-center space-x-4 flex-1">
          <div className="flex-shrink-0 text-primary-purple/70 group-hover:text-primary-purple transition-colors duration-300">
            {icon}
          </div>
          <h3 className="text-white font-montserrat font-semibold text-lg lg:text-xl pr-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary-purple group-hover:to-secondary-magenta group-hover:bg-clip-text transition-all duration-300">
            {question}
          </h3>
        </div>
        <div className="flex-shrink-0 ml-4">
          <div className="w-8 h-8 rounded-full bg-white/5 border border-white/20 flex items-center justify-center group-hover:border-primary-purple/50 group-hover:bg-primary-purple/10 transition-all duration-300">
            {isOpen ? (
              <Minus size={16} className="text-primary-purple" />
            ) : (
              <Plus size={16} className="text-gray-400 group-hover:text-primary-purple" />
            )}
          </div>
        </div>
      </button>

      {/* Answer Content */}
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <div className="px-6 relative z-10">
          <div className="pl-12 border-l-2 border-primary-purple/20 ml-2">
            <p className="text-gray-300 font-inter leading-relaxed">
              {answer}
            </p>
          </div>
        </div>
      </div>

      {/* Floating background shape */}
      <div className="absolute top-4 right-4 w-8 h-8 bg-primary-purple/5 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};

type FAQProps = object;

const FAQ = ({}: FAQProps) => {
  const [openItems, setOpenItems] = useState<number[]>([0]); // First item open by default

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      question: "How long does it take to complete a project?",
      answer: "Project timelines vary based on complexity and scope. Simple websites typically take 2-4 weeks, while complex web applications can take 8-16 weeks. We provide detailed timelines during our initial consultation and keep you updated throughout the development process.",
      icon: <Clock size={24} />
    },
    {
      question: "What technologies do you specialize in?",
      answer: "We specialize in modern web technologies including React, Next.js, Node.js, TypeScript, and Python. Our team also has expertise in cloud platforms like AWS, database management, and mobile app development with React Native.",
      icon: <Zap size={24} />
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes! We offer comprehensive support packages including regular updates, security monitoring, performance optimization, and feature enhancements. Our support plans are tailored to your specific needs and budget.",
      icon: <Shield size={24} />
    },
    {
      question: "How do you handle project communication?",
      answer: "We maintain transparent communication through regular check-ins, progress reports, and dedicated project management tools. You'll have direct access to our team via Slack, email, or scheduled calls based on your preference.",
      icon: <MessageCircle size={24} />
    },
    {
      question: "Can you work with our existing team?",
      answer: "Absolutely! We're experienced in collaborating with in-house teams, other agencies, and stakeholders. We can integrate seamlessly into your existing workflow or lead the project as your primary development partner.",
      icon: <Users size={24} />
    },
    {
      question: "What's included in your development process?",
      answer: "Our process includes discovery and planning, UI/UX design, development, testing, deployment, and post-launch support. We also provide documentation, training, and knowledge transfer to ensure your team can maintain the solution effectively.",
      icon: <HelpCircle size={24} />
    }
  ];

  return (
    <section id="faq" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      
      {/* Floating background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-36 h-36 bg-primary-purple/3 rounded-full blur-3xl animate-drift-slow" />
        <div className="absolute bottom-1/3 right-20 w-28 h-28 bg-secondary-magenta/4 rounded-full blur-2xl animate-drift-slower" />
        <div className="absolute top-2/3 left-1/3 w-20 h-20 bg-primary-purple/2 rounded-full blur-xl animate-drift-slowest" />
      </div>

      <div className="relative z-10 container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left Column - Header */}
          <div className="lg:sticky lg:top-20">
            {/* Overline */}
            <div className="mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <span className="inline-block px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/20 text-primary-purple font-medium text-sm tracking-wide uppercase font-inter">
                Got Questions?
              </span>
            </div>

            {/* Main title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-black tracking-tight text-white mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <span className="block">Frequently Asked</span>
              <span className="block mt-2 bg-gradient-to-r from-primary-purple via-secondary-magenta to-primary-purple bg-clip-text text-transparent">
                Questions
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-gray-300 font-inter text-lg lg:text-xl leading-relaxed mb-8 animate-fade-in-up opacity-90" style={{ animationDelay: '0.3s' }}>
              Find answers to common questions about our development process, technologies, and services. Can't find what you're looking for?
            </p>

            {/* CTA Button */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <button className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary-purple to-secondary-magenta p-0.5 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary-purple/25">
                <div className="rounded-2xl bg-black px-8 py-4 group-hover:bg-transparent transition-colors duration-300">
                  <div className="flex items-center space-x-3">
                    <MessageCircle size={20} className="text-primary-purple group-hover:text-white transition-colors duration-300" />
                    <span className="font-montserrat font-semibold text-white">
                      Ask a Question
                    </span>
                  </div>
                </div>
              </button>
            </div>

            {/* Contact Info */}
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-black/40 backdrop-blur-sm border border-white/10 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <h3 className="text-white font-montserrat font-semibold mb-2">Still have questions?</h3>
              <p className="text-gray-300 font-inter text-sm mb-4">
                Our team is here to help you find the perfect solution for your project.
              </p>
              <div className="flex items-center space-x-2 text-primary-purple font-inter font-medium text-sm">
                <MessageCircle size={16} />
                <span>hello@yourcompany.com</span>
              </div>
            </div>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                icon={faq.icon}
                delay={`${0.6 + index * 0.1}s`}
                isOpen={openItems.includes(index)}
                onToggle={() => toggleItem(index)}
              />
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: '24/7', label: 'Support Available', icon: <Shield size={20} /> },
              { number: '<4hrs', label: 'Average Response Time', icon: <Clock size={20} /> },
              { number: '99%', label: 'Client Satisfaction', icon: <Users size={20} /> }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-black/40 backdrop-blur-sm border border-white/10 hover:border-primary-purple/30 transition-all duration-500 group">
                <div className="flex items-center justify-center mb-3">
                  <div className="text-primary-purple/70 group-hover:text-primary-purple transition-colors duration-300">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-2xl lg:text-3xl font-black font-montserrat bg-gradient-to-r from-primary-purple to-secondary-magenta bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-inter text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;