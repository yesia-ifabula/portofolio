import Image from "next/image";

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  return (
    <header className="bg-white shadow py-4 px-8 flex items-center justify-between sticky top-0 z-10">
      {/* <div className="flex items-center gap-2">
        <Image
          aria-hidden
          src="window.svg"
          alt="Window icon"
          width={16}
          height={16}
        />
        <span className="font-bold text-xl text-gray-800">Yesia Plorina</span>
      </div> */}
      <nav className="space-x-6">
        <a
          href="#home"
          className={
            activeSection === "home"
              ? "text-pink-500 font-bold"
              : "text-gray-600 hover:text-pink-500"
          }
        >
          Home
        </a>
        <a
          href="#about"
          className={
            activeSection === "about"
              ? "text-pink-500 font-bold"
              : "text-gray-600 hover:text-pink-500"
          }
        >
          About Me
        </a>
        <a
          href="#projects"
          className={
            activeSection === "projects"
              ? "text-pink-500 font-bold"
              : "text-gray-600 hover:text-pink-500"
          }
        >
          Projects
        </a>
        <a
          href="#contact"
          className={
            activeSection === "contact"
              ? "text-pink-500 font-bold"
              : "text-gray-600 hover:text-pink-500"
          }
        >
          Contact
        </a>
      </nav>
    </header>
  );
}