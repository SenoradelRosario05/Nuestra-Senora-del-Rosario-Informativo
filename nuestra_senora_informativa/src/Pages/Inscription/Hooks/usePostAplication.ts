import { useMutation, UseMutationResult } from 'react-query';
import { postFormVolunteer } from '../../../Services/ServiceInformative';
import { FormVolunteerCreateDto } from '../../../Types/informativeType';

export const usePostAplication = (): UseMutationResult<any, Error, FormVolunteerCreateDto> => {
    return useMutation(postFormVolunteer, {
        onSuccess: (data) => {
            console.log('Voluntariado enviado con éxito:', data);
        },
        onError: (error) => {
            console.error('Error al enviar voluntariado:', error);
        }
    });
};