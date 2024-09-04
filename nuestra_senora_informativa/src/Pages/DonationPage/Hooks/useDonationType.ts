import { useQuery } from 'react-query';
import { getDonationType } from '../../../Services/ServiceInformative';

export const useDonationType = () => {
  return useQuery('donationTypes', getDonationType);
};