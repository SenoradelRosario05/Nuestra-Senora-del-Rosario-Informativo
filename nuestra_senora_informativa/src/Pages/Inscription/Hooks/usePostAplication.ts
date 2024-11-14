import { useMutation, UseMutationResult } from 'react-query';
import { postFormAplication } from '../../../Services/ServiceInformative';
import { AplicationFormDTO } from '../../../Types/informativeType';

export const usePostAplication = (): UseMutationResult<any, Error, AplicationFormDTO> => {
  return useMutation<any, Error, AplicationFormDTO>(postFormAplication, {
    onSuccess: (data) => {
      console.log('Solicitud de aplicación enviada con éxito:', data);
      // Aquí puedes agregar lógica adicional en caso de éxito
    },
    onError: (error) => {
      console.error('Error al enviar la solicitud de aplicación:', error);
      // Aquí puedes manejar el error, como mostrar un mensaje al usuario
    }
  });
};
