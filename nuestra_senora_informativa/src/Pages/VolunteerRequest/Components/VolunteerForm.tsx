import { useForm } from 'react-hook-form';
import { useSiteSettings } from '../../../Hooks/useSiteSettings';
import { FormVolunteerCreateDto } from '../../../Types/informativeType';
import { useVoluntarieType } from '../Hooks/useVoluntarieType';
import { usePostFormVolunteer } from '../Hooks/usePostVolunteerFrm';
import { Link } from 'react-router-dom';



const VolunteerForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormVolunteerCreateDto>(); // Usamos el tipo adecuado
  const { data: siteSettings } = useSiteSettings();
  const siteSettingsData = siteSettings ? siteSettings[0] : null;
  const { data: voluntarieTypes, isLoading, isError } = useVoluntarieType(); // Hook para obtener los tipos de voluntariado

  // Mutación para enviar el formulario
  const mutation = usePostFormVolunteer();

  // Función para manejar el envío del formulario
  const onSubmit = (data: FormVolunteerCreateDto) => {
    mutation.mutate(data, {
      onSuccess: () => {
        reset(); // Resetea el formulario tras el envío exitoso
      }
    });
  };

  // Cargar mientras se obtienen los tipos de voluntariado
  if (isLoading) return <div>Cargando...</div>;
  if (isError) return <div>Error al cargar los tipos de voluntariado</div>;

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
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
          <div>
            <label className="block text-[#317591] text-3xl font-normal font-Poppins mb-2" htmlFor="nombre">
              Nombre
            </label>
            <input
              id="nombre"
              {...register('Vn_Name', { required: 'El nombre es obligatorio' })}
              type="text"
              className={`w-full h-[60px] px-4 bg-white shadow border-2 border-[#317591] rounded-md text-lg font-Poppins ${errors.Vn_Name ? 'border-red-500' : ''}`}
            />
            {errors.Vn_Name && <p className="text-red-500 text-sm mt-1 font-Poppins">{errors.Vn_Name.message}</p>}
          </div>

          <div>
            <label className="block text-[#317591] text-3xl font-normal font-Poppins mb-2" htmlFor="primerApellido">
              Primer Apellido
            </label>
            <input
              id="primerApellido"
              {...register('Vn_Lastname1', { required: 'El primer apellido es obligatorio' })}
              type="text"
              className={`w-full h-[60px] px-4 bg-white shadow border-2 border-[#317591] rounded-md text-lg font-Poppins ${errors.Vn_Lastname2 ? 'border-red-500' : ''}`}
            />
            {errors.Vn_Lastname1 && <p className="text-red-500 text-sm mt-1 font-Poppins">{errors.Vn_Lastname1.message}</p>}
          </div>
        </div>

        {/* Segundo Apellido y Cédula */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-[#317591] text-3xl font-normal font-Poppins mb-2" htmlFor="segundoApellido">
              Segundo Apellido
            </label>
            <input
              id="segundoApellido"
              {...register('Vn_Lastname2', { required: 'El segundo apellido es obligatorio' })}
              type="text"
              className={`w-full h-[60px] px-4 bg-white shadow border-2 border-[#317591] rounded-md text-lg font-Poppins ${errors.Vn_Lastname2 ? 'border-red-500' : ''}`}
            />
            {errors.Vn_Lastname2 && <p className="text-red-500 text-sm mt-1 font-Poppins">{errors.Vn_Lastname2.message}</p>}
          </div>

          <div>
            <label className="block text-[#317591] text-3xl font-normal font-Poppins mb-2" htmlFor="cedula">
              Cédula
            </label>
            <input
              id="cedula"
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
              type="text"
              className={`w-full h-[60px] px-4 bg-white shadow border-2 border-[#317591] rounded-md text-lg font-Poppins ${errors.Vn_Cedula ? 'border-red-500' : ''}`}
            />
            {errors.Vn_Cedula && <p className="text-red-500 text-sm mt-1 font-Poppins">{errors.Vn_Cedula.message}</p>}
          </div>
        </div>

        {/* Correo Electrónico y Teléfono */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-[#317591] text-3xl font-normal font-Poppins mb-2" htmlFor="correo">
              Correo Electrónico
            </label>
            <input
              id="correo"
              {...register('Vn_Email', { required: 'El correo es obligatorio', pattern: { value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, message: 'Correo inválido' } })}
              type="email"
              className={`w-full h-[60px] px-4 bg-white shadow border-2 border-[#317591] rounded-md text-lg font-Poppins ${errors.Vn_Email ? 'border-red-500' : ''}`}
            />
            {errors.Vn_Email && <p className="text-red-500 text-sm mt-1 font-Poppins">{errors.Vn_Email.message}</p>}
          </div>

          <div>
            <label className="block text-[#317591] text-3xl font-normal font-Poppins mb-2" htmlFor="telefono">
              Teléfono
            </label>
            <input
              id="telefono"
              {...register('Vn_Phone', { required: 'El teléfono es obligatorio' })}
              type="tel"
              className={`w-full h-[60px] px-4 bg-white shadow border-2 border-[#317591] rounded-md text-lg font-Poppins ${errors.Vn_Phone ? 'border-red-500' : ''}`}
            />
            {errors.Vn_Phone && <p className="text-red-500 text-sm mt-1 font-Poppins">{errors.Vn_Phone.message}</p>}
          </div>
        </div>

        {/* Fecha de Inicio y Fecha de Fin */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-[#317591] text-3xl font-normal font-Poppins mb-2" htmlFor="fechaInicio">
              Fecha de Inicio
            </label>
            <input
              id="fechaInicio"
              {...register('Delivery_Date', { required: 'La fecha de inicio es obligatoria' })}
              type="date"
              className={`w-full h-[60px] px-4 bg-white shadow border-2 border-[#317591] rounded-md text-lg font-Poppins ${errors.Delivery_Date ? 'border-red-500' : ''}`}
            />
            {errors.Delivery_Date && <p className="text-red-500 text-sm mt-1 font-Poppins">{errors.Delivery_Date.message}</p>}
          </div>

          <div>
            <label className="block text-[#317591] text-3xl font-normal font-Poppins mb-2" htmlFor="fechaFin">
              Fecha de Fin
            </label>
            <input
              id="fechaFin"
              {...register('End_Date', { required: 'La fecha de fin es obligatoria' })}
              type="date"
              className={`w-full h-[60px] px-4 bg-white shadow border-2 border-[#317591] rounded-md text-lg font-Poppins ${errors.End_Date ? 'border-red-500' : ''}`}
            />
            {errors.End_Date && <p className="text-red-500 text-sm mt-1 font-Poppins">{errors.End_Date.message}</p>}
          </div>
        </div>

        {/* Tipo de Voluntariado */}
        <div>
          <label className="block text-[#317591] text-3xl font-normal font-Poppins mb-2" htmlFor="tipoVoluntariado">
            Tipo de Voluntariado
          </label>
          <select
            id="tipoVoluntariado"
            {...register('VoluntarieTypeId', { required: 'El tipo de voluntariado es obligatorio' })}
            className={`w-full h-[60px] px-4 bg-white shadow border-2 border-[#317591] rounded-md text-lg font-Poppins`}
          >
            <option value="">Selecciona un tipo de voluntariado</option>
            {voluntarieTypes.map((type: any) => (
              <option key={type.id_VoluntarieType} value={type.id_VoluntarieType}>
                {type.name_voluntarieType}
              </option>
            ))}
          </select>
          {errors.VoluntarieTypeId && <p className="text-red-500 text-sm mt-1 font-Poppins">{errors.VoluntarieTypeId.message}</p>}
        </div>

        {/* Botones de Enviar y Cancelar */}
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
    </div>
  );
};

export default VolunteerForm;
