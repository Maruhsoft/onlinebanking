import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin as LinkedIn, Instagram, Youtube } from 'lucide-react';
import siteConfig from '../data/siteConfig.json';

const Footer = () => {
  const footerLinks = {
    'Solutions': [
      { label: 'Personal Banking', path: '/personal-banking' },
      { label: 'Business Banking', path: '/business-banking' },
      { label: 'Corporate Banking', path: '/business-banking/corporate' },
      { label: 'Investment Banking', path: '/investment-wealth' }
    ],
    'Services': [
      { label: 'ATM Services', path: '/services/atm' },
      { label: 'Mobile Banking', path: '/digital-banking/mobile' },
      { label: 'Online Banking', path: '/digital-banking/internet' },
      { label: 'Branch Services', path: '/support/branches' }
    ],
    'Contact Us': [
      { label: 'Find a Branch', path: '/support/branches' },
      { label: 'Call Center', path: '/contact' },
      { label: 'Email Support', path: '/support/email' },
      { label: 'Live Chat', path: '/support/chat' }
    ],
    'Legal': [
      { label: 'Terms of Use', path: '/terms' },
      { label: 'Privacy Policy', path: '/privacy' },
      { label: 'Security', path: '/security' },
      { label: 'Accessibility', path: '/accessibility' }
    ]
  };

  const socialLinks = [
    { icon: <Facebook size={20} />, url: siteConfig.social.facebook, label: 'Facebook' },
    { icon: <Twitter size={20} />, url: siteConfig.social.twitter, label: 'Twitter' },
    { icon: <LinkedIn size={20} />, url: siteConfig.social.linkedin, label: 'LinkedIn' },
    { icon: <Instagram size={20} />, url: siteConfig.social.instagram, label: 'Instagram' },
    { icon: <Youtube size={20} />, url: siteConfig.social.youtube, label: 'YouTube' }
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement newsletter signup logic
  };

  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-blue-100 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-blue-800 pt-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h4 className="font-semibold">Connect With Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-100 hover:text-white transition-colors"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Subscribe to Our Newsletter</h4>
              <form onSubmit={handleNewsletterSubmit} className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-yellow-500 text-blue-900 px-6 py-2 rounded-r font-medium hover:bg-yellow-400 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="mt-8 text-center text-sm">
            <p>© {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved.</p>
            <div className="mt-2">
              <Link to="/terms" className="text-blue-100 hover:text-white mx-2">Terms of Use</Link>
              <span>|</span>
              <Link to="/privacy" className="text-blue-100 hover:text-white mx-2">Privacy Policy</Link>
              <span>|</span>
              <Link to="/security" className="text-blue-100 hover:text-white mx-2">Security</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;