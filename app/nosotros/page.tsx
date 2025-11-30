import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import WhatsAppFloat from '../components/WhatsAppFloat';

export default function NosotrosPage() {
  const achievements = [
    {
      year: "2025",
      title: "UNAM CANSAT 2025",
      description: "Finalistas del eventos UNAM CANSAT 2025",
      icon: "🏆"
    }
  ];

  const team = [
    {
      name: "Jorge Espindola",
      role: "Ingeniero de sistemas",
      expertise: "Con 19 años de experiencia en el desarrollo de estaciones terrenas para rastreo y control de satélites",
      achievement: "Líder proyecto de la participacion en UNAM CANSAT 2025"
    },
    {
      name: "Diana Sanabria", 
      role: "Ingeniera Industrial",
      expertise: "Estudiante de maestria de metalurgia y ciencia de materiales",
      achievement: "Finalista del evento UNAM CANSAT 2025"
    },
    {
      name: "Nini Diaz",
      role: "Ingeniera de sistemas",
      expertise: "Magister en Software y sistemas informaticos",
      achievement: "Especialista de arquitectura de computadores"
    },
    {
      name: "Ana Maria Sanchez",
      role: "Ingenieria electronica",
      expertise: "Experta en diseño de cohetes y transmision de datos", 
      achievement: "Ganadora del LASC (latin american space challenge) 2019"
    }
  ];

  const campaigns = [
    {
      name: "Boyacá Programadora",
      reach: "2,500 estudiantes",
      duration: "2022-2023", 
      impact: "Introdujo programación en 45 colegios públicos del departamento",
      highlight: "30% de participantes ingresaron a carreras tecnológicas"
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 pt-32 pb-20">
        
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16 mb-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Líderes en Innovación Educativa en Boyacá
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Más de 10 años transformando la educación mediante programas STEAM, 
                ganadores de concursos nacionales e internacionales
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/servicios"
                  className="bg-blue-600 text-white hover:bg-blue-500 px-6 py-3 rounded-lg font-medium transition duration-200"
                >
                  Nuestros Servicios
                </Link>
                <Link 
                  href="/contacto"
                  className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg font-medium transition duration-200"
                >
                  Trabaja con Nosotros
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Nuestra Historia */}
        <section className="container mx-auto px-4 mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Nuestra Trayectoria
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Comenzamos en 2014 como un pequeño equipo de educadores apasionados por la tecnología 
                  en el corazón de Boyacá. Hoy somos referentes nacionales en educación STEAM.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Nuestra misión es cerrar las brechas educativas mediante la implementación de 
                  programas innovadores que preparen a los estudiantes boyacenses para los desafíos del siglo XXI.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">50+</div>
                    <div className="text-gray-600">Instituciones Impactadas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">15K+</div>
                    <div className="text-gray-600">Estudiantes Formados</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">25+</div>
                    <div className="text-gray-600">Concursos Ganados</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">12</div>
                    <div className="text-gray-600">Municipios de Boyacá</div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Nuestro Compromiso</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-2xl mr-3">🎯</span>
                    <span>Innovación educativa con impacto social real</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-2xl mr-3">🏆</span>
                    <span>Excelencia demostrada en competencias nacionales</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-2xl mr-3">🤝</span>
                    <span>Trabajo colaborativo con comunidades educativas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-2xl mr-3">🚀</span>
                    <span>Preparación para el futuro tecnológico</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Logros y Reconocimientos */}
        <section className="container mx-auto px-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Logros Destacados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
                <div className="flex items-start mb-4">
                  <span className="text-3xl mr-4">{achievement.icon}</span>
                  <div>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {achievement.year}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mt-2">{achievement.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Campañas Educativas en Boyacá */}
        <section className="container mx-auto px-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Campañas Educativas en Boyacá
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {campaigns.map((campaign, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{campaign.name}</h3>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    {campaign.duration}
                  </span>
                </div>
                <div className="mb-4">
                  <span className="font-semibold text-blue-600">Alcance: </span>
                  <span className="text-gray-600">{campaign.reach}</span>
                </div>
                <p className="text-gray-600 mb-4">{campaign.impact}</p>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Logro destacado: </span>
                    {campaign.highlight}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Nuestro Equipo */}
        <section className="container mx-auto px-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Nuestro Equipo de Expertos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.expertise}</p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Logro principal: </span>
                    {member.achievement}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para Transformar tu Institución?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Lleva la excelencia educativa que ha ganado premios nacionales a tu colegio o universidad
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contacto"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition duration-200"
              >
                Iniciar Proyecto
              </Link>
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition duration-200"
              >
                Consultoría Gratuita
              </a>
            </div>
          </div>
        </section>

      </div>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}