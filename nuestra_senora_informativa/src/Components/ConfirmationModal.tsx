// src/components/ConfirmationModal.tsx
import React from 'react';
import { ConfirmationModalProps } from '../Types/informativeType';

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null; 

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold text-[#317591]">Solicitud Enviada</h2>
        <p className="mt-4 text-lg">Su solicitud ha sido enviada con éxito, pronto nos comunicaremos con usted</p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-[#317591] text-white font-bold rounded-md shadow-md hover:bg-[#27597a] transition-colors duration-300"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
