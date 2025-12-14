import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-8 py-20 grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* LEFT */}
        <div className="space-y-6">
          <h2 className="text-4xl font-extrabold tracking-wide">
            ZEETEX
          </h2>

          <p className="text-gray-300 max-w-md leading-relaxed">
            An emerging leader in tyres, batteries and lubricants
            providing solutions for innovative, high quality and
            safe mobility.
          </p>
        </div>

        {/* RIGHT */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Quick Links</h3>

          <ul className="space-y-3 text-gray-300">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Passenger Tyres</li>
            <li className="hover:text-white cursor-pointer">Commercial Tyres</li>
            <li className="hover:text-white cursor-pointer">Batteries</li>
            <li className="hover:text-white cursor-pointer">Lubricants</li>
            <li className="hover:text-white cursor-pointer">Contact Us</li>
          </ul>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-5 pt-4">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center border border-white/40 rounded-full hover:bg-white hover:text-black transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center border border-white/40 rounded-full hover:bg-white hover:text-black transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="h-2 bg-orange-500"></div>
    </footer>
  );
};

export default Footer;
