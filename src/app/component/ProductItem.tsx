import React, { useState } from 'react';

type ProductItemProps = {
    image: string;
    title: string;
    description?: string;
};

const ProductItem: React.FC<ProductItemProps> = ({ image, title, description }) => {
  const [hovered, setHovered] = useState(false);

  return (
   <div
      className="relative bg-white rounded-lg shadow p-4 flex flex-col items-center justify-center cursor-pointer transition hover:shadow-lg h-full"
      style={{
        backgroundImage: `url(${image})`, // image bisa '/home.svg' atau path lain dari public
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '200px',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Overlay agar teks terbaca */}
      <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg pointer-events-none" />
      <h3 className="font-bold text-lg mb-1 text-white z-10">{title}</h3>
      {hovered && (
        <div className="absolute inset-0 bg-white bg-opacity-95 flex flex-col items-center justify-center rounded-lg shadow-lg z-20 p-4">
          <p className="text-gray-700 mb-2">{description}</p>
        </div>
      )}
    </div>
  );
};

export default ProductItem;