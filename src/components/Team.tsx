import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail, MapPin, Star, Award, Users, Coffee } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  location: string;
  experience: string;
  specialties: string[];
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
  delay: string;
}

const TeamMember = ({
  name,
  role,
  bio,
  image,
  location,
  experience,
  specialties,
  social,
  delay,
}: TeamMemberProps) => {
  return (
    <div
      className="
        group relative overflow-hidden rounded-3xl p-8 
        bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-black/40
        backdrop-blur-sm border border-white/10
        hover:border-primary-purple/50 hover:bg-gradient-to-br hover:from-gray-800/60 hover:via-gray-700/40 hover:to-black/50
        transform transition-all duration-700 ease-out
        hover:-translate-y-4 hover:shadow-2xl hover:shadow-primary-purple/20
        animate-fade-in-up
      "
      style={{ animationDelay: delay }}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-primary-purple via-secondary-magenta to-primary-purple transition-opacity duration-500 rounded-3xl" />

      {/* Floating background shapes */}
      <div className="absolute top-4 right-4 w-16 h-16 bg-primary-purple/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-4 left-4 w-12 h-12 bg-secondary-magenta/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      <div className="relative z-10">
        {/* Profile Image */}
        <div className="relative mb-6 mx-auto w-32 h-32">
          <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-primary-purple/20 to-secondary-magenta/20 p-1">
            <Image
              src={image}
              alt={name}
              width={128}
              height={128}
              className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary-purple rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Star size={12} className="text-white fill-white" />
          </div>
        </div>

        {/* Name and Role */}
        <div className="text-center mb-4">
          <h3 className="text-xl font-montserrat font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary-purple group-hover:to-secondary-magenta group-hover:bg-clip-text transition-all duration-300">
            {name}
          </h3>
          <p className="text-primary-purple font-inter font-medium text-sm">{role}</p>
        </div>

        {/* Location and Experience */}
        <div className="flex items-center justify-center space-x-4 mb-4 text-gray-400 text-sm">
          <div className="flex items-center space-x-1">
            <MapPin size={14} />
            <span>{location}</span>
          </div>
          <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
          <div className="flex items-center space-x-1">
            <Award size={14} />
            <span>{experience}</span>
          </div>
        </div>

        {/* Bio */}
        <p className="text-gray-300 font-inter text-sm leading-relaxed mb-6 text-center">{bio}</p>

        {/* Specialties */}
        <div className="mb-6">
          <div className="flex flex-wrap justify-center gap-2">
            {specialties.map((specialty, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 font-inter group-hover:border-primary-purple/30 group-hover:bg-primary-purple/10 transition-all duration-300"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-4">
          {social.github && (
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary-purple hover:border-primary-purple/50 hover:bg-primary-purple/10 transition-all duration-300"
            >
              <Github size={18} />
            </a>
          )}
          {social.linkedin && (
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary-purple hover:border-primary-purple/50 hover:bg-primary-purple/10 transition-all duration-300"
            >
              <Linkedin size={18} />
            </a>
          )}
          {social.twitter && (
            <a
              href={social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary-purple hover:border-primary-purple/50 hover:bg-primary-purple/10 transition-all duration-300"
            >
              <Twitter size={18} />
            </a>
          )}
          {social.email && (
            <a
              href={`mailto:${social.email}`}
              className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary-purple hover:border-primary-purple/50 hover:bg-primary-purple/10 transition-all duration-300"
            >
              <Mail size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Corner accent */}
      <div className="absolute top-4 left-4 w-2 h-2 bg-primary-purple/40 rounded-full group-hover:bg-primary-purple group-hover:scale-150 transition-all duration-300" />
    </div>
  );
};

type TeamProps = object;

const Team = ({}: TeamProps) => {
  const teamMembers = [
    {
      name: 'Fyne Iwari',
      role: 'Founder & Full‑Stack Developer',
      bio: 'Builds reliable web apps end‑to‑end architecture, implementation, and DevOps‑lite.',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      location: 'Remote',
      experience: '5+ years',
      specialties: ['React', 'Next.js', 'Node.js', 'TypeScript', 'AWS'],
      social: {},
    },
    {
      name: 'Henry Tonye Angala',
      role: 'Project Manager',
      bio: 'Turns ideas into clear plans and keeps delivery on time and in scope.',
      image:
        'https://images.unsplash.com/photo-1494790108755-2616b60c2c8c?w=300&h=300&fit=crop&crop=face',
      location: 'Remote',
      experience: '6+ years',
      specialties: ['Scoping', 'Roadmaps', 'Agile', 'QA', 'Client Comms'],
      social: {},
    },
    {
      name: 'Soibibo Tonye Sam Angala',
      role: 'Sales & Marketing Lead',
      bio: 'Connects solutions to real needs — outreach, proposals, and content that converts.',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      location: 'Remote',
      experience: '7+ years',
      specialties: ['Lead Gen', 'Proposals', 'SEO', 'Content', 'Partnerships'],
      social: {},
    },
  ];

  return (
    <section id="team" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />

      {/* Floating background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-10 w-40 h-40 bg-primary-purple/3 rounded-full blur-3xl animate-drift-slow" />
        <div className="absolute bottom-1/4 left-20 w-32 h-32 bg-secondary-magenta/4 rounded-full blur-2xl animate-drift-slower" />
        <div className="absolute top-2/3 right-1/3 w-24 h-24 bg-primary-purple/2 rounded-full blur-xl animate-drift-slowest" />
      </div>

      <div className="relative z-10 container-custom">
        <div className="text-center mb-16 lg:mb-20">
          {/* Overline */}
          <div className="mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <span className="inline-block px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/20 text-primary-purple font-medium text-sm tracking-wide uppercase font-inter">
              Our Team
            </span>
          </div>

          {/* Main title */}
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-black tracking-tight text-white mb-6 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            <span className="block">Meet the Brilliant</span>
            <span className="block mt-2 bg-gradient-to-r from-primary-purple via-secondary-magenta to-primary-purple bg-clip-text text-transparent">
              Minds Behind Innovation
            </span>
          </h2>

          {/* Subtitle */}
          <p
            className="mx-auto max-w-3xl text-gray-300 font-inter text-lg lg:text-xl leading-relaxed animate-fade-in-up opacity-90"
            style={{ animationDelay: '0.3s' }}
          >
            A lean core team Full‑Stack Developer, Project Manager, and Sales/Marketing.
            We partner with seasoned product designers per project for world‑class UX/UI.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} delay={`${0.4 + index * 0.15}s`} />
          ))}
        </div>
        

        {/* Team Stats */}
        <div className="mt-20 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Users size={24} />, number: '3+', label: 'Team Members' },
              { icon: <Award size={24} />, number: '25+', label: 'Years Combined' },
              { icon: <Star size={24} />, number: '10+', label: 'Projects Delivered' },
              { icon: <Coffee size={24} />, number: '∞', label: 'Cups of Coffee' },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-black/40 backdrop-blur-sm border border-white/10 hover:border-primary-purple/30 transition-all duration-500 group"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="text-primary-purple/70 group-hover:text-primary-purple transition-colors duration-300">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl lg:text-4xl font-black font-montserrat bg-gradient-to-r from-primary-purple to-secondary-magenta bg-clip-text text-transparent mb-2">
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

export default Team;
