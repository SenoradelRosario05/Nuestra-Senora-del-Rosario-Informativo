import { useForm, SubmitHandler } from 'react-hook-form';
import { AplicationFormDTO } from '../../../Types/informativeType';
import { useModal } from '../../../Hooks/useModal';
import { Link, useNavigate } from 'react-router-dom';
import { useSiteSettings } from '../../../Hooks/useSiteSettings';
import { usePostAplication } from '../Hooks/usePostAplication';
import { ConfirmationModal, InputForm, RateLimitModal } from '../../../Components';

const AplicationForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<AplicationFormDTO>();
  const { isOpen, openModal, closeModal } = useModal();
  const { data: siteSettings } = useSiteSettings();
  const siteSettingsData = siteSettings ? siteSettings[0] : null;
  const navigate = useNavigate();
  const {mutation,rateLimitExceeded, setRateLimitExceeded } = usePostAplication();

  const onSubmit: SubmitHandler<AplicationFormDTO> = async (data) => {
    mutation.mutate(data, {
      onSuccess: () => {
        reset();
        openModal();
        setTimeout(() => {
          closeModal();
          navigate('/');
        }, 4000);
      },
      onError: (error) => {
        console.error('Error al enviar el formulario de aplicación:', error);
      }
    });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-20 py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-[#0d313f] text-[28px] sm:text-[35px] font-normal font-Poppins uppercase text-center">
        Solicitud de Ingreso
      </h2>
      <div className="flex items-center justify-center my-6 w-full max-w-lg">
        <div className="w-1/4 sm:w-1/3 md:w-1/2 border-t-2 border-[#0d313f]"></div>
        <img className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] mx-4" src={siteSettingsData?.icon_HGA_Url} alt="Logo de la institución" />
        <div className="w-1/4 sm:w-1/3 md:w-1/2 border-t-2 border-[#0d313f]"></div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <InputForm
            label="Nombre"
            id="name_AP"
            error={errors.name_AP?.message}
            placeholder='Nombre del adulto mayor'
            {...register('name_AP', { required: 'El nombre es obligatorio' })}
          />
          <InputForm
            label="Primer Apellido"
            id="lastname1_AP"
            error={errors.lastName1_AP?.message}
            placeholder='Primer apellido adulto mayor'
            {...register('lastName1_AP', { required: 'El primer apellido es obligatorio' })}
          />
          <InputForm
            label="Segundo Apellido"
            id="lastname2_AP"
            error={errors.lastName2_AP?.message}
            placeholder='Segundo apellido adulto mayor'
            {...register('lastName2_AP', { required: 'El segundo apellido es obligatorio' })}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <InputForm
            label="Edad"
            id="age_AP"
            type="number"
            placeholder='Edad adulto mayor'
            error={errors.age_AP?.message}
            {...register('age_AP', {
              required: 'La edad es obligatoria',
              valueAsNumber: true,
              min: { value: 65, message: 'La edad debe ser mayor o igual a 65 años' },
            })}
          />
          <InputForm
            label="Cédula"
            id="cedula_AP"
            error={errors.cedula_AP?.message}
            placeholder='Ejemplo: 102340567'
            {...register('cedula_AP', {
              required: 'La cédula es obligatoria',
              minLength: { value: 9, message: 'La cédula debe tener exactamente 9 caracteres' },
              maxLength: { value: 9, message: 'La cédula debe tener exactamente 9 caracteres' },
              pattern: { value: /^[0-9]+$/, message: 'La cédula solo debe contener números' },
            })}
          />
        </div>

        <InputForm
          label="Domicilio"
          id="location"
          error={errors.location_AP?.message}
          placeholder='Domicilio del adulto mayor'
          {...register('location_AP', { required: 'Domicilio Requerido' })}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <InputForm
            label="Nombre del Encargado"
            id="name_GD"
            placeholder='Nombre del encargado del adulto mayor'
            error={errors.guardianName?.message}
            {...register('guardianName', { required: 'El nombre del encargado es obligatorio' })}
          />
          <InputForm
            label="Primer Apellido del Encargado"
            id="lastname1_GD"
            placeholder='Primer apellido del encargado del adulto mayor'
            error={errors.guardianLastName1?.message}
            {...register('guardianLastName1', { required: 'El primer apellido del encargado es obligatorio' })}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <InputForm
            label="Segundo Apellido del Encargado"
            id="lastname2_GD"
            placeholder='Segundo apellido del encargado del adulto mayor'
            error={errors.guardianLastName2?.message}
            {...register('guardianLastName2', { required: 'El segundo apellido del encargado es obligatorio' })}
          />
          <InputForm
            label="Cédula del Encargado"
            id="cedula_GD"
            error={errors.guardianCedula?.message}
            placeholder='Ejemplo: 102340567' 
            {...register('guardianCedula', {
              required: 'La cédula del encargado es obligatoria',
              minLength: { value: 9, message: 'La cédula debe tener exactamente 9 caracteres' },
              maxLength: { value: 9, message: 'La cédula debe tener exactamente 9 caracteres' },
              pattern: { value: /^[0-9]+$/, message: 'La cédula solo debe contener números' },
            })}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <InputForm
            label="Teléfono del Encargado"
            id="phone_GD"
            type="tel"
            placeholder='Ejemplo: 88888888'
            error={errors.guardianPhone?.message}
            {...register('guardianPhone', {
              required: 'El teléfono del encargado es obligatorio',
              pattern: { value: /^[0-9]+$/, message: 'El teléfono solo debe contener números' },
            })}
          />
          <InputForm
            label="Correo Electrónico del Encargado"
            id="email_GD"
            type="email"
            error={errors.guardianEmail?.message}
            placeholder='Ejemplo: correo@dominio.com'
            {...register('guardianEmail', {
              required: 'El correo electrónico del encargado es obligatorio',
              pattern: { value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, message: 'Correo inválido' },
            })}
          />
        </div>

        <div className="flex justify-center space-x-4">
          <button
            type="submit"
            className="mt-4 px-8 py-4 bg-[#317591] text-white text-xl font-bold rounded-md shadow-md hover:bg-[#27597a] transition-colors duration-300 font-Poppins"
            tabIndex={0}
            disabled={mutation.isLoading}
          >
           {mutation.isLoading ? 'Enviando...' : 'Enviar Solicitud'}
          </button>
          <Link
            to="/"
            className="mt-4 px-8 py-4 bg-red-600 text-white text-xl font-bold rounded-md shadow-md hover:bg-red-700 transition-colors duration-300 font-Poppins"
            tabIndex={1}
          >
            Cancelar
          </Link>
        </div>
      </form>

      <ConfirmationModal isOpen={isOpen} onClose={closeModal} />
      <RateLimitModal
        isOpen={rateLimitExceeded}
        onClose={() => setRateLimitExceeded(false)}
      />
    </div>
  );
};

export default AplicationForm;