import  { Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import useRoutesConfig from './routesConfig';
import LoadingSpinner from '../Components/LoadingSpinner';

const AppRouter = () => {
  const { isLoading, routes } = useRoutesConfig();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
