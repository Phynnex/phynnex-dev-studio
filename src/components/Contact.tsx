import React, { useState } from 'react';
import Script from 'next/script';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  MessageCircle,
  Clock,
  CheckCircle,
  AlertCircle,
  User,
  Smartphone
} from 'lucide-react';
import {
  CONTACT_PHONE,
  CONTACT_EMAIL,
  CONTACT_ADDRESS_LINE1,
  CONTACT_ADDRESS_LINE2,
} from '../config/contact';

interface ContactMethodProps {
  icon: React.ReactNode;
  title: string;
  text: React.ReactNode;
  delay: string;
}

const ContactMethod = ({ icon, title, text, delay }: ContactMethodProps) => {
  return (
    <div 
      className="
        group relative overflow-hidden rounded-2xl p-8 text-center
        bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-black/40
        backdrop-blur-sm border border-white/10
        hover:border-primary-purple/50 hover:bg-gradient-to-br hover:from-gray-800/60 hover:via-gray-700/40 hover:to-black/50
        transform transition-all duration-500 ease-out
        hover:-translate-y-2 hover:shadow-xl hover:shadow-primary-purple/10
        animate-fade-in-up
      "
      style={{ animationDelay: delay }}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-br from-primary-purple via-secondary-magenta to-primary-purple transition-opacity duration-500 rounded-2xl" />
      
      {/* Floating background shapes */}
      <div className="absolute top-4 right-4 w-8 h-8 bg-primary-purple/5 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-purple/20 to-secondary-magenta/20 backdrop-blur-sm border border-white/10 mb-6 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-primary-purple/30 group-hover:to-secondary-magenta/30 transition-all duration-300">
          <div className="text-primary-purple group-hover:text-white transition-colors duration-300">
            {icon}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-montserrat font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary-purple group-hover:to-secondary-magenta group-hover:bg-clip-text transition-all duration-300">
          {title}
        </h3>

        {/* Content */}
        <div className="text-gray-300 font-inter">
          {text}
        </div>
      </div>
    </div>
  );
};

type ContactProps = object;

const Contact = ({}: ContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    setStatus('loading');

    interface Grecaptcha {
      ready(cb: () => void): void;
      execute(siteKey: string, options: { action: string }): Promise<string>;
    }
    const w = window as Window & { grecaptcha?: Grecaptcha };

    if (!w.grecaptcha || !siteKey) {
      throw new Error('reCAPTCHA not loaded');
    }

    // Ensure API is ready
    await new Promise<void>((resolve) => w.grecaptcha!.ready(() => resolve()));
    const token = await w.grecaptcha!.execute(siteKey, { action: 'submit' });

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, token }),
    });

    const body = await res.json().catch(() => ({}));
    if (!res.ok) {
      throw new Error(body?.error || `HTTP ${res.status}`);
    }

    setStatus('success');
    setFormData({ name: '', email: '', phone: '', message: '' });
  } catch (err) {
    console.error(err);
    setStatus('error');
  }
};


  return (
    <>
      <Script src={`https://www.google.com/recaptcha/api.js?render=${siteKey}`} />
      <section id="contact" className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
        
        {/* Floating background shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-10 w-40 h-40 bg-primary-purple/3 rounded-full blur-3xl animate-drift-slow" />
          <div className="absolute bottom-1/3 left-20 w-32 h-32 bg-secondary-magenta/4 rounded-full blur-2xl animate-drift-slower" />
          <div className="absolute top-2/3 right-1/3 w-24 h-24 bg-primary-purple/2 rounded-full blur-xl animate-drift-slowest" />
        </div>

        <div className="relative z-10 container-custom">
          {/* Header */}
          <div className="text-center mb-16 lg:mb-20">
            {/* Overline */}
            <div className="mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <span className="inline-block px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/20 text-primary-purple font-medium text-sm tracking-wide uppercase font-inter">
                Let's Connect
              </span>
            </div>

            {/* Main title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-black tracking-tight text-white mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <span className="block">Get in Touch</span>
              <span className="block mt-2 bg-gradient-to-r from-primary-purple via-secondary-magenta to-primary-purple bg-clip-text text-transparent">
                & Start Building
              </span>
            </h2>

            {/* Subtitle */}
            <p className="mx-auto max-w-3xl text-gray-300 font-inter text-lg lg:text-xl leading-relaxed animate-fade-in-up opacity-90" style={{ animationDelay: '0.3s' }}>
              Have a project in mind? We'd love to hear about your vision and discuss how we can help bring your ideas to life with cutting-edge technology.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 lg:mb-20">
            <ContactMethod
              icon={<Phone size={24} />}
              title="Phone"
              text={CONTACT_PHONE}
              delay="0.4s"
            />
            <ContactMethod
              icon={<Mail size={24} />}
              title="Email"
              text={CONTACT_EMAIL}
              delay="0.5s"
            />
            <ContactMethod
              icon={<MapPin size={24} />}
              title="Address"
              text={
                <>
                  {CONTACT_ADDRESS_LINE1}
                  <br />
                  {CONTACT_ADDRESS_LINE2}
                </>
              }
              delay="0.6s"
            />
          </div>

          {/* Contact Form */}
          <div className="max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900/60 via-gray-800/40 to-black/60 backdrop-blur-xl border border-white/10 p-8 lg:p-12">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/3 via-secondary-magenta/2 to-primary-purple/3 rounded-3xl" />
              
              {/* Floating accent shapes */}
              <div className="absolute top-8 right-8 w-16 h-16 bg-primary-purple/5 rounded-full blur-xl opacity-60" />
              <div className="absolute bottom-8 left-8 w-12 h-12 bg-secondary-magenta/5 rounded-full blur-lg opacity-40" />
              
              <div className="relative z-10">
                {/* Form Header */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-purple/20 to-secondary-magenta/20 backdrop-blur-sm border border-white/10 mb-4">
                    <MessageCircle size={24} className="text-primary-purple" />
                  </div>
                  <h3 className="text-2xl font-montserrat font-bold text-white mb-2">
                    Send us a Message
                  </h3>
                  <p className="text-gray-300 font-inter">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div className="group">
                      <label htmlFor="name" className="block text-white font-montserrat font-semibold mb-3 flex items-center space-x-2">
                        <User size={18} className="text-primary-purple" />
                        <span>Name</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 font-inter focus:outline-none focus:ring-2 focus:ring-primary-purple focus:border-transparent transition-all duration-300 hover:border-primary-purple/50"
                        placeholder="Your full name"
                        required
                      />
                    </div>

                    {/* Email Field */}
                    <div className="group">
                      <label htmlFor="email" className="block text-white font-montserrat font-semibold mb-3 flex items-center space-x-2">
                        <Mail size={18} className="text-primary-purple" />
                        <span>Email</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 font-inter focus:outline-none focus:ring-2 focus:ring-primary-purple focus:border-transparent transition-all duration-300 hover:border-primary-purple/50"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div className="group">
                    <label htmlFor="phone" className="block text-white font-montserrat font-semibold mb-3 flex items-center space-x-2">
                      <Smartphone size={18} className="text-primary-purple" />
                      <span>Phone (Optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 font-inter focus:outline-none focus:ring-2 focus:ring-primary-purple focus:border-transparent transition-all duration-300 hover:border-primary-purple/50"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="group">
                    <label htmlFor="message" className="block text-white font-montserrat font-semibold mb-3 flex items-center space-x-2">
                      <MessageCircle size={18} className="text-primary-purple" />
                      <span>Message</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 font-inter focus:outline-none focus:ring-2 focus:ring-primary-purple focus:border-transparent transition-all duration-300 hover:border-primary-purple/50 resize-none"
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="text-center pt-4">
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary-purple to-secondary-magenta p-0.5 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary-purple/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      <div className="rounded-2xl bg-black px-8 py-4 group-hover:bg-transparent transition-colors duration-300 disabled:group-hover:bg-black">
                        <div className="flex items-center space-x-3">
                          {status === 'loading' ? (
                            <>
                              <Clock size={20} className="text-primary-purple group-hover:text-white animate-spin" />
                              <span className="font-montserrat font-bold text-lg text-white">
                                Sending...
                              </span>
                            </>
                          ) : (
                            <>
                              <Send size={20} className="text-primary-purple group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                              <span className="font-montserrat font-bold text-lg text-white">
                                Send Message
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </button>

                    {/* Status Messages */}
                    <div className="mt-6" aria-live="polite">
                      {status === 'success' && (
                        <div className="flex items-center justify-center space-x-2 text-green-400 font-inter">
                          <CheckCircle size={20} />
                          <span>Message sent successfully! We'll get back to you soon.</span>
                        </div>
                      )}
                      {status === 'error' && (
                        <div className="flex items-center justify-center space-x-2 text-red-400 font-inter">
                          <AlertCircle size={20} />
                          <span>Failed to send message. Please try again.</span>
                        </div>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Response Time Info */}
          <div className="mt-12 text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 font-inter">
              <Clock size={16} className="text-primary-purple" />
              <span>Average response time: 4 hours</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;