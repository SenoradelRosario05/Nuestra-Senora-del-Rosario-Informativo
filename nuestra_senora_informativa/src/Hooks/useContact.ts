
import { useQuery } from 'react-query';
import { getContacts } from '../Services/ServiceInformative';

const useContact = () => {
    return useQuery('contacts', getContacts);
}

export default useContact