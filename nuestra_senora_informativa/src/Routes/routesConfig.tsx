
import { Donation, Galery, Main, Volunteer } from '.';
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
    }
  ];

  return { isLoading, routes: mappedRoutes };
};

export default useRoutesConfig;