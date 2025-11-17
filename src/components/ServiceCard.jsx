import React from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ icon: Icon, title, description, iconColor, path, bgColor = 'bg-white' }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(path)}
      className={`relative overflow-hidden rounded-lg p-6 text-left transition-all hover:shadow-md active:scale-[0.98] shadow-sm ${bgColor} border border-gray-200`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-gray-900 font-semibold text-lg mb-2">{title}</h3>
          <p className="text-gray-600 text-base">{description}</p>
        </div>
        <div className={`${iconColor} bg-gray-50 p-3 rounded-lg flex-shrink-0`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </button>
  );
};

export default ServiceCard;
