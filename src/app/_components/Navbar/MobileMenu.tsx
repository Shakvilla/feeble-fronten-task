'use client'
// CORE React and NextJs Imports

import {FC, useEffect,  useCallback} from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Third-Party packages imports
import {motion, AnimatePresence} from 'framer-motion'

// COMPONENTS & LOCAL IMPORTS
import { Button } from '@/app/_components/ui/Button';
// import CoupLogo from '/images/CoupLogo.png'
import { navLinks } from '@/utils/constants';




/**
 * Mobile Menu Drawer Component
 */
export const MobileMenu: FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {


  // Handle escape key to close menu
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
  // This ensures the effect and cleanup ONLY run when necessary.
  if (!isOpen) return;

  document.addEventListener('keydown', handleKeyDown);
  document.body.style.overflow = 'hidden';

  // 3. Cleanup (Only runs if the Setup ran)
  return () => {
    document.removeEventListener('keydown', handleKeyDown);
    document.body.style.overflow = '';
  };

  }, [isOpen, handleKeyDown]);



  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl z-50 flex flex-col"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            {/* Header with close button */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              {/* <CoupLogo className="h-8 w-auto" /> */}
              <Link href="/">
                <Image src="/images/CoupLogo.svg" alt="Coup Logo" width={100} height={34} priority  quality={80}/>
              </Link>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue"
                aria-label="Close menu"
              >
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 overflow-y-auto p-6" role="menu">
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: link.id * 0.05 + 0.1 }}
                  >
                    <Link
                      href={link.href}
                      role="menuitem"
                      onClick={onClose}
                      className="block py-4 px-4 text-lg font-medium text-gray-700 hover:text-brand-blue hover:bg-blue-50 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-inset"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* CTA Section */}
            <div className="p-6 border-t border-gray-100 space-y-3">
              <Button 
                variant="ghost" 
                size="md" 
                fullWidth 
                onClick={onClose}
                className="justify-center"
              >
                Login
              </Button>
              <Button 
                variant="primary" 
                size="md" 
                fullWidth 
                onClick={onClose}
                className="justify-center"
              >
                Contact Sales
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};