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

const DonationForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormDonationCreateDto>();
  const [showOtherInput, setShowOtherInput] = useState(false);
  const [selectedMethods, setSelectedMethods] = useState([]);
  const { isOpen, openModal, closeModal } = useModal();
  const { data: siteSettings } = useSiteSettings();
  const siteSettingsData = siteSettings ? siteSettings[0] : null;
  const { data: donationTypes, isLoading, isError } = useDonationType();
  const navigate = useNavigate();

  // Mutación para enviar el formulario
  const mutation = usePostFormDonation();

  // Función para manejar el envío del formulario
  const onSubmit = (data: FormDonationCreateDto) => {
    mutation.mutate(data, {
      onSuccess: () => {
        reset();
        openModal();
        setTimeout(() => {
          closeModal(); 
          navigate('/'); // Redirige al '/'
        }, 3000);
      }
    });
  };

  // Maneja el cambio de tipo de donación y ajusta los métodos de donación
  const handleDonationTypeChange = (e: any) => {
    const value = parseInt(e.target.value);
    const selectedType = donationTypes.find((type: any) => type.id_DonationType === value);
    if (selectedType) {
      setSelectedMethods(selectedType.methodDonations);
    }
    setShowOtherInput(selectedType?.methodDonations.length > 0);
  };

  // Cargar mientras se obtienen los tipos de donación
  if (isLoading) return <LoadingSpinner/>;
  if (isError) return <div>Error al cargar los tipos de donación</div>;

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-[#0d313f] text-[28px] sm:text-[35px] font-normal font-Poppins uppercase text-center">
        Donaciones
      </h2>
      <div className="flex items-center justify-center my-6 w-full max-w-lg">
        <div className="w-1/4 sm:w-1/3 md:w-1/2 border-t-2 border-[#0d313f]"></div>
        <img className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] mx-4" src={siteSettingsData?.icon_HGA_Url} alt="Logo de la institución" />
        <div className="w-1/4 sm:w-1/3 md:w-1/2 border-t-2 border-[#0d313f]"></div>
      </div>
      <h3 className="text-[#0d313f] text-[28px] font-normal font-Poppins uppercase text-center mb-8">
        Información del Donante
      </h3>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl space-y-6">
        {/* Nombre */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-[#317591] text-3xl font-normal font-Poppins mb-2" htmlFor="nombre">
              Nombre
            </label>
            <input
              id="nombre"
              {...register('Dn_Name', { required: 'El nombre es obligatorio' })}
              type="text"
              className={`w-full h-[60px] px-4 bg-white shadow border-2 border-[#317591] rounded-md text-lg font-Poppins ${errors.Dn_Name ? 'border-red-500' : ''}`}
            />
            {errors.Dn_Name && <p className="text-red-500 text-sm mt-1 font-Poppins">{errors.Dn_Name.message}</p>}
          </div>
          {/* Primer Apellido */}
          <div>
            <label className="block text-[#317591] text-3xl font-normal font-Poppins mb-2" htmlFor="primerApellido">
              Primer Apellido
            </label>
            <input
              id="primerApellido"
              {...register('Dn_Lastname1', { required: 'El primer apellido es obligatorio' })}
              type="text"
              className={`w-full h-[60px] px-4 bg-white shadow border-2 border-[#317591] rounded-md text-lg font-Poppins ${errors.Dn_Lastname1 ? 'border-red-500' : ''}`}
            />
            {errors.Dn_Lastname1 && <p className="text-red-500 text-sm mt-1 font-Poppins">{errors.Dn_Lastname1.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Segundo Apellido */}
          <div>
            <label className="block text-[#317591] text-3xl font-normal font-Poppins mb-2" htmlFor="segundoApellido">
              Segundo Apellido
            </label>
            <input
              id="segundoApellido"
              {...register('Dn_Lastname2', { required: 'El segundo apellido es obligatorio' })}
              type="text"
              className={`w-full h-[60px] px-4 bg-white shadow border-2 border-[#317591] rounded-md text-lg font-Poppins ${errors.Dn_Lastname2 ? 'border-red-500' : ''}`}
            />
            {errors.Dn_Lastname2 && <p className="text-red-500 text-sm mt-1 font-Poppins">{errors.Dn_Lastname2.message}</p>}
          </div>
          {/* Cédula */}
          <div>
            <label className="block text-[#317591] text-3xl font-normal font-Poppins mb-2" htmlFor="cedula">
              Cédula
            </label>
            <input
              id="cedula"
              {...register('Dn_Cedula', {
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
              type="text"
              className={`w-full h-[60px] px-4 bg-white shadow border-2 border-[#317591] rounded-md text-lg font-Poppins ${errors.Dn_Cedula ? 'border-red-500' : ''}`}
            />
            {errors.Dn_Cedula && <p className="text-red-500 text-sm mt-1 font-Poppins">{errors.Dn_Cedula.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Correo Electrónico */}
          <div>
            <label className="block text-[#317591] text-3xl font-normal font-Poppins mb-2" htmlFor="email">
              Correo Electrónico
            </label>
            <input
              id="email"
              {...register('Dn_Email', { 
                required: 'El correo es obligatorio',
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: 'Correo inválido'
                }
              })}
              type="email"
              className={`w-full h-[60px] px-4 bg-white shadow border-2 border-[#317591] rounded-md text-lg font-Poppins ${errors.Dn_Email ? 'border-red-500' : ''}`}
            />
            {errors.Dn_Email && <p className="text-red-500 text-sm mt-1 font-Poppins">{errors.Dn_Email.message}</p>}
          </div>
          {/* Teléfono */}
          <div>
            <label className="block text-[#317591] text-3xl font-normal font-Poppins mb-2" htmlFor="telefono">
              Teléfono
            </label>
            <input
              id="telefono"
              {...register('Dn_Phone', { required: 'El teléfono es obligatorio' })}
              type="tel"
              className={`w-full h-[60px] px-4 bg-white shadow border-2 border-[#317591] rounded-md text-lg font-Poppins ${errors.Dn_Phone ? 'border-red-500' : ''}`}
            />
            {errors.Dn_Phone && <p className="text-red-500 text-sm mt-1 font-Poppins">{errors.Dn_Phone.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Fecha de Entrega */}
          <div>
            <label className="block text-[#317591] text-3xl font-normal font-Poppins mb-2" htmlFor="fecha">
              Fecha de Entrega
            </label>
            <input
              id="fecha"
              {...register('Delivery_date', { required: 'La fecha es obligatoria' })}
              type="date"
              className={`w-full h-[60px] px-4 bg-white shadow border-2 border-[#317591] rounded-md text-lg font-Poppins ${errors.Delivery_date ? 'border-red-500' : ''}`}
            />
            {errors.Delivery_date && <p className="text-red-500 text-sm mt-1 font-Poppins">{errors.Delivery_date.message}</p>}
          </div>
          {/* Tipo de Donación */}
          <div>
            <label className="block text-[#317591] text-3xl font-normal font-Poppins mb-2" htmlFor="tipo-donacion">
              Tipo de Donación
            </label>
            <select
              id="tipo-donacion"
              {...register('Id_DonationType', { required: 'El tipo de donación es obligatorio' })}
              className={`w-full h-[60px] px-4 bg-white shadow border-2 border-[#317591] rounded-md text-lg font-Poppins ${errors.Id_DonationType ? 'border-red-500' : ''}`}
              onChange={handleDonationTypeChange}
            >
              <option value="">Selecciona un tipo de donación</option>
              {donationTypes.map((type: any) => (
                <option key={type.id_DonationType} value={type.id_DonationType}>
                  {type.name_DonationType}
                </option>
              ))}
            </select>
            {errors.Id_DonationType && <p className="text-red-500 text-sm mt-1 font-Poppins">{errors.Id_DonationType.message}</p>}
          </div>
        </div>

        {/* Método de Donación */}
        {showOtherInput && selectedMethods.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-[#317591] text-3xl font-normal font-Poppins mb-2" htmlFor="metodo-donacion">
                Método de Donación
              </label>
              <select
                id="metodo-donacion"
                {...register('Id_MethodDonation', { required: 'Por favor, seleccione el método de donación' })}
                className={`w-full h-[60px] px-4 bg-white shadow border-2 border-[#317591] rounded-md text-lg font-Poppins ${errors.Id_MethodDonation ? 'border-red-500' : ''}`}
              >
                <option value="">Selecciona un método</option>
                {selectedMethods.map((method: any) => (
                  <option key={method.id_MethodDonation} value={method.id_MethodDonation}>
                    {method.name_MethodDonation}
                  </option>
                ))}
              </select>
              {errors.Id_MethodDonation && <p className="text-red-500 text-sm mt-1 font-Poppins">{errors.Id_MethodDonation.message}</p>}
            </div>
          </div>
        )}

        {/* Estado del formulario */}
        {mutation.isError && <div className="text-red-500">Error al enviar la donación.</div>}
        {mutation.isLoading && <div>Enviando datos...</div>}

        {/* Enviar y Cancelar Buttons */}
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