'use client';

import React, { useState, useEffect, useRef } from 'react';

interface NavigationProps {
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Track current section for aria-current
  const [currentSection, setCurrentSection] = useState<string | null>(null);

  // Update current section based on URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1); // Remove #
      setCurrentSection(hash || null);
    };

    // Initial check
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Helper function to get aria-current attribute
  const getAriaCurrent = (sectionId: string) => {
    return currentSection === sectionId ? 'page' : undefined;
  };


  // Close menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(e.target as Node) &&
          buttonRef.current && !buttonRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Focus trap for mobile menu
  useEffect(() => {
    if (!isOpen) return;

    const menuContainer = menuRef.current;
    if (!menuContainer) return;

    // Get all focusable elements in the menu
    const getFocusableElements = () => {
      return Array.from(menuContainer.querySelectorAll('a[href], button:not([disabled])')) as HTMLElement[];
    };

    // Focus the first element when menu opens
    const focusableElements = getFocusableElements();
    if (focusableElements.length > 0) {
      focusableElements[0].focus();
    }

    // Handle Tab and Shift+Tab for focus trap
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      const focusableElements = getFocusableElements();
      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      const activeElement = document.activeElement;

      if (e.key === 'Tab') {
        if (e.shiftKey && activeElement === firstElement) {
          // Shift+Tab on first element: move to last element
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && activeElement === lastElement) {
          // Tab on last element: move to first element
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <nav role="navigation" aria-label="Main navigation" className={`glass sticky top-0 z-50 w-full px-6 py-4 ${className}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo/Brand with Hover Effect and ARIA label */}
        <a href="#hero" className="text-xl font-bold text-white transition-colors duration-300 hover:text-teal hover-scale-sm" aria-label="Ambitious Realism Home">
          Ambitious Realism
        </a>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex space-x-8">
          <a href="#hero" className="text-white/70 link-hover hover:text-teal transition-colors duration-300" aria-current={getAriaCurrent('hero')}>
            Hero
          </a>
          <a href="#about" className="text-white/70 link-hover hover:text-teal transition-colors duration-300" aria-current={getAriaCurrent('about')}>
            About
          </a>
          <a href="#services" className="text-white/70 link-hover hover:text-teal transition-colors duration-300" aria-current={getAriaCurrent('services')}>
            Services
          </a>
          <a href="#how-it-works" className="text-white/70 link-hover hover:text-teal transition-colors duration-300" aria-current={getAriaCurrent('how-it-works')}>
            How It Works
          </a>
          <a href="#examples" className="text-white/70 link-hover hover:text-teal transition-colors duration-300" aria-current={getAriaCurrent('examples')}>
            Examples
          </a>
          <a href="#pricing" className="text-white/70 link-hover hover:text-teal transition-colors duration-300" aria-current={getAriaCurrent('pricing')}>
            Pricing
          </a>
          <a href="#faq" className="text-white/70 link-hover hover:text-teal transition-colors duration-300" aria-current={getAriaCurrent('faq')}>
            FAQ
          </a>
          <a href="#contact" className="text-white/70 link-hover hover:text-teal transition-colors duration-300" aria-current={getAriaCurrent('contact')}>
            Contact
          </a>
        </div>

        {/* Mobile Menu Button with Enhanced Hover and ARIA attributes */}
        <div className="md:hidden">
          <button
            ref={buttonRef}
            onClick={toggleMenu}
            className="text-white hover:text-teal transition-transform duration-300 hover:scale-110"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu with Animation and ARIA attributes */}
      <div
        ref={menuRef}
        id="mobile-menu"
        aria-hidden={!isOpen}
        className={`${isOpen ? 'block' : 'hidden'} md:hidden glass-panel transition-all duration-300 ease-in-out transform fade-in-down`}
      >
        <div className="px-6 py-4 space-y-4">
          <a href="#hero" className="block text-white/70 link-hover hover:text-teal transition-colors duration-300" aria-current={getAriaCurrent('hero')}>
            Hero
          </a>
          <a href="#about" className="block text-white/70 link-hover hover:text-teal transition-colors duration-300" aria-current={getAriaCurrent('about')}>
            About
          </a>
          <a href="#services" className="block text-white/70 link-hover hover:text-teal transition-colors duration-300" aria-current={getAriaCurrent('services')}>
            Services
          </a>
          <a href="#how-it-works" className="block text-white/70 link-hover hover:text-teal transition-colors duration-300" aria-current={getAriaCurrent('how-it-works')}>
            How It Works
          </a>
          <a href="#examples" className="block text-white/70 link-hover hover:text-teal transition-colors duration-300" aria-current={getAriaCurrent('examples')}>
            Examples
          </a>
          <a href="#pricing" className="block text-white/70 link-hover hover:text-teal transition-colors duration-300" aria-current={getAriaCurrent('pricing')}>
            Pricing
          </a>
          <a href="#faq" className="block text-white/70 link-hover hover:text-teal transition-colors duration-300" aria-current={getAriaCurrent('faq')}>
            FAQ
          </a>
          <a href="#contact" className="block text-white/70 link-hover hover:text-teal transition-colors duration-300" aria-current={getAriaCurrent('contact')}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;