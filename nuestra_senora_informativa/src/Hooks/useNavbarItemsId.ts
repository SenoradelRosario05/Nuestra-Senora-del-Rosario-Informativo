
import { getNavbarItemsId } from '../Services/ServiceInformative';
import { useQuery } from 'react-query';

const useNavbarItemsId = (id: number) => {
    const { data, isLoading, isError } = useQuery(['navbarItemsId', id], () => getNavbarItemsId(id));

    return {
      data,
      isLoading, 
      isError
    }
}

export default useNavbarItemsId