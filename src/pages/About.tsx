import { motion } from 'motion/react';

export default function About() {
  const teamMembers = [
    { name: 'Ashi Goswamy', title: 'DIRECTOR & PRESIDENT', monogram: 'AG', image: 'https://res.cloudinary.com/dri0jvjdw/image/upload/v1782981066/Ashi_Goswamy_rxt9to.png', desc: 'Founded the organization in 2015 to serve the Prayagraj community.' },
    { name: 'Ritesh Singh Rajput', title: '[DESIGNATION]', monogram: 'RR', image: 'https://res.cloudinary.com/dri0jvjdw/image/upload/v1782973347/Ritesh_Singh_Rajput_c5bgwb.png', desc: 'Dedicated core member driving ground operations and logistics since inception.' },
    { name: 'Shiwani Goswamy', title: '[DESIGNATION]', monogram: 'SG', image: 'https://res.cloudinary.com/dri0jvjdw/image/upload/v1782973350/Shiwani_Goswamy_ciqgki.png', desc: 'Dedicated core member driving ground operations and logistics since inception.' },
    { name: 'Divya Goswamy', title: '[DESIGNATION]', monogram: 'DG', image: 'https://res.cloudinary.com/dri0jvjdw/image/upload/v1782973348/Divya_Goswamy_zdrdpc.png', desc: 'Dedicated core member driving ground operations and logistics since inception.' },
    { name: 'Bhawna Srivastava', title: '[DESIGNATION]', monogram: 'BS', image: 'https://res.cloudinary.com/dri0jvjdw/image/upload/v1782973347/Bhawna_Srivastava_v60dv6.png', desc: 'Dedicated core member driving ground operations and logistics since inception.' },
    { name: 'Amita Srivastava', title: '[DESIGNATION]', monogram: 'AS', image: 'https://res.cloudinary.com/dri0jvjdw/image/upload/v1782973348/Amita_Srivastava_pyy7fa.png', desc: 'Dedicated core member driving ground operations and logistics since inception.' },
    { name: 'Shalini Pradhan', title: '[DESIGNATION]', monogram: 'SP', image: 'https://res.cloudinary.com/dri0jvjdw/image/upload/v1782973350/Shalini_Pradhan_q49ufh.png', desc: 'Dedicated core member driving ground operations and logistics since inception.' },
    { name: 'Pritpal Kaur Tripathi', title: '[DESIGNATION]', monogram: 'PT', image: 'https://res.cloudinary.com/dri0jvjdw/image/upload/v1782973349/Pritpal_Kaur_Tripathi_trjgpj.png', desc: 'Dedicated core member driving ground operations and logistics since inception.' },
    { name: 'Ruchi Srivastava', title: '[DESIGNATION]', monogram: 'RS', image: 'https://res.cloudinary.com/dri0jvjdw/image/upload/v1782973348/Ruchi_Srivastava_qzhwje.png', desc: 'Dedicated core member driving ground operations and logistics since inception.' },
    { name: 'Lakshmi Nigam', title: '[DESIGNATION]', monogram: 'LN', image: 'https://res.cloudinary.com/dri0jvjdw/image/upload/v1782973350/Lakshmi_Nigam_gjhpgn.png', desc: 'Dedicated core member driving ground operations and logistics since inception.' }
  ];

  return (
    <div className="w-full min-h-screen bg-[#ecf0ef] font-sans selection:bg-[#d1f843]/30 pt-32 md:pt-40 flex flex-col">
      
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center pt-8 md:pt-16 pb-10 md:pb-16 px-5 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-[#005840] uppercase mb-4 md:mb-6">
            OUR STORY
          </h1>
          <p className="text-sm md:text-xl font-medium text-[#005840]/80 max-w-2xl mx-auto leading-relaxed">
            Driven by compassion, united by purpose.
          </p>
        </motion.div>
      </section>

      {/* Main Layout (Bento Grid) */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 pb-10 md:pb-16 lg:pb-24 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Image Container with Overlapping Badge (Spans 5 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-5 relative w-full h-[180px] md:h-[400px] lg:h-full lg:min-h-[600px]"
          >
            {/* Solid visual placeholder indicating candid photo upload */}
            <div className="absolute inset-0 w-full h-full bg-[#005840]/10 border-2 border-dashed border-[#005840]/30 rounded-[2rem] flex flex-col items-center justify-center p-6 text-center shadow-inner overflow-hidden max-h-[240px] md:max-h-[400px]">
              <span className="text-xs font-bold tracking-widest text-[#005840] uppercase mb-2">Field Activity Photo</span>
              <span className="text-[10px] font-medium text-gray-500 max-w-[200px] leading-snug">
                [Requires Upload: Real candid field activity photo - no stock]
              </span>
            </div>
            
            <div className="absolute -bottom-4 -right-2 md:-bottom-6 md:-right-6 bg-white p-4 md:p-8 rounded-3xl shadow-xl border border-white/50 text-center z-20">
              <div className="text-3xl md:text-5xl font-black text-[#005840] mb-1">2015</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#005840]">Year Established</div>
            </div>
          </motion.div>

          {/* Right Column: Information Bento (Spans 7 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7 flex flex-col w-full overflow-hidden"
          >
            {/* Bento Grid Wrapper */}
            <div className="flex flex-col gap-4">
              
              {/* New Narrative Block */}
              <div className="bg-transparent p-1">
                <p className="text-sm md:text-lg text-gray-800 leading-relaxed max-w-3xl font-medium">
                  Raahat Foundation was born in Prayagraj in 2015 from a simple belief — that dignity is not a privilege. What began as a small team distributing winter clothing has grown into 27 direct community programs, entirely volunteer-led, with zero overhead.
                </p>
              </div>

              {/* Card 1: The Mission */}
              <div className="bg-white rounded-[2rem] p-5 md:p-8 lg:p-10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-transform hover:-translate-y-1">
                <h2 className="text-lg md:text-2xl font-extrabold tracking-tight text-[#005840] mb-4 md:mb-6 uppercase">The Mission</h2>
                <p className="text-xs md:text-base text-gray-900 leading-relaxed mb-4 font-medium">
                  To eradicate systemic poverty and inequality through acute, direct intervention in education, healthcare, and basic nutrition.
                </p>
                <p className="text-xs md:text-base text-gray-600 leading-relaxed font-medium">
                  Raahat Foundation began with a simple belief: no one should be left behind. We are a collective of dreamers, doers, and defenders of the vulnerable, committed to building sustainable change.
                </p>
              </div>

              {/* Card 2 & 3: Vision & Transparency Grid */}
              <div className="grid grid-cols-2 gap-4">
                {/* Card 2: Our Vision */}
                <div className="bg-white rounded-[2rem] p-4 md:p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-transform hover:-translate-y-1 flex flex-col justify-center">
                  <h3 className="text-[10px] md:text-xs font-extrabold text-[#005840] uppercase tracking-widest mb-3 md:mb-4">Our Vision</h3>
                  <p className="text-xs md:text-sm text-gray-900 leading-relaxed font-medium">
                    A world where access to basic human needs is not a privilege, but a fundamental human right for everyone.
                  </p>
                </div>

                {/* Card 3: Zero-Deduction Policy (Accent Highlight) */}
                <div className="bg-[#d1f843] rounded-[2rem] p-4 md:p-8 shadow-md transition-transform hover:-translate-y-1 flex flex-col justify-center">
                  <h3 className="text-[10px] md:text-xs font-extrabold text-[#005840] uppercase tracking-widest mb-3 md:mb-4">TRANSPARENCY</h3>
                  <p className="text-xs md:text-sm text-[#005840] leading-relaxed font-medium">
                    Every resource we receive goes entirely to the ground. Founding members cover all operational costs.
                  </p>
                </div>
              </div>

              {/* Card 4: The Leadership */}
              <div className="bg-[#005840] rounded-[2rem] p-5 md:p-8 lg:p-10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] transition-transform hover:-translate-y-1">
                <h3 className="text-[10px] md:text-xs font-extrabold text-[#d1f843] uppercase tracking-widest mb-3 md:mb-4">The Leadership</h3>
                <p className="text-xs md:text-base text-white/90 leading-relaxed font-medium mb-4">
                  Guided by our Founder and President, Ashi Goswamy, and a dedicated board of experts from healthcare, education, and social work sectors.
                </p>
                <p className="text-xs md:text-base text-white/90 leading-relaxed font-medium">
                  Raahat has no paid staff. Every person here — including our leadership — volunteers their time.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Team & Supporters Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 md:mt-24"
        >
          <h2 className="text-2xl md:text-4xl font-extrabold text-[#005840] mb-6 md:mb-10 text-center tracking-tight">Our Core Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {teamMembers.map((member, i) => (
              <div key={i} className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-[#005840]/10 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#005840]/10">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-[#d1f843]/20 text-[#005840] flex items-center justify-center font-extrabold text-xl md:text-2xl mb-4 mx-auto border border-[#005840]/10 shadow-sm overflow-hidden shrink-0">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  ) : (
                    <span>{member.monogram}</span>
                  )}
                </div>
                <h4 className="whitespace-normal break-words tracking-tight text-center text-base md:text-lg font-bold text-[#005840] mb-1">{member.name}</h4>
                <p className="text-[10px] md:text-xs tracking-wider font-semibold text-[#005840]/60 uppercase mb-3">{member.title}</p>
                <p className="text-sm text-[#005840]/80 leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* NEW: Timeline Section */}
      <section className="bg-[#0D3826] py-10 md:py-24 text-white overflow-hidden w-full mt-auto">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4"
            >
              A Decade of Action
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-16 h-1.5 bg-[#d1f843] mx-auto rounded-full"
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

      {/* NEW: Certifications Row */}
      <section className="flex flex-wrap justify-center gap-4 md:gap-12 py-6 border-t border-gray-200 bg-gray-50 w-full">
        <div className="px-4 py-2 bg-white rounded-full text-xs md:text-sm font-bold text-gray-500 shadow-sm border border-gray-100">
          Registered NGO: 935/2015-16
        </div>
      </section>

    </div>
  );
}
