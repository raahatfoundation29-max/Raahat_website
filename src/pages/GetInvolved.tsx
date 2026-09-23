import { motion } from 'motion/react';
import { useState } from 'react';
import type { FormEvent } from 'react';
import { Users, Package, Megaphone, CheckCircle } from 'lucide-react';

export default function GetInvolved() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
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
    <div className="w-full min-h-screen font-sans bg-[#ecf0ef] pt-24 md:pt-36 pb-16 md:pb-24 px-5 md:px-8 selection:bg-[#d1f843]/30">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10 md:mb-16 text-left">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#005840] mb-4">
            Roll Up Your Sleeves.
          </h1>
          <p className="text-sm md:text-base text-[#005840]/80 max-w-2xl leading-relaxed font-medium">
            We are a 100% grassroots, volunteer-driven NGO. We do not offer glamorous internships; we offer the chance to do real work that changes lives. No money needed. No special skills required. Just showing up.
          </p>
        </motion.div>

        {/* Contribution Types Grid (Bento Cards with Lucide Icons in Soft Tinted Boxes) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-12 md:mb-16">
          {[
            { 
              title: 'Ground Volunteer', 
              desc: 'Distribute on direct drives, assist with on-site setup, and coordinate logistics in Prayagraj.',
              icon: Users 
            },
            { 
              title: 'Remote Support', 
              desc: 'Assist with community storytelling, social media outreach, visual design, and documentation.',
              icon: Megaphone 
            },
            { 
              title: 'Goods Coordinator', 
              desc: 'Organize clothes, stationery, and non-perishable food collections in your colony, school, or office.',
              icon: Package 
            },
          ].map((c) => {
            const Icon = c.icon;
            return (
              <div 
                key={c.title} 
                className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-50 flex flex-col items-start text-left transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#d1f843]/20 text-[#005840] flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-[#005840] mb-2 tracking-tight">{c.title}</h3>
                <p className="text-xs md:text-sm text-[#005840]/70 font-medium leading-relaxed">{c.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Form & Testimonial Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Volunteer Form */}
          <div className="lg:col-span-7 bg-white p-6 md:p-10 rounded-[24px] shadow-sm border border-gray-50">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-[#005840] mb-2">Volunteer Application</h2>
            <p className="text-xs md:text-sm text-[#005840]/70 font-medium mb-6">Fill in your details and our team will get in touch with you directly.</p>

            {isSubmitted ? (
              <div className="text-center py-16">
                <CheckCircle className="w-14 h-14 text-[#005840] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#005840] mb-2">Application Received!</h3>
                <p className="text-xs md:text-sm text-[#005840]/70 font-medium">We will reach out to you via WhatsApp within 48 hours.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-[10px] md:text-xs font-medium mb-1.5 tracking-wider text-[#005840]">Full Name</label>
                  <input 
                    required 
                    name="volunteer_name" 
                    className="w-full h-11 px-4 rounded-xl border border-gray-200 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-[#d1f843] focus:border-[#005840] transition-all text-[#005840] font-medium" 
                    placeholder="Your Name" 
                  />
                </div>
                <div>
                  <label className="block text-[10px] md:text-xs font-medium  mb-1.5 tracking-wider text-[#005840]">WhatsApp Number</label>
                  <input 
                    required 
                    type="tel" 
                    name="whatsapp_number" 
                    className="w-full h-11 px-4 rounded-xl border border-gray-200 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-[#d1f843] focus:border-[#005840] transition-all text-[#005840] font-medium" 
                    placeholder="+91..." 
                  />
                </div>
                <div>
                  <label className="block text-[10px] md:text-xs font-medium  mb-1.5 tracking-wider text-[#005840]">Email Address</label>
                  <input 
                    required 
                    type="email" 
                    name="email" 
                    className="w-full h-11 px-4 rounded-xl border border-gray-200 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-[#d1f843] focus:border-[#005840] transition-all text-[#005840] font-medium" 
                    placeholder="your@email.com" 
                  />
                </div>
                <div className="relative">
                  <label className="block text-[10px] md:text-xs font-medium  mb-1.5 tracking-wider text-[#005840]">How would you like to contribute?</label>
                  <select 
                    required 
                    name="contribution_type" 
                    className="w-full h-11 px-4 rounded-xl border border-gray-200 bg-white appearance-none text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-[#d1f843] focus:border-[#005840] transition-all text-[#005840] font-medium cursor-pointer"
                  >
                    <option value="Ground Distribution">Ground Distribution</option>
                    <option value="Medical Support">Medical Support</option>
                    <option value="Teaching & Education">Teaching & Education</option>
                    <option value="Content / Social Media">Content / Social Media</option>
                    <option value="Administrative">Administrative</option>
                    <option value="Goods Collection Coordinator">Goods Collection Coordinator</option>
                    <option value="One-Time Event Help">One-Time Event Help</option>
                    <option value="Other">Other</option>
                  </select>
                  <div className="absolute right-4 top-[36px] pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
                <button 
                  type="submit" 
                  className="w-full h-12 bg-[#d1f843] text-[#005840] font-bold rounded-full uppercase tracking-widest hover:brightness-95 active:scale-95 transition-all text-xs md:text-sm mt-2 shadow-sm cursor-pointer"
                >
                  Join the Mission →
                </button>
              </form>
            )}
          </div>

          {/* Testimonial & Quote Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-[#005840]/5 p-6 md:p-8 rounded-[24px] border border-[#005840]/10 flex flex-col gap-4">
              <div className="border-l-4 border-[#d1f843] pl-4">
                <p className="text-base md:text-lg font-serif italic text-[#005840] leading-relaxed font-medium">
                  "I've been part of three distribution drives. I've seen exactly where every single item ends up."
                </p>
              </div>
              <p className="font-bold text-[#005840]/70 text-xs">— Ananya, Prayagraj</p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-[24px] shadow-sm border border-gray-50 flex flex-col gap-3">
              <h3 className="text-base font-bold text-[#005840] tracking-tight">Zero Bureaucracy</h3>
              <p className="text-xs md:text-sm text-[#005840]/75 leading-relaxed font-medium">
                No formal interviews or rigid schedules. Whenever we organize a ground activity, we post the timing and location to our WhatsApp group, and anyone available joins.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
