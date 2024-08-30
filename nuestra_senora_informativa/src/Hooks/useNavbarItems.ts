import { useQuery } from "react-query";
import { getNavbarItems } from "../Services/ServiceInformative";


export const useNavbarItems = () => {
    return useQuery('navbarItems', getNavbarItems);
  };