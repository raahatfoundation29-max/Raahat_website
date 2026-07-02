import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'motion/react';
import { useState, useRef, useEffect } from 'react';
import { Users, Menu, X, ChevronDown, Image } from 'lucide-react';

// ── Primary nav links (6 items) ──────────────────────────────────────────────
const primaryLinks = [
  { name: 'Home',            path: '/' },
  { name: 'Our Work',        path: '/work' },
  { name: 'Gallery',         path: '/gallery' },
  { name: 'About',           path: '/about' },
  { name: 'Our People',      path: '/our-people' },
  { name: 'Contact',         path: '/contact' },
];

// ── Sub-items under "About" ───────────────────────────────────────────────────
// DEPRECATED: About dropdown logic removed.

export default function Navbar() {
  const location    = useLocation();

  const [isScrolled,       setIsScrolled]       = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const inputCls = (path: string) =>
    `relative text-xs font-bold uppercase tracking-widest transition-colors pb-1 group ${
      location.pathname === path
        ? 'text-white border-b-2 border-[#d1f843]'
        : 'text-white/80 hover:text-white border-b-2 border-transparent'
    }`;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={`sticky top-0 z-40 w-full bg-[#005840] border-b border-white/5 transition-all duration-300 ${
        isScrolled ? 'py-2 px-5 md:px-8 shadow-xl' : 'py-4 px-5 md:py-4 md:px-8'
      }`}
    >
      <div className="mx-auto flex h-auto max-w-7xl items-center justify-between">

        {/* ── Wordmark ── */}
        <Link to="/" className="flex items-center gap-2 group flex-shrink-0">
          <img src="https://res.cloudinary.com/dri0jvjdw/image/upload/v1782988612/raahat_logo_text_white_vgm3yt.png" alt="Raahat Foundation Logo" className="h-12 md:h-14 lg:h-16 w-auto object-contain" />
        </Link>

          {/* ── Desktop Nav ── */}
          <div className="hidden md:flex items-center justify-end flex-1 gap-6 ml-8">
            <nav className="flex items-center gap-6">
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
              className="group relative flex items-center justify-center gap-2 px-6 py-3 bg-[#d1f843] text-[#005840] text-xs font-bold uppercase tracking-widest rounded-full hover:brightness-95 hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_4px_12px_rgba(209,248,67,0.2)]"
            >
              <span className="relative z-10">GET INVOLVED →</span>
            </Link>
          </div>


        {/* ── Mobile: Get Involved + Hamburger (always visible) ── */}
        <div className="flex md:hidden items-center gap-2">
          {/* Get Involved — always visible on mobile, scaled down */}
          <Link
            to="/get-involved"
            className="flex items-center gap-1 px-3 md:px-4 py-1.5 bg-[#d1f843] text-[#005840] text-[10px] font-extrabold uppercase tracking-wider rounded-full shadow-sm active:scale-95 transition-all"
          >
            GET INVOLVED →
          </Link>

          {/* Hamburger */}
          <button
            className="text-white hover:text-[#d1f843] transition-colors p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu (Compact Dropdown) ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-[40] bg-black/50 backdrop-blur-sm md:hidden"
            />
            {/* Dropdown Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed inset-x-0 top-0 z-[50] m-4 rounded-[2rem] shadow-2xl bg-white overflow-hidden md:hidden"
            >
              <div className="flex justify-end p-4 md:p-6">
                <button
                  className="w-12 h-12 flex items-center justify-center text-[#005840] hover:bg-gray-100 rounded-full transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="w-8 h-8" />
                </button>
              </div>

              <nav className="flex flex-col gap-2 px-6 py-4">
                {primaryLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`px-4 py-3 rounded-xl text-lg font-bold transition-all ${
                        isActive 
                          ? 'bg-[#005840] text-[#d1f843] shadow-md' 
                          : 'text-[#005840]/70 hover:bg-[#ecf0ef] hover:text-[#005840]'
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>

              {/* Bottom CTA */}
              <div className="px-6 py-6">
                <Link
                  to="/get-involved"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full py-4 text-center bg-[#d1f843] text-[#005840] font-extrabold uppercase tracking-widest text-sm rounded-full shadow-sm active:scale-95 transition-all"
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
