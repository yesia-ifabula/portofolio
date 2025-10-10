import React from 'react';
import Image from "next/image";
import { AboutMobileProp } from '@/app/helper/type';

const AboutMobile = ({ intro, experiences, educations, programmingLanguages }: AboutMobileProp) => {
  return (
    <div className="w-screen h-screen min-h-screen flex flex-col bg-white pt-16">
      {/* Section 1: Intro */}
      <div className="flex flex-1 items-center px-4 py-4">
        {/* Kiri: Image */}
        <div className="w-1/3 flex justify-center items-center">
          <Image
            src="aboutmeMobile.svg"
            alt="Yesia Plorina"
            width={150}
            height={120}
            className="object-contain"
            priority
          />
        </div>
        {/* Kanan: Text */}
        <div className="w-2/3 flex flex-col justify-center pl-4">
          <h1 className="text-lg font-bold">
            <span className="text-black">{intro?.title}</span>{" "}
            <span className="text-[#A678A6]">{intro?.name}</span>
          </h1>
          <p className="text-xs text-gray-700 mt-2">
            {intro?.description}
          </p>
        </div>
      </div>
      {/* Section 2: Experience */}
      <>
        <h2 className="px-4 text-base font-bold text-[#A678A6] mb-2">EXPERIENCE</h2>
        <div className="flex-1 px-4 py-2 overflow-auto">
            <ul className="space-y-2">
            {experiences.map((exp, idx) => (
                <li key={idx} className="text-xs text-gray-700">
                <span className="font-bold">{exp.title}</span>
                <div>
                    <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800"
                    >
                    {exp.company}
                    </a>
                </div>
                <div>{exp.period}</div>
                </li>
            ))}
            </ul>
        </div>
      </>
      {/* Section 3: Education */}
      <>
        <h2 className="px-4 text-base font-bold text-[#A678A6] mb-2">EDUCATION</h2>
        <div className="flex-1 px-4 py-2 overflow-auto">
            <ul className="space-y-2">
            {educations.map((edu, idx) => (
                <li key={idx} className="text-xs text-gray-700">
                <span className="font-bold">{edu.study}</span>
                <div>
                    <a
                    href={edu.institutionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800"
                    >
                    {edu.institution}
                    </a>
                </div>
                <div>{edu.period}</div>
                <a
                    href={edu.urlDoc}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800"
                    >
                    View Doc
                </a>
                </li>
            ))}
            </ul>
        </div>
      </>
      {/* Section 4: Programming Languages */}
      <div className="flex-1 px-4 py-2 flex flex-col items-center justify-center overflow-auto">
        <h2 className="text-base font-bold text-[#A678A6] mb-2">PROGRAMMING LANGUAGES</h2>
        <div className="flex flex-wrap gap-2 justify-center">
          {programmingLanguages.map((lang, idx) => (
            <span
              key={idx}
              className="bg-[#A678A6] text-white px-3 py-1 rounded-full text-xs font-semibold"
            >
              {lang}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMobile;