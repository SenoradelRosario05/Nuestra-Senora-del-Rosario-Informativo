import { useQuery } from 'react-query';
import { getNavbarItems } from '../Services/ServiceInformative';

const extractRoutes = (navItems: any[], pathsToFind: string[]) => {
  const routes: { [key: string]: string } = {};

  navItems.forEach((item) => {
    if (item.isActive) {
      if (pathsToFind.includes(item.title_Nav)) {
        routes[item.title_Nav] = item.urlNav;
      }

      if (item.children && item.children.length > 0) {
        const childRoutes = extractRoutes(item.children, pathsToFind);
        Object.assign(routes, childRoutes);
      }
    }
  });

  return routes;
};

const useNavbarRoutes = () => {
  const { data, isLoading, isError } = useQuery('navbarItems', getNavbarItems);

  const routes = data ? extractRoutes(data, ['Donaciones', 'Galería']) : {};

  return {
    routes,
    isLoading,
    isError
  };
};

export default useNavbarRoutes;
