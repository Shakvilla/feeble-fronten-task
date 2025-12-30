'use client'
import {FC} from 'react'
import {motion} from 'framer-motion'


/**
 * Hamburger Menu Icon Component
 * Animated hamburger that transforms to X when open
 */
export const HamburgerIcon: FC<{ isOpen: boolean }> = ({ isOpen }) => (
  <div className="relative w-6 h-5 flex flex-col justify-center items-center">
    <motion.span
      className="absolute w-6 h-0.5 bg-gray-700 rounded-full"
      animate={{
        rotate: isOpen ? 45 : 0,
        y: isOpen ? 0 : -6,
      }}
      transition={{ duration: 0.2 }}
    />
    <motion.span
      className="absolute w-6 h-0.5 bg-gray-700 rounded-full"
      animate={{
        opacity: isOpen ? 0 : 1,
        scaleX: isOpen ? 0 : 1,
      }}
      transition={{ duration: 0.15 }}
    />
    <motion.span
      className="absolute w-6 h-0.5 bg-gray-700 rounded-full"
      animate={{
        rotate: isOpen ? -45 : 0,
        y: isOpen ? 0 : 6,
      }}
      transition={{ duration: 0.2 }}
    />
  </div>
);