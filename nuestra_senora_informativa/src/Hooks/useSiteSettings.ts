import { useQuery } from "react-query";
import { getIcons } from "../Services/ServiceInformative";

export const useSiteSettings = () => {
    return useQuery('icons', getIcons);
  };