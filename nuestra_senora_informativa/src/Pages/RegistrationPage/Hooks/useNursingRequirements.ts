import { getNursingRequirements } from '../../../Services/ServiceInformative'
import { useQuery } from 'react-query'

const useImportantInformation = () => {
    return useQuery('nursingRequeriments', getNursingRequirements)
}

export default useImportantInformation