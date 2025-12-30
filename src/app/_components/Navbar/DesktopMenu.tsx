'use client'
// Core React and NextJs Imports

import Link from 'next/link';
import {FC} from 'react'
import Image from 'next/image'


// import CoupLogo from '/images/CoupLogo.png'
import { navLinks } from '@/utils/constants';
import { Button } from '@/app/_components/ui/Button';
import { HamburgerIcon } from '@/app/_components/Navbar/HamburgerIcon';


export const DesktopMenu: FC<{ isMobileMenuOpen: boolean; toggleMobileMenu: () => void }> = ({ isMobileMenuOpen, toggleMobileMenu })=>{

 return (
    <nav 
        className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 px-4 md:px-6 py-2.5 flex items-center justify-between w-full max-w-5xl h-[60px] md:h-[72px] transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
          {/* Logo */}
          <Link href="/" className="cursor-pointer group select-none" aria-label="Coup Home">
            <Image src="/images/CoupLogo.svg" alt="Coup Logo" width={100} height={100}  priority quality={80} />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1" role="menubar">
            {navLinks.map((link) => (
              <Link key={link.id} href={link.href} role="menuitem" className="text-[15px] font-medium text-gray-500 hover:text-brand-dark px-4 py-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="sm" 
              className="min-w-0 px-2"
            >
              Login
            </Button>
            
            <Button variant="primary" size="sm" className="min-w-0 px-6">
              Contact Sales
            </Button>
          </div>

          <Button
            variant="primary"
            size="sm"
            className="lg:hidden p-2 rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <HamburgerIcon isOpen={isMobileMenuOpen} />
          </Button>
        </div>
      </nav>
    )
}