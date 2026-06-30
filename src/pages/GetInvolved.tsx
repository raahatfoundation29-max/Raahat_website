import { motion } from 'motion/react';
import { useState } from 'react';
import { Users, Package, Megaphone, Building2, Send, CheckCircle, Quote } from 'lucide-react';

export default function GetInvolved() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="w-full min-h-screen font-sans bg-[#ecf0ef] pt-28 pb-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
          <h1 className="text-4xl md:text-7xl font-extrabold text-[#005840] mb-6">Roll Up Your Sleeves.</h1>
          <p className="text-lg md:text-xl text-[#005840]/70 max-w-2xl">
            We are a 100% grassroots, volunteer-driven NGO. We do not offer glamorous internships; we offer the chance to do real work that changes lives. No money needed. No special skills required. Just showing up.
          </p>
        </motion.div>

        {/* Contribution Types Grid */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-3 md:gap-6 mb-16">
          {[
            { title: 'Ground Volunteer', desc: 'Distribute on drives, assist with setup, coordinate logistics.' },
            { title: 'Remote Support', desc: 'Content creation, social media, documentation, design.' },
            { title: 'Goods Coordinator', desc: 'Organize collections in your colony/office/institution.' },
          ].map((c) => (
            <div key={c.title} className="bg-[#005840] text-white p-5 rounded-3xl">
              <h3 className="text-base font-bold mb-3">{c.title}</h3>
              <p className="text-[#d1f843] text-sm font-normal">{c.desc}</p>
            </div>
          ))}
        </div>

        {/* Form & Testimonial Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Volunteer Form */}
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm">
            {isSubmitted ? (
              <div className="text-center py-20">
                <CheckCircle className="w-16 h-16 text-[#d1f843] mx-auto mb-6" />
                <h2 className="text-2xl font-bold text-[#005840]">Application received. We'll WhatsApp you within 48 hours.</h2>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }} className="flex flex-col gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase mb-2">Name</label>
                  <input required className="w-full min-h-[48px] px-4 rounded-xl border border-gray-200" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase mb-2">WhatsApp Number (we coordinate primarily on WhatsApp)</label>
                  <input required type="tel" className="w-full min-h-[48px] px-4 rounded-xl border border-gray-200" placeholder="+91..." />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase mb-2">Email</label>
                  <input required type="email" className="w-full min-h-[48px] px-4 rounded-xl border border-gray-200" placeholder="your@email.com" />
                </div>
                <div className="relative">
                  <label className="block text-xs font-bold uppercase mb-2">HOW WOULD YOU LIKE TO CONTRIBUTE?</label>
                  <select required className="w-full min-h-[48px] px-4 rounded-xl border border-gray-200 bg-white appearance-none">
                    <option>Ground Distribution</option>
                    <option>Medical Support</option>
                    <option>Teaching & Education</option>
                    <option>Content / Social Media</option>
                    <option>Administrative</option>
                    <option>Goods Collection Coordinator</option>
                    <option>One-Time Event Help</option>
                    <option>Other</option>
                  </select>
                  <div className="absolute right-4 top-[calc(50%+8px)] pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
                <button className="w-full md:w-auto py-4 text-lg bg-[#d1f843] text-[#005840] font-bold rounded-xl uppercase tracking-widest hover:brightness-95">JOIN THE MISSION</button>
              </form>
            )}
          </div>

          {/* Testimonial */}
          <div className="bg-[#005840]/5 p-8 md:p-12 rounded-[2.5rem] flex flex-col gap-6">
            <div className="border-l-[3px] border-lime-500 pl-4">
              <p className="text-2xl font-serif italic text-[#005840]">
                "I've been part of three distribution drives. I've seen exactly where every item ends up."
              </p>
            </div>
            <p className="font-bold text-[#005840]/70">— Ananya, Prayagraj</p>
          </div>
        </div>
      </div>
    </div>
  );
}
