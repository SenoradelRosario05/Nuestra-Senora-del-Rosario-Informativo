import { getAdministrativeRequirements } from '../../../Services/ServiceInformative'
import { useQuery } from 'react-query'

const useRegistration = () => {
    return useQuery('requirements', getAdministrativeRequirements)
}

export default useRegistration