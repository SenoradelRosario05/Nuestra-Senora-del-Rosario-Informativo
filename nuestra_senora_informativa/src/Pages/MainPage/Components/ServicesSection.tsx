import { useState, useRef } from "react";
import ReactCardFlip from "react-card-flip";
import useTitles from "../../../Hooks/useTitles";
import useServiceSection from "../Hooks/useServices";

const ServiceSection = () => {
  const { data: title } = useTitles(2);
  const { data: serviceData } = useServiceSection();
  const [isFlipped, setIsFlipped] = useState<{ [key: number]: boolean }>({});
  const containerRef = useRef<HTMLDivElement>(null);

  // Función para manejar el flip de la tarjeta
  const handleFlip = (index: number) => {
    setIsFlipped((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  // Función para mover el scroll hacia la izquierda
  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  // Función para mover el scroll hacia la derecha
  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      id="servicios"
      className="min-h-screen flex flex-col items-center px-2 sm:px-6 lg:px-8"
    >
      <div className="w-full max-w-4xl text-[#0d313f] text-[40px] font-normal text-center mb-12">
        <p>{title?.title_Text_Section}</p>
        <br />
        <p className="text-[#0d313f] text-2xl font-normal">
          {title?.description_Section ||
            "Brindamos distintos servicios de los cuales destacamos"}
        </p>
      </div>

      <div className="relative w-full flex items-center overflow-hidden">
        {/* Botón de la izquierda */}
        <button
          onClick={scrollLeft}
          className="absolute left-4 z-10 text-gray-400 hover:text-gray-700 transition-colors duration-200 p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Contenedor que permite el scroll con las flechas */}
        <div
          ref={containerRef}
          className="flex space-x-8 max-w-full px-16 overflow-x-scroll scrollbar-hide scroll-smooth"
        >
          {serviceData?.map((service: any, index: number) => (
            <ReactCardFlip
              key={index}
              isFlipped={isFlipped[index]}
              flipDirection="horizontal"
            >
              {/* FRONT SIDE */}
              <div
                className="w-[278px] h-[327px] relative bg-[#d9d9d9] rounded-[15px] shadow cursor-pointer flex flex-col items-center"
                onClick={() => handleFlip(index)}
              >
                <div className="mt-4 text-[#0d313f] text-xl font-medium">
                  {service.title_Card_SV}
                </div>
                <img
                  className="w-[200px] h-[133.35px] my-4 rounded-[10px]"
                  src={service.image_Card_SV_Url}
                  alt={service.title_Card_SV}
                />
                <div className="w-[201px] text-center text-[#0d313f] text-sm font-normal">
                  {service.description_Card_SV.split(".")[0]}.
                </div>
                <div className="mt-auto mb-4">
                  <button className="bg-[#dab87d] text-[#0d313f] text-[12px] sm:text-[14px] font-bold py-2 px-6 rounded-[10px] sm:rounded-[15px] shadow-lg transition-all duration-300 hover:bg-[#c7a46d] hover:scale-105">
                    {service.buttonText || "Ver más"}
                  </button>
                </div>
              </div>

              {/* BACK SIDE */}
              <div
                className="w-[278px] h-[327px] relative bg-[#0d313f] text-white rounded-[15px] shadow flex flex-col justify-center items-center p-4 cursor-pointer"
                onClick={() => handleFlip(index)}
              >
                <p className="text-sm mb-6 text-center">
                  {service.description_Card_SV}
                </p>
              </div>
            </ReactCardFlip>
          ))}
        </div>

        {/* Botón de la derecha */}
        <button
          onClick={scrollRight}
          className="absolute right-4 z-10 text-gray-400 hover:text-gray-700 transition-colors duration-200 p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ServiceSection;
