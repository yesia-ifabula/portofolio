import React, { useState } from 'react';
import Image from 'next/image';
import ProductItem from "../../../component/ProductItem";
import  ProductItemMobile from '../../../component/ProductItemMobile';

const Project: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
    const [selectedIdx, setSelectedIdx] = useState(0);
    const [open, setOpen] = useState(false);

    const products = [
      {
        title: "TypeScript",
        image: "tsx.svg",
        item: [
          {
            titleItem: "Seva Apps",
            image: "sevaApp.svg",
            link: [
              { linkTitle: "to App Store", appstore: "https://apps.apple.com/id/app/seva/id1589727482?l=id" },
              { linkTitle: "to Play Store", playstore: "https://play.google.com/store/apps/details?id=id.seva&hl=en" }
            ],
            buildWith: "build with react-native typescript",
            description: "SEVA Apps from Astra members for submitting installments for buying a car with Astra and helping buyers to calculate car purchases according to the buyer's finances. mobile is also requested with uploaded documents for instant approval and tracking history."
          },
          {
            titleItem: "Seva Web",
            image: "sevaWeb.svg",
            link: [
              { linkTitle: "to Website Seva", playstore: "https://www.seva.id" }
            ],
            buildWith: "build with react typescript",
            description: "SEVA Website from Astra members for submitting installments for buying a car with Astra and helping buyers to calculate car purchases according to the buyer's finances. mobile is also requested with uploaded documents for instant approval and tracking history."
          },
        ]
      },
      {
        title: "React js & ReactNative",
        image: "jsx.svg",
        item: [
          {
            titleItem: "Garda Oto",
            image: "gardaoto.svg",
            description: "website that provides vehicle insurance services",
            link: [
              { linkTitle: "to Website Garda Oto", playstore: "https://www.gardaoto.com" }
            ],
            buildWith: "build with React.js",
            
          },
          {
            titleItem: "Kadou",
            image: "kadou.svg",
            description: "Kadou Smart Locker is a modern solution for everyday storage needs.",
            link: [
              { linkTitle: "to App Store", appstore: "https://play.google.com/store/apps/details?id=id.kadou" },
              { linkTitle: "to Play Store", playstore: "https://play.google.com/store/apps/details?id=id.kadou" }
            ],
            buildWith: "build with React.js",
            
          },
          {
            titleItem: "OVNI Mobile",
            image: "image.svg",
            description: "App for Traveler, and buyers can ask travelers to buy and deliver the items they want.",
            link: [],
            buildWith: "build with React Native Expo",
            
          },
        ]
      },
      {
        title: "Next js",
        image: "nxt.svg",
        item: [
          {
            titleItem: "TCASS",
            image: "image.svg",
            description: "TCASS is an application used by Toyota, designed for its dealers to facilitate parts ordering and other approval processes.",
            link: [],
            buildWith: "build with Next js",
          },
        ]
      },
      {
        title: "Vue js",
        image: "vue.svg",
        item: [
          { titleItem: "Make Your Todo List", image: "image.svg", description: "A project developed for a bootcamp final exam.", 
            link: [
              { linkTitle: "to Website", playstore: "https://fancy-todo-copenhagen-fox.web.app" }
            ], 
          buildWith: "build vue js" },
        ]
      },
      {
        title: "Kotlin",
        image: "kt.svg",
        item: [
          {
            titleItem: "International test center apps",
            image: "image.svg",
            description: "E-commerce for Internation test center product",
            link: [],
            buildWith: "Build with Kotlin"
          },
        ]
      },
      {
        title: "Java Android",
        image: "jv.svg",
        item: [
          {
            titleItem: "SVP App",
            image: "image.svg",
            description: "An application for TOEIC test supervisors to verify whether the person taking the test matches the registered data by displaying the participant’s information in the application",
            link: [],
            buildWith: "Build with Kotlin & Java"
          },
        ]
      },
      // {
      //   title: "Node js",
      //   image: "njs.svg",
      //   item: [
      //     { titleItem: "Node js", image: "image.svg", description: "", link: [], buildWith: "" },
      //   ]
      // },
    ];

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