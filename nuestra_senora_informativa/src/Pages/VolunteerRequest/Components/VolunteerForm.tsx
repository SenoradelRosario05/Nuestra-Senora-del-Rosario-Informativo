import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { FormVolunteerCreateDto } from '../../../Types/informativeType';
import { useSiteSettings } from '../../../Hooks/useSiteSettings';
import { useModal } from '../../../Hooks/useModal';
import { useVoluntarieType } from '../Hooks/useVoluntarieType';
import { usePostFormVolunteer } from '../Hooks/usePostVolunteerFrm';
import {InputForm, CustomSelect, ConfirmationModal, RateLimitModal, LoadingSpinner} from '../../../Components';

const VolunteerForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormVolunteerCreateDto>();
  const { data: siteSettings } = useSiteSettings();
  const siteSettingsData = siteSettings ? siteSettings[0] : null;
  const { data: voluntarieTypes, isLoading, isError } = useVoluntarieType();
  const { isOpen, openModal, closeModal } = useModal();
  const navigate = useNavigate();

  const {mutation, setRateLimitExceeded, rateLimitExceeded} = usePostFormVolunteer();

  const onSubmit = (data: FormVolunteerCreateDto) => {
    mutation.mutate(data, {
      onSuccess: () => {
        reset();
        openModal();
        setTimeout(() => {
          closeModal();
          navigate('/');
        }, 4000);
      }
    });
  };

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <div>Error al cargar los tipos de voluntariado</div>;

  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-20 py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-[#0d313f] text-[28px] sm:text-[35px] font-normal font-Poppins uppercase text-center">
        Voluntariado
      </h2>
      <div className="flex items-center justify-center my-6 w-full max-w-lg">
        <div className="w-1/4 sm:w-1/3 md:w-1/2 border-t-2 border-[#0d313f]"></div>
        <img className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] mx-4" src={siteSettingsData?.icon_HGA_Url} alt="Logo de la institución" />
        <div className="w-1/4 sm:w-1/3 md:w-1/2 border-t-2 border-[#0d313f]"></div>
      </div>

      <h3 className="text-[#0d313f] text-[28px] font-normal font-Poppins uppercase text-center mb-8">
        Información del Voluntario
      </h3>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <InputForm
            label="Nombre"
            id="nombre"
            placeholder='Nombre del voluntario'
            error={errors.Vn_Name?.message}
            {...register('Vn_Name', { required: 'El nombre es obligatorio' })}
          />
          <InputForm
            label="Primer Apellido"
            id="primerApellido"
            placeholder='Primer apellido del voluntario'
            error={errors.Vn_Lastname1?.message}
            {...register('Vn_Lastname1', { required: 'El primer apellido es obligatorio' })}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <InputForm
            label="Segundo Apellido"
            id="segundoApellido"
            placeholder='Segundo apellido del voluntario'
            error={errors.Vn_Lastname2?.message}
            {...register('Vn_Lastname2', { required: 'El segundo apellido es obligatorio' })}
          />
          <InputForm
            label="Cédula"
            id="cedula"
            placeholder='Ejem: 102340567'
            error={errors.Vn_Cedula?.message}
            {...register('Vn_Cedula', {
              required: 'La cédula es obligatoria',
              minLength: {
                value: 9,
                message: 'La cédula debe tener exactamente 9 caracteres',
              },
              maxLength: {
                value: 9,
                message: 'La cédula debe tener exactamente 9 caracteres',
              },
            })}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <InputForm
            label="Correo Electrónico"
            id="correo"
            placeholder='Ejemplo: correo@dominio.com'
            type="email"
            error={errors.Vn_Email?.message}
            {...register('Vn_Email', {
              required: 'El correo es obligatorio',
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: 'Correo inválido',
              },
            })}
          />
          <InputForm
            label="Teléfono"
            id="telefono"
            placeholder='Ejemplo: 88888888'
            type="tel"
            error={errors.Vn_Phone?.message}
            {...register('Vn_Phone', { required: 'El teléfono es obligatorio' })}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <InputForm
            label="Fecha de Inicio"
            id="fechaInicio"
            type="date"
            error={errors.Delivery_Date?.message}
            {...register('Delivery_Date', { required: 'La fecha de inicio es obligatoria' })}
          />
          <InputForm
            label="Fecha de Fin"
            id="fechaFin"
            type="date"
            error={errors.End_Date?.message}
            {...register('End_Date', { required: 'La fecha de fin es obligatoria' })}
          />
        </div>

        <div>
          <CustomSelect
            label="Tipo de Voluntariado"
            id="tipoVoluntariado"
            error={errors.Id_VoluntarieType?.message}
            options={voluntarieTypes.map((type: any) => ({
              value: type.id_VoluntarieType,
              label: type.name_voluntarieType,
            }))}
            {...register('Id_VoluntarieType', { required: 'El tipo de voluntariado es obligatorio' })}
          />
        </div>

        <div className="flex justify-center space-x-4">
          <Link
            to="/"
            className="mt-4 px-8 py-4 bg-red-600 text-white text-xl font-bold rounded-md shadow-md hover:bg-red-700 transition-colors duration-300 font-Poppins"
            tabIndex={1}
          >
            Cancelar
          </Link>
          <button
            type="submit"
            className="mt-4 px-8 py-4 bg-[#317591] text-white text-xl font-bold rounded-md shadow-md hover:bg-[#27597a] transition-colors duration-300 font-Poppins"
            tabIndex={0}
            disabled={mutation.isLoading}
          >
            {mutation.isLoading ? 'Enviando...' : 'Enviar Solicitud'}
          </button>
        </div>
      </form>
      <ConfirmationModal isOpen={isOpen} onClose={closeModal} />
      <RateLimitModal isOpen={rateLimitExceeded} onClose={() => setRateLimitExceeded(false)} />
    </div>
  );
};

export default VolunteerForm;
