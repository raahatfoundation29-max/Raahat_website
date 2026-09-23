import { motion } from 'motion/react';

export default function About() {
  const teamMembers = [
    { 
      name: 'Ashi Goswamy', 
      title: 'DIRECTOR & PRESIDENT', 
      monogram: 'AG', 
      image: 'https://res.cloudinary.com/dri0jvjdw/image/upload/v1782981066/Ashi_Goswamy_rxt9to.png', 
      quote: 'True impact is not measured in grand gestures, but in the quiet restoration of human dignity.' 
    },
    { 
      name: 'Ritesh Singh Rajput', 
      title: 'CO-FOUNDER & OPERATIONS', 
      monogram: 'RR', 
      image: 'https://res.cloudinary.com/dri0jvjdw/image/upload/v1782973347/Ritesh_Singh_Rajput_c5bgwb.png', 
      quote: 'Logistics is just the mechanism; our real work is delivering hope and dependable support to those who need it most.' 
    },
    { 
      name: 'Shiwani Goswamy', 
      title: 'PROGRAM DIRECTOR', 
      monogram: 'SG', 
      image: 'https://res.cloudinary.com/dri0jvjdw/image/upload/v1782973350/Shiwani_Goswamy_ciqgki.png', 
      quote: 'When we listen to a community with open hearts, the path forward becomes clear and shared.' 
    },
    { 
      name: 'Divya Goswamy', 
      title: 'COMMUNITY OUTREACH', 
      monogram: 'DG', 
      image: 'https://res.cloudinary.com/dri0jvjdw/image/upload/v1789902786/Divya_Goswamy_d1v100.png', 
      quote: 'Building lasting change starts on the ground, one meaningful connection and one smile at a time.' 
    },
    { 
      name: 'Shubhi Goswami', 
      title: 'YOUTH ENGAGEMENT', 
      monogram: 'SG', 
      image: 'https://res.cloudinary.com/dri0jvjdw/image/upload/v1789902786/Shubhi_Goswami_lghbgy.png', 
      quote: 'Empowerment begins when every individual is seen, valued, and given the tools to thrive.' 
    },
    { 
      name: 'Bhawna Srivastava', 
      title: 'WOMEN EMPOWERMENT', 
      monogram: 'BS', 
      image: 'https://res.cloudinary.com/dri0jvjdw/image/upload/v1782973347/Bhawna_Srivastava_v60dv6.png', 
      quote: 'True change happens when a community decides to take care of its own with unwavering dedication.' 
    },
    { 
      name: 'Amita Srivastava', 
      title: 'EDUCATION LEAD', 
      monogram: 'AS', 
      image: 'https://res.cloudinary.com/dri0jvjdw/image/upload/v1782973348/Amita_Srivastava_pyy7fa.png', 
      quote: 'Compassion in action has the extraordinary power to turn vulnerability into resilience.' 
    },
    { 
      name: 'Shalini Pradhan', 
      title: 'HEALTH INITIATIVES', 
      monogram: 'SP', 
      image: 'https://res.cloudinary.com/dri0jvjdw/image/upload/v1782973350/Shalini_Pradhan_q49ufh.png', 
      quote: 'Dedicated service is about showing up consistently and standing beside our neighbors through every challenge.' 
    },
    { 
      name: 'Pritpal Kaur Tripathi', 
      title: 'FIELD COORDINATOR', 
      monogram: 'PT', 
      image: 'https://res.cloudinary.com/dri0jvjdw/image/upload/v1782973349/Pritpal_Kaur_Tripathi_trjgpj.png', 
      quote: 'We bridge gaps not with promises, but with direct action and transparent grassroots support.' 
    },
    { 
      name: 'Ruchi Srivastava', 
      title: 'VOLUNTEER MANAGEMENT', 
      monogram: 'RS', 
      image: 'https://res.cloudinary.com/dri0jvjdw/image/upload/v1782973348/Ruchi_Srivastava_qzhwje.png', 
      quote: 'Every act of kindness creates a ripple that strengthens the entire community fabric.' 
    },
    { 
      name: 'Lakshmi Nigam', 
      title: 'RESOURCE ALLOCATION', 
      monogram: 'LN', 
      image: 'https://res.cloudinary.com/dri0jvjdw/image/upload/v1782973350/Lakshmi_Nigam_gjhpgn.png', 
      quote: 'Service is our greatest privilege, and keeping our pledge of transparency keeps our mission pure.' 
    }
  ];

  const otherContributors = [
    "Anmol", "Anushree", "Archana (Bajpai / Srivastava)", "Arshi", 
    "Ashish Wadhwa", "Ashwani", "Chitra", "Garima (Sinhal)", 
    "Geetanjali", "Geetu Agarwal", "Komal", "Lekhni", 
    "Manju Gupta", "Meenakshi Rangla", "Meera Singh", "Neely Mehrotra", 
    "Neena Bhabhi", "Nutan Hajela / Hajela Mam", "Pankaj Khanna", 
    "Parul Garg", "Pathak Aunty (Mrs. Pathak)", "Pooja (Saraswat/Agarwal/Sar)", 
    "Poonam Singh / Ray", "Priti", "Priya Agarwal", "Rekha Mishra", 
    "Richa Rai", "Rumi", "Sarita / Indu", "Shalu Goswamy", 
    "Simi Agarwal", "Sonika", "Sunanda", "Urvashi", "Utkarsh", "Vibha (Pandey)"
  ];

  return (
    <div className="w-full min-h-screen bg-[#ecf0ef] font-sans selection:bg-[#d1f843]/30 pt-20 md:pt-24 flex flex-col">
      
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center pt-0 pb-4 px-5 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-[#005840] uppercase mb-2">
            OUR STORY
          </h1>
          <p className="text-sm md:text-lg font-medium text-[#005840]/80 max-w-2xl mx-auto leading-relaxed">
            Driven by compassion, united by purpose.
          </p>
        </motion.div>
      </section>

      {/* Section: Our Story */}
      <section className="w-full py-0 relative">
        <div className="max-w-4xl mx-auto px-5 lg:px-8 mt-0 flex flex-col gap-4 md:gap-6">
          
          {/* Horizontal Banner Image */}
          <div className="w-full relative rounded-[20px] md:rounded-[32px] overflow-hidden shadow-sm border border-gray-100 bg-[#005840]/5">
            <img 
              src="https://res.cloudinary.com/dri0jvjdw/image/upload/v1790106355/raahat_Banner_design_final_1_dmahtr.png" 
              alt="Raahat Foundation Banner" 
              className="w-full h-auto object-contain block"
            />
            
            {/* Year Established Badge */}
            <div className="absolute top-4 right-4 md:top-8 md:right-8 bg-white/95 backdrop-blur-sm px-4 md:px-6 py-2.5 md:py-4 rounded-xl md:rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center z-10">
              <span className="text-xl md:text-3xl font-bold text-[#005840] leading-none">2015</span>
              <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-[#005840]/70 mt-1">Year Established</span>
            </div>
          </div>

          {/* Text Content Block */}
          <div className="w-full flex flex-col gap-6">
            <p className="text-base md:text-lg text-[#005840]/80 leading-relaxed font-medium mb-2">
              Raahat Foundation was born in Prayagraj in 2015 from a simple belief — that dignity is not a privilege. What began as a small team distributing winter clothing has grown into 27 direct community programs, entirely volunteer-led, with zero overhead.
            </p>

            <div className="bg-white p-6 md:p-8 rounded-[24px] shadow-sm border border-gray-50 flex flex-col gap-3">
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#005840]">The Mission</h3>
              <p className="text-sm md:text-base text-[#005840]/80 font-medium">To eradicate systemic poverty and inequality through acute, direct intervention in education, healthcare, and basic nutrition.</p>
              <p className="text-sm md:text-base text-[#005840]/80 font-medium mt-2">Raahat Foundation began with a simple belief: no one should be left behind. We are a collective of dreamers, doers, and defenders of the vulnerable, committed to building sustainable change.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 md:p-8 rounded-[24px] shadow-sm border border-gray-50 flex flex-col gap-3">
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#005840]">Our Vision</h3>
                <p className="text-sm md:text-base text-[#005840]/80 font-medium">A world where access to basic human needs is not a privilege, but a fundamental human right for everyone.</p>
              </div>
              <div className="bg-[#d1f843] p-6 md:p-8 rounded-[24px] shadow-sm flex flex-col gap-3">
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#005840]">Transparency</h3>
                <p className="text-sm md:text-base text-[#005840]/80 font-medium">Every resource we receive goes entirely to the ground. Founding members cover all operational costs.</p>
              </div>
            </div>

            <div className="bg-[#005840] p-6 md:p-8 rounded-[24px] shadow-sm flex flex-col gap-3 mt-2">
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#d1f843]">The Leadership</h3>
              <p className="text-sm md:text-base text-white/90 font-medium">Guided by our Founder and President, Ashi Goswamy, and a dedicated board of experts from healthcare, education, and social work sectors.</p>
              <p className="text-sm md:text-base text-white/90 font-medium mt-2">Raahat has no paid staff. Every person here — including our leadership — volunteers their time.</p>
            </div>
          </div>
          
        </div>
      </section>
        
      {/* Team & Supporters Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-16 md:mt-24 w-full"
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <h2 className="text-2xl md:text-4xl font-bold text-[#005840] mb-8 md:mb-12 text-center tracking-tight">Our Core Team</h2>
          <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-6">
            {teamMembers.map((member, i) => (
              <div key={i} className="bg-white p-3 md:p-6 rounded-2xl md:rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 flex flex-col items-center text-center transition-all hover:-translate-y-0.5">
                
                {/* Profile Image - Scaled down for mobile */}
                <div className="w-12 h-12 md:w-28 md:h-28 rounded-full bg-[#005840]/5 text-[#005840] flex items-center justify-center font-bold text-lg md:text-2xl mb-2 md:mb-4 border border-[#005840]/10 mx-auto shrink-0 shadow-sm overflow-hidden group">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    <span>{member.monogram}</span>
                  )}
                </div>
                
                {/* Name & Designation - Tighter leading and smaller fonts */}
                <h3 className="text-[11px] md:text-lg font-bold text-[#005840] mb-0.5 md:mb-1 leading-tight">{member.name}</h3>
                <p className="text-[8px] md:text-xs tracking-wider font-bold text-[#005840]/60 uppercase mb-1.5 md:mb-2 leading-tight px-1">{member.title}</p>
                
                {/* Quote - Clamped to 4 lines on mobile to prevent extreme stretching */}
                <p className="text-[9px] md:text-sm text-[#005840]/80 leading-snug md:leading-relaxed font-medium line-clamp-4 md:line-clamp-none">
                  "{member.quote}"
                </p>
                
              </div>
            ))}
          </div>

          {/* Other Contributors Section */}
          <div className="mt-16 md:mt-24 mb-16 md:mb-24">
            <h2 className="text-2xl md:text-4xl font-bold text-[#005840] mb-8 md:mb-12 text-center tracking-tight">Other Contributors</h2>
            <div className="flex flex-wrap justify-center gap-2.5 md:gap-3 max-w-5xl mx-auto">
              {otherContributors.map((name, i) => (
                <div 
                  key={i} 
                  className="rounded-full bg-white border border-[#005840]/10 text-[#005840] text-xs font-medium px-4 py-2 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Timeline Section */}
      <section className="bg-[#0D3826] py-16 md:py-24 text-white overflow-hidden w-full mt-auto">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
            >
              A Decade of Action
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-12 h-1 bg-[#d1f843] mx-auto rounded-full"
            />
          </div>

          {/* Static Grid Timeline */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 w-full">
            {[
              { year: '2015', desc: 'Founded' },
              { year: '2017', desc: 'First disaster relief' },
              { year: '2020', desc: 'COVID response' },
              { year: '2022', desc: 'Expanded Community Programs' },
              { year: '2023', desc: 'Major Infrastructure Support' },
              { year: '2025', desc: 'Reaching 500+ Lives' },
            ].map((node, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="border-l-2 border-[#d1f843] pl-4 py-2 flex flex-col gap-1"
              >
                <div className="text-[#d1f843] font-bold text-xl md:text-2xl">
                  {node.year}
                </div>
                <div className="text-xs md:text-sm text-white/90 font-medium leading-snug">
                  {node.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Row */}
      <section className="flex flex-wrap justify-center gap-4 md:gap-12 py-6 border-t border-gray-200 bg-gray-50 w-full">
        <div className="px-4 py-2 bg-white rounded-full text-xs md:text-sm font-bold text-[#005840]/70 shadow-sm border border-gray-100">
          Registered NGO: 935/2015-16
        </div>
      </section>

    </div>
  );
}