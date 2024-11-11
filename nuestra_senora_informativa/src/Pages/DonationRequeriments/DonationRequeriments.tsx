import { Link } from "react-router-dom";

function DonationRequeriments() {
  return (
    <div className="h-auto bg-white p-10 pt-20 px-6 sm:px-16 lg:px-32">
      {/* Logo de fondo */}
      <div className="absolute inset-0 opacity-10 flex justify-center">
        <img
          src="https://i.ibb.co/D5xXgD5/Icon-whitout-fondo.png"
          alt="Logo de Fondo"
          className="w-full max-w-3xl h-auto object-contain"
        />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 text-center">
        {/* Título Principal */}
        <h2 className="text-[#0d313f] text-[35px] font-semibold font-'Poppins' uppercase mb-4">
          DONACIONES
        </h2>

        {/* Div para las líneas y el logo */}
        <div className="flex items-center justify-center my-6 w-full max-w-lg mx-auto">
          <div className="flex-grow border-t-2 border-[#0d313f]"></div>
          <img
            className="w-[40px] h-[40px] mx-4"
            src="https://i.ibb.co/D5xXgD5/Icon-whitout-fondo.png"
            alt="Logo de la institución"
          />
          <div className="flex-grow border-t-2 border-[#0d313f]"></div>
        </div>

        {/* Descripción */}
        <p className="text-lg text-gray-700 dark:text-[#0d313f] mb-8 leading-relaxed">
          En el corazón generoso de una donación, florece la esperanza y la compañía para quienes
          han vivido muchas estaciones. Con tu contribución, podemos garantizar que nuestros residentes
          reciban el apoyo necesario para una vida digna.
        </p>

        <p className="text-center text-lg text-gray-800 dark:text-[#0d313f] font-semibold mb-8">
          <strong>Importante:</strong> Si deseas donar leche o alimentos, asegúrate de que la leche sea deslactosada y que los alimentos sean no perecederos para atender las necesidades específicas de los residentes.
        </p>

        {/* Requisitos de Donación */}
        <h3 className="text-2xl font-semibold text-center mb-6 text-[#0d313f]">
          Requisitos de Donación
        </h3>
        <ul className="list-disc list-inside text-lg text-[#0d313f] dark:text-[#0d313f] max-w-3xl mx-auto space-y-4 mb-10">
          <li>Leche deslactosada o alimentos no perecederos.</li>
          <li>Artículos de higiene personal (jabón, shampoo, pasta dental, etc.).</li>
          <li>Ropa en buen estado para adultos mayores.</li>
          <li>Artículos recreativos: libros, juegos de mesa, etc.</li>
        </ul>

        {/* Sección de Sinpe Móvil */}
        <h3 className="text-2xl font-semibold text-[#0d313f] ">
          Donaciones Monetarias
        </h3>
        <p className="text-lg text-[#0d313f] mb-6 leading-relaxed">
          Si deseas realizar una donación monetaria, puedes hacerlo a través de Sinpe Móvil.
          Cualquier contribución es bienvenida y marcará la diferencia para nuestros residentes.
        </p>

        <p className="text-3xl font-semibold text-[#0d313f] mb-10">
          Número Sinpe Móvil: 8888-8888
        </p>

        {/* Botón de Donación */}
        <div className="mt-12 text-center">
          <Link to='/solicitudes/donaciones'>
            <button className="bg-[#dab87d] text-[#0d313f] text-[18px] sm:text-[22px] font-bold font-'Poppins' py-3 sm:py-4 px-8 sm:px-10 rounded-[20px] sm:rounded-[30px] shadow-lg transition-all duration-300 hover:bg-[#c7a46d] hover:scale-105">
              Realiza tu donación ahora
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DonationRequeriments;
