import React, { useState } from 'react';
import ProductItem from "../../../component/ProductItem";



const Project: React.FC = () => {
    const products = [
      {
        title: "SEVA",
        description: "Deskripsi singkat tentang Project 1",
        image: "/home.svg",
      },
      {
        title: "Project 2",
        description: "Deskripsi singkat tentang Project 2",
        image: "/home.svg",
      },
      {
        title: "Project 3",
        description: "Deskripsi singkat tentang Project 3",
        image: "/home.svg",
      },
        {
        title: "Project 4",
        description: "Deskripsi singkat tentang Project 3",
        image: "/home.svg",
      },
    ];

   // Hitung jumlah kolom sesuai jumlah project (maksimal 6 agar tetap responsif)
    const colCount = Math.min(products.length, 6);
    const gridColsClass = {
      1: "grid-cols-1",
      2: "grid-cols-2",
      3: "grid-cols-3",
      4: "grid-cols-4",
      5: "grid-cols-5",
      6: "grid-cols-6",
    }[colCount];

  return (

     <section className="w-full min-h-screen flex items-center justify-center bg-[#f5f5f5]">
        <div
          className={`grid w-full h-[70vh] grid-rows-1 ${gridColsClass} gap-6`}
        >
        {products.map((product, idx) => (
            <ProductItem key={idx} {...product} />
        ))}
        </div>
    </section>
  );
};

export default Project;