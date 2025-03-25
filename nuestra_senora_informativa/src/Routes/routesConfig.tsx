
// src/routes/useRoutesConfig.tsxss


import { Donation, Galery, Main, Registration, VoluntarieForm, Volunteer } from '.';
import useNavbarRoutes from './useExtractRoutes';

import AplicationForm from '../Pages/Inscription/components/AplicationForm';
import DonationRequeriments from '../Pages/DonationRequeriments/DonationRequeriments';

const useRoutesConfig = () => {
  const { routes, isLoading } = useNavbarRoutes();

  const mappedRoutes = [
    {
      path: routes['Inicio'] || '/',
      element: <Main />
    },
    {
      path: routes['Donaciones'] || '/donaciones',
      element: <DonationRequeriments />
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
    {
      path: routes['Formulario_Voluntariado'] || '/formulario_voluntariado',
      element: <VoluntarieForm />
    },
    {
      path: routes['proceso-ingreso'] || '/solicitud-formulario',
      element: <AplicationForm/>
    },{
      path: '/solicitudes/donaciones',
      element: <Donation />
    }
  ];

  return { isLoading, routes: mappedRoutes };
};

export default useRoutesConfig;
