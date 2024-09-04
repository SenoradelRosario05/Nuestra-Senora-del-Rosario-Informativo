import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDonationType } from '../Hooks/useDonationType';
import { useSiteSettings } from '../../../Hooks/useSiteSettings';

const DonationForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showOtherInput, setShowOtherInput] = useState(false);
  const [selectedMethods, setSelectedMethods] = useState([]);
  const { data: siteSettings } = useSiteSettings();
  const siteSettingsData = siteSettings ? siteSettings[0] : null;
  const { data: donationTypes, isLoading, isError } = useDonationType();

  const onSubmit = (data: any) => {
    console.log('Form Data:', data);
  };

  const handleDonationTypeChange = (e: any) => {
    const value = e.target.value;
    const selectedType = donationTypes.find((type: any) => type.name_DonationType === value);
    if (selectedType) {
      setSelectedMethods(selectedType.methodDonations);
    }
    setShowOtherInput(selectedType.methodDonations.length > 0);
  };

  if (isLoading) return <div>Cargando...</div>;
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
              {...register('nombre', { required: 'El nombre es obligatorio' })}
              type="text"
              className={`w-full h-[60px] px-4 bg-white shadow border-2 border-[#317591] rounded-md text-lg font-Poppins ${errors.nombre ? 'border-red-500' : ''}`}
            />
            {errors.nombre && <p className="text-red-500 text-sm mt-1 font-Poppins">{errors.nombre.message}</p>}
          </div>
          {/* Primer Apellido */}
          <div>
            <label className="block text-[#317591] text-3xl font-normal font-Poppins mb-2" htmlFor="primerApellido">
              Primer Apellido
            </label>
            <input
              id="primerApellido"
              {...register('primerApellido', { required: 'El primer apellido es obligatorio' })}
              type="text"
              className={`w-full h-[60px] px-4 bg-white shadow border-2 border-[#317591] rounded-md text-lg font-Poppins ${errors.primerApellido ? 'border-red-500' : ''}`}
            />
            {errors.primerApellido && <p className="text-red-500 text-sm mt-1 font-Poppins">{errors.primerApellido.message}</p>}
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
              {...register('segundoApellido', { required: 'El segundo apellido es obligatorio' })}
              type="text"
              className={`w-full h-[60px] px-4 bg-white shadow border-2 border-[#317591] rounded-md text-lg font-Poppins ${errors.segundoApellido ? 'border-red-500' : ''}`}
            />
            {errors.segundoApellido && <p className="text-red-500 text-sm mt-1 font-Poppins">{errors.segundoApellido.message}</p>}
          </div>
          {/* Cédula */}
          <div>
            <label className="block text-[#317591] text-3xl font-normal font-Poppins mb-2" htmlFor="cedula">
              Cédula
            </label>
            <input
              id="cedula"
              {...register('cedula', { required: 'La cédula es obligatoria' })}
              type="text"
              className={`w-full h-[60px] px-4 bg-white shadow border-2 border-[#317591] rounded-md text-lg font-Poppins ${errors.cedula ? 'border-red-500' : ''}`}
            />
            {errors.cedula && <p className="text-red-500 text-sm mt-1 font-Poppins">{errors.cedula.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Correo */}
          <div>
            <label className="block text-[#317591] text-3xl font-normal font-Poppins mb-2" htmlFor="correo">
              Correo Electrónico
            </label>
            <input
              id="correo"
              {...register('correo', { required: 'El correo es obligatorio', pattern: { value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, message: 'Correo inválido' } })}
              type="email"
              className={`w-full h-[60px] px-4 bg-white shadow border-2 border-[#317591] rounded-md text-lg font-Poppins ${errors.correo ? 'border-red-500' : ''}`}
            />
            {errors.correo && <p className="text-red-500 text-sm mt-1 font-Poppins">{errors.correo.message}</p>}
          </div>
          {/* Teléfono */}
          <div>
            <label className="block text-[#317591] text-3xl font-normal font-Poppins mb-2" htmlFor="telefono">
              Teléfono
            </label>
            <input
              id="telefono"
              {...register('telefono', { required: 'El teléfono es obligatorio' })}
              type="tel"
              className={`w-full h-[60px] px-4 bg-white shadow border-2 border-[#317591] rounded-md text-lg font-Poppins ${errors.telefono ? 'border-red-500' : ''}`}
            />
            {errors.telefono && <p className="text-red-500 text-sm mt-1 font-Poppins">{errors.telefono.message}</p>}
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
              {...register('fecha', { required: 'La fecha es obligatoria' })}
              type="date"
              className={`w-full h-[60px] px-4 bg-white shadow border-2 border-[#317591] rounded-md text-lg font-Poppins ${errors.fecha ? 'border-red-500' : ''}`}
            />
            {errors.fecha && <p className="text-red-500 text-sm mt-1 font-Poppins">{errors.fecha.message}</p>}
          </div>
          {/* Tipo de Donación */}
          <div>
            <label className="block text-[#317591] text-3xl font-normal font-Poppins mb-2" htmlFor="tipo-donacion">
              Tipo de Donación
            </label>
            <select
              id="tipo-donacion"
              {...register('tipoDonacion', { required: 'El tipo de donación es obligatorio' })}
              className={`w-full h-[60px] px-4 bg-white shadow border-2 border-[#317591] rounded-md text-lg font-Poppins ${errors.tipoDonacion ? 'border-red-500' : ''}`}
              onChange={handleDonationTypeChange}
            >
              <option value="">Selecciona un tipo de donación</option>
              {donationTypes.map((type: any) => (
                <option key={type.id_DonationType} value={type.name_DonationType}>
                  {type.name_DonationType}
                </option>
              ))}
            </select>
            {errors.tipoDonacion && <p className="text-red-500 text-sm mt-1 font-Poppins">{errors.tipoDonacion.message}</p>}
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
                {...register('metodoDonacion', { required: 'Por favor, seleccione el método de donación' })}
                className={`w-full h-[60px] px-4 bg-white shadow border-2 border-[#317591] rounded-md text-lg font-Poppins ${errors.metodoDonacion ? 'border-red-500' : ''}`}
              >
                <option value="">Selecciona un método</option>
                {selectedMethods.map((method: any) => (
                  <option key={method.id_MethodDonation} value={method.name_MethodDonation}>
                    {method.name_MethodDonation}
                  </option>
                ))}
              </select>
              {errors.metodoDonacion && <p className="text-red-500 text-sm mt-1 font-Poppins">{errors.metodoDonacion.message}</p>}
            </div>
          </div>
        )}

        {/* Enviar y Cancelar Buttons */}
        <div className="flex justify-center space-x-4">
          <button
            type="submit"
            className="mt-4 px-8 py-4 bg-[#317591] text-white text-xl font-bold rounded-md shadow-md hover:bg-[#27597a] transition-colors duration-300 font-Poppins"
          >
            Enviar Solicitud
          </button>
          <Link
            to="/"
            className="mt-4 px-8 py-4 bg-red-600 text-white text-xl font-bold rounded-md shadow-md hover:bg-red-700 transition-colors duration-300 font-Poppins"
          >
            Cancelar
          </Link>
        </div>
      </form>
    </div>
  );
};

export default DonationForm;