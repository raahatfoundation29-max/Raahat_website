import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'motion/react';
import { useState, useRef, useEffect } from 'react';
import { Users, Menu, X, ChevronDown, Image } from 'lucide-react';

// ── Primary nav links (5 items) ──────────────────────────────────────────────
const primaryLinks = [
  { name: 'Home',            path: '/' },
  { name: 'Our Work',        path: '/work' },
  { name: 'About',           path: '/about',       hasDropdown: true },
  { name: 'Our People',  path: '/our-people' },
  { name: 'Contact',         path: '/contact' },
];

// ── Sub-items under "About" ───────────────────────────────────────────────────
const aboutDropdownItems = [
  { name: 'About Us',  path: '/about',   icon: null },
  { name: 'Gallery',   path: '/gallery', icon: Image },
];

export default function Navbar() {
  const location    = useLocation();

  const [isScrolled,       setIsScrolled]       = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutOpen,      setIsAboutOpen]      = useState(false);

  const aboutRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Shrink on scroll
  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50);
  });

  // Close About dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (aboutRef.current && !aboutRef.current.contains(e.target as Node)) {
        setIsAboutOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsAboutOpen(false);
  }, [location.pathname]);

  // Helpers
  const isAboutActive = location.pathname === '/about' || location.pathname === '/gallery';

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
        isScrolled ? 'py-2 px-5 md:px-8 shadow-xl' : 'py-4 px-5 md:py-6 md:px-8'
      }`}
    >
      <div className="mx-auto flex h-auto max-w-7xl items-center justify-between">

        {/* ── Wordmark ── */}
        <Link to="/" className="flex items-center gap-2 group flex-shrink-0">
          <span className="text-2xl font-black tracking-tighter text-white drop-shadow-sm">
            RAAHAT<span className="text-[#d1f843]">.</span>
          </span>
        </Link>

        {/* ── Desktop Nav ── */}
        <div className="hidden md:flex items-center justify-end flex-1 gap-6 ml-8">
          <nav className="flex items-center gap-6">
            {primaryLinks.map((link) => {
              if (link.hasDropdown) {
                // ── About dropdown ──
                return (
                  <div key={link.name} className="relative" ref={aboutRef}>
                    <button
                      onClick={() => setIsAboutOpen((o) => !o)}
                      className={`flex items-center gap-1 text-xs font-bold uppercase tracking-widest transition-colors pb-1 ${
                        isAboutActive
                          ? 'text-white border-b-2 border-[#d1f843]'
                          : 'text-white/80 hover:text-white border-b-2 border-transparent'
                      }`}
                    >
                      {link.name}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isAboutOpen ? 'rotate-180' : 'rotate-0'
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isAboutOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.97 }}
                          transition={{ duration: 0.18, ease: 'easeOut' }}
                          className="absolute top-full mt-3 left-1/2 -translate-x-1/2 w-44 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50"
                        >
                          {aboutDropdownItems.map(({ name, path, icon: Icon }) => (
                            <Link
                              key={name}
                              to={path}
                              onClick={() => setIsAboutOpen(false)}
                              className={`flex items-center gap-2.5 px-4 py-3 text-sm font-semibold transition-colors ${
                                location.pathname === path
                                  ? 'bg-[#005840]/8 text-[#005840]'
                                  : 'text-gray-700 hover:bg-gray-50 hover:text-[#005840]'
                              }`}
                            >
                              {Icon && <Icon className="w-4 h-4 opacity-60" />}
                              {name}
                              {location.pathname === path && (
                                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#d1f843]" />
                              )}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              // ── Regular link ──
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={inputCls(link.path)}
                >
                  {link.name}
                </Link>
              );
            })}
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

      {/* ── Mobile Dropdown Menu (Full-screen overlay) ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-white flex flex-col p-5 md:hidden"
          >
            {/* Close Button */}
            <div className="flex justify-end mb-8">
              <button
                className="w-12 h-12 flex items-center justify-center text-[#005840] hover:bg-gray-100 rounded-full transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex-1 flex flex-col">
              {primaryLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center text-2xl font-bold py-4 min-h-[56px] text-[#005840] border-b border-gray-100"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Bottom CTA */}
            <Link
              to="/get-involved"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-5 bg-[#d1f843] text-[#005840] text-center font-bold text-lg uppercase tracking-widest rounded-2xl shadow-lg mt-auto"
            >
              GET INVOLVED →
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
