import { Link } from 'react-router-dom';
import { Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-white py-12 md:py-16 px-5 md:px-8 lg:px-12 relative z-30 rounded-t-3xl md:rounded-t-[3rem] lg:rounded-t-[4rem] border-t border-gray-100 shadow-[0_-10px_30px_rgba(0,88,64,0.02)]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 pb-12 border-b border-gray-100">

        {/* ── Column 1: Logo, Mission & Social Icons ── */}
        <div className="flex flex-col text-left items-start">
          {/* Logo */}
          <img 
            src="https://res.cloudinary.com/dri0jvjdw/image/upload/v1789905354/raahat_logo_text_colour_ajg7ni.png" 
            alt="Raahat Foundation Logo" 
            className="h-14 md:h-16 w-auto object-contain mb-4" 
          />

          {/* Mission tagline */}
          <p className="text-xs md:text-sm text-[#005840]/70 leading-relaxed mb-6 font-medium">
            Empowering communities through action, transparency, and unyielding dedication to human dignity.
          </p>

          {/* ── Social Icons ── */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/raahat_foundation?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              aria-label="Instagram"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-[#005840]/5 hover:bg-[#005840] text-[#005840] hover:text-white transition-all duration-200 active:scale-95 shadow-sm"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="mailto:hello@raahatfoundation.org"
              aria-label="Email"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-[#005840]/5 hover:bg-[#005840] text-[#005840] hover:text-white transition-all duration-200 active:scale-95 shadow-sm"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* ── Column 2: Quick Links ── */}
        <div className="flex flex-col text-left items-start">
          <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-[#005840]">Quick Links</h3>
          <ul className="space-y-3 text-xs md:text-sm font-medium flex flex-col items-start">
            {[
              { label: 'Home',     path: '/' },
              { label: 'About Us', path: '/about' },
              { label: 'Our Work', path: '/work' },
              { label: 'Gallery',  path: '/gallery' },
              { label: 'Contact',  path: '/contact' },
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
        <div className="flex flex-col text-left items-start">
          <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-[#005840]">Contact Us</h3>
          <ul className="space-y-3 text-xs md:text-sm text-[#005840]/70 flex flex-col items-start">
            <li className="flex items-start justify-start gap-2.5 w-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#005840] shrink-0 mt-0.5">
                <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
              </svg>
              <span>15 CY Chintamani Road, Darbhanga Colony, Prayagraj</span>
            </li>
            <li className="flex items-center justify-start gap-2.5 w-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#005840] shrink-0">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
              </svg>
              <span>+91 9264953283</span>
            </li>
            <li className="flex items-center justify-start gap-2.5 w-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#005840] shrink-0">
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
              <span>raahatfoundation29@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* ── Column 4: Impact ── */}
        <div className="flex flex-col text-left items-start">
          <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-[#005840]">Impact</h3>
          <p className="text-xs md:text-sm text-[#005840]/70 mb-3 leading-relaxed font-bold">
            A 100% volunteer-run initiative in Prayagraj. Join us on the ground.
          </p>
          <p className="text-[10px] md:text-xs text-[#005840]/60 italic leading-snug mb-5">
            We don't need your money right now. We need your time, your stuff, and your reach.
          </p>
          <Link
            to="/get-involved"
            className="inline-block px-4 py-2 bg-[#d1f843] text-[#005840] text-xs font-bold uppercase tracking-widest rounded-full transition-all hover:brightness-95 hover:-translate-y-0.5 active:scale-95 shadow-sm"
          >
            Get Involved
          </Link>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="max-w-7xl mx-auto pt-6">
        <div className="flex flex-col md:flex-row items-center justify-between text-center gap-3 md:gap-6">
          <div className="flex gap-4">
            <Link to="/legal#privacy" className="text-xs text-[#005840]/70 hover:text-[#005840] transition-colors font-medium">
              Privacy Policy
            </Link>
            <Link to="/legal#terms" className="text-xs text-[#005840]/70 hover:text-[#005840] transition-colors font-medium">
              Terms of Service
            </Link>
          </div>
          <p className="text-xs uppercase tracking-wide text-[#005840]/50 font-medium">
            Raahat Foundation | Regd. No. 935/2015-16 | &copy; 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
