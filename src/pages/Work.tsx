import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { events } from '../data/events';
import { Search, ArrowUp } from 'lucide-react';

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('Latest');
  const [searchQuery, setSearchQuery] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredEvents = events.filter(event => {
    // 1. Category Filter
    if (activeFilter !== 'Latest' && activeFilter !== 'All') {
      const cat = event.category.toLowerCase();
      const title = event.title.toLowerCase();
      const desc = event.shortDesc.toLowerCase();

      if (activeFilter === 'Medical Aid') {
        if (!cat.includes('medical') && !cat.includes('surgical') && !cat.includes('health') && !title.includes('surgical') && !title.includes('medical') && !title.includes('hospital') && !desc.includes('medical') && !desc.includes('surgical')) {
          return false;
        }
      } else if (activeFilter === 'Education') {
        if (!cat.includes('education') && !cat.includes('youth') && !cat.includes('school') && !title.includes('education') && !title.includes('school') && !desc.includes('education') && !desc.includes('school') && !desc.includes('learning')) {
          return false;
        }
      } else if (activeFilter === 'Vocational') {
        if (!cat.includes('vocational') && !cat.includes('training') && !title.includes('vocational') && !desc.includes('vocational') && !desc.includes('training')) {
          return false;
        }
      } else if (activeFilter === 'Disaster Relief') {
        if (!cat.includes('disaster') && !cat.includes('relief') && !cat.includes('flood') && !title.includes('disaster') && !title.includes('flood') && !desc.includes('disaster') && !desc.includes('flood') && !desc.includes('covid') && !cat.includes('covid')) {
          return false;
        }
      } else if (activeFilter === 'Food & Nutrition') {
        if (!cat.includes('meals') && !cat.includes('food') && !cat.includes('distribution') && !title.includes('meals') && !title.includes('food') && !desc.includes('meal') && !desc.includes('food') && !desc.includes('ration') && !desc.includes('lunch')) {
          return false;
        }
      } else if (activeFilter === 'Spiritual & Community') {
        if (!cat.includes('spiritual') && !cat.includes('community') && !cat.includes('clothing') && !title.includes('satsang') && !title.includes('spiritual') && !title.includes('community') && !desc.includes('spiritual') && !desc.includes('community') && !desc.includes('clothing')) {
          return false;
        }
      }
    }

    // 2. Search Query Filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      const title = event.title.toLowerCase();
      const desc = event.shortDesc.toLowerCase();
      const cat = event.category.toLowerCase();
      const loc = event.location.toLowerCase();
      const date = event.date.toLowerCase();
      
      return (
        title.includes(query) ||
        desc.includes(query) ||
        cat.includes(query) ||
        loc.includes(query) ||
        date.includes(query)
      );
    }

    return true;
  });

  // Sort by latest by default (reverse index of filtered results)
  const sortedEvents = [...filteredEvents].reverse();

  // Split into Featured (#27, #26, #25) and Standard
  const featuredEvents = sortedEvents.filter(event => {
    const initiativeNumber = events.indexOf(event) + 1;
    return initiativeNumber === 27 || initiativeNumber === 26 || initiativeNumber === 25;
  });

  const standardEvents = sortedEvents.filter(event => {
    const initiativeNumber = events.indexOf(event) + 1;
    return initiativeNumber !== 27 && initiativeNumber !== 26 && initiativeNumber !== 25;
  });

  return (
    <div className="w-full min-h-screen bg-[#ecf0ef] pt-24 md:pt-36 pb-16 md:pb-24 px-5 md:px-8 font-sans selection:bg-[#d1f843]/30">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10 md:mb-14 pt-4 md:pt-6"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#005840] mb-3">
            Our Works
          </h1>
          <p className="text-sm md:text-base text-[#005840]/80 max-w-xl mx-auto mb-8 leading-relaxed font-medium">
            Every initiative is documented, receipted, and reported publicly. Scroll through 10 years of direct community work.
          </p>

          {/* Search Bar */}
          <div className="relative w-full max-w-md mx-auto mb-8">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by keyword…"
              className="w-full pl-10 pr-4 py-3 bg-white rounded-xl shadow-sm border border-gray-100 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-[#005840]/20 focus:border-[#005840]/20 transition-all text-[#005840] font-medium"
            />
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#005840]/40" />
          </div>
          
          {/* Impact Summary Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-8 max-w-3xl mx-auto mt-6 w-full">
            {[
              { label: 'Initiatives', value: '27' },
              { label: 'Years', value: '10' },
              { label: 'Categories', value: '6' },
              { label: 'Volunteer-Led', value: '100%' }
            ].map((metric) => (
              <div 
                key={metric.label}
                className="flex flex-col items-center bg-white p-3.5 rounded-2xl shadow-sm border border-gray-50"
              >
                <div className="text-xl md:text-2xl font-bold tracking-tight text-[#005840]">{metric.value}</div>
                <div className="text-[9px] md:text-[10px] font-bold text-[#005840]/60 uppercase tracking-widest mt-0.5">{metric.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Filter Pills */}
        <div className="relative w-full mb-8">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-nowrap overflow-x-auto gap-2 w-full pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] justify-start md:justify-center"
          >
            {['Latest', 'Medical Aid', 'Education', 'Vocational', 'Disaster Relief', 'Food & Nutrition', 'Spiritual & Community', 'All'].map((filterName) => (
              <button
                key={filterName}
                onClick={() => setActiveFilter(filterName)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer whitespace-nowrap shadow-sm ${
                  activeFilter === filterName
                    ? 'bg-[#005840] text-[#d1f843]'
                    : 'bg-white text-[#005840] border border-[#005840]/10 hover:bg-[#005840]/5'
                }`}
              >
                {filterName}
              </button>
            ))}
          </motion.div>
          <div className="absolute right-0 top-0 bottom-4 w-8 bg-gradient-to-l from-[#ecf0ef] to-transparent pointer-events-none md:hidden" />
        </div>

        {/* Initiatives List */}
        {sortedEvents.length === 0 ? (
          <div className="text-center py-16 text-[#005840]/60 font-medium text-base bg-white rounded-[24px] shadow-sm border border-gray-50 w-full">
            No initiatives found matching your criteria.
          </div>
        ) : (
          <div className="w-full">
            {/* Featured Grid (Initiatives #27, #26, #25) */}
            {featuredEvents.length > 0 && (
              <div className="mb-12">
                <div className="border-b border-[#005840]/10 pb-3 mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#005840] flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-lime-500"></span>
                    </span>
                    Featured Initiatives
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {featuredEvents.map((event, index) => (
                    <motion.div 
                      key={event.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: index * 0.05 }}
                      layout
                    >
                      <Link 
                        to={`/work/${event.id}`} 
                        className="flex flex-col bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-md border border-gray-50 transition-all group h-full hover:-translate-y-0.5"
                      >
                        {/* Image Container with Soft Radius */}
                        <div className="relative w-full aspect-video md:aspect-[4/3] overflow-hidden bg-gray-50 shrink-0 p-2">
                          <img 
                            src={event.image} 
                            alt={event.title} 
                            className="w-full h-full object-contain rounded-[18px] group-hover:scale-105 transition-transform duration-500" 
                          />
                          
                          {/* Floating Active Badge */}
                          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full flex items-center gap-1.5 z-10 shadow-sm border border-gray-100">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
                            </span>
                            <span className="text-[9px] font-bold text-[#005840] tracking-wider">ACTIVE</span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-5 md:p-6 flex flex-col flex-grow justify-between">
                          <div>
                            {/* Category Tag as Mini-Pill above Title */}
                            <div className="flex items-center gap-2 mb-2">
                              <span className="px-2.5 py-1 bg-[#d1f843] text-[#005840] font-bold rounded-full text-[9px] uppercase tracking-widest shadow-sm inline-block">
                                {event.category}
                              </span>
                              <span className="text-[10px] font-bold text-[#005840]/50 uppercase tracking-wider">
                                {event.date}
                              </span>
                            </div>

                            <h3 className="text-base md:text-lg font-bold text-[#005840] leading-snug tracking-tight line-clamp-2">
                              {event.title}
                            </h3>
                            <p className="text-xs md:text-sm text-[#005840]/70 mt-2 line-clamp-3 font-medium leading-relaxed">
                              {event.shortDesc}
                            </p>
                          </div>

                          <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                            <span className="text-xs font-bold text-[#005840] group-hover:text-[#005840]/70 transition-colors">
                              View Full Report →
                            </span>
                            <div className="w-2 h-2 rounded-full bg-[#d1f843] group-hover:scale-125 transition-transform"></div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Standard Grid */}
            {standardEvents.length > 0 && (
              <div>
                {/* Section Header */}
                <div className="border-b border-[#005840]/10 pb-3 mb-6 mt-6">
                  <h2 className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#005840]">
                    {activeFilter === 'Latest' || activeFilter === 'All'
                      ? `Previous Initiatives — ${standardEvents.length} Programs`
                      : `${activeFilter} — ${standardEvents.length + featuredEvents.length} ${
                          standardEvents.length + featuredEvents.length === 1 ? 'Initiative' : 'Initiatives'
                        }`}
                  </h2>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {standardEvents.map((event, index) => (
                    <motion.div 
                      key={event.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: index * 0.04 }}
                      layout
                    >
                      <Link 
                        to={`/work/${event.id}`} 
                        className="flex flex-col bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-md border border-gray-50 transition-all group h-full hover:-translate-y-0.5"
                      >
                        {/* Image Container with Soft Radius */}
                        <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-50 shrink-0 p-2">
                          <img 
                            src={event.image} 
                            alt={event.title} 
                            className="w-full h-full object-contain rounded-[18px] group-hover:scale-105 transition-transform duration-500" 
                          />
                        </div>

                        {/* Content */}
                        <div className="p-4 md:p-5 flex flex-col flex-grow justify-between">
                          <div>
                            {/* Category Mini-Pill */}
                            <div className="flex items-center gap-2 mb-2">
                              <span className="px-2 py-0.5 bg-[#d1f843] text-[#005840] font-bold rounded-full text-[8px] uppercase tracking-widest shadow-sm inline-block">
                                {event.category}
                              </span>
                              <span className="text-[9px] font-bold text-[#005840]/50 uppercase tracking-wider">
                                {event.date}
                              </span>
                            </div>

                            <h3 className="text-xs md:text-sm font-bold text-[#005840] leading-snug tracking-tight line-clamp-2">
                              {event.title}
                            </h3>
                          </div>

                          <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                            <span className="text-[10px] md:text-xs font-bold text-[#005840] group-hover:text-[#005840]/70 transition-colors">
                              View Report →
                            </span>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Sticky Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 bg-[#005840] text-white p-3 md:p-3.5 rounded-full shadow-lg hover:bg-[#005840]/90 transition-all duration-300 cursor-pointer flex items-center justify-center ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <ArrowUp className="w-4 h-4 md:w-5 md:h-5" />
      </button>
    </div>
  );
}
