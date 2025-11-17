import React from 'react';

const MobileFrame = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-[375px] h-[812px] bg-white rounded-[40px] shadow-lg overflow-hidden relative">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-50"></div>

        {/* Content - Hide scrollbar */}
        <div className="w-full h-full overflow-y-auto scrollbar-hide relative">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MobileFrame;
