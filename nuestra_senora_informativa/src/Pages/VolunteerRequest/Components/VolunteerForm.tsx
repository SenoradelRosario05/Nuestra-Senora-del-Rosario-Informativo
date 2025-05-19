import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { FormVolunteerCreateDto } from '../../../Types/informativeType';
import { useSiteSettings } from '../../../Hooks/useSiteSettings';
import { useModal } from '../../../Hooks/useModal';
import { useVoluntarieType } from '../Hooks/useVoluntarieType';
import { usePostFormVolunteer } from '../Hooks/usePostVolunteerFrm';
import {
  InputForm,
  CustomSelect,
  ConfirmationModal,
  RateLimitModal,
  LoadingSpinner
} from '../../../Components';

const VolunteerForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    watch,
    formState: { errors },
    reset
  } = useForm<FormVolunteerCreateDto>();
  const { data: siteSettings } = useSiteSettings();
  const siteSettingsData = siteSettings?.[0] ?? null;
  const { data: voluntarieTypes, isLoading, isError } = useVoluntarieType();
  const { isOpen, openModal, closeModal } = useModal();
  const navigate = useNavigate();
  const { mutation, rateLimitExceeded, setRateLimitExceeded } = usePostFormVolunteer();

  // Fecha mínima para End_Date = Delivery_Date + 1 día
  const startDate = watch('Delivery_Date');
  const today = new Date().toISOString().split('T')[0];
  const minEndDate = startDate
    ? new Date(new Date(startDate).getTime() + 86400000).toISOString().split('T')[0]
    : today;

  useEffect(() => {
    if (startDate) {
      setValue('End_Date', minEndDate as any);
    }
  }, [startDate, minEndDate, setValue]);

  const onSubmit = (data: FormVolunteerCreateDto) => {
    // Clear previous rate-limit modal if any
    setRateLimitExceeded(false);

    mutation.mutate(data, {
      onSuccess: () => {
        reset();
        openModal();
        setTimeout(() => {
          closeModal();
          navigate('/');
        }, 4000);
      },
      onError: (err: any) => {
        const status = err.response?.status;
        const apiErrs = err.response?.data?.errors as Record<string, string[]> | undefined;

        // 1) Validación 400
        if (status === 400 && apiErrs) {
          const msgs =
            apiErrs.end_Date?.join(' ') ||
            Object.values(apiErrs).flat().join('. ');
          // error en los inputs
          setError('Delivery_Date', { type: 'manual', message: msgs });
          setError('End_Date',      { type: 'manual', message: msgs });
          return;
        }

        // 2) Rate limit → error en inputs + mostrar modal
        if (status === 429) {
          const msg = 'Ya has enviado una solicitud en este lapso de tiempo';
          setError('Delivery_Date', { type: 'manual', message: msg });
          setError('End_Date',      { type: 'manual', message: msg });
          setRateLimitExceeded(true);
          return;
        }

        // 3) Otros errores: muestra en inputs
        const fallback = 'Ya has enviado una solicitud en este lapso de tiempo';
        setError('Delivery_Date', { type: 'manual', message: fallback });
        setError('End_Date',      { type: 'manual', message: fallback });
      }
    });
  };

  if (isLoading) return <LoadingSpinner />;
  if (isError)    return <div>Error al cargar los tipos de voluntariado</div>;

  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-20 py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-[#0d313f] text-[28px] sm:text-[35px] font-normal font-Poppins uppercase text-center">
        Voluntariado
      </h2>
      <div className="flex items-center justify-center my-6 w-full max-w-lg">
        <div className="w-1/4 sm:w-1/3 md:w-1/2 border-t-2 border-[#0d313f]" />
        {siteSettingsData && (
          <img
            className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] mx-4"
            src={siteSettingsData.icon_HGA_Url}
            alt="Logo de la institución"
          />
        )}
        <div className="w-1/4 sm:w-1/3 md:w-1/2 border-t-2 border-[#0d313f]" />
      </div>
      <h3 className="text-[#0d313f] text-[28px] font-normal font-Poppins uppercase text-center mb-8">
        Información del Voluntario
      </h3>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <InputForm

            label="Cédula"
            id="cedula"
            placeholder="Ejem: 102340567"
            error={errors.Vn_Cedula?.message}
            {...register('Vn_Cedula', {
              required: 'La cédula es obligatoria',
              minLength: { value: 9, message: 'Debe tener 9 caracteres' },
              maxLength: { value: 9, message: 'Debe tener 9 caracteres' },
              pattern: { value: /^\d+$/, message: 'Solo números' }
            })}
          />
          <InputForm

            label="Nombre"
            id="nombre"
            placeholder="Nombre del voluntario"
            error={errors.Vn_Name?.message}
            {...register('Vn_Name', {
              required: 'El nombre es obligatorio',
              maxLength: { value: 25, message: 'Máximo 25 caracteres' },
              pattern: { value: /^[A-Za-z\s]+$/, message: 'Solo letras y espacios' }
            })}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <InputForm
            label="Primer apellido"
            id="primerApellido"
            placeholder="Primer apellido"
            error={errors.Vn_Lastname1?.message}
            {...register('Vn_Lastname1', {
              required: 'El primer apellido es obligatorio',
              maxLength: { value: 25, message: 'Máximo 25 caracteres' },
              pattern: { value: /^[A-Za-z\s]+$/, message: 'Solo letras y espacios' }
            })}
          />
          <InputForm
            label="Segundo apellido"
            id="segundoApellido"
            placeholder="Segundo apellido"
            error={errors.Vn_Lastname2?.message}
            {...register('Vn_Lastname2', {
              required: 'El segundo apellido es obligatorio',
              maxLength: { value: 25, message: 'Máximo 25 caracteres' },
              pattern: { value: /^[A-Za-z\s]+$/, message: 'Solo letras y espacios' }
            })}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <InputForm
            label="Correo electrónico"
            id="correo"
            type="email"
            placeholder="correo@dominio.com"
            error={errors.Vn_Email?.message}
            {...register('Vn_Email', {
              required: 'El correo es obligatorio',
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: 'Correo inválido'
              }
            })}
          />
          <InputForm
            label="Teléfono"
            id="telefono"
            type="tel"
            placeholder="88888888"
            error={errors.Vn_Phone?.message}
            {...register('Vn_Phone', {
              required: 'El teléfono es obligatorio',
              pattern: { value: /^\d+$/, message: 'Solo números' },
              minLength: { value: 8, message: 'Debe tener 8 dígitos' },
              maxLength: { value: 8, message: 'Debe tener 8 dígitos' }
            })}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <InputForm
            label="Fecha de inicio"
            id="fechaInicio"
            type="date"
            min={today}
            error={errors.Delivery_Date?.message}
            {...register('Delivery_Date', {
              required: 'La fecha de inicio es obligatoria'
            })}
          />
          <InputForm
            label="Fecha de fin"
            id="fechaFin"
            type="date"
            min={minEndDate}
            error={errors.End_Date?.message}
            {...register('End_Date', {
              required: 'La fecha de fin es obligatoria'
            })}
          />
        </div>

        <div>
          <CustomSelect
            label="Tipo de voluntariado"
            id="tipoVoluntariado"
            error={errors.Id_VoluntarieType?.message}
            options={voluntarieTypes.map((t: { id_VoluntarieType: any; name_voluntarieType: any; }) => ({
              value: t.id_VoluntarieType,
              label: t.name_voluntarieType
            }))}
            {...register('Id_VoluntarieType', {
              required: 'El tipo es obligatorio'
            })}
          />
        </div>

        <div className="flex justify-center space-x-4">
          <button
            type="submit"
            className="mt-4 px-8 py-4 bg-[#317591] text-white text-xl font-bold rounded-md shadow-md hover:bg-[#27597a] transition-colors duration-300 font-Poppins"
            disabled={mutation.isLoading}
          >
            {mutation.isLoading ? 'Enviando...' : 'Enviar Solicitud'}
          </button>
          <Link
            to="/"
            className="mt-4 px-8 py-4 bg-red-600 text-white text-xl font-bold rounded-md shadow-md hover:bg-red-700 transition-colors duration-300 font-Poppins"
          >
            Cancelar
          </Link>
        </div>
      </form>

      <ConfirmationModal isOpen={isOpen} onClose={closeModal} />
      <RateLimitModal isOpen={rateLimitExceeded} onClose={() => setRateLimitExceeded(false)} />
    </div>
  );
};

export default VolunteerForm;
