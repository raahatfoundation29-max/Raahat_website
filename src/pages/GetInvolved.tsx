import { motion } from 'motion/react';
import { useState } from 'react';
import { Users, Package, Megaphone, Building2, Send, CheckCircle, Quote } from 'lucide-react';

export default function GetInvolved() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "bf3972c1-d632-4b27-a6e6-7488b5b90fc4");

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
    <div className="w-full min-h-screen font-sans bg-[#ecf0ef] pt-32 md:pt-40 pb-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10 md:mb-16">
          <h1 className="text-3xl md:text-6xl font-extrabold text-[#005840] mb-6">Roll Up Your Sleeves.</h1>
          <p className="text-sm md:text-lg text-[#005840]/70 max-w-2xl">
            We are a 100% grassroots, volunteer-driven NGO. We do not offer glamorous internships; we offer the chance to do real work that changes lives. No money needed. No special skills required. Just showing up.
          </p>
        </motion.div>

        {/* Contribution Types Grid */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-6 mb-16">
          {[
            { title: 'Ground Volunteer', desc: 'Distribute on drives, assist with setup, coordinate logistics.' },
            { title: 'Remote Support', desc: 'Content creation, social media, documentation, design.' },
            { title: 'Goods Coordinator', desc: 'Organize collections in your colony/office/institution.' },
          ].map((c, i) => (
            <div key={c.title} className={`bg-[#005840] text-white p-4 md:p-6 rounded-2xl ${i === 2 ? 'col-span-2 md:col-span-1' : ''}`}>
              <h3 className="text-sm font-bold mb-2">{c.title}</h3>
              <p className="text-[#d1f843] text-xs md:text-sm font-normal leading-tight">{c.desc}</p>
            </div>
          ))}
        </div>

        {/* Form & Testimonial Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Volunteer Form */}
          <div className="bg-white p-6 md:p-12 rounded-[2.5rem] shadow-sm">
            {isSubmitted ? (
              <div className="text-center py-20">
                <CheckCircle className="w-16 h-16 text-[#d1f843] mx-auto mb-6" />
                <h2 className="text-2xl font-bold text-[#005840]">Application received. We'll WhatsApp you within 48 hours.</h2>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-[10px] md:text-xs font-bold uppercase mb-1.5 tracking-wider">Name</label>
                  <input required name="volunteer_name" className="w-full min-h-[48px] px-4 rounded-xl border border-gray-200 text-sm md:text-base" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-[10px] md:text-xs font-bold uppercase mb-1.5 tracking-wider">WhatsApp Number</label>
                  <input required type="tel" name="whatsapp_number" className="w-full min-h-[48px] px-4 rounded-xl border border-gray-200 text-sm md:text-base" placeholder="+91..." />
                </div>
                <div>
                  <label className="block text-[10px] md:text-xs font-bold uppercase mb-1.5 tracking-wider">Email</label>
                  <input required type="email" name="email" className="w-full min-h-[48px] px-4 rounded-xl border border-gray-200 text-sm md:text-base" placeholder="your@email.com" />
                </div>
                <div className="relative">
                  <label className="block text-[10px] md:text-xs font-bold uppercase mb-1.5 tracking-wider">HOW WOULD YOU LIKE TO CONTRIBUTE?</label>
                  <select required name="contribution_type" className="w-full min-h-[48px] px-4 rounded-xl border border-gray-200 bg-white appearance-none text-sm md:text-base">
                    <option value="Ground Distribution">Ground Distribution</option>
                    <option value="Medical Support">Medical Support</option>
                    <option value="Teaching & Education">Teaching & Education</option>
                    <option value="Content / Social Media">Content / Social Media</option>
                    <option value="Administrative">Administrative</option>
                    <option value="Goods Collection Coordinator">Goods Collection Coordinator</option>
                    <option value="One-Time Event Help">One-Time Event Help</option>
                    <option value="Other">Other</option>
                  </select>
                  <div className="absolute right-4 top-[calc(50%+8px)] pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
                <button type="submit" className="w-full min-h-[48px] bg-[#d1f843] text-[#005840] font-bold rounded-full uppercase tracking-widest hover:brightness-95 text-sm md:text-base">JOIN THE MISSION</button>
              </form>
            )}
          </div>

          {/* Testimonial */}
          <div className="bg-[#005840]/5 p-6 md:p-12 rounded-[2.5rem] flex flex-col gap-6">
            <div className="border-l-[3px] border-lime-500 pl-4">
              <p className="text-lg md:text-2xl font-serif italic text-[#005840] leading-relaxed">
                "I've been part of three distribution drives. I've seen exactly where every item ends up."
              </p>
            </div>
            <p className="font-bold text-[#005840]/70 text-xs md:text-sm">— Ananya, Prayagraj</p>
          </div>
        </div>
      </div>
    </div>
  );
}
