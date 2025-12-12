import React from 'react';
import Image from 'next/image';
import { Github, Linkedin, Mail, MapPin, Award, Star, Users } from 'lucide-react';

type TeamProps = object;

const Team = ({}: TeamProps) => {
  const specialties = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'Framer Motion'];

  return (
    <section id="about" className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-10 w-40 h-40 bg-primary-purple/3 rounded-full blur-3xl animate-drift-slow" />
        <div className="absolute bottom-1/4 left-20 w-32 h-32 bg-secondary-magenta/4 rounded-full blur-2xl animate-drift-slower" />
        <div className="absolute top-2/3 right-1/3 w-24 h-24 bg-primary-purple/2 rounded-full blur-xl animate-drift-slowest" />
      </div>

      <div className="relative z-10 container-custom">
        <div className="text-center mb-16 lg:mb-20">
          <div className="mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <span className="inline-block px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/20 text-primary-purple font-medium text-sm tracking-wide uppercase font-inter">
              About
            </span>
          </div>

          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-black tracking-tight text-white mb-6 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            <span className="block">Fyne Tonye Angala</span>
            <span className="block mt-2 bg-gradient-to-r from-primary-purple via-secondary-magenta to-primary-purple bg-clip-text text-transparent">
              Software Engineer and Studio Lead
            </span>
          </h2>

          <p
            className="mx-auto max-w-3xl text-gray-300 font-inter text-lg lg:text-xl leading-relaxed animate-fade-in-up opacity-90"
            style={{ animationDelay: '0.3s' }}
          >
            6+ years building and scaling web products across fintech, cybersecurity, and e-commerce. I ship secure, performant React/Next.js frontends, Node.js APIs, and reliable CI/CD translating complex requirements into maintainable systems while keeping stakeholders in the loop.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="group relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-black/40 backdrop-blur-sm border border-white/10 hover:border-primary-purple/50 hover:-translate-y-2 transition-all duration-500">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-primary-purple via-secondary-magenta to-primary-purple transition-opacity duration-500 rounded-3xl" />
              <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
                <div className="relative">
                  <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-primary-purple/20 to-secondary-magenta/20 p-1">
                    <Image
                      src="https://picsum.photos/seed/fyne/300/300"
                      alt="Fyne Tonye Angala"
                      width={112}
                      height={112}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary-purple rounded-full flex items-center justify-center">
                    <Star size={12} className="text-white fill-white" />
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <div className="flex items-center space-x-4 text-gray-400 text-sm">
                    <div className="flex items-center space-x-1">
                      <MapPin size={14} />
                      <span>Lagos, Nigeria · Remote</span>
                    </div>
                    <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                    <div className="flex items-center space-x-1">
                      <Award size={14} />
                      <span>6+ years</span>
                    </div>
                  </div>

                  <p className="text-gray-300 font-inter leading-relaxed">
                    I focus on React/Next.js, TypeScript, Node.js, and UI that feels premium without sacrificing performance. I work best with founders and product teams who want an accountable partner to scope, design, build, and launch web apps quickly—while keeping security and reliability front and center.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 font-inter group-hover:border-primary-purple/30 group-hover:bg-primary-purple/10 transition-all duration-300"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-3">
                    <a
                      href="https://linkedin.com/in/fyne-tonye-angala"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary-purple hover:border-primary-purple/50 hover:bg-primary-purple/10 transition-all duration-300"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href="https://github.com/Phynnex"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary-purple hover:border-primary-purple/50 hover:bg-primary-purple/10 transition-all duration-300"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href="mailto:angalafynetonye@gmail.com"
                      className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary-purple hover:border-primary-purple/50 hover:bg-primary-purple/10 transition-all duration-300"
                    >
                      <Mail size={18} />
                    </a>
                  </div>
                  <div className="text-sm text-gray-400 font-inter">
                    <div>Portfolio: <a className="text-primary-purple hover:underline" href="https://fyne-angala-portfolio.vercel.app" target="_blank" rel="noopener noreferrer">fyne-angala-portfolio.vercel.app</a></div>
                    <div>Phone: <a className="text-primary-purple hover:underline" href="tel:+2347034390904">+234 703 439 0904</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-black/40 backdrop-blur-sm border border-white/10">
              <h3 className="text-lg font-montserrat font-bold text-white mb-2">Recent impact</h3>
              <ul className="space-y-2 text-gray-300 text-sm font-inter list-disc pl-5">
                <li>Cut bundle size 25% on a Next.js fintech dashboard via code-splitting and memoization.</li>
                <li>Improved data responsiveness 30% on a security platform with WebSocket-driven updates.</li>
                <li>Set up CI/CD (GitHub Actions + Vercel) achieving 95%+ successful deployments.</li>
                <li>Documented UI libraries in Storybook to standardize components across teams.</li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-black/40 backdrop-blur-sm border border-white/10">
              <h3 className="text-lg font-montserrat font-bold text-white mb-2">Studio model</h3>
              <p className="text-gray-300 text-sm font-inter">
                I lead delivery and bring in trusted designers or backend specialists when needed. You get one point of contact and a small, accountable team.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Users size={20} />, number: '15+', label: 'Projects delivered' },
                { icon: <Star size={20} />, number: '4', label: 'Industries served' },
                { icon: <Award size={20} />, number: '2-6w', label: 'Typical timelines' },
                { icon: <MapPin size={20} />, number: 'Remote', label: 'Available globally' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-black/40 backdrop-blur-sm border border-white/10 hover:border-primary-purple/30 transition-all duration-500 group"
                >
                  <div className="flex items-center justify-center mb-2 text-primary-purple/70 group-hover:text-primary-purple transition-colors duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-black font-montserrat bg-gradient-to-r from-primary-purple to-secondary-magenta bg-clip-text text-transparent mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-inter text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-black/40 backdrop-blur-sm border border-white/10">
            <h3 className="text-lg font-montserrat font-bold text-white mb-2">Recent roles</h3>
            <ul className="space-y-2 text-gray-300 text-sm font-inter list-disc pl-5">
              <li>Senior Frontend Engineer — GetMoore (Fintech) · Nov 2023 – Present</li>
              <li>Full-Stack JavaScript Developer — Ethnos Cyber · Sep 2022 – Oct 2024</li>
              <li>Frontend Developer — Zealight Innovation Labs · Jul 2021 – Aug 2022</li>
              <li>Junior Software Developer — Canary Point Corporate Services · Jan 2021 – Jun 2021</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-black/40 backdrop-blur-sm border border-white/10">
            <h3 className="text-lg font-montserrat font-bold text-white mb-2">Education</h3>
            <ul className="space-y-2 text-gray-300 text-sm font-inter list-disc pl-5">
              <li>PGD Information Technology — National Open University of Nigeria (2024–2025)</li>
              <li>B.Sc. Computer Science — University of Benin (2015)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
