import { getAboutUsSection } from '../../../Services/ServiceInformative';
import { useQuery } from 'react-query';

const useAboutUs = () => {
  return useQuery('aboutUs', getAboutUsSection);
}

export default useAboutUs