import { useQuery } from 'react-query';
import { getGalleryItem } from '../../../Services/ServiceInformative';

const useGalery = () => {
    return useQuery('galleryData', getGalleryItem);
}

export default useGalery