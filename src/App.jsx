import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function App() {
  return (
    <div className='min-h-screen bg-gray-900 text-white font-sans'>
      {/* Navbar */}
      <nav className='fixed top-0 w-full bg-gray-800 shadow-md z-50'>
        <div className='container mx-auto px-6 py-3'>
          <div className='flex justify-between items-center'>
            <div className='text-xl font-bold text-blue-400'>
              Fernando Ramírez
            </div>
            <div className='hidden md:flex space-x-8'>
              {[
                'Inicio',
                'Sobre Mí',
                'Habilidades',
                'Proyectos',
                'Contacto',
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className='text-white hover:text-blue-400 transition-colors duration-300'
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id='inicio'
        className='min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800'
      >
        <div className='container mx-auto px-6 text-center'>
          <h1 className='text-5xl md:text-7xl font-bold mb-4'>
            Fernando Ramírez
          </h1>
          <h2 className='text-2xl md:text-3xl text-blue-400 mb-6'>
            Software Engineer | Aspiring Data Scientist
          </h2>
          <p className='text-lg md:text-xl max-w-2xl mx-auto mb-8'>
            Estudiante de 5to semestre de Ingeniería de Software con pasión por
            la tecnología y transición hacia el análisis de datos.
          </p>
          <a
            href='#proyectos'
            className='inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300'
          >
            Ver Proyectos
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id='sobre-mí' className='py-20 bg-gray-800'>
        <div className='container mx-auto px-6'>
          <h2 className='text-3xl md:text-4xl font-bold mb-8 text-center'>
            Sobre Mí
          </h2>
          <div className='max-w-3xl mx-auto'>
            <p className='text-lg leading-relaxed'>
              Soy un estudiante de Ingeniería de Software con sólidos
              conocimientos en desarrollo full-stack. Actualmente estoy
              enfocándome en adquirir habilidades en ciencia de datos y
              análisis, ya que creo firmemente en el poder de los datos para
              transformar negocios y tomar decisiones estratégicas. Combino mis
              habilidades técnicas con una mentalidad analítica para resolver
              problemas complejos.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id='habilidades' className='py-20 bg-gray-900'>
        <div className='container mx-auto px-6'>
          <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
            Habilidades Técnicas
          </h2>

          <div className='grid md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
            {/* Web Development */}
            <div className='bg-gray-800 p-6 rounded-lg shadow-lg'>
              <h3 className='text-xl font-semibold mb-4 text-blue-400'>
                Desarrollo Web (Full-Stack)
              </h3>
              <div className='flex flex-wrap gap-2'>
                {[
                  'React',
                  'Node.js',
                  'JavaScript (ES6+)',
                  'HTML5',
                  'CSS3',
                  'Tailwind CSS',
                  'PostgreSQL',
                  'MongoDB',
                ].map((skill) => (
                  <span
                    key={skill}
                    className='bg-gray-700 px-3 py-1 rounded-full text-sm'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Data Analysis */}
            <div className='bg-gray-800 p-6 rounded-lg shadow-lg'>
              <h3 className='text-xl font-semibold mb-4 text-blue-400'>
                Análisis de Datos (En aprendizaje)
              </h3>
              <div className='flex flex-wrap gap-2'>
                {[
                  'Python',
                  'Pandas',
                  'NumPy',
                  'SQL',
                  'Scikit-learn',
                  'Matplotlib',
                ].map((skill) => (
                  <span
                    key={skill}
                    className='bg-gray-700 px-3 py-1 rounded-full text-sm'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id='proyectos' className='py-20 bg-gray-800'>
        <div className='container mx-auto px-6'>
          <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
            Proyectos Destacados
          </h2>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {[1, 2, 3].map((project) => (
              <div
                key={project}
                className='bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105'
              >
                <img
                  src={`https://placehold.co/600x400/1a1a1a/3b82f6?text=Proyecto+${project}`}
                  alt={`Proyecto ${project}`}
                  className='w-full h-48 object-cover'
                />
                <div className='p-6'>
                  <h3 className='text-xl font-semibold mb-2'>
                    Proyecto {project}
                  </h3>
                  <p className='text-gray-300 mb-4'>
                    Descripción breve del proyecto {project} y sus
                    características principales.
                  </p>
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {['React', 'Node.js', 'Python']
                      .slice(0, project)
                      .map((tech) => (
                        <span
                          key={tech}
                          className='bg-gray-700 px-2 py-1 rounded-full text-xs'
                        >
                          {tech}
                        </span>
                      ))}
                  </div>
                  <div className='flex space-x-4'>
                    <a
                      href='#'
                      className='text-blue-400 hover:text-blue-300 transition-colors duration-300'
                    >
                      <FaGithub size={20} />
                    </a>
                    <a
                      href='#'
                      className='text-blue-400 hover:text-blue-300 transition-colors duration-300'
                    >
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id='contacto' className='py-20 bg-gray-900'>
        <div className='container mx-auto px-6 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-8'>Contacto</h2>
          <p className='text-lg max-w-2xl mx-auto mb-12'>
            Estoy abierto a nuevas oportunidades y colaboraciones. ¡Conectemos!
          </p>

          <div className='flex justify-center space-x-6'>
            <a
              href='https://linkedin.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white hover:text-blue-400 transition-colors duration-300'
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href='https://github.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white hover:text-blue-400 transition-colors duration-300'
            >
              <FaGithub size={28} />
            </a>
            <a
              href='mailto:fernando@example.com'
              className='text-white hover:text-blue-400 transition-colors duration-300'
            >
              <FaEnvelope size={28} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
