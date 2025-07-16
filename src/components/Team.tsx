// components/Team.jsx
import React from 'react';

interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image?: string;
  socialLinks?: SocialLink[];
}
const TeamMember = ({ name, role, bio, image, socialLinks }: TeamMemberProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
      <div className="h-64 bg-light-purple bg-opacity-10 relative">
        <img 
          src={image || "/api/placeholder/400/400"} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-deep-blue font-montserrat">{name}</h3>
        <p className="text-primary-purple font-medium mb-3 font-inter">{role}</p>
        <p className="text-dark-gray mb-4 font-inter">{bio}</p>
        
        {socialLinks && (
          <div className="flex space-x-3">
            {socialLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-deep-blue hover:text-primary-purple transition-colors"
                aria-label={link.platform}
              >
                {link.icon}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

interface TeamProps {}

const Team = ({}: TeamProps) => {
  const teamMembers = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Founder & Lead Developer",
      bio: "With over 8 years of experience in web and mobile development, Alex founded Phynnex to create impactful digital solutions for businesses of all sizes.",
      image: "/api/placeholder/400/400",
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "UI/UX Design Lead",
      bio: "Sarah brings 6+ years of design expertise, crafting intuitive and beautiful interfaces that balance aesthetics with functionality.",
      image: "/api/placeholder/400/400",
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      role: "Backend Developer",
      bio: "Michael specializes in scalable backend systems and database architecture with expertise in Node.js, Python, and cloud infrastructure.",
      image: "/api/placeholder/400/400",
    },
    {
      id: 4,
      name: "Tasha Williams",
      role: "Mobile App Developer",
      bio: "Tasha excels in creating responsive and feature-rich mobile applications for both iOS and Android platforms using React Native.",
      image: "/api/placeholder/400/400",
    }
  ];

  return (
    <section className="py-20 bg-off-white">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <span className="text-primary-purple font-semibold tracking-wider uppercase text-sm font-montserrat">Our Team</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-2 text-deep-blue font-montserrat">
            Meet the Experts Behind Phynnex
          </h2>
          <p className="text-lg text-dark-gray max-w-3xl mx-auto font-inter">
            Our talented team brings together diverse skills and experience to deliver exceptional digital solutions for our clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <TeamMember 
              key={member.id}
              name={member.name}
              role={member.role}
              bio={member.bio}
              image={member.image}
              socialLinks={member.socialLinks}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-deep-blue mb-4 font-montserrat">Join Our Team</h3>
          <p className="text-dark-gray mb-6 font-inter">
            We're always looking for talented individuals who are passionate about creating amazing digital experiences.
          </p>
          <a 
            href="/careers" 
            className="inline-block bg-primary-purple text-white py-3 px-8 rounded-full font-medium hover:bg-deep-blue transition-colors shadow-md font-montserrat"
          >
            View Open Positions
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;