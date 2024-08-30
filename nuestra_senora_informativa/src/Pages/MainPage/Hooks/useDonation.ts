import { getDonationsSection } from '../../../Services/ServiceInformative';
import { useQuery } from 'react-query';

const useDonation = () => {
    return useQuery('donations', getDonationsSection);
}

export default useDonation