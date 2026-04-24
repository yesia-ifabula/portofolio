/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import Image from 'next/image';
import ProductItem from "../../../component/ProductItem";
import  ProductItemMobile from '../../../component/ProductItemMobile';

const Project: React.FC<{
  isMobile: boolean,
  products: any[]
}> = ({
  isMobile,
  products
}) => {
    const [selectedIdx, setSelectedIdx] = useState(0);
    const [open, setOpen] = useState(false);

    // Burger menu state for mobile
    const menuItems = products.map((product, idx) => ({
      label: product.title,
      idx,
    }));

  return !isMobile ? (
    <section className="w-full min-h-screen flex items-center justify-center bg-[#f5f5f5]">
      <div className="flex w-full h-[70vh] bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Side Menu */}
        <aside className="w-48 bg-[#A678A6] flex flex-col py-8 px-4">
          <h2 className="text-white text-lg font-bold mb-6 text-center">Projects</h2>
          <nav className="flex flex-col gap-2">
            {products.map((product, idx) => (
              <button
                key={idx}
                className={`flex items-center gap-2 text-left px-3 py-2 rounded-md transition-all ${
                  selectedIdx === idx
                    ? "bg-white text-[#A678A6] font-bold shadow"
                    : "text-white hover:bg-[#c8a2c8]/40"
                }`}
                onClick={() => setSelectedIdx(idx)}
              >
                <Image src={product.image} alt="" width={20} height={20} className="inline-block" />
                <span>{product.title}</span>
              </button>
            ))}
          </nav>
        </aside>
        {/* Main Content */}
        <ProductItem {...products[selectedIdx]} />
      </div>
    </section>
  ):(
    <div className="w-full min-h-screen bg-[#f5f5f5] pt-16">
      {/* Burger Menu */}
      <div className="flex items-center justify-between px-4 py-4 bg-[#A678A6]">
        <h1 className="text-xl font-bold text-white">{products[selectedIdx].title}</h1>
        <button
          className="flex flex-col justify-center items-center w-8 h-8"
          onClick={() => setOpen(!open)}
          aria-label="Open menu"
        >
          <span className={`block h-1 w-6 bg-white rounded transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block h-1 w-6 bg-white rounded my-1 transition-all duration-300 ${open ? "opacity-0" : ""}`}></span>
          <span className={`block h-1 w-6 bg-white rounded transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>
      {/* Side Menu Overlay */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40">
          <div className="absolute top-0 left-0 w-2/3 h-full bg-white shadow-lg flex flex-col p-6">
            <button
              className="self-end mb-8"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <span className="text-2xl text-[#A678A6]">&times;</span>
            </button>
            {menuItems.map((item) => (
              <button
                key={item.idx}
                className={`mb-4 text-[#A678A6] text-lg font-semibold text-left w-full ${
                  selectedIdx === item.idx ? "font-bold underline" : ""
                }`}
                onClick={() => {
                  setSelectedIdx(item.idx);
                  setOpen(false);
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
      {/* Main Content */}
      <div className="w-full px-0 py-0">
        <ProductItemMobile {...products[selectedIdx]} />
      </div>
    </div>
  );
};

export default Project;