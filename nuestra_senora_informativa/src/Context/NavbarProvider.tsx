import React, { useState, useEffect, ReactNode } from 'react';
import NavbarContext from './NavbarContextType';

const NavbarProvider = ({ children }: { children: ReactNode }) => {
  const [openDropdowns, setOpenDropdowns] = useState<Record<number, boolean>>({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDropdown = (id: number) => {
    setOpenDropdowns((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <NavbarContext.Provider
      value={{
        openDropdowns,
        setOpenDropdowns,
        isMenuOpen,
        setIsMenuOpen,
        isScrolled,
        setIsScrolled,
        toggleDropdown,
        toggleMenu,
        handleScroll,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};

export default NavbarProvider;
