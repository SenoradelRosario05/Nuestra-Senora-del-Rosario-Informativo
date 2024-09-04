
import { Donation, Galery, Main,  Registration,    Volunteer } from '.';
import useNavbarRoutes from './useExtractRoutes';

const useRoutesConfig = () => {
  const { routes, isLoading } = useNavbarRoutes();

  const mappedRoutes = [
    {
      path: routes['Inicio'] || '/',
      element: <Main />
    },
    {
      path: routes['Donaciones'] || '/donaciones',
      element: <Donation />
    },
    {
      path: routes['Voluntariado'] || '/voluntariado',
      element: <Volunteer />
    },
    {
      path: routes['Galería'] || '/galeria',
      element: <Galery />
    },
    {
      path: routes['Proceso_ingreso'] || '/proceso_ingreso',
      element: <Registration />
    },
   
   
  ];

  return { isLoading, routes: mappedRoutes };
};

export default useRoutesConfig;