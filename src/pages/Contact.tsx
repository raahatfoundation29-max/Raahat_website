import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'motion/react';
import { MapPin, Mail, Phone, Send, ChevronDown, CheckCircle, Instagram, Facebook, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

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
    <div className="w-full min-h-screen bg-[#ecf0ef] pt-24 md:pt-36 pb-20 font-sans selection:bg-[#d1f843]/30">
      
      {/* Centralized Container */}
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        
        {/* Header Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10 md:mb-14">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#005840] mb-3">
            Get In Touch
          </h1>
          <p className="text-sm md:text-base text-[#005840]/80 max-w-xl font-medium leading-relaxed">
            Our core team reads every message. Expect a direct response within 24 hours.
          </p>
        </motion.div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form (Spans 7 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-7 bg-white rounded-[24px] shadow-sm border border-gray-50 p-6 md:p-10"
          >
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-[#005840] mb-6">Send Us a Message</h2>

            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-16 text-center"
              >
                <CheckCircle className="text-[#005840] w-14 h-14 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#005840] mb-2">Message Received!</h3>
                <p className="text-xs md:text-sm font-medium text-[#005840]/80 max-w-sm mx-auto leading-relaxed">
                  Ashi personally reads every message and will respond within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-[10px] md:text-xs font-medium tracking-wider text-[#005840]">Your Name</label>
                  <input 
                    required 
                    type="text" 
                    name="name" 
                    id="name" 
                    className="w-full bg-white rounded-xl border border-[#005840]/10 p-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#d1f843] focus:border-transparent transition-all text-[#005840] text-xs md:text-sm font-medium" 
                    placeholder="Jane Doe" 
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-[10px] md:text-xs font-medium tracking-wider text-[#005840]">Email Address</label>
                  <input 
                    required 
                    type="email" 
                    name="email" 
                    id="email" 
                    className="w-full bg-white rounded-xl border border-[#005840]/10 p-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#d1f843] focus:border-transparent transition-all text-[#005840] text-xs md:text-sm font-medium" 
                    placeholder="jane@example.com" 
                  />
                </div>
                
                {/* Subject Dropdown */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-[10px] md:text-xs font-medium tracking-wider text-[#005840]">What's this about?</label>
                  <div className="relative">
                    <select 
                      name="subject"
                      id="subject" 
                      className="w-full bg-white rounded-xl border border-[#005840]/10 p-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#d1f843] focus:border-transparent transition-all text-[#005840] text-xs md:text-sm font-medium cursor-pointer appearance-none pr-10"
                    >
                      <option value="General Question">General Question</option>
                      <option value="Referral">Referral</option>
                      <option value="Corporate Partnership">Corporate Partnership</option>
                      <option value="Media & Press">Media & Press</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#005840]/60 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-[10px] md:text-xs font-medium  tracking-wider text-[#005840]">Your Message</label>
                  <textarea 
                    required 
                    name="message" 
                    id="message" 
                    rows={4}
                    className="w-full bg-white rounded-xl border border-[#005840]/10 p-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#d1f843] focus:border-transparent transition-all text-[#005840] text-xs md:text-sm font-medium resize-none" 
                    placeholder="How can we help?"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="bg-[#d1f843] text-[#005840] font-bold rounded-full px-8 py-3 shadow-md hover:-translate-y-0.5 transition-all w-full md:w-auto uppercase tracking-widest text-xs flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </motion.div>

          {/* Right Column: Bento Info Cards (Spans 5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-5 w-full">
            
            {/* Address Bento Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-50 flex flex-col gap-3"
            >
              <div className="flex items-center gap-2 text-[#005840] font-bold text-xs uppercase tracking-widest">
                <div className="w-8 h-8 rounded-full bg-[#005840]/5 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-[#005840]" />
                </div>
                <span>Registered Address</span>
              </div>
              <p className="text-xs md:text-sm text-[#005840] font-bold leading-relaxed">
                15 CY Chintamani Road, Darbhanga Colony, Prayagraj
              </p>
              <div className="w-full h-36 rounded-xl overflow-hidden border border-gray-100 mt-1">
                <iframe 
                  src="https://maps.google.com/maps?q=15%20CY%20Chintamani%20Road,%20Darbhanga%20Colony,%20Prayagraj,%20India&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  className="w-full h-full border-none"
                  allowFullScreen
                  loading="lazy"
                  title="Raahat Foundation Location"
                ></iframe>
              </div>
            </motion.div>

            {/* Email & Phone Bento Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-50 flex flex-col gap-4"
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[#005840] font-bold text-xs uppercase tracking-widest">
                  <div className="w-8 h-8 rounded-full bg-[#005840]/5 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-[#005840]" />
                  </div>
                  <span>Email</span>
                </div>
                <a href="mailto:raahatfoundation29@gmail.com" className="text-xs md:text-sm font-bold text-[#005840] hover:underline pl-10">
                  raahatfoundation29@gmail.com
                </a>
              </div>

              <div className="border-t border-gray-100 pt-3 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[#005840] font-bold text-xs uppercase tracking-widest">
                  <div className="w-8 h-8 rounded-full bg-[#005840]/5 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-[#005840]" />
                  </div>
                  <span>Phone</span>
                </div>
                <p className="text-xs md:text-sm font-bold text-[#005840] pl-10 leading-relaxed">
                  +91 9264953283<br/>+91 9919715345
                </p>
              </div>
            </motion.div>

            {/* Social Links Bento Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-50 flex flex-col gap-3"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-[#005840]">Connect With Us</span>
              <div className="flex items-center gap-3">
                <a 
                  href="https://instagram.com/raahatfoundation" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#005840]/5 flex items-center justify-center text-[#005840] hover:bg-[#005840] hover:text-white transition-all shadow-sm"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a 
                  href="https://facebook.com/raahatfoundation" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#005840]/5 flex items-center justify-center text-[#005840] hover:bg-[#005840] hover:text-white transition-all shadow-sm"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a 
                  href="https://wa.me/919264953283" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#005840]/5 flex items-center justify-center text-[#005840] hover:bg-[#005840] hover:text-white transition-all shadow-sm"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </div>
  );
}
