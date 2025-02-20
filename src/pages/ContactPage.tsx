import React from 'react';
import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">Contact Us</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Get in Touch</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-900 text-white px-6 py-2 rounded font-medium hover:bg-blue-800"
            >
              Send Message
            </button>
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Contact Information</h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-blue-900 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Head Office</h3>
                <p className="text-gray-700">Samuel Asabia House, 35 Marina, Lagos Island, Lagos, Nigeria</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-blue-900 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Phone</h3>
                <p className="text-gray-700">+234 (1) 4485500</p>
                <p className="text-gray-700">+234 (1) 4485600</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-blue-900 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <p className="text-gray-700">firstcontact@firstbank.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MessageSquare className="w-6 h-6 text-blue-900 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Live Chat</h3>
                <p className="text-gray-700">Available 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;