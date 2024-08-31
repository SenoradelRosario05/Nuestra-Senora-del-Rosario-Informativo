import React from 'react';
import { Donation, Galery, Main, Volunteer } from '.';
import useNavbarRoutes from './useExtractRoutes';

const useRoutesConfig = () => {
  const { routes, isLoading } = useNavbarRoutes();

  // Configuración de rutas mapeadas con componentes lazy loading
  const mappedRoutes = [
    {
      path: routes['Inicio'] || '/',
      element: <Main />
    },
    {
      path: routes['Donaciones'] || "/solicitudes/donaciones",
      element: <Donation />
    },
    {
        path: routes['Voluntariado'] || "/solicitudes/voluntariado",
        element: <Volunteer />
    },
    {
      path: routes['Galería'] || "/galeria",
      element: <Galery />
    }
  ];

  return { isLoading, routes: mappedRoutes };
};

export default useRoutesConfig;