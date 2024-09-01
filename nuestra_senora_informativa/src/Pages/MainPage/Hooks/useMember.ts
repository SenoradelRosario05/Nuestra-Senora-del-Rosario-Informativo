import { useQuery } from 'react-query';
import { getMemberSection } from '../../../Services/ServiceInformative';

const useMember = () => {
    return useQuery('member', getMemberSection);
}

export default useMember