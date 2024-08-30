import { useQuery } from 'react-query'
import { getVolunteerSection } from '../../../Services/ServiceInformative'

const useVolunteer = () => {
  return useQuery('volunteer', getVolunteerSection)
}

export default useVolunteer