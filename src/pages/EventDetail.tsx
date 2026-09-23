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
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [event]);

  if (!event) {
    return <Navigate to="/work" replace />;
  }

  const renderParagraphsOrList = (text: string) => {
    if (!text) return null;
    const lines = text.split('\n').map(line => line.trim()).filter(line => line.length > 0);
    
    return (
      <div className="space-y-3 text-sm md:text-base text-slate-700 leading-relaxed font-medium [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_li]:pl-1 [&_li]:marker:text-[#005840]/60">
        {lines.length > 1 ? (
          <ul className="list-disc pl-5 space-y-2 marker:text-[#005840]/60">
            {lines.map((line, idx) => (
              <li key={idx} className="pl-1 text-slate-700">
                {line}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-slate-700">{text}</p>
        )}
      </div>
    );
  };

  return (
    <div className="w-full min-h-screen bg-[#ecf0ef] pb-20 font-sans pt-24 md:pt-32">
      {/* Editorial Header Section */}
      <div className="w-full max-w-7xl mx-auto mb-6 px-4 md:px-8">
        <Link 
          to="/work" 
          className="group inline-flex items-center gap-1.5 text-xs font-bold text-[#005840]/65 hover:text-[#005840] transition-colors mb-4 uppercase tracking-widest"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Our Work
        </Link>
        
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap gap-2 items-center">
            <span className="px-3 py-1 text-[10px] bg-[#005840]/5 border border-[#005840]/15 rounded-full text-[#005840] font-bold uppercase tracking-widest shadow-sm">
              {event.category}
            </span>
            <span className="text-xs text-[#005840]/30 font-bold">•</span>
            <span className="text-xs font-bold text-[#005840]/60 uppercase tracking-widest">
              {event.date}
            </span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-[#005840] max-w-4xl">
            {event.title}
          </h1>
        </div>
      </div>

      {/* Immersive Featured Image with Soft White Polaroid Border */}
      <div className="w-full max-w-7xl mx-auto mb-8 px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full overflow-hidden rounded-[2rem] shadow-[0_20px_40px_-15px_rgba(0,88,64,0.04)] bg-white p-2 border border-white"
        >
          <img 
            src={event.image} 
            alt={event.title}
            className="w-full h-[240px] sm:h-[320px] md:h-[450px] lg:h-[520px] object-cover rounded-[1.75rem]"
          />
        </motion.div>
      </div>

      {/* Key Data / Impact Boxes (Apple-style Compact Soft UI Cards) */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {/* Impact Card */}
          <div className="bg-white rounded-3xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#005840]/5 flex items-center gap-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md group">
            <div className="flex shrink-0 items-center justify-center w-10 h-10 rounded-xl bg-[#005840]/5 text-[#005840] group-hover:scale-105 transition-transform duration-300">
              <Heart className="w-5 h-5 text-[#005840]" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-[#005840]/40 uppercase tracking-widest mb-0.5">Impact</span>
              <span className="text-lg font-bold text-[#005840] leading-none">{event.stats.impact}</span>
            </div>
          </div>

          {/* Resources Deployed Card */}
          <div className="bg-white rounded-3xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#005840]/5 flex items-center gap-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md group">
            <div className="flex shrink-0 items-center justify-center w-10 h-10 rounded-xl bg-[#005840]/5 text-[#005840] group-hover:scale-105 transition-transform duration-300">
              <IndianRupee className="w-5 h-5 text-[#005840]" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-[#005840]/40 uppercase tracking-widest mb-0.5">Resources Deployed</span>
              <span className="text-lg font-bold text-[#005840] leading-none">
                {event.stats.funds.replace(/\s*RESOURCES DEPLOYED\s*/gi, '')}
              </span>
            </div>
          </div>

          {/* Team / Volunteer Card */}
          <div className="bg-white rounded-3xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#005840]/5 flex items-center gap-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md group">
            <div className="flex shrink-0 items-center justify-center w-10 h-10 rounded-xl bg-[#005840]/5 text-[#005840] group-hover:scale-105 transition-transform duration-300">
              <Users className="w-5 h-5 text-[#005840]" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-[#005840]/40 uppercase tracking-widest mb-0.5">Volunteers</span>
              <span className="text-lg font-bold text-[#005840] leading-none">{event.stats.team}</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Editorial Responsive 2-Column Grid (Compact Gap) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6 max-w-7xl mx-auto px-4 md:px-8 items-start">
        
        {/* Left Column (Narrative - Spans 8 Cols - Compact Vertical Gap) */}
        <div className="lg:col-span-8 flex flex-col gap-4 md:gap-5">
          
          {/* The Challenge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.1 }} 
            className="bg-white rounded-3xl p-5 md:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#005840]/5"
          >
            <h3 className="text-lg md:text-xl font-bold text-[#005840] mb-4 tracking-tight flex items-center gap-2">
              The Challenge
            </h3>
            {renderParagraphsOrList(event.challenge)}
          </motion.div>

          {/* The Action */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2 }} 
            className="bg-white rounded-3xl p-5 md:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#005840]/5"
          >
            <h3 className="text-lg md:text-xl font-bold text-[#005840] mb-4 tracking-tight flex items-center gap-2">
              The Action
            </h3>
            {renderParagraphsOrList(event.action)}
          </motion.div>

          {/* The Impact (Visually distinguished and compact) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ delay: 0.3 }} 
            className="bg-[#005840]/5 border border-[#005840]/10 rounded-3xl p-5 md:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden"
          >
            {/* Soft decorative glow */}
            <div className="absolute -right-24 -bottom-24 w-48 h-48 rounded-full bg-[#d1f843]/10 blur-3xl pointer-events-none" />
            
            <h3 className="text-lg md:text-xl font-bold text-[#005840] mb-4 tracking-tight flex items-center gap-2">
              <span className="w-2 h-5 bg-[#d1f843] rounded-full inline-block" />
              The Impact
            </h3>
            
            <div className="space-y-3 text-sm md:text-base text-[#005840] leading-relaxed font-semibold [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_li]:pl-1 [&_li]:marker:text-[#005840]">
              {event.impact.split('\n').map(line => line.trim()).filter(Boolean).length > 1 ? (
                <ul className="list-disc pl-5 space-y-2 marker:text-[#005840]">
                  {event.impact.split('\n').map(line => line.trim()).filter(Boolean).map((line, idx) => (
                    <li key={idx} className="pl-1">
                      {line}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>{event.impact}</p>
              )}
            </div>
          </motion.div>

        </div>

        {/* Right Column (Sidebar - Spans 4 Cols - Sticky on Desktop - Compact Vertical Gap) */}
        <div className="lg:col-span-4 flex flex-col gap-4 md:gap-5 lg:sticky lg:top-24 w-full">

          {/* Location Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.35 }} 
            className="bg-white rounded-3xl p-5 md:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#005840]/5 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#005840]/5 text-[#005840] text-[10px] font-bold uppercase tracking-widest mb-3">
              <MapPin className="w-3.5 h-3.5 text-[#005840]" />
              <span>Location</span>
            </div>
            <p className="text-base font-bold text-[#005840] leading-snug">{event.location}</p>
          </motion.div>

          {/* Contributors Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.4 }} 
            className="bg-white rounded-3xl p-5 md:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#005840]/5 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#005840]/5 text-[#005840] text-[10px] font-bold uppercase tracking-widest mb-3">
              <Users className="w-3.5 h-3.5 text-[#005840]" />
              <span>Contributors</span>
            </div>
            <p className="text-xs md:text-sm font-bold text-[#005840]/85 leading-relaxed">{event.contributors}</p>
          </motion.div>

          {/* Financial Transparency Digital Receipt Card */}
          {event.financials && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.45 }} 
              className="bg-white rounded-3xl p-5 md:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#005840]/5 overflow-hidden relative"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#005840]/5 text-[#005840] text-[10px] font-bold uppercase tracking-widest mb-4">
                <Receipt className="w-3.5 h-3.5 text-[#005840]" />
                <span>Transparency</span>
              </div>
              <div className="mb-3">
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#005840]/40">Total Cost</div>
                <div className="text-2xl font-bold text-[#005840] mt-1 tracking-tight">{event.financials.totalCost}</div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#005840]/65 mt-1.5 bg-[#005840]/5 inline-block px-2.5 py-1 rounded-lg">
                  {event.financials.fundedBy}
                </div>
              </div>
              
              {/* Dash Line Receipt Motif */}
              <div className="w-full border-t-2 border-dashed border-gray-100 my-4 relative">
                <div className="absolute -left-9 -top-2 w-4 h-4 bg-[#ecf0ef] rounded-full border border-gray-100 shadow-inner"></div>
                <div className="absolute -right-9 -top-2 w-4 h-4 bg-[#ecf0ef] rounded-full border border-gray-100 shadow-inner"></div>
              </div>

              <div className="pt-1">
                <p className="italic text-[10px] font-bold text-[#005840]/70 mb-3 bg-[#d1f843]/15 px-3 py-1.5 rounded-xl text-center uppercase tracking-wider">
                  100% Direct - Zero overhead
                </p>
                <div className="space-y-2">
                  {event.financials.expenses.map((expense, idx) => (
                    <div key={idx} className="flex justify-between items-center py-1 w-full gap-4 border-b border-[#005840]/5 last:border-0">
                      <span className="text-xs font-bold text-[#005840]/75 truncate">{expense.item}</span>
                      <span className="text-xs font-bold text-[#005840] shrink-0 whitespace-nowrap">{expense.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Volunteer Call to Action Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.5 }} 
            className="bg-gradient-to-br from-[#005840] to-[#0D3826] text-white rounded-3xl p-5 md:p-6 shadow-[0_20px_40px_rgba(0,88,64,0.12)] border border-white/5 flex flex-col items-center text-center group"
          >
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-3 text-[#d1f843] group-hover:scale-105 transition-transform duration-300">
              <Heart className="w-5 h-5 fill-current" />
            </div>
            <h3 className="text-base font-bold mb-1.5 tracking-tight">Want to make a difference?</h3>
            <p className="text-xs text-white/80 mb-4 leading-relaxed max-w-xs font-medium">Join our grassroots drives in Prayagraj and help us reach more communities in need.</p>
            <button 
              onClick={() => navigate('/get-involved')}
              className="w-full py-3 px-4 text-xs bg-[#d1f843] text-[#005840] hover:brightness-105 rounded-xl font-bold uppercase tracking-widest transition-all hover:shadow-lg active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Users className="w-4 h-4" />
              Volunteer for Next Drive →
            </button>
          </motion.div>

        </div>

      </div>

      {/* Pagination Navigation Section (Previous / Next Drive links) */}
      <div className="max-w-7xl mx-auto mt-12 px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-stretch justify-between gap-4 md:gap-5">
          {prevEvent ? (
            <Link 
              to={`/work/${prevEvent.id}`} 
              className="w-full md:w-1/2 flex items-center gap-4 bg-white p-4 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#005840]/5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <img src={prevEvent.image} alt="" className="w-20 h-16 md:w-24 md:h-18 object-cover rounded-xl shadow-inner shrink-0" />
              <div className="text-left flex-1 min-w-0">
                <span className="block text-[10px] uppercase font-bold tracking-widest text-[#005840]/40">Previous Drive</span>
                <span className="block font-bold text-[#005840] text-xs md:text-sm truncate group-hover:text-[#005840]/80 transition-colors">{prevEvent.title}</span>
              </div>
              <ArrowLeft className="w-5 h-5 text-[#005840] group-hover:-translate-x-1 transition-transform shrink-0" />
            </Link>
          ) : <div className="hidden md:block md:w-1/2" />}
          
          {nextEvent ? (
            <Link 
              to={`/work/${nextEvent.id}`} 
              className="w-full md:w-1/2 flex items-center gap-4 bg-white p-4 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#005840]/5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <div className="text-right flex-1 min-w-0">
                <span className="block text-[10px] uppercase font-bold tracking-widest text-[#005840]/40">Next Drive</span>
                <span className="block font-bold text-[#005840] text-xs md:text-sm truncate group-hover:text-[#005840]/80 transition-colors">{nextEvent.title}</span>
              </div>
              <ArrowRight className="w-5 h-5 text-[#005840] group-hover:translate-x-1 transition-transform shrink-0" />
              <img src={nextEvent.image} alt="" className="w-20 h-16 md:w-24 md:h-18 object-cover rounded-xl shadow-inner shrink-0" />
            </Link>
          ) : <div className="hidden md:block md:w-1/2" />}
        </div>
      </div>
    </div>
  );
}
