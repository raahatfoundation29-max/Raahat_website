import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const primaryLinks = [
  { name: 'Home',      path: '/' },
  { name: 'Our Work',  path: '/work' },
  { name: 'Gallery',   path: '/gallery' },
  { name: 'About Us',  path: '/about' },
  { name: 'Contact',   path: '/contact' },
];

export default function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const inputCls = (path: string) =>
    `relative text-xs font-bold uppercase tracking-widest transition-all px-3.5 py-2 rounded-full ${
      location.pathname === path
        ? 'bg-[#005840]/10 text-[#005840]'
        : 'text-[#005840]/80 hover:text-[#005840] hover:bg-[#005840]/5'
    }`;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={`sticky top-0 z-40 w-full backdrop-blur-md bg-white/80 border-b border-[#005840]/10 transition-all duration-300 ${
        isScrolled ? 'py-2 px-5 md:px-8 shadow-sm' : 'py-3 px-5 md:px-8'
      }`}
    >
      <div className="mx-auto flex h-auto max-w-7xl items-center justify-between">

        {/* ── Wordmark / Logo ── */}
        <Link to="/" className="flex items-center gap-2 group flex-shrink-0">
          <img 
            src="https://res.cloudinary.com/dri0jvjdw/image/upload/v1789905354/raahat_logo_text_colour_ajg7ni.png" 
            alt="Raahat Foundation Logo" 
            className="h-14 md:h-16 w-auto object-contain" 
          />
        </Link>

        {/* ── Desktop Nav ── */}
        <div className="hidden md:flex items-center justify-end flex-1 gap-4 ml-8">
          <nav className="flex items-center gap-1.5">
            {primaryLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={inputCls(link.path)}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Get Involved CTA */}
          <Link
            to="/get-involved"
            className="group relative flex items-center justify-center gap-2 bg-[#d1f843] text-[#005840] font-bold rounded-full px-5 py-2 shadow-sm hover:-translate-y-0.5 transition-all text-xs uppercase tracking-widest ml-2"
          >
            <span>GET INVOLVED →</span>
          </Link>
        </div>

        {/* ── Mobile: Get Involved + Hamburger ── */}
        <div className="flex md:hidden items-center gap-2">
          <Link
            to="/get-involved"
            className="flex items-center gap-1 px-3.5 py-1.5 bg-[#d1f843] text-[#005840] text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm active:scale-95 transition-all"
          >
            GET INVOLVED →
          </Link>

          <button
            className="text-[#005840] hover:text-[#005840]/80 transition-colors p-1.5 rounded-full hover:bg-[#005840]/5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu (Compact Dropdown) ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-[40] bg-black/40 backdrop-blur-sm md:hidden"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              className="fixed inset-x-4 top-20 z-[50] rounded-3xl shadow-xl bg-white overflow-hidden md:hidden border border-[#005840]/10 p-6"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold text-[#005840]/50 uppercase tracking-widest">Menu</span>
                <button
                  className="w-10 h-10 flex items-center justify-center text-[#005840] hover:bg-[#005840]/5 rounded-full transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex flex-col gap-2">
                {primaryLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`px-4 py-3 rounded-2xl text-base font-bold transition-all ${
                        isActive 
                          ? 'bg-[#005840] text-[#d1f843] shadow-sm' 
                          : 'text-[#005840]/80 hover:bg-[#005840]/5 hover:text-[#005840]'
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <Link
                  to="/get-involved"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full py-3.5 text-center bg-[#d1f843] text-[#005840] font-bold uppercase tracking-widest text-xs rounded-full shadow-sm active:scale-95 transition-all"
                >
                  GET INVOLVED →
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
