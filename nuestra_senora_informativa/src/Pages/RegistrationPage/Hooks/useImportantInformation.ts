import { getImportantInformation } from '../../../Services/ServiceInformative'
import { useQuery } from 'react-query'

const useImportantInformation = () => {
    return useQuery('importantInformation', getImportantInformation)
}

export default useImportantInformation