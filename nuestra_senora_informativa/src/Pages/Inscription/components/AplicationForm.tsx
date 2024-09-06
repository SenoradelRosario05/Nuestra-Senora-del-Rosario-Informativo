
import { useForm, SubmitHandler } from 'react-hook-form';
import { AplicationFormDTO } from '../../../Types/informativeType';
import { postFormAplication } from '../../../Services/ServiceInformative';
import ConfirmationModal from '../../../Components/ConfirmationModal';
import { useModal } from '../../../Hooks/useModal';
import { Link } from 'react-router-dom';

const AplicationForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<AplicationFormDTO>();
  const { isOpen, openModal, closeModal } = useModal();

  const onSubmit: SubmitHandler<AplicationFormDTO> = async (data) => {
    try {
      await postFormAplication(data);
      reset(); // Resetea el formulario tras el envío exitoso
      openModal(); // Abre el modal de confirmación
      setTimeout(() => {
        closeModal(); // Cierra el modal automáticamente después de 3 segundos
      }, 3000);
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-[#0d313f] text-[24px] sm:text-[30px] font-normal font-Poppins uppercase text-center">
        Solicitud de Ingreso
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl space-y-6">
        {/* Nombre y Apellidos */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <label className="block text-[#317591] text-2xl font-normal font-Poppins mb-2" htmlFor="name_AP">
              Nombre
            </label>
            <input
              id="name_AP"
              {...register('name_AP', { required: 'El nombre es obligatorio' })}
              type="text"
              className={`w-full h-[60px] px-4 bg-white shadow border-2 border-[#317591] rounded-md text-lg font-Poppins ${errors.name_AP ? 'border-red-500' : ''}`}
            />
            {errors.name_AP && <p className="text-red-500 text-sm mt-1 font-Poppins">{errors.name_AP.message}</p>}
          </div>

          <div>
            <label className="block text-[#317591] text-2xl font-normal font-Poppins mb-2" htmlFor="lastname1_AP">
              Primer Apellido
            </label>
            <input
              id="lastname1_AP"
              {...register('lastname1_AP', { required: 'El primer apellido es obligatorio' })}
              type="text"
              className={`w-full h-[60px] px-4 bg-white shadow border-2 border-[#317591] rounded-md text-lg font-Poppins ${errors.lastname1_AP ? 'border-red-500' : ''}`}
            />
            {errors.lastname1_AP && <p className="text-red-500 text-sm mt-1 font-Poppins">{errors.lastname1_AP.message}</p>}
          </div>

          <div>
            <label className="block text-[#317591] text-2xl font-normal font-Poppins mb-2" htmlFor="lastname2_AP">
              Segundo Apellido
            </label>
            <input
              id="lastname2_AP"
              {...register('lastname2_AP', { required: 'El segundo apellido es obligatorio' })}
              type="text"
              className={`w-full h-[60px] px-4 bg-white shadow border-2 border-[#317591] rounded-md text-lg font-Poppins ${errors.lastname2_AP ? 'border-red-500' : ''}`}
            />
            {errors.lastname2_AP && <p className="text-red-500 text-sm mt-1 font-Poppins">{errors.lastname2_AP.message}</p>}
          </div>
        </div>

        {/* Edad y Cédula */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-[#317591] text-2xl font-normal font-Poppins mb-2" htmlFor="age_AP">
              Edad
            </label>
            <input
              id="age_AP"
              {...register('age_AP', {
                required: 'La edad es obligatoria',
                valueAsNumber: true,
                min: { value: 65, message: 'La edad debe ser mayor o igual a 65 años' }
              })}
              type="number"
              className={`w-full h-[60px] px-4 bg-white shadow border-2 border-[#317591] rounded-md text-lg font-Poppins ${errors.age_AP ? 'border-red-500' : ''}`}
            />
            {errors.age_AP && <p className="text-red-500 text-sm mt-1 font-Poppins">{errors.age_AP.message}</p>}
          </div>

          <div>
            <label className="block text-[#317591] text-2xl font-normal font-Poppins mb-2" htmlFor="cedula_AP">
              Cédula
            </label>
            <input
              id="cedula_AP"
              {...register('cedula_AP', {
                required: 'La cédula es obligatoria',
                minLength: { value: 9, message: 'La cédula debe tener exactamente 9 caracteres' },
                maxLength: { value: 9, message: 'La cédula debe tener exactamente 9 caracteres' },
                pattern: { value: /^[0-9]+$/, message: 'La cédula solo debe contener números' },
              })}
              type="text"
              className={`w-full h-[60px] px-4 bg-white shadow border-2 border-[#317591] rounded-md text-lg font-Poppins ${errors.cedula_AP ? 'border-red-500' : ''}`}
            />
            {errors.cedula_AP && <p className="text-red-500 text-sm mt-1 font-Poppins">{errors.cedula_AP.message}</p>}
          </div>
        </div>

        {/* Encargado */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-[#317591] text-2xl font-normal font-Poppins mb-2" htmlFor="name_GD">
              Nombre del Encargado
            </label>
            <input
              id="name_GD"
              {...register('name_GD', { required: 'El nombre del encargado es obligatorio' })}
              type="text"
              className={`w-full h-[60px] px-4 bg-white shadow border-2 border-[#317591] rounded-md text-lg font-Poppins ${errors.name_GD ? 'border-red-500' : ''}`}
            />
            {errors.name_GD && <p className="text-red-500 text-sm mt-1 font-Poppins">{errors.name_GD.message}</p>}
          </div>

          <div>
            <label className="block text-[#317591] text-2xl font-normal font-Poppins mb-2" htmlFor="lastname1_GD">
              Primer Apellido del Encargado
            </label>
            <input
              id="lastname1_GD"
              {...register('lastname1_GD', { required: 'El primer apellido del encargado es obligatorio' })}
              type="text"
              className={`w-full h-[60px] px-4 bg-white shadow border-2 border-[#317591] rounded-md text-lg font-Poppins ${errors.lastname1_GD ? 'border-red-500' : ''}`}
            />
            {errors.lastname1_GD && <p className="text-red-500 text-sm mt-1 font-Poppins">{errors.lastname1_GD.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-[#317591] text-2xl font-normal font-Poppins mb-2" htmlFor="lastname2_GD">
              Segundo Apellido del Encargado
            </label>
            <input
              id="lastname2_GD"
              {...register('lastname2_GD', { required: 'El segundo apellido del encargado es obligatorio' })}
              type="text"
              className={`w-full h-[60px] px-4 bg-white shadow border-2 border-[#317591] rounded-md text-lg font-Poppins ${errors.lastname2_GD ? 'border-red-500' : ''}`}
            />
            {errors.lastname2_GD && <p className="text-red-500 text-sm mt-1 font-Poppins">{errors.lastname2_GD.message}</p>}
          </div>

          {/* Cédula del Encargado */}
          <div>
            <label className="block text-[#317591] text-2xl font-normal font-Poppins mb-2" htmlFor="cedula_GD">
              Cédula del Encargado
            </label>
            <input
              id="cedula_GD"
              {...register('cedula_GD', {
                required: 'La cédula del encargado es obligatoria',
                minLength: { value: 9, message: 'La cédula del encargado debe tener exactamente 9 caracteres' },
                maxLength: { value: 9, message: 'La cédula del encargado debe tener exactamente 9 caracteres' },
                pattern: { value: /^[0-9]+$/, message: 'La cédula solo debe contener números' },
              })}
              type="text"
              className={`w-full h-[60px] px-4 bg-white shadow border-2 border-[#317591] rounded-md text-lg font-Poppins ${errors.cedula_GD ? 'border-red-500' : ''}`}
            />
            {errors.cedula_GD && <p className="text-red-500 text-sm mt-1 font-Poppins">{errors.cedula_GD.message}</p>}
          </div>
        </div>

        {/* Teléfono y Correo Electrónico del Encargado */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-[#317591] text-2xl font-normal font-Poppins mb-2" htmlFor="phone_GD">
              Teléfono del Encargado
            </label>
            <input
              id="phone_GD"
              {...register('phone_GD', {
                required: 'El teléfono del encargado es obligatorio',
                pattern: { value: /^[0-9]+$/, message: 'El teléfono solo debe contener números' },
              })}
              type="tel"
              className={`w-full h-[60px] px-4 bg-white shadow border-2 border-[#317591] rounded-md text-lg font-Poppins ${errors.phone_GD ? 'border-red-500' : ''}`}
            />
            {errors.phone_GD && <p className="text-red-500 text-sm mt-1 font-Poppins">{errors.phone_GD.message}</p>}
          </div>

          <div>
            <label className="block text-[#317591] text-2xl font-normal font-Poppins mb-2" htmlFor="email_GD">
              Correo Electrónico del Encargado
            </label>
            <input
              id="email_GD"
              {...register('email_GD', {
                required: 'El correo electrónico del encargado es obligatorio',
                pattern: { value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, message: 'Correo inválido' },
              })}
              type="email"
              className={`w-full h-[60px] px-4 bg-white shadow border-2 border-[#317591] rounded-md text-lg font-Poppins ${errors.email_GD ? 'border-red-500' : ''}`}
            />
            {errors.email_GD && <p className="text-red-500 text-sm mt-1 font-Poppins">{errors.email_GD.message}</p>}
          </div>
        </div>

        {/* Botones de Enviar y Cancelar */}
        <div className="flex justify-center space-x-4">
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
        </div>
      </form>

      {/* Modal de Confirmación */}
      <ConfirmationModal isOpen={isOpen} onClose={closeModal} />
    </div>
  );
};

export default AplicationForm;

             
