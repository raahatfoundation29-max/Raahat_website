import { motion } from 'motion/react';
import { 
  Snowflake, 
  Utensils, 
  GraduationCap, 
  HeartHandshake, 
  Stethoscope, 
  Star 
} from 'lucide-react';

interface EventGraphicProps {
  category: string;
}

export default function EventGraphic({ category }: EventGraphicProps) {
  let gradients, Icon;

  switch (category) {
    case 'Winter Relief':
      gradients = {
        bg: 'bg-slate-900',
        blob1: 'bg-cyan-500',
        blob2: 'bg-blue-700'
      };
      Icon = Snowflake;
      break;
    case 'Community Meals':
    case 'Food Distribution':
      gradients = {
        bg: 'bg-slate-900',
        blob1: 'bg-orange-400',
        blob2: 'bg-red-500'
      };
      Icon = Utensils;
      break;
    case 'Education':
    case 'Youth Empowerment':
      gradients = {
        bg: 'bg-slate-900',
        blob1: 'bg-violet-500',
        blob2: 'bg-purple-700'
      };
      Icon = GraduationCap;
      break;
    case 'Eldercare':
      gradients = {
        bg: 'bg-slate-900',
        blob1: 'bg-teal-400',
        blob2: 'bg-emerald-600'
      };
      Icon = HeartHandshake;
      break;
    case 'Medical Aid':
      gradients = {
        bg: 'bg-slate-900',
        blob1: 'bg-blue-400',
        blob2: 'bg-indigo-500'
      };
      Icon = Stethoscope;
      break;
    default:
      gradients = {
        bg: 'bg-slate-900',
        blob1: 'bg-zinc-600',
        blob2: 'bg-slate-700'
      };
      Icon = Star;
      break;
  }

  return (
    <div className={`relative w-full h-full overflow-hidden ${gradients.bg}`}>
      {/* Mesh Gradients */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
          y: [0, -10, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className={`absolute -top-1/4 -left-1/4 w-3/4 h-3/4 rounded-full blur-3xl opacity-50 ${gradients.blob1}`}
      />
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          x: [0, -20, 0],
          y: [0, 20, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className={`absolute -bottom-1/4 -right-1/4 w-3/4 h-3/4 rounded-full blur-3xl opacity-50 ${gradients.blob2}`}
      />

      {/* Center Icon */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <Icon className="w-16 h-16 text-white/80 drop-shadow-xl" strokeWidth={1.5} />
      </div>
    </div>
  );
}
