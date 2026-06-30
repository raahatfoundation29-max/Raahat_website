import { useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const interventions = [
  { category: "Medical Aid", title: "Emergency Surgical Support", text: "Disbursed rapid-response funding for a critical emergency surgery, ensuring a patient in immediate need received life-saving care without financial delay." },
  { category: "Community", title: "Marriage Assistance", text: "Provided foundational financial grants for a community marriage, intervening directly to prevent a severe, multi-generational debt trap for a low-income household." },
  { category: "Education", title: "Uninterrupted Learning", text: "Fully funded school fees and vital educational supplies for vulnerable youth, ensuring their academic journey continued without pause." },
  { category: "Accessibility", title: "Mobility Aids", text: "Procured and distributed customized wheelchairs and mobility equipment, granting immediate independence and dignity to disabled community members." },
  // Easily add more small tasks here in the future...
];

export default function DirectSupport() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-[#ecf0ef] py-16 lg:py-24 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-[#005840] mb-4"
          >
            Direct Community Support
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#005840]/80 text-lg max-w-2xl font-medium"
          >
            Quiet acts of profound impact. A living record of our grassroots, one-on-one interventions.
          </motion.p>
        </div>
        
        {/* Navigation Controls */}
        <div className="flex gap-3">
          <button 
            onClick={scrollLeft}
            className="bg-white text-[#005840] hover:bg-[#d1f843] shadow-sm rounded-full p-3 transition-colors border border-[#005840]/10 flex items-center justify-center cursor-pointer"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={scrollRight}
            className="bg-white text-[#005840] hover:bg-[#d1f843] shadow-sm rounded-full p-3 transition-colors border border-[#005840]/10 flex items-center justify-center cursor-pointer"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto md:px-6"> 
        {/* Container for the scrollable area */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-6 md:pl-6 pr-8 md:pr-16 pb-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {interventions.map((intervention, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="min-w-[280px] md:min-w-[350px] max-w-[350px] bg-white rounded-[2rem] p-6 md:p-8 shadow-sm border border-transparent hover:border-[#d1f843] hover:shadow-lg hover:-translate-y-2 transition-all duration-300 snap-start flex flex-col cursor-pointer group shrink-0"
            >
              <div className="bg-[#d1f843] text-[#005840] font-bold text-xs px-3 py-1 rounded-full w-fit mb-6">
                {intervention.category}
              </div>
              
              <h3 className="text-xl font-bold text-[#005840] mb-3">
                {intervention.title}
              </h3>
              
              <p className="text-[#005840]/80 leading-relaxed text-sm flex-grow font-medium">
                {intervention.text}
              </p>
              
              <div className="text-[#005840] opacity-0 group-hover:opacity-100 transition-opacity mt-6 flex items-center gap-2 font-bold text-sm">
                <div className="w-6 h-px bg-[#005840] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <ArrowRight className="w-5 h-5 transform -translate-x-4 group-hover:translate-x-0 transition-transform duration-300" />
              </div>

              <p className="text-[10px] uppercase tracking-wider text-gray-500 mt-4">Prayagraj, March 2024</p>
            </motion.div>
          ))}
          {/* Spacer to allow the last item to be scrolled fully to the edge on mobile */}
          <div className="min-w-[1px] shrink-0 md:hidden"></div>
        </div>
      </div>
    </section>
  );
}
