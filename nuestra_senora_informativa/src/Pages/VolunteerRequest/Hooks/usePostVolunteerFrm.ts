import { useMutation, UseMutationResult } from 'react-query';
import { useState } from 'react';
import {  FormVolunteerCreateDto } from '../../../Types/informativeType';
import { postFormVolunteer } from '../../../Services/ServiceInformative';

export const usePostFormVolunteer = (): {
  mutation: UseMutationResult<any, Error, FormVolunteerCreateDto>;
  rateLimitExceeded: boolean;
  setRateLimitExceeded: React.Dispatch<React.SetStateAction<boolean>>;
} => {
  const [rateLimitExceeded, setRateLimitExceeded] = useState(false);

  const mutation = useMutation<any, Error, FormVolunteerCreateDto>(postFormVolunteer, {
    onSuccess: () => {
      //console.log('Solicitud de voluntariado enviada con éxito:', data);
    },
    onError: (error: any) => {
      if (error.response?.status === 429) {
        setRateLimitExceeded(true);
      } else {
        console.error('Error al enviar la solicitud de voluntariado:', error);
      }
    },
  });

  return { mutation, rateLimitExceeded, setRateLimitExceeded };
};
