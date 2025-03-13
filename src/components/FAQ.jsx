// components/FAQ.jsx
import React, { useState } from 'react';

const FAQItem = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="mb-4 border border-light-purple border-opacity-20 rounded-lg overflow-hidden">
      <button
        className="w-full flex items-center justify-between p-5 text-left bg-white focus:outline-none"
        onClick={toggleOpen}
      >
        <h3 className="text-lg font-medium text-deep-blue font-montserrat">{question}</h3>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 text-primary-purple" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 p-5 bg-off-white' : 'max-h-0'
        }`}
      >
        <p className="text-dark-gray font-inter">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openItem, setOpenItem] = useState(0);

  const faqItems = [
    {
      question: "What services does Phynnex Dev Studio offer?",
      answer: "We provide a comprehensive range of digital services including web development, mobile app development, UI/UX design, custom software development, e-commerce solutions, and technical consulting. Our team specializes in creating tailored digital solutions that align with your business goals and user needs."
    },
    {
      question: "How do you handle project pricing?",
      answer: "Each project is unique, so we provide custom quotes based on the scope, complexity, and timeline of your specific needs. We offer transparent pricing with no hidden fees. After our initial consultation, we'll provide a detailed proposal outlining all costs and deliverables. We can work with both fixed-price projects and flexible engagement models."
    },
    {
      question: "What is your typical project timeline?",
      answer: "Project timelines vary depending on complexity and scope. A simple website might take 4-6 weeks, while a complex web application or mobile app could take 3-6 months. During our consultation, we'll discuss your timeline requirements and provide realistic estimates. We pride ourselves on clear communication and keeping projects on schedule."
    },
    {
      question: "Do you provide support after the project is launched?",
      answer: "Absolutely! We offer ongoing maintenance and support packages to ensure your digital solution continues to perform optimally. Our support includes bug fixes, security updates, performance optimization, and minor feature enhancements. We can tailor a support plan based on your specific needs and budget."
    },
    {
      question: "How do you ensure the quality of your work?",
      answer: "Quality is at the core of our process. We implement rigorous testing at every stage of development, including functional testing, usability testing, performance testing, and security audits. Our team follows industry best practices and coding standards. We also encourage client feedback throughout the project to ensure we're meeting expectations."
    },
    {
      question: "What technologies do you specialize in?",
      answer: "Our team is proficient in a wide range of modern technologies. For frontend development, we work with React, Next.js, and modern HTML/CSS frameworks like Tailwind CSS. On the backend, we specialize in Node.js, Express, MongoDB, PostgreSQL, and cloud services like AWS and Firebase. For mobile development, we primarily use React Native and Swift."
    },
    {
      question: "How do you handle project management and communication?",
      answer: "We believe in transparent and consistent communication. Each project is assigned a dedicated project manager who serves as your main point of contact. We use project management tools to track progress and share regular updates. Depending on your preference, we can schedule weekly check-ins via video call or email. We're also available for ad-hoc discussions as needed."
    },
    {
      question: "As a new company, how can I trust your expertise?",
      answer: "While our company is new, our team brings years of individual experience from working on successful projects across various industries. We showcase our capabilities through our portfolio of concept projects and are transparent about our approach and methodologies. We offer competitive pricing to build initial client relationships and are committed to exceeding expectations on every project."
    }
  ];

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-16">
          <span className="text-primary-purple font-semibold tracking-wider uppercase text-sm font-montserrat">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-2 text-deep-blue font-montserrat">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-dark-gray max-w-3xl mx-auto font-inter">
            Find answers to common questions about our services, process, and approach.
          </p>
        </div>
        
        <div>
          {faqItems.map((item, index) => (
            <FAQItem 
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openItem === index}
              toggleOpen={() => toggleItem(index)}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-dark-gray mb-6 font-inter">
            Can't find what you're looking for? We're here to help!
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-primary-purple text-white py-3 px-8 rounded-full font-medium hover:bg-deep-blue transition-colors shadow-md font-montserrat"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;