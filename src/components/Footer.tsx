import { Link } from 'react-router-dom';
import { Instagram, Facebook, MessageCircle, BadgeCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-white py-6 md:py-16 px-4 md:px-6 lg:px-12 relative z-30 rounded-t-3xl md:rounded-t-[3rem] lg:rounded-t-[4rem]">
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-2 md:gap-12 pb-6 md:py-16 mb-2 md:mb-16 md:grid-cols-4">

        {/* ── Column 1: Logo, Mission & Social Icons ── */}
        <div className="flex flex-col text-left items-start col-start-1 row-start-1 md:col-auto md:row-auto">
          {/* Wordmark */}
          <div className="flex items-center justify-start gap-1.5 md:gap-3 mb-2 md:mb-4">
            <div className="flex h-6 w-6 md:h-12 md:w-12 items-center justify-center rounded-full bg-[#d1f843] text-[#005840] font-bold">
              <span className="text-sm md:text-2xl font-serif">R</span>
            </div>
            <span className="text-xs md:text-xl font-bold tracking-tight text-[#005840]">Raahat</span>
          </div>

          {/* Mission tagline */}
          <p className="text-[9px] md:text-sm text-[#005840]/70 leading-relaxed mb-3 md:mb-6">
            Empowering communities through action, transparency, and unyielding dedication to human dignity.
          </p>

          {/* ── Social Icons ── */}
          <div className="flex items-center gap-2 md:gap-3">
            <a
              href="https://www.instagram.com/raahat_foundation?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              aria-label="Instagram"
              className="flex items-center justify-center w-6 h-6 md:w-9 md:h-9 rounded-full bg-[#005840]/6 hover:bg-[#005840] text-[#005840] hover:text-white transition-all duration-200 active:scale-95"
            >
              <Instagram className="w-3 h-3 md:w-4 md:h-4" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="flex items-center justify-center w-6 h-6 md:w-9 md:h-9 rounded-full bg-[#005840]/6 hover:bg-[#005840] text-[#005840] hover:text-white transition-all duration-200 active:scale-95"
            >
              <Facebook className="w-3 h-3 md:w-4 md:h-4" />
            </a>
            <a
              href="#"
              aria-label="WhatsApp"
              className="flex items-center justify-center w-6 h-6 md:w-9 md:h-9 rounded-full bg-[#005840]/6 hover:bg-[#005840] text-[#005840] hover:text-white transition-all duration-200 active:scale-95"
            >
              <MessageCircle className="w-3 h-3 md:w-4 md:h-4" />
            </a>
          </div>
        </div>

        {/* ── Column 2: Quick Links ── */}
        <div className="flex flex-col text-left items-start col-start-1 row-start-2 md:col-auto md:row-auto mt-2 md:mt-0">
          <h3 className="mb-1.5 md:mb-6 text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#005840]">Quick Links</h3>
          <ul className="space-y-1 md:space-y-4 text-[9px] md:text-sm font-medium flex flex-col items-start">
            {[
              { label: 'Home',         path: '/' },
              { label: 'About Us',     path: '/about' },
              { label: 'Our Work',     path: '/work' },
              { label: 'Gallery',      path: '/gallery' },
              { label: 'Contact',      path: '/contact' },
            ].map(({ label, path }) => (
              <li key={label}>
                <Link
                  to={path}
                  className="text-[#005840]/70 transition-colors hover:text-[#005840]"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Column 3: Contact Us ── */}
        <div className="flex flex-col text-left items-start justify-self-end col-start-2 row-start-1 md:justify-self-auto md:col-auto md:row-auto max-w-[150px] md:max-w-none">
          <h3 className="mb-1.5 md:mb-6 text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#005840]">Contact Us</h3>
          <ul className="space-y-1.5 md:space-y-4 text-[8px] md:text-sm text-[#005840]/70 flex flex-col items-start">
            <li className="flex items-center justify-start gap-1 w-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-2.5 h-2.5 md:w-5 md:h-5 text-[#005840] shrink-0">
                <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
              </svg>
              <span className="whitespace-nowrap md:whitespace-normal">15 CY Chintamani Road, Darbhanga Colony, Prayagraj</span>
            </li>
            <li className="flex items-center justify-start gap-1 w-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-2.5 h-2.5 md:w-5 md:h-5 text-[#005840] shrink-0">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
              </svg>
              <span className="whitespace-nowrap md:whitespace-normal">+91 9264953283</span>
            </li>
            <li className="flex items-center justify-start gap-1 w-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-2.5 h-2.5 md:w-5 md:h-5 text-[#005840] shrink-0">
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
              <span className="whitespace-nowrap md:whitespace-normal transform translate-x-[-1px] scale-90 origin-left">raahatfoundation29@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* ── Column 4: Impact ── */}
        <div className="flex flex-col text-left items-start justify-self-end col-start-2 row-start-2 md:justify-self-auto md:col-auto md:row-auto mt-2 md:mt-0 max-w-[150px] md:max-w-none">
          <h3 className="mb-1.5 md:mb-6 text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#005840]">Impact</h3>
          <p className="text-[8px] md:text-sm text-[#005840]/70 mb-2 md:mb-4 leading-relaxed font-bold">
            A 100% volunteer-run initiative in Prayagraj. Join us on the ground.
          </p>

          {/* Financial transparency line */}
            <p className="text-[7px] md:text-xs text-gray-500 italic leading-snug mb-3 md:mb-5">
              We don't need your money right now. We need your time, your stuff, and your reach.
            </p>

          {/* CTA — routes to /get-involved (Volunteer page) */}
          <Link
            to="/get-involved"
            className="inline-block px-3 py-1.5 md:px-6 md:py-3 bg-[#d1f843] text-[#005840] text-[8px] md:text-xs font-bold uppercase tracking-widest rounded-lg md:rounded-xl transition-all hover:brightness-95 hover:-translate-y-0.5 active:scale-95"
          >
            Get Involved
          </Link>
        </div>
      </div>

        {/* ── Bottom Bar ── */}
        <div className="max-w-7xl mx-auto border-t border-[#005840]/10 pt-3 md:pt-4">
          
          {/* Instagram Grid (New addition) */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-0.5 mb-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-square bg-gray-200" />
            ))}
          </div>

          {/* Legal links row */}
          <div className="flex justify-end gap-3 md:gap-6 mb-2 md:mb-3">
            <Link to="/legal#privacy" className="text-[8px] md:text-xs text-[#005840]/50 hover:text-[#005840] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/legal#terms" className="text-[8px] md:text-xs text-[#005840]/50 hover:text-[#005840] transition-colors">
              Terms of Service
            </Link>
          </div>

          {/* Copyright — centered, uppercase */}
          <p className="text-center text-[10px] uppercase tracking-wide text-[#005840]/50">
            Raahat Foundation | Regd. No. 935/2015-16 | &copy; 2026
          </p>
        </div>

    </footer>
  );
}
