import React from 'react';
import { Mail, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Reviews',
      links: ['Smartphones', 'Laptops', 'Audio', 'Cameras', 'Wearables', 'Smart Home']
    },
    {
      title: 'Company',
      links: ['About Us', 'Our Team', 'Careers', 'Press', 'Contact', 'Blog']
    },
    {
      title: 'Support',
      links: ['Help Center', 'FAQ', 'Privacy Policy', 'Terms of Service', 'Cookie Policy']
    },
    {
      title: 'AI Features',
      links: ['Personalization', 'Smart Matching', 'Price Tracking', 'Recommendations', 'Analytics']
    }
  ];

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Mail, href: '#', label: 'Email' }
  ];

  return (
    <footer className="py-16 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">WireCutter Pro</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              AI-powered product reviews and recommendations for the modern consumer.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <IconComponent className="w-5 h-5 text-gray-300" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 WireCutter Pro. All rights reserved. Powered by AI.
            </div>
            
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookie Settings
              </a>
            </div>
          </div>
          
          {/* Additional Trust Indicators */}
          <div className="mt-6 text-center">
            <p className="text-gray-400 text-xs">
              Independent reviews • AI-powered recommendations • Trusted by 1M+ users
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;