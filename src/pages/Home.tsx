import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Users, ArrowRight, ArrowDown, Package, Megaphone, MessageCircle } from 'lucide-react';
import { events } from '../data/events';
import DirectSupport from '../components/DirectSupport';

interface CountUpProps {
  value: string;
}

function CountUp({ value }: CountUpProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const numericValue = parseInt(value.replace(/[^0-9]/g, ''), 10) || 0;
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const duration = 1500;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeProgress = progress * (2 - progress);
            
            const currentCount = Math.floor(easeProgress * numericValue);
            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(numericValue);
              setHasAnimated(true);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [numericValue, hasAnimated]);

  return (
    <span ref={elementRef}>
      {count}
      {suffix}
    </span>
  );
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredEvents = [...events].reverse().filter(event => {
    if (activeCategory === 'All') return true;
    const cat = event.category.toLowerCase();
    const title = event.title.toLowerCase();
    const desc = event.shortDesc.toLowerCase();
    
    if (activeCategory === 'Medical') {
      return cat.includes('medical') || cat.includes('surgical') || cat.includes('health') || title.includes('surgical') || title.includes('medical') || title.includes('hospital') || desc.includes('medical') || desc.includes('surgical');
    }
    if (activeCategory === 'Education') {
      return cat.includes('education') || cat.includes('youth') || cat.includes('school') || title.includes('school') || title.includes('education') || desc.includes('school') || desc.includes('education') || desc.includes('learning');
    }
    if (activeCategory === 'Food') {
      return cat.includes('meals') || cat.includes('food') || cat.includes('dinner') || cat.includes('lunch') || title.includes('meals') || title.includes('food') || title.includes('dinner') || title.includes('lunch') || desc.includes('meal') || desc.includes('food') || desc.includes('ration');
    }
    if (activeCategory === 'Disaster') {
      return cat.includes('disaster') || cat.includes('flood') || title.includes('flood') || title.includes('disaster') || desc.includes('flood') || desc.includes('covid') || cat.includes('covid');
    }
    if (activeCategory === 'Vocational') {
      return cat.includes('vocational') || cat.includes('training') || title.includes('vocational') || desc.includes('vocational') || desc.includes('training');
    }
    return false;
  }).slice(0, 3);

  return (
    <div className="w-full flex flex-col font-sans bg-[#ecf0ef] selection:bg-[#d1f843]/30">
      {/* Section 1: Hero */}
      <section className="relative w-full bg-[#ecf0ef] pt-12 md:pt-24 pb-28 md:pb-40">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-8 flex flex-col md:grid md:grid-cols-[45%_55%] items-center gap-10 md:gap-4 flex-1">
          
          {/* Text Column (Mobile: Top, Desktop: Left) */}
          <div className="w-full text-left order-1 md:order-none">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl md:text-8xl font-bold leading-[0.85] tracking-[-0.04em] text-[#005840] mb-6"
            >
              <span className="block">Spreading</span>
              <span className="block ml-[0.5em] md:ml-[1.0em]">Smiles</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-base md:text-lg text-[#005840]/80 leading-relaxed max-w-lg mb-8 md:mb-10 font-medium"
            >
              Since 2015, we've run 27 direct programs across Prayagraj — entirely volunteer-led, entirely documented, and open to anyone who wants to help.
            </motion.p>
            <div className="flex flex-row flex-wrap items-center gap-3 md:gap-4">
              <Link to="/get-involved">
                <motion.button
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="group inline-flex items-center justify-center gap-2 bg-[#d1f843] text-[#005840] px-6 md:px-8 py-3.5 md:py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all uppercase tracking-widest text-xs cursor-pointer"
                >
                  <span>GET INVOLVED →</span>
                </motion.button>
              </Link>
              <Link to="/work">
                <motion.button
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="group inline-flex items-center justify-center gap-2 border-2 border-[#005840]/20 hover:border-[#005840] text-[#005840] px-6 md:px-8 py-3.5 md:py-4 rounded-full font-bold transition-all uppercase tracking-widest text-xs cursor-pointer"
                >
                  <span>OUR WORK →</span>
                </motion.button>
              </Link>
            </div>
          </div>

          {/* Image Column (Mobile: Bottom, Desktop: Right) */}
          <div className="w-full max-w-[400px] md:max-w-[550px] lg:max-w-[600px] aspect-[4/5] md:aspect-[3/4] mx-auto md:ml-auto rounded-[2rem] md:rounded-[3rem] shadow-2xl border-4 md:border-8 border-white overflow-hidden relative order-2 md:order-none">
             <img 
              src="https://res.cloudinary.com/dri0jvjdw/image/upload/v1790073845/web_home_heroimg_rxjqud.png" 
              alt="Hero graphic" 
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* Floating Stat Widgets Overhaul */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-5 md:px-6 py-8 md:py-10 -mt-20 md:-mt-32 bg-white/95 backdrop-blur-xl border border-white rounded-[2rem] md:rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
        <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200 w-full">
          {[
            { label: 'Of Unbroken Service', value: '10+ Years' },
            { label: '100% Volunteer-Led', value: '100%' },
            { label: 'Major Community Drives', value: '27+' },
            { label: 'Lives Directly Impacted', value: '500+' },
          ].map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
              className="flex flex-col items-center text-center py-6 md:py-0 px-4"
            >
              <div className="text-3xl md:text-4xl font-bold text-[#005840] mb-2">
                <CountUp value={stat.value} />
              </div>
              <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#005840]/50">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Section 2: Mission & Quote */}
      <section className="w-full bg-[#f4f7f6] py-20 md:py-32 relative border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 flex flex-col items-start relative z-10">
          
          {/* Section Label */}
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#005840] text-sm font-bold tracking-widest uppercase mb-12"
          >
            Founding Principle
          </motion.span>
          
          {/* Giant Quote Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-[#d1f843] text-7xl md:text-9xl font-serif leading-none mb-6 select-none"
            aria-hidden="true"
          >
            “
          </motion.div>

          {/* Quote Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full mb-16"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-sans font-light text-[#005840] leading-snug md:leading-tight text-left">
              True impact is not measured in grand gestures, but in the quiet restoration of <span className="font-semibold text-[#005840]">human dignity.</span>
            </h2>
          </motion.div>
          
          {/* Profile & Attribution Container */}
          <motion.div
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.4 }}
             className="w-full flex flex-row items-center justify-between gap-4 md:gap-8 pb-8 md:pb-10 border-b border-[#005840]/20"
          >
            {/* Attribution Text */}
            <div className="flex flex-col text-left">
              <span className="text-lg md:text-2xl font-bold text-[#005840] mb-0.5 md:mb-1">Ashi Goswamy</span>
              <span className="text-xs md:text-base text-[#005840]/80 font-bold tracking-wide">Founder & President, Raahat</span>
            </div>

            {/* Profile Image offset to right (No Glow) */}
            <div className="shrink-0">
               <img 
                 src="https://res.cloudinary.com/dri0jvjdw/image/upload/v1782981066/Ashi_Goswamy_rxt9to.png" 
                 alt="Ashi Goswamy" 
                 className="w-16 h-16 md:w-28 md:h-28 rounded-full object-cover shadow-sm border-2 border-white" 
               />
            </div>
          </motion.div>

          {/* Optional Footer Text below rule line */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="w-full mt-4 md:mt-6 text-right"
          >
             <span className="text-[#005840]/60 text-[10px] md:text-sm italic tracking-wide">from community action to lasting change</span>
          </motion.div>

        </div>
      </section>

      {/* NEW Section: How We Work */}
      <section className="w-full bg-[#0D3826] text-white py-16 md:py-24 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/5 border border-white/10 rounded-[24px] p-6 flex flex-col items-start text-left hover:bg-white/10 transition-all duration-300 border-l-4 border-l-[#d1f843]"
            >
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 tracking-tight">Ground Action</h3>
              <p className="text-sm md:text-base leading-relaxed text-white/80 font-medium">
                We organize local volunteer teams for direct ground-level action in Prayagraj.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 border border-white/10 rounded-[24px] p-6 flex flex-col items-start text-left hover:bg-white/10 transition-all duration-300 border-l-4 border-l-[#d1f843]"
            >
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 tracking-tight">Resource Coordination</h3>
              <p className="text-sm md:text-base leading-relaxed text-white/80 font-medium">
                Coordinating essential resources and manpower where they are needed most.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Direct Support Component */}
      <DirectSupport />

      {/* Section 3: Dynamic Initiatives (Bento Grid) */}
      <section className="w-full py-16 md:py-24 bg-[#ecf0ef]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-12 md:mb-16 flex flex-col items-center">
            {/* Eyebrow Pill */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 bg-[#d1f843] text-[#005840] text-xs font-bold uppercase tracking-widest rounded-full mb-4"
            >
              27 PROGRAMS | 10 YEARS
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-[#005840] tracking-tight mb-4"
            >
              What We've Done
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-12 h-1 bg-[#d1f843] mx-auto rounded-full mb-8"
            />

            {/* Filter Pills */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-2 md:gap-3 max-w-2xl"
            >
              {['All', 'Medical', 'Education', 'Food', 'Disaster', 'Vocational'].map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-1.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    activeCategory === category
                      ? 'bg-[#005840] text-[#d1f843] shadow-sm scale-105'
                      : 'bg-white text-[#005840] hover:bg-white/80 border border-gray-50 shadow-sm'
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>

          {filteredEvents.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 text-[#005840]/60 font-medium text-base"
            >
              No initiatives found in this category.
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredEvents.map((event, i) => (
                <Link 
                  to={`/work/${event.id}`} 
                  key={event.id} 
                  className="block group h-full"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    className="bg-white rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 hover:shadow-md transition-all duration-300 h-full flex flex-col hover:-translate-y-0.5"
                  >
                    <div className="relative w-full h-48 overflow-hidden shrink-0 bg-gray-50">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-500" 
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1 gap-2">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-[#005840]/60">
                        {event.category}
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-[#005840] tracking-tight leading-snug">
                        {event.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-[#005840]/80 mt-auto line-clamp-3 font-medium">
                        {event.shortDesc}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          )}

          <div className="text-center mt-12 md:mt-16">
            <Link to="/work">
              <motion.button 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group inline-flex items-center justify-center gap-2 bg-transparent hover:bg-[#005840]/5 text-[#005840] border-2 border-[#005840] px-6 py-2.5 font-bold tracking-wide rounded-full transition-all hover:-translate-y-0.5 active:scale-95 text-xs md:text-sm uppercase cursor-pointer"
              >
                <span>VIEW ALL INITIATIVES</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4: Our Leadership */}
      <section className="w-full py-16 md:py-24 bg-[#ecf0ef]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#005840] mb-4">Our Leadership</h2>
            <p className="text-sm md:text-base leading-relaxed text-[#005840]/80 mb-10 max-w-2xl font-medium">
              Raahat has no paid staff. Every person here — including our Founder — volunteers their time.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                { name: 'Ashi Goswamy', title: 'DIRECTOR & PRESIDENT', monogram: 'AG', image: 'https://res.cloudinary.com/dri0jvjdw/image/upload/v1782981066/Ashi_Goswamy_rxt9to.png', years: '10', desc: 'True impact is not measured in grand gestures, but in the quiet restoration of human dignity.' },
                { name: 'Ritesh Singh Rajput', title: 'CO-FOUNDER & OPERATIONS', monogram: 'RR', image: 'https://res.cloudinary.com/dri0jvjdw/image/upload/v1782973347/Ritesh_Singh_Rajput_c5bgwb.png', years: '10', desc: 'Logistics is just the mechanism; our real work is delivering hope and dependable support to those who need it most.' },
                { name: 'Shiwani Goswamy', title: 'PROGRAM DIRECTOR', monogram: 'SG', image: 'https://res.cloudinary.com/dri0jvjdw/image/upload/v1782973350/Shiwani_Goswamy_ciqgki.png', years: '10', desc: 'When we listen to a community with open hearts, the path forward becomes clear and shared.' },
                { name: 'Shubhi Goswami', title: 'COMMUNITY OUTREACH', monogram: 'SG', image: 'https://res.cloudinary.com/dri0jvjdw/image/upload/v1789902786/Shubhi_Goswami_lghbgy.png', years: '10', desc: 'Empowerment begins when every individual is seen, valued, and given the tools to thrive.' }
              ].map((member, i) => (
                <div key={i} className="bg-white p-6 rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 flex flex-col items-center text-center transition-all hover:-translate-y-0.5">
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-[#005840]/5 text-[#005840] flex items-center justify-center font-bold text-xl md:text-2xl mb-4 border border-[#005840]/10 mx-auto shrink-0 shadow-sm overflow-hidden group">
                    {member.image ? (
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    ) : (
                      <span>{member.monogram}</span>
                    )}
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-[#005840] mb-1">{member.name}</h3>
                  <p className="text-[10px] md:text-xs tracking-wider font-bold text-[#005840]/60 uppercase mb-2">{member.title}</p>
                  <p className="text-xs text-[#005840]/50 mb-3 font-medium">{member.years} years with Raahat</p>
                  <p className="text-xs md:text-sm text-[#005840]/80 leading-relaxed font-medium">{member.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Three Ways to Be Part of This */}
      <section className="w-full bg-[#005840] py-16 md:py-24 text-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-12 md:mb-16">Three Ways to Be Part of This</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Volunteer */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-[24px] flex flex-col items-center text-center">
              <Users className="w-8 h-8 text-[#d1f843] mb-3" />
              <p className="text-sm md:text-base leading-relaxed text-white/90 mb-6 flex-1 font-medium">Join our ground team. Distribute, assist, coordinate. Even 2 hours a month matters.</p>
              <Link to="/get-involved" className="px-5 py-2.5 bg-[#d1f843] text-[#005840] font-bold rounded-full uppercase text-xs tracking-widest hover:brightness-95 transition-all shadow-sm">JOIN →</Link>
            </div>
            {/* Goods */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-[24px] flex flex-col items-center text-center">
              <Package className="w-8 h-8 text-[#d1f843] mb-3" />
              <p className="text-sm md:text-base leading-relaxed text-white/90 mb-6 flex-1 font-medium">Clothes, food, stationery. Drop them at our centre.</p>
              <Link to="/work" className="px-5 py-2.5 bg-transparent border border-white text-white font-bold rounded-full uppercase text-xs tracking-widest hover:bg-white/10 transition-all">SEE NEEDS →</Link>
            </div>
            {/* Share */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-[24px] flex flex-col items-center text-center">
              <Megaphone className="w-8 h-8 text-[#d1f843] mb-3" />
              <p className="text-sm md:text-base leading-relaxed text-white/90 mb-6 flex-1 font-medium">Share our work. Refer communities in need.</p>
              <button 
                onClick={() => navigator.clipboard.writeText(window.location.href)}
                className="px-5 py-2.5 bg-transparent border border-white text-white font-bold rounded-full uppercase text-xs tracking-widest hover:bg-white/10 transition-all cursor-pointer"
              >
                SHARE RAAHAT →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Community Strip */}
      <section className="w-full bg-[#004a35] py-10 text-white text-center">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-6">
          <p className="font-bold text-base md:text-lg">Stay connected with our work →</p>
          <a href="#" className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-6 py-3 rounded-full font-bold uppercase text-xs tracking-widest shadow-md hover:brightness-110 transition-all">
            <MessageCircle className="w-4 h-4 shrink-0" />
            Join our community updates group
          </a>
        </div>
      </section>

      {/* Social Strip */}
      <section className="w-full py-10 bg-white flex justify-center items-center border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 text-center">
            <a 
              href="https://www.instagram.com/raahat_foundation?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group text-sm md:text-base font-bold text-[#005840] hover:text-[#005840]/80 transition-colors inline-flex items-center gap-2 tracking-wide"
            >
              <span>Follow our ground work</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
              <span className="text-[#005840] font-bold group-hover:underline">@raahat_foundation</span>
            </a>
        </div>
      </section>
    </div>
  );
}
