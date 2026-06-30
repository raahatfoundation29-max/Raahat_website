import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Users, ArrowRight, QrCode, Clock, Receipt, ArrowDown, Package, Megaphone, MessageCircle } from 'lucide-react';
import { events } from '../data/events';
import EventGraphic from '../components/EventGraphic';
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
      <section className="relative min-h-[90vh] w-full flex flex-col overflow-hidden bg-[#ecf0ef] pt-24 md:pt-32 pb-16 lg:pt-48 lg:pb-24">
        <div className="relative z-10 px-4 md:px-8 w-full max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-2 items-center gap-4 md:gap-8 flex-1">
          <div className="w-full text-left order-1 md:order-none">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl font-bold tracking-tight md:text-5xl lg:text-7xl xl:text-8xl md:font-extrabold leading-tight text-[#005840] mb-2 md:mb-8"
            >
              Light in the <br className="hidden md:block" />Shadows.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mt-1 mb-4 md:mb-10 text-[10px] leading-snug md:text-lg lg:text-2xl font-medium text-[#005840] max-w-xl"
            >
              Since 2015, we've run 27 direct programs across Prayagraj — entirely volunteer-led, entirely documented, and open to anyone who wants to help.
            </motion.p>
            <div className="flex flex-col mt-2 gap-1.5 md:flex-row md:gap-4">
              <Link to="/get-involved">
                <motion.button
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="group w-full md:w-auto inline-flex items-center justify-center gap-1.5 md:gap-3 px-3 py-1.5 md:px-10 md:py-5 bg-[#d1f843] hover:brightness-95 text-black shadow-sm md:shadow-lg text-[9px] md:text-base font-bold uppercase md:tracking-widest rounded-full transition-all hover:-translate-y-1 active:scale-95"
                >
                  <span>GET INVOLVED →</span>
                </motion.button>
              </Link>
              <Link to="/work" className="w-full md:w-auto flex justify-center items-center">
                <motion.button
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="group w-full inline-flex items-center justify-center gap-1.5 md:gap-3 px-3 py-1.5 md:px-10 md:py-5 bg-transparent hover:bg-[#005840]/5 text-[#005840] shadow-sm md:shadow-lg text-[9px] md:text-base font-bold uppercase md:tracking-widest rounded-full transition-all hover:-translate-y-1 active:scale-95 border-2 border-[#005840]"
                >
                  <span>OUR WORK →</span>
                </motion.button>
              </Link>
            </div>
          </div>

          <div className="w-full h-[280px] md:h-[500px] lg:h-[600px] rounded-2xl md:rounded-[2rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] relative order-2 md:order-none">
             <img 
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2940&auto=format&fit=crop" 
              alt="Children smiling" 
              className="w-full h-full object-cover scale-105 animate-[kenburns_20s_ease-out_forwards]"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#005840]/40 to-transparent mix-blend-multiply pointer-events-none" />
          </div>
        </div>

        {/* Scroll Cue */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-30 hidden md:flex flex-col items-center gap-1 pointer-events-none">
          <span className="text-[9px] font-bold tracking-widest text-[#005840]/40 uppercase">Scroll</span>
          <ArrowDown className="w-5 h-5 animate-bounce text-[#005840]/60" />
        </div>

        {/* Floating Stat Widgets */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-5 lg:px-8 mt-16 lg:-mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
            {[
              { label: 'Of Unbroken Service', value: '10+ Years' },
              { label: '100% VOLUNTEER-LED', value: '100%' },
              { label: 'Major Community Drives', value: '27+' },
              { label: 'Lives Directly Impacted', value: '500+' },
            ].map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
                className="bg-white rounded-3xl p-4 md:p-8 lg:p-12 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-white/50 flex flex-col items-center text-center hover:-translate-y-1 transition-transform"
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#005840] mb-2">
                  <CountUp value={stat.value} />
                </div>
                <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#005840]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Mission & Quote */}
      <section className="py-16 lg:py-24 px-5 lg:px-8 bg-[#0D3826] flex flex-col items-center relative">
        <div className="max-w-4xl mx-auto flex flex-col items-center relative">
          
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-5 py-2 bg-[#d1f843] text-[#005840] text-xs font-bold uppercase tracking-widest rounded-full mb-12"
          >
            FOUNDING PRINCIPLE
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl lg:text-3xl font-serif italic text-white leading-relaxed text-center mb-12 relative z-10 tracking-tight"
          >
            "True impact is not measured in grand gestures, but in the quiet restoration of <span className="font-extrabold text-[#d1f843] not-italic">human dignity</span>."
          </motion.h2>
          
          <motion.div
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.4 }}
             className="flex items-center gap-4 relative z-10 mt-4"
          >
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop" alt="Ashi Goswamy" className="w-16 h-16 rounded-full object-cover shadow-[0_10px_20px_-10px_rgba(0,0,0,0.1)]" />
            <div className="text-left">
              <div className="text-base font-extrabold text-white">Ashi Goswamy</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#d1f843] mt-1">FOUNDER & PRESIDENT</div>
            </div>
          </motion.div>
        </div>
      </section>

        {/* NEW Section: How We Work */}
        <section className="bg-[#0D3826] text-white py-16 px-5 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/5 border border-white/10 rounded-[2rem] p-8 flex flex-col items-start text-left hover:bg-white/10 transition-all duration-300 border-l-[3px] border-l-lime-500"
            >
              <p className="text-base font-semibold text-white/90 leading-relaxed">
                We organize local volunteer teams for ground-level action in Prayagraj.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 border border-white/10 rounded-[2rem] p-8 flex flex-col items-start text-left hover:bg-white/10 transition-all duration-300 border-l-[3px] border-l-lime-500"
            >
              <p className="text-base font-semibold text-white/90 leading-relaxed">
                Coordinating essential resources and manpower where they are needed most.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Direct Support Component */}
      <DirectSupport />

      {/* Section 3: Dynamic Initiatives (Bento Grid) */}
      <section className="py-16 lg:py-24 px-5 lg:px-8 bg-[#ecf0ef]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16 flex flex-col items-center">
            {/* Eyebrow Pill */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 bg-[#d1f843] text-[#005840] text-xs font-bold uppercase tracking-widest rounded-full mb-6"
            >
              27 PROGRAMS | 10 YEARS
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#005840] tracking-tight mb-6"
            >
              What We've Done
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-16 h-1.5 bg-[#d1f843] mx-auto rounded-full mb-8"
            />

            {/* Filter Pills */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-2 md:gap-3 max-w-2xl mt-4"
            >
              {['All', 'Medical', 'Education', 'Food', 'Disaster', 'Vocational'].map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    activeCategory === category
                      ? 'bg-[#005840] text-[#d1f843] shadow-md scale-105'
                      : 'bg-white text-[#005840] hover:bg-white/80 hover:scale-102 border border-[#005840]/5 shadow-sm'
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
              className="text-center py-16 text-[#005840]/60 font-medium text-lg"
            >
              No initiatives found in this category.
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 md:mb-20">
              {filteredEvents.map((event, i) => (
                <Link 
                  to={`/work/${event.id}`} 
                  key={event.id} 
                  className="block group"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    className="bg-white rounded-[2.5rem] overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1)] transition-all duration-300 h-full flex flex-col"
                  >
                    <div className="relative w-full h-48 md:h-64 overflow-hidden shrink-0">
                      <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="p-6 md:p-8 lg:p-12 flex flex-col flex-1 gap-3">
                      <div className="bg-[#d1f843] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-[#005840] shadow-sm w-fit">
                        {event.category}
                      </div>
                      <div className="text-xs font-bold uppercase tracking-wider text-[#005840] mb-2">{event.date}</div>
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-[#005840] leading-tight">
                        {event.title}
                      </h3>
                      <p className="text-sm md:text-base text-[#005840] leading-relaxed font-medium mt-auto line-clamp-3">
                        {event.shortDesc}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          )}

          <div className="text-center">
            <Link to="/work">
              <motion.button 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative inline-flex items-center justify-center gap-3 bg-transparent hover:bg-[#005840]/5 text-[#005840] border-2 border-[#005840] shadow-lg px-10 py-5 font-bold tracking-wide rounded-full transition-all hover:-translate-y-1 active:scale-95 text-sm uppercase"
              >
                VIEW ALL INITIATIVES
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section: Three Ways to Be Part of This */}
      <section className="py-16 md:py-24 bg-[#ecf0ef] px-5 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section: Our Leadership */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#005840] mb-6">Our Leadership</h2>
            <p className="text-lg md:text-xl text-[#005840]/80 mb-12 max-w-2xl">Raahat has no paid staff. Every person here — including our Founder — volunteers their time.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Ashi Goswamy', title: 'Founder & President', years: '10' },
                { name: 'Dr. R. Sharma', title: 'Head of Healthcare', years: '8' },
                { name: 'Anjali Verma', title: 'Education Director', years: '7' },
                { name: 'K. Singh', title: 'Operations Lead', years: '6' },
              ].map((member, i) => (
                <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-[#005840]/10">
                  <div className="w-20 h-20 bg-[#005840]/10 rounded-full mb-4 flex items-center justify-center font-bold text-[#005840]">Photo</div>
                  <h3 className="font-bold text-[#005840]">{member.name}</h3>
                  <p className="text-xs font-bold uppercase text-[#005840]/60 mb-2">{member.title}</p>
                  <p className="text-xs text-[#005840]/50 mb-3">{member.years} years with Raahat</p>
                  <p className="text-sm text-[#005840]/80 leading-relaxed">Dedicated volunteer leading our core mission since the very beginning of our journey.</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Our Field Team */}
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#005840] mb-10">Our Field Team</h2>
            <div className="flex flex-wrap gap-3">
              {['Rahul K.', 'Sneha', 'Vikram', 'Priya', 'Amit', 'Sunita', 'Rajesh', 'Deepa', 'Suresh', 'Anita', 'Manish', 'Geeta', 'Vijay', 'Meera', 'Anil'].map((name, i) => (
                <div key={i} className="px-4 py-2 bg-white rounded-full border border-[#005840]/20 text-[#005840] font-bold text-sm shadow-sm">{name}</div>
              ))}
              <Link to="/get-involved" className="px-4 py-2 bg-[#005840] text-[#d1f843] rounded-full font-bold text-sm shadow-sm hover:brightness-110 uppercase tracking-widest">+ JOIN THIS LIST</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Three Ways to Be Part of This */}
      <section className="bg-[#005840] py-20 px-5 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-16">Three Ways to Be Part of This</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Volunteer */}
            <div className="bg-white/5 border border-white/10 p-4 rounded-3xl flex flex-col items-center text-center">
              <Users className="w-12 h-12 text-[#d1f843] mb-6" />
              <p className="font-medium mb-8 flex-1">Join our ground team. Distribute, assist, coordinate. Even 2 hours a month matters.</p>
              <Link to="/get-involved" className="px-6 py-3 bg-[#d1f843] text-[#005840] font-bold rounded-full uppercase text-xs tracking-widest hover:brightness-95 min-h-[44px] flex items-center">GET INVOLVED →</Link>
            </div>
            {/* Goods */}
            <div className="bg-white/5 border border-white/10 p-4 rounded-3xl flex flex-col items-center text-center">
              <Package className="w-12 h-12 text-[#d1f843] mb-6" />
              <p className="font-medium mb-8 flex-1">Clothes, food, stationery, medicines. Drop them off at our Prayagraj centre.</p>
              <Link to="/work" className="px-6 py-3 bg-transparent border border-white text-white font-bold rounded-full uppercase text-xs tracking-widest hover:bg-white/10 min-h-[44px] flex items-center">SEE WHAT WE NEED →</Link>
            </div>
            {/* Share */}
            <div className="bg-white/5 border border-white/10 p-4 rounded-3xl flex flex-col items-center text-center">
              <Megaphone className="w-12 h-12 text-[#d1f843] mb-6" />
              <p className="font-medium mb-8 flex-1">Share our work. Refer communities in need. Build our reach.</p>
              <button 
                onClick={() => navigator.clipboard.writeText(window.location.href)}
                className="px-6 py-3 bg-transparent border border-white text-white font-bold rounded-full uppercase text-xs tracking-widest hover:bg-white/10 min-h-[44px] flex items-center"
              >
                SHARE RAAHAT →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Community Strip */}
      <section className="bg-[#004a35] py-8 px-5 lg:px-8 text-white text-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6">
          <p className="font-bold text-lg">Stay connected with our work →</p>
          <a href="#" className="flex w-full md:w-auto items-center justify-center gap-3 bg-[#25D366] text-white px-6 py-3 rounded-full font-bold uppercase text-xs tracking-widest shadow-lg hover:brightness-110">
            <MessageCircle className="w-5 h-5 shrink-0" />
            Join our community updates group
          </a>
        </div>
      </section>

      {/* Social Strip */}
      <section className="w-full py-8 md:py-12 bg-white flex justify-center items-center border-t border-gray-100">
        <a 
          href="https://www.instagram.com/raahat_foundation?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group text-sm md:text-base font-bold text-[#005840] hover:text-[#005840]/80 transition-colors flex items-center gap-2 tracking-wide uppercase"
        >
          <span>Follow our ground work</span>
          <span className="transition-transform group-hover:translate-x-1">→</span>
          <span className="text-[#005840] font-extrabold group-hover:underline">@raahatfoundation</span>
        </a>
      </section>
    </div>
  );
}
