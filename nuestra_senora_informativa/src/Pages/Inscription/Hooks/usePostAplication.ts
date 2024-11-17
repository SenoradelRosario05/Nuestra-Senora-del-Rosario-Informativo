import { useMutation, UseMutationResult } from 'react-query';
import { postFormAplication } from '../../../Services/ServiceInformative';
import { AplicationFormDTO } from '../../../Types/informativeType';
import { useState } from 'react';

export const usePostAplication = (): {
  mutation: UseMutationResult<any, Error, AplicationFormDTO>;
  rateLimitExceeded: boolean;
  setRateLimitExceeded: React.Dispatch<React.SetStateAction<boolean>>;
} => {
  const [rateLimitExceeded, setRateLimitExceeded] = useState(false);

  const mutation = useMutation<any, Error, AplicationFormDTO>(postFormAplication, {
    onSuccess: (data) => {
      console.log('Solicitud de aplicación enviada con éxito:', data);
    },
    onError: (error: any) => {
      if (error.response?.status === 429) {
        setRateLimitExceeded(true);
      } else {
        console.error('Error al enviar la solicitud de aplicación:', error);
      }
    },
  });

  return { mutation, rateLimitExceeded, setRateLimitExceeded };
};
