


import { useQuery } from 'react-query';
import { getSiteSettings } from '../Services/ServiceInformative';

const useSiteSettings = (id: number) => {
return useQuery(['siteSettings', id], () => getSiteSettings(id));
   
}

export default useSiteSettings