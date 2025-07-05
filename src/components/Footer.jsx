import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "/logo.png";

const Footer = () => {
  return (
    <motion.footer
      className="bg-[#111] border-t border-[#222] text-[#EAEAEA] px-6 py-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and About */}
        <div>
          <Link to="/" className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Denex Logo" className="w-10 h-10" />
            <span className="text-lg font-semibold">Denex Software</span>
          </Link>
          <p className="text-sm text-[#aaa]">
            Affordable, fast software solutions for businesses in Kenya.
          </p>
        </div>

        {/* Navigation */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h4 className="mb-2 font-semibold uppercase text-sm text-[#00F5A0]">Product</h4>
            <ul className="space-y-1 text-sm text-[#ccc]">
              <li><Link to="/pricing" className="hover:text-[#00F5A0] transition">Pricing</Link></li>
              <li><Link to="/projects" className="hover:text-[#00F5A0] transition">Projects</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold uppercase text-sm text-[#00F5A0]">Company</h4>
            <ul className="space-y-1 text-sm text-[#ccc]">
              <li><Link to="/contact" className="hover:text-[#00F5A0] transition">Contact</Link></li>
              <li><Link to="/about" className="hover:text-[#00F5A0] transition">About</Link></li>
            </ul>
          </div>
        </div>

        {/* Socials */}
        <div>
          <h4 className="mb-2 font-semibold uppercase text-sm text-[#00F5A0]">Follow Us</h4>
          <div className="flex gap-4">
            <a href="https://x.com/denexsoftware" target="_blank" rel="noreferrer" className="hover:text-[#00F5A0]">
              Twitter
            </a>
            <a href="https://github.com/denexsoftware" target="_blank" rel="noreferrer" className="hover:text-[#00F5A0]">
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-[#222] pt-4 text-center text-sm text-[#777]">
        &copy; {new Date().getFullYear()} Denex Software. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
