import React from 'react';
import { ProductItemProps } from '../helper/type';
import Image from 'next/image';

const ProductItem: React.FC<ProductItemProps> = ({ item, title }) => {
  // Bagi item menjadi dua kolom (kiri & kanan) tanpa memaksa tinggi sama
  const mid = Math.ceil(item.length / 2);
  const leftItems = item.slice(0, mid);
  const rightItems = item.slice(mid);

  return (
    <div className="w-full px-0 md:px-8 py-8 pb-16">
      {/* Main Title */}
      <div className="w-full flex justify-center mb-6">
        <h1 className="text-2xl font-bold text-[#A678A6] text-center">{title}</h1>
      </div>
      {/* Dua kolom kiri-kanan, tinggi item menyesuaikan isi */}
      <div className="flex flex-col md:flex-row gap-8 w-full">
        {/* Left Column */}
        <div className="flex-1 flex flex-col gap-8 w-full">
          {leftItems.map((product, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-4 items-start bg-white rounded-lg shadow p-4 border border-gray-200 w-full"
            >
              {/* Image */}
              <div className="w-full md:w-1/3 flex justify-center items-start mb-4 md:mb-0">
                <Image
                  src={product.image}
                  alt={product.titleItem}
                  className="w-24 h-24 object-contain rounded"
                  width={96}
                  height={96}
                />
              </div>
              {/* Content */}
              <div className="flex-1 flex flex-col w-full">
                <h2 className="text-lg font-semibold mb-1 text-[#060606]">{product.titleItem}</h2>
                <p className="text-sm text-gray-700 mb-2">{product.description}</p>
                {product.buildWith && (
                  <div className="text-xs text-gray-500 mb-2">
                    {product.buildWith}
                  </div>
                )}
                <div className="flex flex-wrap gap-2">
                  {product.link?.map((l, idx) => (
                    <React.Fragment key={idx}>
                      {l.appstore && (
                        <a
                          href={l.appstore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-600 underline text-xs"
                        >
                          {l.linkTitle}
                        </a>
                      )}
                      {l.playstore && (
                        <a
                          href={l.playstore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-600 underline text-xs"
                        >
                          {l.linkTitle}
                        </a>
                      )}
                      {!l.appstore && !l.playstore && (
                        <span className="text-xs">{l.linkTitle}</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Right Column */}
        <div className="flex-1 flex flex-col gap-8 w-full">
          {rightItems.map((product, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-4 items-start bg-white rounded-lg shadow p-4 border border-gray-200 w-full"
            >
              {/* Image */}
              <div className="w-full md:w-1/3 flex justify-center items-start mb-4 md:mb-0">
                <Image
                  src={product.image}
                  alt={product.titleItem}
                  className="w-24 h-24 object-contain rounded"
                  width={96}
                  height={96}
                />
              </div>
              {/* Content */}
              <div className="flex-1 flex flex-col w-full">
                <h2 className="text-lg font-semibold mb-1 text-[#060606]">{product.titleItem}</h2>
                <p className="text-sm text-gray-700 mb-2">{product.description}</p>
                {product.buildWith && (
                  <div className="text-xs text-gray-500 mb-2">
                    {product.buildWith}
                  </div>
                )}
                <div className="flex flex-wrap gap-2">
                  {product.link?.map((l, idx) => (
                    <React.Fragment key={idx}>
                      {l.appstore && (
                        <a
                          href={l.appstore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-600 underline text-xs"
                        >
                          {l.linkTitle}
                        </a>
                      )}
                      {l.playstore && (
                        <a
                          href={l.playstore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-600 underline text-xs"
                        >
                          {l.linkTitle}
                        </a>
                      )}
                      {!l.appstore && !l.playstore && (
                        <span className="text-xs">{l.linkTitle}</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;