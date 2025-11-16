import React from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ icon: Icon, title, description, color, path, gradient }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(path)}
      className={`relative overflow-hidden rounded-2xl p-6 text-left transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md ${gradient}`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
          <p className="text-white/90 text-sm">{description}</p>
        </div>
        <div className={`${color} bg-white/20 p-3 rounded-xl`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Decorative circles */}
      <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full"></div>
      <div className="absolute -top-4 -left-4 w-20 h-20 bg-white/10 rounded-full"></div>
    </button>
  );
};

export default ServiceCard;
