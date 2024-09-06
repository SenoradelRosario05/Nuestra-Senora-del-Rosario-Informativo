import axios from "axios";
import { FormVolunteerCreateDto } from "../Types/TypeFormVolunteer";

const URLBase =  'http://localhost:5074/api';

export const getVolunteerSection = async () => {
    const response = await axios.get(`${URLBase}/VolunteeringSection`);
    return response.data;
  };
  
  export const getVolunteerProfile = async () => {
    const response = await axios.get(`${URLBase}/VolunteerProfile`);
    return response.data;
  }
  
  export const getVoluntarieType = async () => {
    const response = await axios.get(`${URLBase}/VoluntarieType`);
    return response.data;
  };
  
  export const postFormVolunteer = async (donationData: FormVolunteerCreateDto): Promise<any> => {
    try {
      // Hacemos la solicitud POST enviando el objeto tipado FormDonationCreateDto
      const response = await axios.post(`${URLBase}/FormVoluntarie`, donationData);
      return response.data; // Retorna la respuesta del backend
    } catch (error) {
      console.error('Error al enviar los datos de donación:', error);
      throw error;  // Lanza el error para que pueda ser manejado por React Query u otros mecanismos
    }
  };
  