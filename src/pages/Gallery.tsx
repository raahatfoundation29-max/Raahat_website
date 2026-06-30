import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';

interface GalleryImage {
  id: number;
  url: string;
  category: string;
  orientation: 'landscape' | 'portrait';
  caption: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop',
    category: 'Field Work',
    orientation: 'landscape',
    caption: 'Winter Clothing Drive — Jhalwa, Prayagraj — Dec 2023'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1593113560732-a81cdab3b3f2?q=80&w=800&auto=format&fit=crop',
    category: 'Education',
    orientation: 'portrait',
    caption: 'Classroom Supplies Distribution — Ashok Nagar, Prayagraj — Jul 2023'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1542810634-71277d95dc29?q=80&w=1200&auto=format&fit=crop',
    category: 'Community Meals',
    orientation: 'landscape',
    caption: 'Makar Sankranti Community Feast — Saraswati Ghat, Prayagraj — Jan 2024'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=800&auto=format&fit=crop',
    category: 'Medical',
    orientation: 'portrait',
    caption: 'Mobile Health Clinic Checkup — Naini Village, Prayagraj — Sep 2023'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1534015694-8ceb1129fec8?q=80&w=800&auto=format&fit=crop',
    category: 'Field Work',
    orientation: 'portrait',
    caption: 'Youth Skill Assessment Drive — Malawa Khurd, Prayagraj — Oct 2023'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1593683907572-c5112520ab4c?q=80&w=1200&auto=format&fit=crop',
    category: 'Community Meals',
    orientation: 'landscape',
    caption: 'Weekly Ration Kit Distribution — Mumfordganj, Prayagraj — Nov 2023'
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1511699661559-041441b44ecb?q=80&w=1200&auto=format&fit=crop',
    category: 'Field Work',
    orientation: 'landscape',
    caption: 'Women Empowerment Meeting — Jhusi Block, Prayagraj — Feb 2024'
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1520110120835-c96534a4c984?q=80&w=800&auto=format&fit=crop',
    category: 'Events',
    orientation: 'portrait',
    caption: 'Art of Living Community Satsang — Tagoretown, Prayagraj — Aug 2023'
  },
  {
    id: 9,
    url: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1200&auto=format&fit=crop',
    category: 'Education',
    orientation: 'landscape',
    caption: 'Evening Literacy Class Support — Kuriya District, Prayagraj — Jun 2023'
  },
  {
    id: 10,
    url: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop',
    category: 'Events',
    orientation: 'portrait',
    caption: 'Children\'s Day Painting Competition — Swaraj Bhawan, Prayagraj — Nov 2023'
  },
  {
    id: 11,
    url: 'https://images.unsplash.com/photo-1504817342169-4a572f548cee?q=80&w=1200&auto=format&fit=crop',
    category: 'Medical',
    orientation: 'landscape',
    caption: 'Emergency Medical Relief Camp — Mumfordganj, Prayagraj — Aug 2023'
  },
  {
    id: 12,
    url: 'https://images.unsplash.com/photo-1469571486079-7a9128854386?q=80&w=800&auto=format&fit=crop',
    category: 'Community Meals',
    orientation: 'portrait',
    caption: 'Festive Sweet Distribution — CNI Girls Home, Prayagraj — Oct 2023'
  }
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const filteredImages = activeFilter === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeFilter);

  const nextSlide = useCallback(() => {
    setSelectedImageIndex((prev) => (prev + 1) % filteredImages.length);
  }, [filteredImages.length]);

  const prevSlide = useCallback(() => {
    setSelectedImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  }, [filteredImages.length]);

  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, nextSlide, prevSlide]);

  return (
    <div className="w-full min-h-screen bg-[#ecf0ef] font-sans selection:bg-[#d1f843]/30 pt-24 md:pt-32 flex flex-col">
      {/* Section 1: Main Header & Grid */}
      <div className="max-w-7xl mx-auto flex flex-col items-center px-4 md:px-8 pb-16 lg:pb-24 w-full">
        
        {/* Header (Strict Copy) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10 md:mb-12 pt-4 md:pt-8"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#005840] mb-4 uppercase">
            Moments of Impact
          </h1>
          <p className="text-sm md:text-lg text-[#005840]/85 max-w-2xl mx-auto font-medium leading-relaxed">
            A glimpse into the lives we've touched and the communities we've built over the years.
          </p>
        </motion.div>

        {/* Category Filter Bar */}
        <div className="relative w-full mb-10">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-nowrap overflow-x-auto gap-2 max-w-full pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {['All', 'Field Work', 'Medical', 'Education', 'Events', 'Community Meals'].map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveFilter(category);
                  setSelectedImageIndex(0); // Reset index on filter change to prevent out of bounds
                }}
                className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  activeFilter === category
                    ? 'bg-[#005840] text-[#d1f843] shadow-md scale-105'
                    : 'bg-white text-[#005840] hover:bg-[#005840]/5 border border-[#005840]/5 shadow-sm'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
          {/* Subtle Right Fade */}
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#ecf0ef] to-transparent pointer-events-none" />
        </div>

        {/* Masonry Layout */}
        <motion.div 
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 w-full"
        >
          {filteredImages.map((image, index) => (
            <div key={image.id} className="break-inside-avoid">
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                onClick={() => {
                  setSelectedImageIndex(index);
                  setIsOpen(true);
                }}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-sm border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#005840]/10"
              >
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-auto object-cover block group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Cinematic Hover Overlay */}
                <div className="absolute inset-0 bg-[#0D3826]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <p className="text-white text-center text-sm font-medium leading-relaxed">
                    {image.caption}
                  </p>
                </div>
              </motion.div>
              {/* Caption rendered strictly below the image card */}
              <p className="text-[12px] text-gray-500 text-left mt-2 truncate">
                {image.caption}
              </p>
            </div>
          ))}
        </motion.div>

      </div>

      {/* Section 2: Watch What We Do Video Section */}
      <section className="w-full py-16 md:py-24 bg-gray-50 px-4 md:px-8 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-12 flex flex-col items-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-extrabold text-[#005840] tracking-tight mb-4 uppercase"
            >
              Watch What We Do
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-sm md:text-lg text-[#005840]/80 max-w-xl mx-auto font-medium"
            >
              On the ground with our core team.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto w-full">
            {/* Video 1 */}
            <div className="aspect-video w-full bg-gray-800 rounded-2xl flex items-center justify-center relative overflow-hidden group/video shadow-sm hover:shadow-md transition-all cursor-pointer">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 group-hover/video:bg-[#d1f843] group-hover/video:text-[#005840] text-white">
                <Play className="w-8 h-8 fill-current" />
              </div>
            </div>
            {/* Video 2 */}
            <div className="aspect-video w-full bg-gray-800 rounded-2xl flex items-center justify-center relative overflow-hidden group/video shadow-sm hover:shadow-md transition-all cursor-pointer">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 group-hover/video:bg-[#d1f843] group-hover/video:text-[#005840] text-white">
                <Play className="w-8 h-8 fill-current" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Submit Your Photos CTA Bottom Strip */}
      <section className="w-full bg-[#0D3826] text-white py-12 px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto gap-6 w-full">
          <div className="text-center md:text-left px-2">
            <h2 className="text-xl md:text-3xl font-extrabold tracking-tight">Have photos from the field?</h2>
            <p className="text-sm md:text-base text-white/85 mt-2 font-medium">If you volunteered with us recently, we’d love to feature your perspective.</p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <a 
              href="mailto:info@raahatfoundation.org?subject=Field Photos Submission" 
              className="inline-block w-full md:w-auto text-center bg-[#d1f843] text-[#0D3826] font-bold px-8 py-3 rounded-full hover:scale-105 transition-transform text-sm uppercase tracking-wider shadow-md"
            >
              Submit Your Photos
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isOpen && filteredImages[selectedImageIndex] && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center"
          >
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 md:top-8 md:right-8 z-50 p-3 text-white hover:text-[#d1f843] active:scale-95 transition-all cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-8 h-8 md:w-10 md:h-10" />
            </button>

            {/* Left/Right Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 text-white hover:text-[#d1f843] active:scale-95 transition-all cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-10 h-10 md:w-16 md:h-16" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 text-white hover:text-[#d1f843] active:scale-95 transition-all cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-10 h-10 md:w-16 md:h-16" />
            </button>

            {/* Image & Caption Container */}
            <div className="flex flex-col items-center justify-center max-w-[95vw] max-h-[90vh]">
              <motion.img 
                key={filteredImages[selectedImageIndex].id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                src={filteredImages[selectedImageIndex].url} 
                alt={filteredImages[selectedImageIndex].caption}
                className="max-w-[90vw] max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-white/90 text-center text-xs md:text-base font-semibold tracking-wide leading-relaxed mt-6 px-6 max-w-2xl"
              >
                {filteredImages[selectedImageIndex].caption}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
