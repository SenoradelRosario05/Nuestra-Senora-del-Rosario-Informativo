import { useQuery } from 'react-query';
import { getTitles } from '../Services/ServiceInformative';

const useTitles = (titleId: number) => {
    const { data, isLoading, isError } = useQuery(['title', titleId], () => getTitles(titleId));

  return {
    data,
    isLoading, 
    isError
  }
}

export default useTitles