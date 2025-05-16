import React, { useEffect } from 'react';

export type ToastType = 'success' | 'error' | 'info';

interface ToastMessageProps {
  message: string;
  type?: ToastType;
  duration?: number;      // ms antes de ocultar
  onClose: () => void;
}

const bgByType: Record<ToastType, string> = {
  success: 'bg-green-500',
  error:   'bg-red-500',
  info:    'bg-blue-500',
};

const ToastMessage: React.FC<ToastMessageProps> = ({
  message,
  type = 'info',
  duration = 5000,
  onClose,
}) => {
  useEffect(() => {
    const t = setTimeout(onClose, duration);
    return () => clearTimeout(t);
  }, [duration, onClose]);

  return (
    <div
      className={`fixed top-4 right-4 z-50 flex items-center space-x-2 p-4 rounded shadow-lg text-white ${bgByType[type]}`}
      onClick={onClose}
    >
      <span>{message}</span>
      <button className="font-bold ml-4">✕</button>
    </div>
  );
};

export default ToastMessage;
