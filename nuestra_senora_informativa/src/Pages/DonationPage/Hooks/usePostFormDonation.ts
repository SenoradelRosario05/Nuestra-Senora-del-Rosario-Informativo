import { useMutation, UseMutationResult, } from "react-query";
import { postFormDonation } from "../../../Services/ServiceInformative";
import { FormDonationCreateDto } from "../../../Types/informativeType";


export const usePostFormDonation = (): UseMutationResult<any, Error, FormDonationCreateDto> => {
    return useMutation<any, Error, FormDonationCreateDto>(postFormDonation, {
      onSuccess: (data) => {
        console.log('Donación enviada con éxito:', data);
        // Aquí puedes agregar lógica adicional en caso de éxito, como redirigir o mostrar un mensaje
      },
      onError: (error) => {
        console.error('Error al enviar la donación:', error);
        // Aquí puedes manejar el error, como mostrar un mensaje al usuario
      }
    });
  };