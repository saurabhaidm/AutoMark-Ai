import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#e8f1fc] dark:bg-[#0a0a0a] text-black dark:text-white px-6 py-12 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          {/* Logo */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h1 className="text-2xl font-bold mb-4">Logo</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              Your AI-powered solution for smarter business growth and digital marketing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition">About Us</a></li>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Support</a></li>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Resources</a></li>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Blog</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Products</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition">AI Marketing</a></li>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition">SEO Tools</a></li>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Social Media</a></li>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Email Automation</a></li>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Analytics</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Careers</a></li>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Press</a></li>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Partners</a></li>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Legal</a></li>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Privacy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-semibold mb-4 text-lg">Newsletter</h3>
            <p className="text-sm mb-4 text-gray-600 dark:text-gray-400">
              Subscribe to our newsletter for the latest updates on features and releases.
            </p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email here"
                className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 text-sm bg-white dark:bg-[#1e1e1e] focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-6 py-3 bg-zinc-600 hover:bg-zinc-700 text-white rounded-lg text-sm font-medium transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
              By subscribing, you agree to our Privacy Policy.
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-300 dark:border-gray-700 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </div>

          <div className="flex flex-wrap gap-6 text-sm">
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Terms of Service</a>
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Cookie Settings</a>
          </div>

          <div className="flex gap-5 text-lg">
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition" aria-label="YouTube">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;