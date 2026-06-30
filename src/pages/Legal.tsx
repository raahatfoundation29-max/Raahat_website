import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function Legal() {
  const [activeSection, setActiveSection] = useState('privacy');
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // give reasonable timeout to ensure layout is done
        setTimeout(() => {
          const offsetTop = element.getBoundingClientRect().top + window.scrollY - 120;
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
          setActiveSection(id);
        }, 100);
      }
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['privacy', 'terms', 'refund'];
      let currentSection = 'privacy';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if element is above the middle of viewport
          if (rect.top <= window.innerHeight / 3) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      setActiveSection(id);
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#ecf0ef] font-sans pb-24">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center pt-32 pb-12 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-[#005840] mb-4">Legal & Privacy</h1>
        <p className="text-[#005840]/80 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
          Transparency is the foundation of trust. Here is how we protect you and your contributions.
        </p>
      </section>

      {/* Main Grid */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-7xl mx-auto px-6">
        {/* Left Column (Sticky Sidebar) */}
        <div className="md:col-span-3 hidden md:block">
          <div className="bg-white rounded-[2rem] p-6 sticky top-28 shadow-sm">
            <nav className="flex flex-col gap-2">
              <button 
                onClick={() => scrollToSection('privacy')}
                className={`text-left px-4 py-3 rounded-xl font-bold transition-all ${activeSection === 'privacy' ? 'bg-[#d1f843] text-[#005840]' : 'text-[#005840]/70 hover:bg-[#ecf0ef] hover:text-[#005840]'}`}
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => scrollToSection('terms')}
                className={`text-left px-4 py-3 rounded-xl font-bold transition-all ${activeSection === 'terms' ? 'bg-[#d1f843] text-[#005840]' : 'text-[#005840]/70 hover:bg-[#ecf0ef] hover:text-[#005840]'}`}
              >
                Terms & Conditions
              </button>
              <button 
                onClick={() => scrollToSection('refund')}
                className={`text-left px-4 py-3 rounded-xl font-bold transition-all ${activeSection === 'refund' ? 'bg-[#d1f843] text-[#005840]' : 'text-[#005840]/70 hover:bg-[#ecf0ef] hover:text-[#005840]'}`}
              >
                Refund Policy
              </button>
            </nav>
          </div>
        </div>

        {/* Right Column (Content Area) */}
        <div className="md:col-span-9">
          <div className="bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-sm">
            
            {/* Section 1: Privacy Policy */}
            <div id="privacy" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-[#005840] mb-6 mt-0">Privacy Policy</h2>
              <p className="text-[#005840]/80 leading-relaxed mb-6 font-medium">
                Raahat Foundation is committed to protecting the privacy of our donors, volunteers, and beneficiaries. This policy explains how we collect, use, and safeguard your information.
              </p>
              
              <h3 className="text-lg font-bold text-[#005840] mb-3 mt-6">Information We Collect:</h3>
              <p className="text-[#005840]/80 leading-relaxed mb-6 font-medium">
                When you volunteer or contact us, we may collect personal information including your name, email address, phone number, and postal address.
              </p>

              <h3 className="text-lg font-bold text-[#005840] mb-3 mt-6">How We Use Your Data:</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-[#d1f843] shrink-0"></div>
                  <span className="text-[#005840]/80 leading-relaxed font-medium">To coordinate volunteer initiatives and ground-level logistics.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-[#d1f843] shrink-0"></div>
                  <span className="text-[#005840]/80 leading-relaxed font-medium">To provide periodic updates on the impact of your contributions.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-[#d1f843] shrink-0"></div>
                  <span className="text-[#005840]/80 leading-relaxed font-medium">To maintain internal records for legal and regulatory compliance.</span>
                </li>
              </ul>

              <h3 className="text-lg font-bold text-[#005840] mb-3 mt-6">Data Security & Sharing:</h3>
              <p className="text-[#005840]/80 leading-relaxed mb-6 font-medium">
                We utilize highly secure, encrypted payment gateways. We never sell, rent, or trade your personal information with third parties. Data is only shared with government authorities when legally required for tax compliance.
              </p>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-[#005840]/10 my-12"></div>

            {/* Section 2: Terms & Conditions */}
            <div id="terms" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-[#005840] mb-6">Terms & Conditions</h2>
              <p className="text-[#005840]/80 leading-relaxed mb-6 font-medium">
                By accessing the Raahat Foundation website or utilizing our services, you agree to abide by these Terms and Conditions.
              </p>

              <h3 className="text-lg font-bold text-[#005840] mb-3 mt-6">Our Commitment:</h3>
              <p className="text-[#005840]/80 leading-relaxed mb-6 font-medium">
                Raahat Foundation ensures that 100% of all resources — volunteer hours and in-kind materials — are allocated directly to our field initiatives. Operational costs are covered entirely by our core founding members.
              </p>

              <h3 className="text-lg font-bold text-[#005840] mb-3 mt-6">Use of Website:</h3>
              <p className="text-[#005840]/80 leading-relaxed mb-6 font-medium">
                The content, logos, and images on this site are the property of Raahat Foundation. They may not be reproduced without explicit written consent. Our platform must only be used for lawful, ethical purposes aligned with our philanthropic mission.
              </p>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-[#005840]/10 my-12"></div>

            {/* Section 3: Donation Refund Policy */}
            <div id="refund" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-[#005840] mb-6">Support Policy</h2>
              <p className="text-[#005840]/80 leading-relaxed mb-6 font-medium">
                We are deeply grateful for your support and enthusiasm for our work.
              </p>

              <h3 className="text-lg font-bold text-[#005840] mb-3 mt-6">Engagement Policy:</h3>
              <p className="text-[#005840]/80 leading-relaxed mb-6 font-medium">
                If you have committed to a volunteer role or contribution and need to change your plans, please let us know as soon as possible so we can adjust our field logistics accordingly.
              </p>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-[#005840]/10 my-12"></div>

            {/* Section 4: Contact */}
            <div id="contact" className="scroll-mt-32">
              <p className="text-[#005840]/80 leading-relaxed font-medium m-0">
                If you have any questions regarding these policies, please write to us at our headquarters:<br/>
                <span className="block mt-2">15 CY Chintamani Road, Darbhanga Colony, Prayagraj, India.</span>
                <span className="block mt-1">Phone: +91 9264953283, +91 9919715345</span>
                <span className="block mt-1">Email: <a href="mailto:raahatfoundation29@gmail.com" className="text-[#005840] font-bold hover:underline">raahatfoundation29@gmail.com</a></span>
                <span className="block mt-4 font-bold text-[#005840]">Registration Number: Regd No. : 935/2015-16</span>
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
