import { useQuery } from "react-query"
import { getRegistrationSection } from "../../../Services/ServiceInformative"





const useRegistration = () => {
return useQuery('registration', getRegistrationSection);  
}

export default useRegistration

