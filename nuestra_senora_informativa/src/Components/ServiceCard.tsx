import React from "react";
import ReactCardFlip from "react-card-flip";
import Button from "./Button";

interface ServiceCardProps {
  index: number;
  service: any;
  isFlipped: boolean;
  handleFlip: (index: number) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ index, service, isFlipped, handleFlip }) => {
 


  const getShortDescription = (description: string) => {
    const firstPeriod = description.indexOf('.');
    return firstPeriod !== -1 ? description.substring(0, firstPeriod + 1) : description;
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      
      <div
        className="w-[278px] h-[327px] relative bg-[#d9d9d9] rounded-[15px] shadow cursor-pointer"
        onClick={() => handleFlip(index)}
      >
        <div className="left-[89px] top-[7px] absolute text-[#0d313f] text-xl font-normal font-'Poppins'">
          {service.title_Card_SV}
        </div>
        <img
          className="w-[200px] h-[133.35px] left-[44px] top-[52px] absolute rounded-[10px]"
          src={service.image_Card_SV_Url}
          alt={service.title_Card_SV}
        />
        <div className="w-[201px] left-[44px] top-[203px] absolute text-center text-[#0d313f] text-sm font-normal font-'Poppins'">
          {getShortDescription(service.description_Card_SV)}
        </div>
        
       
        <div className="absolute inset-x-0 bottom-4 flex justify-center">
          <Button
            text={service.buttonText || "Ver más"}
            className="bg-[#dab87d] text-[#0d313f] text-[12px] sm:text-[14px] font-bold font-'Poppins' py-1 sm:py-2 px-4 sm:px-6 rounded-[10px] sm:rounded-[15px] shadow transition-all duration-300 hover:bg-[#c7a46d]"
            onClick={() => handleFlip(index)} // Voltear la tarjeta al hacer clic
          />
        </div>
      </div>

      
      <div
        className="w-[278px] h-[327px] relative bg-[#d9d9d9]  text-[#0d313f] rounded-[15px] shadow flex flex-col justify-center items-center p-4 cursor-pointer"
        onClick={() => handleFlip(index)}
      >
        <p className="text-sm mb-6 text-center">
          {service.description_Card_SV}
        </p>
      </div>
    </ReactCardFlip>
  );
};

export default ServiceCard;
