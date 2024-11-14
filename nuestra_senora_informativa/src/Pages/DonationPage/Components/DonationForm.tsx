import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDonationType } from '../Hooks/useDonationType';
import { useSiteSettings } from '../../../Hooks/useSiteSettings';
import { FormDonationCreateDto } from '../../../Types/informativeType';
import { usePostFormDonation } from '../Hooks/usePostFormDonation';
import ConfirmationModal from '../../../Components/ConfirmationModal';
import { useModal } from '../../../Hooks/useModal';
import LoadingSpinner from '../../../Components/LoadingSpinner';
import CustomSelect from '../../../Components/CustomSelect';
import InputForm from '../../../Components/InputForm';

const DonationForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormDonationCreateDto>();
  const [showOtherInput, setShowOtherInput] = useState(false);
  const [selectedMethods, setSelectedMethods] = useState([]);
  const { isOpen, openModal, closeModal } = useModal();
  const { data: siteSettings } = useSiteSettings();
  const siteSettingsData = siteSettings ? siteSettings[0] : null;
  const { data: donationTypes, isLoading, isError } = useDonationType();
  const navigate = useNavigate();

  const mutation = usePostFormDonation();

  const onSubmit = (data: FormDonationCreateDto) => {
    const deliveryDate = new Date(`${data.Delivery_date}T00:00:00`);
    const payload: FormDonationCreateDto = { ...data, Delivery_date: deliveryDate };
  
    mutation.mutate(payload, {
      onSuccess: () => {
        reset();
        openModal();
        setTimeout(() => {
          closeModal();
          navigate('/');
        }, 4000);
      },
    });
  };

  const handleDonationTypeChange = (e: any) => {
    const value = parseInt(e.target.value);
    const selectedType = donationTypes.find((type: any) => type.id_DonationType === value);
    if (selectedType) {
      setSelectedMethods(selectedType.methodDonations);
    }
    setShowOtherInput(selectedType?.methodDonations.length > 0);
  };

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <div>Error al cargar los tipos de donación</div>;

  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-20 py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-[#0d313f] text-[28px] sm:text-3xl font-normal font-Poppins uppercase text-center">
        Donaciones
      </h2>
      <div className="flex items-center justify-center my-6 w-full max-w-lg">
        <div className="w-1/4 sm:w-1/3 md:w-1/2 border-t-2 border-[#0d313f]"></div>
        <img className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] mx-4" src={siteSettingsData?.icon_HGA_Url} alt="Logo de la institución" />
        <div className="w-1/4 sm:w-1/3 md:w-1/2 border-t-2 border-[#0d313f]"></div>
      </div>
      <h3 className="text-[#0d313f] text-[28px] sm:text-3xl font-normal font-Poppins uppercase text-center mb-8">
        Información del Donante
      </h3>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <InputForm
            label="Nombre"
            id="nombre"
            error={errors.Dn_Name?.message}
            {...register('Dn_Name', { required: 'El nombre es obligatorio' })}
          />
          <InputForm
            label="Primer Apellido"
            id="primerApellido"
            error={errors.Dn_Lastname1?.message}
            {...register('Dn_Lastname1', { required: 'El primer apellido es obligatorio' })}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <InputForm
            label="Segundo Apellido"
            id="segundoApellido"
            error={errors.Dn_Lastname2?.message}
            {...register('Dn_Lastname2', { required: 'El segundo apellido es obligatorio' })}
          />
          <InputForm
            label="Cédula"
            id="cedula"
            error={errors.Dn_Cedula?.message}
            {...register('Dn_Cedula', {
              required: 'La cédula es obligatoria',
              minLength: { value: 9, message: 'La cédula debe tener exactamente 9 caracteres' },
              maxLength: { value: 9, message: 'La cédula debe tener exactamente 9 caracteres' },
            })}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <InputForm
            label="Correo Electrónico"
            id="email"
            error={errors.Dn_Email?.message}
            {...register('Dn_Email', { 
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
            error={errors.Dn_Phone?.message}
            {...register('Dn_Phone', { required: 'El teléfono es obligatorio' })}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <InputForm
            label="Fecha de Entrega"
            id="fecha"
            type="date"
            error={errors.Delivery_date?.message}
            {...register('Delivery_date', { required: 'La fecha es obligatoria' })}
          />
          <CustomSelect
            label="Tipo de Donación"
            id="tipo-donacion"
            error={errors.Id_DonationType?.message}
            options={donationTypes.map((type: any) => ({
              value: type.id_DonationType,
              label: type.name_DonationType,
            }))}
            {...register('Id_DonationType', { required: 'El tipo de donación es obligatorio' })}
            onChange={handleDonationTypeChange}
          />
        </div>

        {showOtherInput && selectedMethods.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <CustomSelect
              label="Método de Donación"
              id="metodo-donacion"
              error={errors.Id_MethodDonation?.message}
              options={selectedMethods.map((method: any) => ({
                value: method.id_MethodDonation,
                label: method.name_MethodDonation,
              }))}
              {...register('Id_MethodDonation', { required: 'Por favor, seleccione el método de donación' })}
            />
          </div>
        )}

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
    </div>
  );
};

export default DonationForm;
