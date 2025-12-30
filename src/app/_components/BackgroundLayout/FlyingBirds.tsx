import {FC} from 'react'

// Third-Party Packages imports
import {motion} from 'framer-motion'


// LOCAL & COMPONENT IMPORTS
import {LeftOffViewBird, OffRightBottomBird} from '@/app/_components/SVGComponents'

export const FlyingBirds: FC = () => {
  return (
    <div className="fixed inset-0 z-50 pointer-events-none select-none">
      {/* Bird flying from bottom-right to top-left */}
      <motion.div 
         className="absolute"
         style={{ 
           bottom: '-100px', 
           right: '-100px',
         }}
         initial={{ 
           x: 0, 
           y: 0, 
         }}
         animate={{ 
           x: '-120vw', 
           y: '-70vh', 
         }}
         transition={{ 
           duration: 8,
           ease: "linear",
           delay: 0.8,
         }}
      >
         <OffRightBottomBird className="w-[120px] h-[50px]" />
      </motion.div>

      {/* Bird flying from bottom-left to top-right */}
      <motion.div 
         className="absolute"
         style={{ 
           bottom: '-100px', 
           left: '-100px',
         }}
         initial={{ 
           x: 0, 
           y: 0, 
         }}
         animate={{ 
           x: '120vw', 
           y: '-70vh', 
         }}
         transition={{ 
           duration: 8,
           ease: "linear",
           delay: 1.3,
         }}
      >
         <LeftOffViewBird className="w-[100px] h-[72px]" />
      </motion.div>
    </div>
  );
};