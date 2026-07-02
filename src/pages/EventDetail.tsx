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
        <div className="w-full max-w-[85rem] mx-auto mb-6 md:mb-12 px-6 md:px-8">
          {/* Back Link and Pills */}
          <div className="flex flex-col gap-2 mb-4">
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

          <div className="relative w-full overflow-hidden rounded-2xl md:rounded-[2rem]">
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
                <div className="text-white/90 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-2 flex items-start flex-col md:flex-row md:items-center gap-2">
                  <span className="px-3 py-1.5 md:px-4 md:py-2 bg-[#d1f843] text-[#005840] rounded-full border-none shadow-sm leading-none whitespace-nowrap">
                    {event.category}
                  </span>
                  <span className="whitespace-nowrap">{event.date}</span>
                </div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-white">
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
              className="grid grid-cols-1 gap-4 w-full px-4 md:px-8 mt-6 md:grid-cols-3 md:gap-6"
            >
              <div className="bg-white rounded-2xl shadow-sm p-3.5 md:p-6 flex items-center gap-4">
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-[#ecf0ef] flex items-center justify-center shrink-0">
                  <Heart className="w-4 h-4 md:w-6 md:h-6 text-[#005840]" />
                </div>
                <div className="flex flex-col justify-center gap-0.5">
                  <div className="text-[11px] md:text-sm font-bold tracking-widest text-[#005840]/70 uppercase">Impact</div>
                  <div className="text-xl md:text-3xl font-extrabold text-[#005840] leading-none">{event.stats.impact}</div>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-sm p-3.5 md:p-6 flex items-center gap-4">
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-[#ecf0ef] flex items-center justify-center shrink-0">
                  <IndianRupee className="w-4 h-4 md:w-6 md:h-6 text-[#005840]" />
                </div>
                <div className="flex flex-col justify-center gap-0.5">
                  <div className="text-[11px] md:text-sm font-bold tracking-widest text-[#005840]/70 uppercase">RESOURCES DEPLOYED</div>
                  <div className="text-xl md:text-3xl font-extrabold text-[#005840] leading-none">{event.stats.funds}</div>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-sm p-3.5 md:p-6 flex items-center gap-4">
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-[#ecf0ef] flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4 md:w-6 md:h-6 text-[#005840]" />
                </div>
                <div className="flex flex-col justify-center gap-0.5">
                  <div className="text-[11px] md:text-sm font-bold tracking-widest text-[#005840]/70 uppercase">Team</div>
                  <div className="text-xl md:text-3xl font-extrabold text-[#005840] leading-none">{event.stats.team}</div>
                </div>
              </div>
            </motion.div>
        </div>

        {/* Content Split */}
        <div className="max-w-[85rem] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 px-6 md:px-8 mt-6 md:mt-12">
          
          <div className="col-span-1 md:col-span-8 flex flex-col gap-10 md:gap-16">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} viewport={{ once: true }}>
              <h2 className="text-xl md:text-3xl font-extrabold text-[#005840] mb-4">The Challenge</h2>
              <p className="text-sm md:text-lg leading-relaxed text-[#005840]/85 font-medium">{event.challenge}</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }}>
              <h2 className="text-xl md:text-3xl font-extrabold text-[#005840] mb-4">The Action</h2>
              <p className="text-sm md:text-lg leading-relaxed text-[#005840]/85 font-medium">{event.action}</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }}>
              <h2 className="text-xl md:text-3xl font-extrabold text-[#005840] mb-4">The Impact</h2>
              <div className="bg-[#d1f843]/30 border border-[#d1f843]/50 rounded-xl p-6 md:rounded-[2rem] md:p-10">
                <p className="text-sm md:text-lg leading-relaxed text-[#005840]/85 font-medium">{event.impact}</p>
              </div>
            </motion.div>
          </div>

          <div className="col-span-1 md:col-span-4 flex flex-col gap-6 relative">
            <div className="sticky top-32 flex flex-col gap-6">
              <motion.div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-sm md:shadow-md md:rounded-[2rem] md:p-8 md:bg-white">
                <h3 className="text-xs md:text-sm tracking-widest uppercase text-[#005840] mb-2 md:mb-4 font-bold flex items-center gap-1 md:gap-2">
                  <MapPin className="w-4 h-4 text-[#005840]" /> Location
                </h3>
                <p className="text-sm md:text-base font-medium leading-relaxed text-[#005840]/80">{event.location}</p>
              </motion.div>

              <motion.div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-sm md:shadow-md md:rounded-[2rem] md:p-8 md:bg-white">
                <h3 className="text-xs md:text-sm tracking-widest uppercase text-[#005840] mb-2 md:mb-4 font-bold flex items-center gap-1 md:gap-2">
                  <Users className="w-4 h-4 text-[#005840]" /> Contributors
                </h3>
                <p className="text-sm md:text-base font-medium leading-relaxed text-[#005840]/80">{event.contributors}</p>
              </motion.div>

              {event.financials && (
                <motion.div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-sm md:shadow-md md:rounded-[2rem] md:p-8 md:bg-white">
                  <h3 className="text-xs md:text-sm tracking-widest uppercase text-[#005840] mb-2 md:mb-4 font-bold flex items-center gap-1 md:gap-2">
                    <Receipt className="w-4 h-4 text-[#005840]" /> Transparency
                  </h3>
                  <div className="mb-2 md:mb-6">
                    <div className="text-2xl md:text-3xl font-black leading-tight text-[#005840] mb-0.5 md:mb-1">{event.financials.totalCost}</div>
                    <div className="text-xs md:text-sm font-bold uppercase tracking-wider text-[#005840]/60">{event.financials.fundedBy}</div>
                  </div>
                  <div className="flex items-center gap-4 text-xs md:text-sm font-bold text-[#005840] mb-6">
                    <span>Share:</span>
                    <button onClick={() => window.open(`https://wa.me/?text=${window.location.href}`, '_blank')} className="hover:text-[#d1f843]">WhatsApp</button>
                    <button onClick={() => navigator.clipboard.writeText(window.location.href)} className="hover:text-[#d1f843]">Copy Link</button>
                    <button onClick={() => window.open(`https://twitter.com/intent/tweet?url=${window.location.href}`, '_blank')} className="hover:text-[#d1f843]">X</button>
                  </div>
                  <div className="mt-2 md:mt-6 border-l-4 border-lime-500 pl-4 border-t border-[#005840]/10 pt-2 md:pt-4">
                    <p className="italic text-sm text-[#005840] mb-4">Every transaction documented and accounted for.</p>
                    {event.financials.expenses.map((expense, idx) => (
                      <div key={idx} className="flex justify-between items-center py-3 md:py-4 border-b border-[#005840]/5 last:border-0 w-full gap-2">
                        <span className="text-xs md:text-base font-medium text-[#005840]/80 truncate">{expense.item}</span>
                        <span className="text-xs md:text-base font-bold text-[#005840] shrink-0 whitespace-nowrap">{expense.amount}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
              
              <button 
                onClick={() => navigate('/get-involved')}
                className="w-full py-4 md:py-5 text-sm md:text-lg mt-4 bg-[#d1f843] text-[#005840] rounded-xl md:rounded-[1.5rem] font-extrabold tracking-wide transition-all hover:brightness-95 hover:shadow-xl hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-1 md:gap-3"
              >
                <Users className="w-4 h-4 md:w-6 md:h-6" />
                Volunteer for Our Next Drive →
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-16 mb-8 px-6 md:px-8">
          <div className="flex flex-col md:flex-row items-stretch justify-between gap-4 md:gap-8">
            {prevEvent ? (
              <Link to={`/work/${prevEvent.id}`} className="w-full md:w-1/2 flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-all group">
                <img src={prevEvent.image} alt="" className="w-20 h-16 md:w-24 md:h-20 object-cover rounded-xl" />
                <div className="text-left flex-1">
                  <span className="block text-xs md:text-sm text-gray-500 uppercase font-bold tracking-widest">Previous</span>
                  <span className="block font-bold text-[#005840] text-sm md:text-lg line-clamp-2">{prevEvent.title}</span>
                </div>
                <ArrowLeft className="w-5 h-5 text-[#005840] group-hover:-translate-x-1 transition-transform shrink-0" />
              </Link>
            ) : <div className="hidden md:block md:w-1/2" />}
            
            {nextEvent ? (
              <Link to={`/work/${nextEvent.id}`} className="w-full md:w-1/2 flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-all group">
                <div className="text-right flex-1">
                  <span className="block text-xs md:text-sm text-gray-500 uppercase font-bold tracking-widest">Next</span>
                  <span className="block font-bold text-[#005840] text-sm md:text-lg line-clamp-2">{nextEvent.title}</span>
                </div>
                <ArrowRight className="w-5 h-5 text-[#005840] group-hover:translate-x-1 transition-transform shrink-0" />
                <img src={nextEvent.image} alt="" className="w-20 h-16 md:w-24 md:h-20 object-cover rounded-xl" />
              </Link>
            ) : <div className="hidden md:block md:w-1/2" />}
          </div>
        </div>
      </div>
    </>
  );
}