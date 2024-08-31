import React from 'react';

const MemberSection = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-6 py-12">
      <div className="flex flex-col lg:flex-row lg:items-center max-w-7xl mx-auto space-y-12 lg:space-y-0 lg:space-x-20">
        {/* Sección Izquierda - Imagen con esquinas redondeadas personalizadas */}
        <img
          src="https://raw.githubusercontent.com/BrandonJafeth/Images-Nuestra-Se-ora-del-Rosario/08909f6de9deae8edd499d1dfa7faf79dbd4635a/Hero-Images/Image-Hero-Sectiom.avif"
          alt="Custom"
          className="w-90 h-80 object-cover rounded-tl-3xl rounded-br-3xl" // Imagen más grande con esquinas redondeadas
        />
        
        {/* Sección Derecha - Texto */}
        <div className="flex-1 lg:max-w-xl">
          <h2 className="text-[#0d313f] text-4xl font-bold font-'Poppins' mt-4 mb-6">
            ¿Deseas ser parte de la Junta Directiva del Hogar de Ancianos Nuestra Señora del Rosario?
          </h2>
          <p className="text-[#0d313f] text-lg font-normal font-'Poppins' text-center max-w-4xl mb-12 text-justify">
            Si estás comprometido con el bienestar de los adultos mayores y deseas contribuir de manera significativa a la comunidad, te invitamos a formar parte de la junta directiva y administrativa del Hogar de Ancianos Nuestra Señora del Rosario. 
            Como miembro de la junta, tendrás la oportunidad de influir en las decisiones estratégicas que aseguran la sostenibilidad y mejora continua de nuestro hogar.
          </p>
          <p className="text-[#0d313f] text-lg font-normal font-'Poppins' text-center max-w-4xl text-justify">
            Para más información, por favor llama al <span className="font-bold">2680-0591</span>. Estaremos encantados de atenderte y brindarte todos los detalles que necesites.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MemberSection;
