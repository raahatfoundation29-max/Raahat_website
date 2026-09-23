import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';

const getOptimizedUrl = (rawUrl: string, width: number) => {
  if (!rawUrl.includes('/upload/')) return rawUrl;
  return rawUrl.replace('/upload/', `/upload/w_${width},f_auto,q_auto/`);
};

interface GalleryItem {
  id: number;
  rawUrl: string;
  category: string;
  alt: string;
}

const galleryData = [
  // Old Age
  { id: 1, rawUrl: "https://res.cloudinary.com/dri0jvjdw/image/upload/v1790063732/Gemini_Generated_Image_xlaw1oxlaw1oxlaw_dnoxqb.png", category: "Old Age", alt: "Support and care for the elderly" },
  { id: 2, rawUrl: "https://res.cloudinary.com/dri0jvjdw/image/upload/v1790063732/Gemini_Generated_Image_e330y5e330y5e330_zemvoi.png", category: "Old Age", alt: "Community gathering for senior citizens" },
  { id: 3, rawUrl: "https://res.cloudinary.com/dri0jvjdw/image/upload/v1790063732/Gemini_Generated_Image_m4end3m4end3m4en_q3kw0b.png", category: "Old Age", alt: "Providing essential resources for the elderly" },
  { id: 4, rawUrl: "https://res.cloudinary.com/dri0jvjdw/image/upload/v1790063729/WhatsApp_Image_2026-09-21_at_11.44.27_PM_swh0pr.jpg", category: "Old Age", alt: "Volunteers interacting with old age community members" },
  
  // Community
  { id: 5, rawUrl: "https://res.cloudinary.com/dri0jvjdw/image/upload/v1790063750/WhatsApp_Image_2026-09-21_at_11.41.25_PM_loy74m.jpg", category: "Community", alt: "Community gathering and support initiative" },
  { id: 6, rawUrl: "https://res.cloudinary.com/dri0jvjdw/image/upload/v1790063749/WhatsApp_Image_2026-09-21_at_11.41.00_PM_nqxlo0.jpg", category: "Community", alt: "Volunteers engaging with local community members" },
  { id: 7, rawUrl: "https://res.cloudinary.com/dri0jvjdw/image/upload/v1790063749/WhatsApp_Image_2026-09-21_at_11.33.53_PM_dccs8q.jpg", category: "Community", alt: "Group photo of community impact drive" },
  { id: 8, rawUrl: "https://res.cloudinary.com/dri0jvjdw/image/upload/v1790063748/WhatsApp_Image_2026-09-21_at_7.58.12_PM_ticx7f.jpg", category: "Community", alt: "Distribution of resources in the community" },
  { id: 9, rawUrl: "https://res.cloudinary.com/dri0jvjdw/image/upload/v1790063748/WhatsApp_Image_2026-09-21_at_7.57.39_PM_xz0yki.jpg", category: "Community", alt: "Community members participating in local event" },
  { id: 10, rawUrl: "https://res.cloudinary.com/dri0jvjdw/image/upload/v1790063747/WhatsApp_Image_2026-08-03_at_9.05.52_PM_yelxl1.jpg", category: "Community", alt: "Raahat Foundation community building activities" },
  { id: 11, rawUrl: "https://res.cloudinary.com/dri0jvjdw/image/upload/v1790063747/WhatsApp_Image_2026-08-03_at_9.04.08_PM_jq2yae.jpg", category: "Community", alt: "Connecting with residents during a community drive" },
  
  // Nature
  { id: 12, rawUrl: "https://res.cloudinary.com/dri0jvjdw/image/upload/v1790063771/WhatsApp_Image_2026-09-21_at_11.41.44_PM_mt0uv3.jpg", category: "Nature", alt: "Nature preservation activities" },
  { id: 13, rawUrl: "https://res.cloudinary.com/dri0jvjdw/image/upload/v1790063770/WhatsApp_Image_2026-09-21_at_11.40.11_PM_vgyeqq.jpg", category: "Nature", alt: "Environmental support drive" },
  { id: 14, rawUrl: "https://res.cloudinary.com/dri0jvjdw/image/upload/v1790063770/WhatsApp_Image_2026-09-21_at_11.39.49_PM_wo3ofv.jpg", category: "Nature", alt: "Nature and environmental conservation" },
  { id: 15, rawUrl: "https://res.cloudinary.com/dri0jvjdw/image/upload/v1790063769/WhatsApp_Image_2026-09-21_at_11.39.27_PM_jpddqn.jpg", category: "Nature", alt: "Community engaging with nature" },
  { id: 16, rawUrl: "https://res.cloudinary.com/dri0jvjdw/image/upload/v1790063769/WhatsApp_Image_2026-09-21_at_11.36.13_PM_q6955d.jpg", category: "Nature", alt: "Group gathering for nature initiative" },

  // Children
  { id: 17, rawUrl: "https://res.cloudinary.com/dri0jvjdw/image/upload/v1790063788/WhatsApp_Image_2026-09-21_at_11.42.10_PM_jj2lp1.jpg", category: "Children", alt: "Supporting children's education and well-being" },
  { id: 18, rawUrl: "https://res.cloudinary.com/dri0jvjdw/image/upload/v1790063788/WhatsApp_Image_2026-09-21_at_11.39.03_PM_f1sws2.jpg", category: "Children", alt: "Volunteers interacting with local children" },
  { id: 19, rawUrl: "https://res.cloudinary.com/dri0jvjdw/image/upload/v1790063787/WhatsApp_Image_2026-09-21_at_7.55.16_PM_af4t4y.jpg", category: "Children", alt: "Distribution drive for kids in the community" },
  { id: 20, rawUrl: "https://res.cloudinary.com/dri0jvjdw/image/upload/v1790063786/WhatsApp_Image_2026-09-20_at_11.25.27_AM1_y0tmxr.jpg", category: "Children", alt: "Spreading smiles among children" },
  { id: 21, rawUrl: "https://res.cloudinary.com/dri0jvjdw/image/upload/v1790063786/WhatsApp_Image_2026-09-20_at_11.25.27_AM_spjeiy.jpg", category: "Children", alt: "Group photo with children during a foundation event" },
  { id: 22, rawUrl: "https://res.cloudinary.com/dri0jvjdw/image/upload/v1790063785/WhatsApp_Image_2026-04-18_at_4.59.15_PM_1_dyclb9.jpg", category: "Children", alt: "Children participating in community activities" }
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const categories = ['All', 'Community', 'Nature', 'Children', 'Old Age'];

  const filteredImages = activeCategory === 'All'
    ? galleryData
    : galleryData.filter((item) => item.category === activeCategory);

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
    <div className="w-full min-h-screen bg-[#ecf0ef] font-sans selection:bg-[#d1f843]/30 pt-24 md:pt-36 flex flex-col">
      {/* Section 1: Main Header & Grid */}
      <div className="max-w-7xl mx-auto flex flex-col items-center px-5 md:px-8 pb-16 lg:pb-24 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10 md:mb-12 pt-4 md:pt-6"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#005840] mb-4 uppercase">
            Moments of Impact
          </h1>
          <p className="text-sm md:text-base text-[#005840]/80 max-w-xl mx-auto font-medium leading-relaxed">
            A glimpse into the lives we've touched and the communities we've built over the years.
          </p>
        </motion.div>

        {/* Category Filter Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setSelectedImageIndex(0);
              }}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === category
                  ? 'bg-[#d1f843] text-[#005840]'
                  : 'bg-white/50 text-[#005840]/70 hover:bg-[#005840]/10 border border-[#005840]/10 backdrop-blur-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <motion.div layout className="columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-6 w-full">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => {
                  setSelectedImageIndex(index);
                  setIsOpen(true);
                }}
                className="break-inside-avoid mb-4 md:mb-6 overflow-hidden rounded-[24px] bg-[#005840]/5 relative group cursor-pointer"
              >
                <img
                  src={getOptimizedUrl(item.rawUrl, 600)}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto block transition-transform duration-700 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Section 2: Watch What We Do Video Section */}
      <section className="w-full py-16 md:py-24 bg-white px-5 md:px-8 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-12 flex flex-col items-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-4xl font-bold text-[#005840] tracking-tight mb-3 uppercase"
            >
              Watch What We Do
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-sm md:text-base text-[#005840]/80 max-w-xl mx-auto font-medium"
            >
              On the ground with our core team.
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto w-full">
            <div className="aspect-video w-full rounded-[24px] relative overflow-hidden shadow-md border border-gray-100 bg-[#005840]/10">
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/zdo1WKw8mo0?si=6omGpGH2lXnWItbA" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Submit Your Photos CTA Bottom Strip */}
      <section className="w-full bg-[#005840] text-white py-16 px-5 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto gap-6 w-full text-center md:text-left">
          <div>
            <h2 className="text-xl md:text-3xl font-bold tracking-tight">Have photos from the field?</h2>
            <p className="text-xs md:text-sm text-white/80 mt-2 font-medium">If you volunteered with us recently, we'd love to feature your perspective.</p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <a
              href="mailto:raahatfoundation29@gmail.com?subject=Field Photos Submission"
              className="inline-block w-full md:w-auto text-center bg-[#d1f843] text-[#005840] font-bold px-8 py-3 rounded-full hover:brightness-95 transition-all text-xs md:text-sm uppercase tracking-wider shadow-sm"
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
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 md:top-8 md:right-8 z-50 p-3 text-white hover:text-[#d1f843] active:scale-95 transition-all cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-8 h-8 md:w-10 md:h-10" />
            </button>

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

            <div className="flex flex-col items-center justify-center max-w-[95vw] max-h-[90vh]">
              <motion.img
                key={filteredImages[selectedImageIndex].id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                src={getOptimizedUrl(filteredImages[selectedImageIndex].rawUrl, 1200)}
                alt={filteredImages[selectedImageIndex].alt}
                className="max-w-[90vw] max-h-[80vh] object-contain rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
