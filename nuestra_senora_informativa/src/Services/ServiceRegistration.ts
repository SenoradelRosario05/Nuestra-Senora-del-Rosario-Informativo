import axios from "axios";

const URLBase =  'http://localhost:5074/api';

export const getRegistrationSection = async () => {
  const response = await axios.get(`${URLBase}/RegistrationSection`);
  console.log(response.data);
  return response.data;
}

export const getAdministrativeRequirements = async () => {
    const response = await axios.get(`${URLBase}/AdministrativeRequirements`);
    return response.data;
  }
  
  export const getImportantInformation = async () => {
    const response = await axios.get(`${URLBase}/ImportantInformation`);
    return response.data;
  }
  
  export const getNursingRequirements = async () => {  
    const response = await axios.get(`${URLBase}/NursingRequirements`);
    return response.data;
  }