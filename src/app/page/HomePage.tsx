
import AnimatedSection from "../component/AnimatedSection";
import Header from "../component/Header";
export default function HomePage() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory flex flex-col bg-gray-50 scroll-smooth">
          {/* Header */}
          <Header />
    
          {/* Hero Section */}
          <AnimatedSection
            id="about"
            className="snap-start min-h-screen flex flex-col items-center justify-center px-4 py-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4 text-center">
              Hi, I’m Yesia Plorina 👋
            </h1>
            <p className="text-lg text-gray-700 mb-8 text-center max-w-xl">
              Welcome to my portfolio! I’m a web developer passionate about building beautiful and functional web applications.
            </p>
            <a
              href="#projects"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-blue-700 transition"
            >
              View My Projects
            </a>
          </AnimatedSection>
    
          {/* Projects Section */}
          <AnimatedSection
            id="projects"
            className="snap-start min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-white"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-4">Projects</h2>
            <p className="text-gray-700 mb-8 text-center max-w-xl">
              Daftar project yang pernah saya buat akan tampil di sini.
            </p>
            {/* Tambahkan daftar project di sini */}
          </AnimatedSection>
    
          {/* Contact Section */}
          <AnimatedSection
            id="contact"
            className="snap-start min-h-screen flex flex-col items-center justify-center px-4 py-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-4">Contact</h2>
            <p className="text-gray-700 mb-8 text-center max-w-xl">
              Silakan hubungi saya melalui email: yesia@example.com
            </p>
            {/* Tambahkan form kontak atau info lain di sini */}
          </AnimatedSection>
    
          {/* Footer */}
          <footer className="bg-white py-4 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Yesia Plorina. All rights reserved.
          </footer>
        </div>
  )
}
