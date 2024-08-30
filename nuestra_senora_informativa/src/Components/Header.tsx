import React, { useState, useEffect } from 'react';
import { useNavbarItems } from '../Hooks/useNavbarItems';
import { useSiteSettings } from '../Hooks/useSiteSettings';
import { NavbarItem } from '../Types/informativeType'; // Asegúrate de importar tu tipo

function Header() {
  const [openDropdowns, setOpenDropdowns] = useState<Record<number, boolean>>({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { data: navbarItems, error: navbarError, isLoading: navbarLoading } = useNavbarItems();
  const { data: siteSettings, error: siteSettingsError, isLoading: siteSettingsLoading } = useSiteSettings();

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

  if (navbarLoading || siteSettingsLoading) return <div>Loading...</div>;
  if (navbarError || siteSettingsError) return <div>Error loading data</div>;

  const siteTitle = siteSettings?.[0]?.siteTitle || 'Default Title';
  const siteIconUrl = siteSettings?.[0]?.icon_HGA_Url || 'https://via.placeholder.com/53x52';

  return (
    <>
      <header className={`fixed w-full z-20 transition-colors duration-300 top-0 left-0 ${isScrolled ? 'bg-[#317591]' : 'bg-transparent'}`}>
        <div className="w-full p-4 flex items-center justify-between">
          {/* Logo y Título */}
          <a href="#" className="flex items-center space-x-3">
            <img src={siteIconUrl} className="h-8 w-8" alt="Logo" />
            <span className="text-xl font-semibold text-white whitespace-nowrap">{siteTitle}</span>
          </a>

          {/* Botón de Menú para dispositivos móviles */}
          <button
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Menú de Navegación para pantallas grandes */}
          <nav className="hidden md:flex space-x-6">
            <ul className="flex space-x-5 text-sm font-medium">
              {navbarItems?.map((item: NavbarItem) => (
                <li key={item.id_Nav_It} className="relative group">
                  <div className="flex items-center">
                    <a href={item.urlNav} className="text-white hover:text-blue-500">
                      {item.title_Nav}
                    </a>
                    {item.children && item.children.length > 0 && (
                      <button
                        onClick={() => toggleDropdown(item.id_Nav_It)}
                        className="ml-2"
                      >
                        <svg
                          className={`w-4 h-4 transform transition-transform ${openDropdowns[item.id_Nav_It] ? 'rotate-90' : ''}`}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="white"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    )}
                  </div>
                  {item.children && item.children.length > 0 && (
                    <ul className={`absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg ${openDropdowns[item.id_Nav_It] ? 'block' : 'hidden'}`}>
                      {item.children.map((child: NavbarItem) => (
                        <li key={child.id_Nav_It}>
                          <a href={child.urlNav} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                            {child.title_Nav}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Menú "off-canvas" para dispositivos móviles */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-gray-800 text-white transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-30`}
      >
        <div className="p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Menú</h2>
          <button onClick={toggleMenu}>
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ul className="space-y-2 p-4">
          {navbarItems?.map((item: NavbarItem) => (
            <li key={item.id_Nav_It}>
              <div className="flex justify-between items-center">
                <a href={item.urlNav} className="block text-lg font-medium hover:bg-gray-700 p-2 rounded">
                  {item.title_Nav}
                </a>
                {item.children && item.children.length > 0 && (
                  <button onClick={() => toggleDropdown(item.id_Nav_It)}>
                    <svg
                      className={`w-5 h-5 transform transition-transform ${openDropdowns[item.id_Nav_It] ? 'rotate-90' : ''}`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                )}
              </div>
              {item.children && item.children.length > 0 && openDropdowns[item.id_Nav_It] && (
                <ul className="pl-4 space-y-1 mt-2">
                  {item.children.map((child: NavbarItem) => (
                    <li key={child.id_Nav_It}>
                      <a href={child.urlNav} className="block text-sm font-normal hover:bg-gray-700 p-2 rounded">
                        {child.title_Nav}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Fondo oscuro para cuando el menú está abierto */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={toggleMenu}
        />
      )}
    </>
  );
}

export default Header;
