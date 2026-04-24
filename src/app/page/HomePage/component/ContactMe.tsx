/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";

const ContactMe = ({ data }: { data: any }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-[#A678A6] mb-6 text-center">CONTACT ME</h1>
      {/* Clickable Images: Kiri-Kanan */}
      <div className="mb-6 flex flex-row items-center justify-center gap-8">
        <a href={`https://wa.me/${data?.noWa}`} target="_blank" rel="noopener noreferrer">
          <Image
            src="whatsapp.svg"
            alt="WhatsApp"
            width={110}
            height={110}
            className="cursor-pointer"
          />
        </a>
        <a href={`mailto:${data?.email}`} target="_blank" rel="noopener noreferrer">
          <Image
            src="email.svg"
            alt="Email"
            width={200}
            height={200}
            className="cursor-pointer"
          />
        </a>
      </div>
      {/* Description */}
      <p className="text-center text-gray-700 mb-6 max-w-s">
        Feel free to explore my social media profiles to learn more about my work and professional background.
      </p>
      {/* Social Icons */}
      <div className="flex gap-6 justify-center">
        <a href={data?.linkedin} target="_blank" rel="noopener noreferrer">
          <Image src="linkedin.svg" alt="LinkedIn" width={50} height={50} className="cursor-pointer" />
        </a>
        <a href={data?.github} target="_blank" rel="noopener noreferrer">
          <Image src="github.svg" alt="GitHub" width={65} height={50} className="cursor-pointer" />
        </a>
        <a href={data?.ig} target="_blank" rel="noopener noreferrer">
          <Image src="instagram.svg" alt="Instagram" width={60} height={60} className="cursor-pointer" />
        </a>
      </div>
    </div>
  );
};

export default ContactMe;