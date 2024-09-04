import {  useQuery } from "react-query"
import { getServicesSection } from "../../../Services/ServiceInformative";




const useServices = () => {
  return useQuery('services', getServicesSection);
}

export default useServices