import { useQuery } from 'react-query'
import { getGalleryCatgory } from '../../../Services/ServiceInformative'

const useGalleryCategory = () => {
return useQuery('galleryCategories', getGalleryCatgory)
}

export default useGalleryCategory