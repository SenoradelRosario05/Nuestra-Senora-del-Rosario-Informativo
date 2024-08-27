import { getContacts } from '../Services/ServiceInformative';
import { useQuery } from 'react-query';

const useContact = () => {
    return useQuery('contacts', getContacts);
}

export default useContact