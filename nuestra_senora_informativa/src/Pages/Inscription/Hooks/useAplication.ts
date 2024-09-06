import { useQuery } from 'react-query';
import { getVoluntarieType } from '../../../Services/ServiceInformative';

export const useVoluntarieType = () => {
    return useQuery('voluntarieTypes', getVoluntarieType);
};