import { useMutation, UseMutationResult } from 'react-query';
import { useState } from 'react';
import { FormDonationCreateDto } from '../../../Types/informativeType';
import { postFormDonation } from '../../../Services/ServiceInformative';

export const usePostFormDonation = (): {
  mutation: UseMutationResult<any, Error, FormDonationCreateDto>;
  rateLimitExceeded: boolean;
  setRateLimitExceeded: React.Dispatch<React.SetStateAction<boolean>>;
} => {
  const [rateLimitExceeded, setRateLimitExceeded] = useState(false);

  const mutation = useMutation<any, Error, FormDonationCreateDto>(postFormDonation, {
    onSuccess: (data) => {
      console.log('Solicitud de donación enviada con éxito:', data);
    },
    onError: (error: any) => {
      if (error.response?.status === 429) {
        setRateLimitExceeded(true);
      } else {
        console.error('Error al enviar la solicitud de donacion:', error);
      }
    },
  });

  return { mutation, rateLimitExceeded, setRateLimitExceeded };
};
