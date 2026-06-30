import { useParams, Navigate, useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Users, Heart, IndianRupee, MapPin, Receipt, ArrowLeft, ArrowRight } from 'lucide-react';
import { events } from '../data/events';
import { useEffect } from 'react';

export default function EventDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const currentIndex = events.findIndex(e => e.id === id);
  const event = currentIndex !== -1 ? events[currentIndex] : undefined;
  const prevEvent = currentIndex > 0 ? events[currentIndex - 1] : null;
  const nextEvent = currentIndex !== -1 && currentIndex < events.length - 1 ? events[currentIndex + 1] : null;
  
  useEffect(() => {
    document.title = event ? `${event.title} | Raahat Foundation` : 'Raahat Foundation';
  }, [event]);

  if (!event) {
    return <Navigate to="/work" replace />;
  }

  return (
    <>
      <div className="w-full min-h-screen bg-[#ecf0ef] pb-32 font-sans overflow-hidden pt-20 md:pt-32">
        {/* Immersive Hero Section */}
        <div className="w-full max-w-[85rem] mx-auto mb-6 md:mb-12">
          {/* Back Link and Pills */}
          <div className="flex flex-col gap-2 mb-4 px-6 md:px-8">
            <Link to="/work" className="text-sm text-[#005840] hover:underline">← Back to Our Work</Link>
            <div className="flex gap-2">
              <Link to="/work" className="px-3 py-1 text-[10px] bg-white border border-[#005840]/20 rounded-full text-[#005840] hover:bg-[#d1f843]">
                {event.category}
              </Link>
              <span className="px-3 py-1 text-[10px] bg-white border border-[#005840]/20 rounded-full text-[#005840]">
                2024–2025
              </span>
            </div>
          </div>

          <div className="relative w-full overflow-hidden rounded-2xl md:rounded-[2rem] px-6 md:px-8">
            <img 
              src={event.image} 
              alt={event.title}
              className="w-full h-auto block"
            />

            {/* Heavy gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            <div className="absolute bottom-4 left-4 z-10 w-[60%] md:bottom-12 md:left-12 md:w-[70%] md:max-w-[70%]">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="text-white/90 text-[8px] md:text-xs font-bold uppercase tracking-widest mb-2 flex items-start flex-col md:flex-row md:items-center gap-2">
                  <span className="px-2 py-1 md:px-4 md:py-2 bg-[#d1f843] text-[#005840] rounded-full border-none shadow-sm leading-none whitespace-nowrap">
                    {event.category}
                  </span>
                  <span className="whitespace-nowrap">{event.date}</span>
                </div>
                <h1 className="text-lg md:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight text-white">
                  {event.title}
                </h1>
              </motion.div>
            </div>
          </div>

          {/* Key Data Boxes */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-row overflow-x-auto snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] gap-3 w-full px-6 md:px-8 pb-2 mt-4 md:grid md:grid-cols-3 md:gap-6 md:mt-6 md:overflow-visible md:pb-0"
          >
            <div className="bg-white rounded-xl shadow-sm p-3 md:p-6 flex items-center gap-2 min-w-[120px] shrink-0 snap-start">
              <div className="w-6 h-6 md:w-12 md:h-12 rounded-full bg-[#ecf0ef] flex items-center justify-center shrink-0">
                <Heart className="w-3 h-3 md:w-6 md:h-6 text-[#005840]" />
              </div>
              <div className="flex flex-col justify-center gap-1">
                <div className="text-[8px] md:text-xs uppercase text-[#005840]/70 font-bold tracking-wider">Impact</div>
                <div className="text-[11px] font-medium md:font-extrabold leading-none md:leading-tight text-[#005840] md:text-2xl">{event.stats.impact}</div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-3 md:p-6 flex items-center gap-2 min-w-[120px] shrink-0 snap-start">
              <div className="w-6 h-6 md:w-12 md:h-12 rounded-full bg-[#ecf0ef] flex items-center justify-center shrink-0">
                <IndianRupee className="w-3 h-3 md:w-6 md:h-6 text-[#005840]" />
              </div>
              <div className="flex flex-col justify-center gap-1">
                <div className="text-[8px] md:text-xs uppercase text-[#005840]/70 font-bold tracking-wider">RESOURCES DEPLOYED</div>
                <div className="text-[11px] font-medium md:font-extrabold leading-none md:leading-tight text-[#005840] md:text-2xl">{event.stats.funds}</div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-3 md:p-6 flex items-center gap-2 min-w-[120px] shrink-0 snap-start">
              <div className="w-6 h-6 md:w-12 md:h-12 rounded-full bg-[#ecf0ef] flex items-center justify-center shrink-0">
                <Users className="w-3 h-3 md:w-6 md:h-6 text-[#005840]" />
              </div>
              <div className="flex flex-col justify-center gap-1">
                <div className="text-[8px] md:text-xs uppercase text-[#005840]/70 font-bold tracking-wider">Team</div>
                <div className="text-[11px] font-medium md:font-extrabold leading-none md:leading-tight text-[#005840] md:text-2xl">{event.stats.team}</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Content Split */}
        <div className="max-w-[85rem] mx-auto grid grid-cols-12 gap-2 px-3 mt-6 md:gap-8 md:px-8 md:mt-12">
          
          <div className="col-span-7 flex flex-col gap-3 md:gap-12 md:col-span-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} viewport={{ once: true }}>
              <h2 className="text-sm font-bold text-[#005840] mb-2 md:text-2xl md:font-extrabold md:mb-6">The Challenge</h2>
              <p className="text-[10px] leading-snug text-[#005840]/80 font-medium md:text-base md:leading-relaxed">{event.challenge}</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }}>
              <h2 className="text-sm font-bold text-[#005840] mb-2 md:text-2xl md:font-extrabold md:mb-6">The Action</h2>
              <p className="text-[10px] leading-snug text-[#005840]/80 font-medium md:text-base md:leading-relaxed">{event.action}</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }}>
              <h2 className="text-sm font-bold text-[#005840] mb-2 md:text-2xl md:font-extrabold md:mb-6">The Impact</h2>
              <div className="bg-[#d1f843]/30 border border-[#d1f843]/50 rounded-xl p-3 md:rounded-[2rem] md:p-8">
                <p className="text-[10px] leading-snug text-[#005840]/80 font-medium md:text-base md:leading-relaxed">{event.impact}</p>
              </div>
            </motion.div>
          </div>

          <div className="col-span-5 flex flex-col gap-2 relative md:col-span-4 md:gap-6">
            <div className="sticky top-32 flex flex-col gap-2 md:gap-6">
              <motion.div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-sm md:shadow-md md:rounded-[2rem] md:p-8 md:bg-white">
                <h3 className="text-[8px] uppercase tracking-wider text-[#005840] mb-1 md:mb-4 md:text-xs font-bold flex items-center gap-1 md:gap-2">
                  <MapPin className="w-3 h-3 text-[#005840] md:w-4 md:h-4" /> Location
                </h3>
                <p className="text-[8px] font-medium leading-snug text-[#005840]/80 md:text-sm md:leading-relaxed">{event.location}</p>
              </motion.div>

              <motion.div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-sm md:shadow-md md:rounded-[2rem] md:p-8 md:bg-white">
                <h3 className="text-[8px] uppercase tracking-wider text-[#005840] mb-1 md:mb-4 md:text-xs font-bold flex items-center gap-1 md:gap-2">
                  <Users className="w-3 h-3 text-[#005840] md:w-4 md:h-4" /> Contributors
                </h3>
                <p className="text-[8px] font-medium leading-snug text-[#005840]/80 md:text-sm md:leading-relaxed">{event.contributors}</p>
              </motion.div>

              {event.financials && (
                <motion.div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-sm md:shadow-md md:rounded-[2rem] md:p-8 md:bg-white">
                  <h3 className="text-[8px] uppercase tracking-wider text-[#005840] mb-1 md:mb-4 md:text-xs font-bold flex items-center gap-1 md:gap-2">
                    <Receipt className="w-3 h-3 text-[#005840] md:w-5 md:h-5" /> Transparency
                  </h3>
                  <div className="mb-2 md:mb-6">
                    <div className="text-[12px] font-extrabold leading-tight text-[#005840] mb-0.5 md:mb-1 md:text-3xl">{event.financials.totalCost}</div>
                    <div className="text-[8px] font-bold uppercase tracking-wider text-[#005840]/60 md:text-xs">{event.financials.fundedBy}</div>
                  </div>
                  <div className="flex items-center gap-4 text-xs font-bold text-[#005840] mb-6">
                    <span>Share:</span>
                    <button onClick={() => window.open(`https://wa.me/?text=${window.location.href}`, '_blank')} className="hover:text-[#d1f843]">WhatsApp</button>
                    <button onClick={() => navigator.clipboard.writeText(window.location.href)} className="hover:text-[#d1f843]">Copy Link</button>
                    <button onClick={() => window.open(`https://twitter.com/intent/tweet?url=${window.location.href}`, '_blank')} className="hover:text-[#d1f843]">X</button>
                  </div>
                  <div className="mt-2 md:mt-6 border-l-4 border-lime-500 pl-4 border-t border-[#005840]/10 pt-2 md:pt-4">
                    <p className="italic text-xs text-[#005840] mb-4">Every transaction documented and accounted for.</p>
                    {event.financials.expenses.map((expense, idx) => (
                      <div key={idx} className="flex justify-between items-center py-1 md:py-3 border-b border-[#005840]/5 last:border-0 w-full gap-2">
                        <span className="text-[8px] font-medium text-[#005840]/80 md:text-sm truncate">{expense.item}</span>
                        <span className="text-[8px] font-bold text-[#005840] shrink-0 whitespace-nowrap md:text-sm">{expense.amount}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
              
              <button 
                onClick={() => navigate('/get-involved')}
                className="w-full py-2 px-3 text-[10px] md:py-5 md:px-6 bg-[#d1f843] text-[#005840] md:text-lg rounded-xl md:rounded-[1.5rem] font-extrabold tracking-wide transition-all hover:brightness-95 hover:shadow-xl hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-1 md:gap-3"
              >
                <Users className="w-3 h-3 fill-transparent md:w-6 md:h-6" />
                Volunteer for Our Next Drive →
              </button>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold text-[#005840] mb-6">More {event.category} Initiatives</h3>
              <div className="grid grid-cols-2 gap-4">
                {events
                  .filter((e) => e.category === event.category && e.id !== event.id)
                  .slice(0, 2)
                  .map((e) => (
                    <Link to={`/work/${e.id}`} key={e.id} className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all">
                      <img src={e.image} alt={e.title} className="w-full h-24 object-cover rounded-lg mb-2" />
                      <h4 className="font-bold text-sm text-[#005840] line-clamp-1">{e.title}</h4>
                      <p className="text-[10px] text-gray-500">{e.date.split(',').pop()?.trim()}</p>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-16 mb-8 px-6">
          <div className="flex items-center justify-between gap-4">
            {prevEvent ? (
              <Link to={`/work/${prevEvent.id}`} className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-all group">
                <img src={prevEvent.image} alt="" className="w-16 h-12 object-cover rounded-lg" />
                <div className="text-right">
                  <span className="block text-[10px] text-gray-500 uppercase font-bold">Previous</span>
                  <span className="block font-bold text-[#005840] text-sm">{prevEvent.title}</span>
                </div>
                <ArrowLeft className="w-5 h-5 text-[#005840] group-hover:-translate-x-1 transition-transform" />
              </Link>
            ) : <div />}
            
            {nextEvent ? (
              <Link to={`/work/${nextEvent.id}`} className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-all group ml-auto">
                <ArrowRight className="w-5 h-5 text-[#005840] group-hover:translate-x-1 transition-transform" />
                <div className="text-left">
                  <span className="block text-[10px] text-gray-500 uppercase font-bold">Next</span>
                  <span className="block font-bold text-[#005840] text-sm">{nextEvent.title}</span>
                </div>
                <img src={nextEvent.image} alt="" className="w-16 h-12 object-cover rounded-lg" />
              </Link>
            ) : <div />}
          </div>
        </div>
      </div>
    </>
  );
}