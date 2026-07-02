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
      <section className="relative w-full bg-[#ecf0ef] pt-28 md:pt-40 pb-8 md:pb-16 lg:pt-56 lg:pb-24">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:grid md:grid-cols-2 items-center gap-4 md:gap-8 flex-1">
          <div className="w-full text-left order-1 md:order-none">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#005840] mb-2 md:mb-8"
            >
              Light in the <br className="hidden md:block" />Shadows.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mt-1 mb-4 md:mb-10 text-sm md:text-base leading-relaxed font-medium text-[#005840] max-w-xl"
            >
              Since 2015, we've run 27 direct programs across Prayagraj — entirely volunteer-led, entirely documented, and open to anyone who wants to help.
            </motion.p>
            <div className="flex flex-row flex-wrap items-center gap-3 md:gap-4 mt-6">
              <Link to="/get-involved">
                <motion.button
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="group inline-flex items-center justify-center gap-3 px-6 py-2.5 md:px-8 md:py-3.5 bg-[#d1f843] hover:brightness-95 text-black shadow-sm md:shadow-lg text-xs md:text-sm font-extrabold uppercase tracking-widest rounded-full transition-all hover:-translate-y-1 active:scale-95"
                >
                  <span>GET INVOLVED →</span>
                </motion.button>
              </Link>
              <Link to="/work">
                <motion.button
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="group inline-flex items-center justify-center gap-3 px-6 py-2.5 md:px-8 md:py-3.5 bg-transparent hover:bg-[#005840]/5 text-[#005840] shadow-sm md:shadow-lg text-xs md:text-sm font-extrabold uppercase tracking-widest rounded-full transition-all hover:-translate-y-1 active:scale-95 border-2 border-[#005840]"
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
              className="w-full h-full object-cover rounded-2xl md:rounded-[2rem] scale-105 animate-[kenburns_20s_ease-out_forwards]"
            />
          </div>
        </div>

        {/* Scroll Cue */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-30 hidden md:flex flex-col items-center gap-1 pointer-events-none">
          <span className="text-[9px] font-bold tracking-widest text-[#005840]/40 uppercase">Scroll</span>
          <ArrowDown className="w-5 h-5 animate-bounce text-[#005840]/60" />
        </div>

        {/* Floating Stat Widgets */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-5 lg:px-8 mt-16 lg:-mt-20">
          <div className="grid grid-cols-2 gap-4 w-full">
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
                className="bg-white rounded-3xl p-4 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-white/50 flex flex-col items-center text-center hover:-translate-y-1 transition-transform"
              >
                <div className="text-2xl md:text-4xl font-extrabold tracking-tight text-[#005840] mb-1">
                  <CountUp value={stat.value} />
                </div>
                <div className="text-[9px] md:text-xs font-bold uppercase tracking-widest text-[#005840]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Mission & Quote */}
      <section className="w-full bg-[#0D3826] py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-5 lg:px-8 flex flex-col items-center relative">
          
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
            className="flex flex-col items-center"
          >
            <span className="text-5xl text-[#d1f843]/20 mb-6">"</span>
            <p className="max-w-3xl mx-auto text-xl md:text-2xl lg:text-3xl font-serif text-white/90 leading-relaxed md:leading-loose text-center mb-8">
              "True impact is not measured in grand gestures, but in the quiet restoration of <span className="text-[#d1f843] font-semibold italic">human dignity</span>."
            </p>
          </motion.h2>
          
          <motion.div
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.4 }}
             className="flex items-center gap-4 relative z-10 mt-4"
          >
            <img src="https://res.cloudinary.com/dri0jvjdw/image/upload/v1782981066/Ashi_Goswamy_rxt9to.png" alt="Ashi Goswamy" className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border border-white/20 shadow-sm" />
            <div className="text-left">
              <div className="text-sm md:text-base font-bold text-white">Ashi Goswamy</div>
              <div className="text-[10px] md:text-xs text-[#d1f843] font-bold tracking-widest uppercase">FOUNDER & PRESIDENT</div>
            </div>
          </motion.div>
        </div>
      </section>

        {/* NEW Section: How We Work */}
        <section className="w-full bg-[#0D3826] text-white py-12">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col items-start text-left hover:bg-white/10 transition-all duration-300 border-l-[3px] border-l-lime-500"
            >
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">Ground Action</h3>
              <p className="text-sm md:text-base leading-relaxed text-white/90">
                We organize local volunteer teams for ground-level action in Prayagraj.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col items-start text-left hover:bg-white/10 transition-all duration-300 border-l-[3px] border-l-lime-500"
            >
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">Resource Coordination</h3>
              <p className="text-sm md:text-base leading-relaxed text-white/90">
                Coordinating essential resources and manpower where they are needed most.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Direct Support Component */}
      <DirectSupport />

      {/* Section 3: Dynamic Initiatives (Bento Grid) */}
      <section className="w-full py-16 lg:py-24 bg-[#ecf0ef]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
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
              className="text-3xl md:text-4xl font-bold text-[#005840] tracking-tight mb-6"
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
                  className={`px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
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
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {filteredEvents.map((event, i) => (
                <Link 
                  to={`/work/${event.id}`} 
                  key={event.id} 
                  className={`block group ${i === 2 ? 'col-span-2 md:col-span-1' : ''}`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col"
                  >
                    <div className="relative w-full h-48 overflow-hidden shrink-0 bg-gray-50">
                      <img src={event.image} alt={event.title} className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="p-4 flex flex-col flex-1 gap-1">
                      <div className="text-[9px] font-bold uppercase tracking-widest text-[#005840]">{event.category}</div>
                  <h3 className="text-lg md:text-xl font-bold text-[#005840] mb-3">
                    {event.title}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed text-[#005840] mt-auto line-clamp-3">
                    {event.shortDesc}
                  </p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          )}

          <div className="text-center mt-12 md:mt-16 mb-6">
            <Link to="/work">
              <motion.button 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative inline-flex items-center justify-center gap-3 bg-transparent hover:bg-[#005840]/5 text-[#005840] border-2 border-[#005840] shadow-lg px-6 py-2.5 font-semibold tracking-wide rounded-full transition-all hover:-translate-y-1 active:scale-95 text-sm uppercase"
              >
                VIEW ALL INITIATIVES
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section: Three Ways to Be Part of This */}
      <section className="w-full py-16 md:py-24 bg-[#ecf0ef]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          {/* Section: Our Leadership */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#005840] mb-6">Our Leadership</h2>
            <p className="text-sm md:text-base leading-relaxed text-[#005840]/80 mb-12 max-w-2xl">Raahat has no paid staff. Every person here — including our Founder — volunteers their time.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Ashi Goswamy', title: 'Director & President', monogram: 'AG', image: 'https://res.cloudinary.com/dri0jvjdw/image/upload/v1782981066/Ashi_Goswamy_rxt9to.png', years: '10' },
                { name: 'Ritesh Singh Rajput', title: '[DESIGNATION]', monogram: 'RR', image: 'https://res.cloudinary.com/dri0jvjdw/image/upload/v1782973347/Ritesh_Singh_Rajput_c5bgwb.png', years: '10' },
                { name: 'Shiwani Goswamy', title: '[DESIGNATION]', monogram: 'SG', image: 'https://res.cloudinary.com/dri0jvjdw/image/upload/v1782973350/Shiwani_Goswamy_ciqgki.png', years: '10' },
                { name: 'Divya Goswamy', title: '[DESIGNATION]', monogram: 'DG', image: 'https://res.cloudinary.com/dri0jvjdw/image/upload/v1782973348/Divya_Goswamy_zdrdpc.png', years: '10' }
              ].map((member, i) => (
                <div key={i} className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-[#005840]/10 flex flex-col items-center text-center">
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-[#005840]/10 text-[#005840] flex items-center justify-center font-extrabold text-xl md:text-2xl mb-6 border border-[#005840]/10 mx-auto shrink-0 shadow-sm overflow-hidden group">
                    {member.image ? (
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    ) : (
                      <span>{member.monogram}</span>
                    )}
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-[#005840] mb-1">{member.name}</h3>
                  <p className="text-[10px] md:text-xs tracking-wider font-semibold text-[#005840]/60 uppercase mb-3">{member.title}</p>
                  <p className="text-xs text-[#005840]/50 mb-3">{member.years} years with Raahat</p>
                  <p className="text-sm text-[#005840]/80 leading-relaxed">Dedicated founding member, driving our core mission since the very beginning.</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Our Field Team */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#005840] mb-6">Our Field Team</h2>
            <div className="flex flex-wrap gap-3">
              {['Rahul K.', 'Sneha', 'Vikram', 'Priya', 'Amit', 'Sunita', 'Rajesh', 'Deepa', 'Suresh', 'Anita', 'Manish', 'Geeta', 'Vijay', 'Meera', 'Anil'].map((name, i) => (
                <div key={i} className="px-4 py-2 bg-white rounded-full border border-[#005840]/20 text-[#005840] font-bold text-xs shadow-sm">{name}</div>
              ))}
              <Link to="/get-involved" className="px-3 py-1.5 bg-[#005840] text-[#d1f843] rounded-full font-bold text-[10px] shadow-sm hover:brightness-110 uppercase tracking-widest">+ JOIN THIS LIST</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Three Ways to Be Part of This */}
      <section className="w-full bg-[#005840] py-20 text-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-16">Three Ways to Be Part of This</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
            {/* Volunteer */}
            <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex flex-col items-center text-center">
              <Users className="w-8 h-8 text-[#d1f843] mb-3" />
              <p className="text-sm md:text-base leading-relaxed text-white/90 mb-8 flex-1">Join our ground team. Distribute, assist, coordinate. Even 2 hours a month matters.</p>
              <Link to="/get-involved" className="px-3 py-1.5 bg-[#d1f843] text-[#005840] font-bold rounded-full uppercase text-[9px] md:text-xs tracking-widest hover:brightness-95 min-h-[44px] flex items-center">JOIN →</Link>
            </div>
            {/* Goods */}
            <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex flex-col items-center text-center">
              <Package className="w-8 h-8 text-[#d1f843] mb-3" />
              <p className="text-sm md:text-base leading-relaxed text-white/90 mb-8 flex-1">Clothes, food, stationery. Drop them at our centre.</p>
              <Link to="/work" className="px-3 py-1.5 bg-transparent border border-white text-white font-bold rounded-full uppercase text-[9px] md:text-xs tracking-widest hover:bg-white/10 min-h-[44px] flex items-center">SEE NEEDS →</Link>
            </div>
            {/* Share */}
            <div className="col-span-2 md:col-span-1 bg-white/5 border border-white/10 p-4 rounded-2xl flex flex-col items-center text-center">
              <Megaphone className="w-8 h-8 text-[#d1f843] mb-3" />
              <p className="text-sm md:text-base leading-relaxed text-white/90 mb-8">Share our work. Refer communities in need.</p>
              <button 
                onClick={() => navigator.clipboard.writeText(window.location.href)}
                className="px-6 py-2 bg-transparent border border-white text-white font-bold rounded-full uppercase text-[9px] md:text-xs tracking-widest hover:bg-white/10 min-h-[44px] flex items-center"
              >
                SHARE RAAHAT →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Community Strip */}
      <section className="w-full bg-[#004a35] py-8 text-white text-center">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-6">
          <p className="font-bold text-lg">Stay connected with our work →</p>
          <a href="#" className="flex w-full md:w-auto items-center justify-center gap-3 bg-[#25D366] text-white px-6 py-3 rounded-full font-bold uppercase text-xs tracking-widest shadow-lg hover:brightness-110">
            <MessageCircle className="w-5 h-5 shrink-0" />
            Join our community updates group
          </a>
        </div>
      </section>

      {/* Social Strip */}
      <section className="w-full py-8 md:py-12 bg-white flex justify-center items-center border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
            <a 
              href="https://www.instagram.com/raahat_foundation?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group text-sm md:text-base font-bold text-[#005840] hover:text-[#005840]/80 transition-colors flex items-center gap-2 tracking-wide"
            >
              <span>Follow our ground work</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
              <span className="text-[#005840] font-extrabold group-hover:underline">@raahat_foundation</span>
            </a>
        </div>
      </section>
    </div>
  );
}
