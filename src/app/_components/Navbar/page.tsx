'use client'
// Core React and NextJs Imports
import {FC, useState} from 'react'

//Components & Local Imports

import { MobileMenu } from '@/app/_components/Navbar/MobileMenu';
import { DesktopMenu } from '@/app/_components/Navbar/DesktopMenu';




export const Navbar: FC = () => {
    
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
    
          {/* Desktop Menu  */}

      <DesktopMenu isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />


      {/* Mobile Menu Drawer */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </>
  );
};

