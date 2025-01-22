import React from 'react';

const Footer = () => {
  const footerLinks = {
    'Solutions': ['Personal Banking', 'Business Banking', 'Corporate Banking', 'Investment Banking'],
    'Services': ['ATM Services', 'Mobile Banking', 'Online Banking', 'Branch Services'],
    'Contact Us': ['Find a Branch', 'Call Center', 'Email Support', 'Live Chat'],
    'Legal': ['Terms of Use', 'Privacy Policy', 'Security', 'Accessibility']
  };

  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-blue-100 hover:text-white text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 pt-8 border-t border-blue-800 text-center text-sm">
          <p>© 2024 FirstBank. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;