import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Mail, Phone, Send, ChevronDown, CheckCircle, Instagram, Facebook, MessageCircle, Package, Users } from 'lucide-react';
import { Link } from 'react-router-dom';


export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    // PASTE YOUR UNIQUE ACCESS KEY HERE
    formData.append("access_key", "09a496ba-4e63-4bed-8a58-4c03e68074ad");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      setIsSubmitted(true);
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="w-full min-h-[calc(100vh-80px)] bg-[#ecf0ef] pt-32 md:pt-40 pb-20 relative font-sans overflow-hidden">
      
      {/* Centralized Container */}
      <div className="max-w-6xl mx-auto px-2 py-6 lg:py-16 relative z-10">
        
        {/* 2-Column Grid */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 px-2 md:px-8 items-stretch">
          
          {/* Left Column: The Contact Panel */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl md:rounded-[2.5rem] shadow-md p-6 md:p-12 w-full h-full flex flex-col"
            >
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#005840] mb-2 md:mb-6">
              Get In Touch
            </h1>

            {/* Notification Badge */}
            <div className="flex items-center gap-1 md:gap-3 bg-white border border-[#005840]/10 rounded-lg md:rounded-full py-2.5 px-4 mb-4 md:mb-10 w-full flex-wrap h-auto shadow-sm">
              <span className="text-xs leading-tight text-center md:text-sm md:text-left font-medium text-[#005840]/80 flex-1">Our core team reads every message. Expect a response within 24 hours.</span>
            </div>

            {/* Contact Info (Inline/Compact) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-[#005840] font-bold text-xs md:text-sm uppercase tracking-widest">
                  <MapPin className="w-4 h-4" /> Address
                </div>
                <p className="text-[#005840] font-medium text-sm leading-normal">
                  15 CY Chintamani Road, Darbhanga Colony, Prayagraj
                </p>
                <iframe 
                  src="https://maps.google.com/maps?q=15%20CY%20Chintamani%20Road,%20Darbhanga%20Colony,%20Prayagraj,%20India&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  className="w-full h-[200px] md:h-[300px] rounded-lg mt-4 overflow-hidden border border-gray-200"
                  allowFullScreen
                  loading="lazy"
                  title="Raahat Foundation Location"
                ></iframe>
                <a 
                  href="https://maps.google.com/?q=15%20CY%20Chintamani%20Road,%20Darbhanga%20Colony,%20Prayagraj,%20India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-2 text-sm text-[#005840] hover:underline"
                >
                  View on Google Maps →
                </a>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-[#005840] font-bold text-xs md:text-sm uppercase tracking-widest">
                    <Mail className="w-4 h-4" /> Email
                  </div>
                  <p className="text-[#005840] font-medium text-sm">
                    <a href="mailto:raahatfoundation29@gmail.com" className="hover:underline text-[#005840] break-words">raahatfoundation29@gmail.com</a>
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-[#005840] font-bold text-xs md:text-sm uppercase tracking-widest">
                    <Phone className="w-4 h-4" /> Phone
                  </div>
                  <p className="text-[#005840] font-medium text-sm">+91 9264953283<br/>+91 9919715345</p>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-[#005840] font-bold text-xs md:text-sm uppercase tracking-widest">
                    Socials
                  </div>
                  <div className="flex items-center gap-3 mt-1">
                    <a 
                      href="https://instagram.com/raahatfoundation" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex w-10 h-10 items-center justify-center"
                    >
                      <Instagram className="w-6 h-6 text-[#005840] hover:text-[#d1f843] transition-colors" />
                    </a>
                    <a 
                      href="https://facebook.com/raahatfoundation" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex w-10 h-10 items-center justify-center"
                    >
                      <Facebook className="w-6 h-6 text-[#005840] hover:text-[#d1f843] transition-colors" />
                    </a>
                    <a 
                      href="https://wa.me/919264953283" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex w-10 h-10 items-center justify-center"
                    >
                      <MessageCircle className="w-6 h-6 text-[#005840] hover:text-[#d1f843] transition-colors" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8 text-xs font-medium text-[#005840]/70">
              Registration Number: Regd No. : 935/2015-16
            </div>

            {/* Vertical Divider */}
            <div className="h-px bg-[#005840]/10 w-full mb-8"></div>

            {/* Form */}
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex-1 flex flex-col items-center justify-center text-center p-6 bg-[#ecf0ef]/30 rounded-2xl md:rounded-[2rem] border border-[#005840]/5 shadow-inner min-h-[250px] md:min-h-[350px]"
              >
                <CheckCircle className="text-[#d1f843] w-12 h-12 mb-4 fill-[#005840]" />
                <p className="text-sm font-medium text-gray-800 max-w-sm leading-relaxed">
                  Message received. Ashi personally reads every message and will respond within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5 flex-1 flex flex-col">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold tracking-widest text-[#005840]/80 ml-1">Your Name</label>
                  <input required type="text" name="name" id="name" className="w-full h-12 px-4 text-base bg-[#ecf0ef]/50 border border-[#005840]/20 rounded-xl placeholder:text-[#005840]/40 text-[#005840] focus:outline-none focus:ring-2 focus:ring-[#d1f843] focus:border-[#005840] transition-all shadow-sm" placeholder="Jane Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold tracking-widest text-[#005840]/80 ml-1">Email</label>
                  <input required type="email" name="email" id="email" className="w-full h-12 px-4 text-base bg-[#ecf0ef]/50 border border-[#005840]/20 rounded-xl placeholder:text-[#005840]/40 text-[#005840] focus:outline-none focus:ring-2 focus:ring-[#d1f843] focus:border-[#005840] transition-all shadow-sm" placeholder="jane@example.com" />
                </div>
                
                {/* Subject Dropdown */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs font-bold tracking-widest text-[#005840]/80 ml-1">What's this about?</label>
                  <div className="relative">
                    <select 
                      name="subject"
                      id="subject" 
                      className="w-full h-12 px-4 text-base bg-[#ecf0ef]/50 border border-[#005840]/20 rounded-xl text-[#005840] focus:outline-none focus:ring-2 focus:ring-[#d1f843] focus:border-[#005840] transition-all shadow-sm cursor-pointer appearance-none pr-8"
                    >
                      <option value="General Question">General Question</option>
                      <option value="Referral">Referral</option>
                      <option value="Corporate Partnership">Corporate Partnership</option>
                      <option value="Media & Press">Media & Press</option>
                    </select>
                    <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#005840]/60 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-2 flex-1 flex flex-col">
                  <label htmlFor="message" className="text-xs font-bold tracking-widest text-[#005840]/80 ml-1">Your Message</label>
                  <textarea required name="message" id="message" className="w-full bg-[#ecf0ef]/50 border border-[#005840]/20 rounded-xl px-4 py-3 placeholder:text-[#005840]/40 text-[#005840] focus:outline-none focus:ring-2 focus:ring-[#d1f843] focus:border-[#005840] transition-all shadow-sm resize-none flex-1 min-h-[120px] text-base" placeholder="How can we help?"></textarea>
                </div>
                <button type="submit" className="w-full py-3 md:py-4 mt-6 min-h-[44px] flex items-center justify-center gap-2 rounded-xl bg-[#d1f843] hover:brightness-95 hover:-translate-y-1 text-[#005840] font-extrabold transition-all shadow-[0_10px_20px_rgba(209,248,67,0.2)] active:scale-[0.98]">
                  <Send className="w-4 h-4 text-[#005840]" />
                  <span className="text-sm md:text-base tracking-widest uppercase font-bold">Send Message</span>
                </button>
              </form>
            )}
          </motion.div>

          {/* Right Column: Other Ways to Help */}
          <div className="h-full flex flex-col gap-6 w-full">
            
            {/* Card 1: Contribute Goods */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-[2.5rem] shadow-sm p-8 md:p-10 flex-1 flex flex-col justify-between overflow-hidden relative group"
            >
              <Package className="w-12 h-12 md:w-16 md:h-16 text-[#005840]/10 mb-8 transition-transform group-hover:scale-110" />
              <div>
                <h2 className="text-xl md:text-2xl text-[#005840] font-extrabold tracking-tight">Contribute Goods</h2>
                <p className="text-sm md:text-base text-gray-600 mt-2">
                  Your surplus is another's necessity. We collect clothes, stationery, and non-perishables for direct distribution.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Join as Volunteer */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-[#005840] rounded-[2.5rem] shadow-lg p-8 md:p-10 flex-1 flex flex-col justify-between overflow-hidden relative group"
            >
              <Users className="w-12 h-12 md:w-16 md:h-16 text-[#d1f843]/20 mb-8 transition-transform group-hover:scale-110" />
              <div>
                <h2 className="text-xl md:text-2xl text-[#d1f843] font-extrabold tracking-tight">Join as Volunteer</h2>
                <p className="text-sm md:text-base text-white/90 mt-2 mb-6">
                  Be the hands and feet on the ground. We run on people, not platforms. Join our core team today.
                </p>
                <Link to="/get-involved" className="inline-flex items-center justify-center px-8 py-3 bg-[#d1f843] text-[#005840] font-bold rounded-full uppercase text-xs md:text-sm tracking-widest hover:brightness-110 transition-all w-fit">
                  JOIN →
                </Link>
              </div>
            </motion.div>

          </div>
          
        </div>
      </div>
    </div>
  );
}
