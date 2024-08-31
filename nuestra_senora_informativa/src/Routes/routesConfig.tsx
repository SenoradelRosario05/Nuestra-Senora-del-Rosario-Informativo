import React from 'react';
import { Donation, Galery, Main, Volunteer } from '.';
import useNavbarRoutes from './useExtractRoutes';

const useRoutesConfig = () => {
  const { routes, isLoading } = useNavbarRoutes();

  // Configuración de rutas mapeadas con componentes lazy loading
  const mappedRoutes = [
    {
      path: routes['Inicio'] || '',
      element: <Main />
    },
    {
      path: routes['Donaciones'] || "",
      element: <Donation />
    },
    {
        path: routes['Voluntariado'] || "",
        element: <Volunteer />
    },
    {
      path: routes['Galería'] || "",
      element: <Galery />
    }
  ];

  return { isLoading, routes: mappedRoutes };
};

export default useRoutesConfig;