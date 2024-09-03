import { useQuery } from 'react-query';
import { getVolunteerProfile } from '../../../Services/ServiceInformative';

const useCardsVolunteerProfile = () => {
    return useQuery('cardsVolunteerProfile', getVolunteerProfile);
}

export default useCardsVolunteerProfile