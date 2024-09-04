import { useQuery } from 'react-query';
import { getNavbarItems } from '../Services/ServiceInformative';

// Función para extraer rutas específicas de los datos de navegación
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

// Hook para obtener rutas específicas
const useNavbarRoutes = () => {
  const { data, isLoading, isError } = useQuery('navbarItems', getNavbarItems);

  const routes = data ? extractRoutes(data, ['Donaciones', 'Galería', 'Voluntariado, Proceso de ingreso, Servicios']) : {};

  return {
    routes,
    isLoading,
    isError
  };
};

export default useNavbarRoutes;