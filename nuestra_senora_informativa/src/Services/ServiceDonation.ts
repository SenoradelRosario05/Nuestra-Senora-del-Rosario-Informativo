import axios from "axios";
import { FormDonationCreateDto } from "../Types/TypeFormDonation";

const URLBase =  'http://localhost:5074/api';

export const getDonationsSection = async () => {
  const response = await axios.get(`${URLBase}/DonationsSection`);
  return response.data;
};

export const getDonationType = async () => {
    const response = await axios.get(`${URLBase}/DonationType`);
    return response.data;
  }  

  export const postFormDonation = async (donationData: FormDonationCreateDto): Promise<any> => {
    try {
      // Hacemos la solicitud POST enviando el objeto tipado FormDonationCreateDto
      const response = await axios.post(`${URLBase}/FormDonation`, donationData);
      return response.data; // Retorna la respuesta del backend
    } catch (error) {
      console.error('Error al enviar los datos de donación:', error);
      throw error;  // Lanza el error para que pueda ser manejado por React Query u otros mecanismos
    }
  };
  
  