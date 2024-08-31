import useNavbarRoutes from './useExtractRoutes';
import { Donation, Galery, Main } from '.';

const useRoutesConfig = () => {
  const { routes, isLoading, isError } = useNavbarRoutes();

  const mappedRoutes = [
    {
      path: routes['Inicio'] || '/',
      element: <Main />
    },
    {
      path: routes['Donaciones'] || "",
      element: <Donation />
    },
    {
      path: routes['Galería'] || "",
      element: <Galery />
    }
  ];

  return { isLoading, routes: mappedRoutes };
};

export default useRoutesConfig;