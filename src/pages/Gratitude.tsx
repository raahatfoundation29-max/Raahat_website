import { useState } from 'react';
import { motion } from 'motion/react';
import { Plus, Shield, Sparkles, Heart, Star, Award, Leaf } from 'lucide-react';


const coreTeam = [
  "Shiwani Goswamy", "Bhawna", "Shalini Pradhan", "Amita Srivastava", 
  "Vibha (Pandey)", "Pritpal", "Pathak Aunty (Mrs. Pathak)", 
  "Ashi Goswamy", "Archana (Bajpai / Srivastava)", "Divya Goswamy"
];

const donors = [
  { name: "Anmol" }, { name: "Shiwani Goswamy" },
  { name: "Bhawna" }, { name: "Shalini Pradhan" },
  { name: "Divya Goswamy" }, { name: "Amita Srivastava" },
  { name: "Vibha (Pandey)" }, { name: "Pritpal" },
  { name: "Pathak Aunty (Mrs. Pathak)" }, { name: "Shalu Goswamy" },
  { name: "Ashi Goswamy" }, { name: "Archana Bajpai / Srivastava" },
  { name: "Geetanjali" }, { name: "Rekha Mishra" },
  { name: "Sonika" }, { name: "Pooja (Saraswat/Agarwal/Sar)" },
  { name: "Nutan Hajela / Hajela Mam" }, { name: "Ruchi / Ruchi Sri" },
  { name: "Ritesh (Singh)" }, { name: "Neena Bhabhi" },
  { name: "Garima (Sinhal)" }, { name: "Lekhni" },
  { name: "Priya Agarwal" }, { name: "Manju Gupta" },
  { name: "Chitra" }, { name: "Poonam Singh / Ray" },
  { name: "Shubhi" }, { name: "Sarita / Indu" },
  { name: "Meera Singh" }, { name: "Komal" },
  { name: "Urvashi" }, { name: "Arshi" },
  { name: "Sunanda" }, { name: "Parul Garg" },
  { name: "Utkarsh" }, { name: "Priti" },
  { name: "Meenakshi Rangla" }, { name: "Anushree" },
  { name: "Richa Rai" }, { name: "Simi Agarwal" },
  { name: "Geetu Agarwal" }, { name: "Pankaj Khanna" },
  { name: "Lakshmi Nigam" }, { name: "Neely Mehrotra" },
  { name: "Ashwani" }, { name: "Ashish Wadhwa" },
  { name: "Rumi" }
];

export default function Gratitude() {

  const normalize = (str: string) => str.toLowerCase().replace(/[^a-z]/g, '');
  const normalizedCore = coreTeam.map(normalize);

  const filteredDonors = donors.filter(donor => {
    const normName = normalize(donor.name);
    return !normalizedCore.some(nc => normName.includes(nc) || nc.includes(normName));
  });

  const getTierDetails = () => ({ name: 'Supporter', icon: Leaf, color: 'text-[#005840]', bg: 'bg-transparent', border: 'border-[#005840]/30' });

  return (
    <div className="w-full min-h-screen bg-[#ecf0ef] pt-20 px-4 md:pt-32 md:px-8 pb-32 relative font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-20 pt-8 md:pt-0">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-extrabold tracking-tight md:text-5xl text-[#005840] mb-4 drop-shadow-sm"
          >
            The People of Raahat
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl font-medium text-[#005840]/80 max-w-2xl mx-auto"
          >
            Every drive, every distribution, every initiative runs on one thing — people who showed up.
          </motion.p>
        </div>

        {/* Section 1: The Core Collective */}
        <div className="mb-16">
          <h2 className="text-xl md:text-3xl font-extrabold text-[#005840] mb-4">Our Founding Community</h2>
          <p className="text-lg md:text-xl text-[#005840]/80 mb-12">These are the people whose early trust made Raahat's first decade possible.</p>
          
          <div className="grid grid-cols-4 gap-1.5 md:gap-8 md:grid-cols-3 lg:grid-cols-5">
            {coreTeam.map((name, i) => (
              <motion.div 
                key={name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-lg md:rounded-[2rem] p-1.5 md:p-8 shadow-sm transition-all flex flex-col items-center justify-center text-center relative overflow-hidden aspect-square md:aspect-auto"
              >
                <h3 className="text-xs md:text-lg font-bold text-[#005840]">{name}</h3>
                <span className="text-[10px] uppercase tracking-widest text-[#005840]/60 font-bold mt-2">PILLAR</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 2: The Unified Donor Grid */}
        <div className="mb-20">
          <div className="grid grid-cols-4 gap-1.5 md:gap-8 md:grid-cols-3 lg:grid-cols-4">
            {filteredDonors.map((donor, i) => (
              <motion.div 
                key={donor.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 8) * 0.05 }}
                className="bg-white rounded-lg md:rounded-[2rem] p-4 md:p-8 shadow-sm transition-all flex flex-col items-center justify-center text-center aspect-square md:aspect-auto"
              >
                <h3 className="text-xs md:text-lg font-bold text-[#005840] mb-2">{donor.name}</h3>
                <span className="text-[10px] uppercase tracking-widest text-[#005840]/60 font-bold">SUPPORTER</span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
