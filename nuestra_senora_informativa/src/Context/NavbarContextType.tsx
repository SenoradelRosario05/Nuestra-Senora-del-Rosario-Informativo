import React from 'react';

type NavbarContextType = {
  openDropdowns: Record<number, boolean>;
  setOpenDropdowns: React.Dispatch<React.SetStateAction<Record<number, boolean>>>;
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isScrolled: boolean;
  setIsScrolled: React.Dispatch<React.SetStateAction<boolean>>;
  toggleDropdown: (id: number) => void;
  toggleMenu: () => void;
  handleScroll: () => void;
};

const NavbarContext = React.createContext<NavbarContextType | undefined>(undefined);

export default NavbarContext;
