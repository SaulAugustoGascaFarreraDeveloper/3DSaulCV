import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { currentProjectAtom, projects } from "./Projects";
import { faWhatsapp,faInstagram, faGithub, faFacebook,faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Section = (props) => {
  const { children,mobileTop } = props;

  return (
    <motion.section
      className={`
  h-screen w-screen p-8 max-w-screen-2xl mx-auto
  flex flex-col items-start 
  ${mobileTop ? "justify-start md:justify-center" : "justify-center"}
  `}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

export const Interface = (props) => {
  const { setSection } = props;
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection setSection={setSection} />
      <EducationSection /> 
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      
    </div>
  );
};

const AboutSection = (props) => {
  const { setSection } = props;
  return (
    <Section mobileTop>
      <h1 className="text-3xl sm:text-20xl font-extrabold leading-snug mt-8 md:mt-0">
        Hola, soy
        <br />
        <span className="bg-white px-1 italic">Saul Augusto Gasca Farrera</span>
      </h1>
      <motion.p
        className="text-lg text-gray-800 mt-4"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
      >
        Soy desarollador web y desarollador de apps interactivas
        <br/><br/>
        <strong>Repositorio de proyectos: </strong> <a href="https://github.com/SaulAugustoGascaFarreraDeveloper?tab=repositories">github.com/SaulAugustoGascaFarreraDeveloper</a>
        
      </motion.p>
      <motion.button
        onClick={() => setSection(4)}
        className={`bg-indigo-600 text-white py-4 px-8 
      rounded-lg font-bold text-lg mt-4 md:mt-5`}
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 2,
        }}
      >
        Contactame
      </motion.button>
    </Section>
  );
};


const EducationSection = () => {




  return(
    <Section>


        <h1 className='text-3xl md:text-4xl font-extrabold leading-snug text-white'>
                    Educación
                </h1>
                <motion.p className='text-2xl font-extrabold text-gray-100 mt-6 border-b-2 border-white'
                
                    initial={{
                        opacity: 0,
                        y: 20
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}

                    transition={{
                        duration: 1,
                        delay: 0.7
                    }}
                
                >
                    Licenciatura en Ingenieria en Software y Sistemas Computacionales 
                   
                </motion.p>
                <motion.p className='text-xl  text-gray-100 mt-6'
                
                    initial={{
                        opacity: 0,
                        y: 20
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}

                    transition={{
                        duration: 1,
                        delay: 0.9
                    }}
                
                >
                    Universidad De La Salle Bajio , 2016 - 2020
                   
                </motion.p>
                <motion.p className='text-2xl font-extrabold text-gray-100 mt-6 border-b-2 border-white'
                
                    initial={{
                        opacity: 0,
                        y: 20
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}

                    transition={{
                        duration: 1,
                        delay: 0.7
                    }}
                
                >
                    Maestria en Desarrollo y Programación de Videojuegos
                   
                </motion.p>
                <motion.p className='text-xl  text-gray-100 mt-6'
                
                    initial={{
                        opacity: 0,
                        y: 20
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}

                    transition={{
                        duration: 1,
                        delay: 0.9
                    }}
                
                >
                    Coco School , 2023 - 2025
                   
                </motion.p>


    </Section>
  )
}


const skills = [
  {
    title: "Javascript / NodeJS",
    level: 80
},
{
    title: "React / NextJS",
    level: 80
},
{
    title: "HTML / CSS",
    level: 80
},
{
    title: "Unity / C#",
    level: 50
},
{
    title: "Unreal Engine / C++",
    level: 50
},
{
    title: "SQL",
    level: 60
},
{
  title: "Microsoft Office",
  level: 75
},
];
const languages = [
  {
    title: "Español",
    level: 100,
  },
  {
    title: "Ingles",
    level: 60,
  },
  
];

const SkillsSection = () => {
  return (
    <Section>
      <motion.div className="w-full" whileInView={"visible"}>
        <h2 className="text-3xl md:text-5xl font-bold text-white">Habilidades</h2>
        <div className=" mt-8 space-y-4">
          {skills.map((skill, index) => (
            <div className="w-full md:w-64" key={index}>
              <motion.h3
                className="text-lg md:text-xl font-bold text-gray-100"
                initial={{
                  opacity: 0,
                }}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 1,
                      delay: 1 + index * 0.2,
                    },
                  },
                }}
              >
                {skill.title}
              </motion.h3>
              <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                <motion.div
                  className="h-full bg-indigo-500 rounded-full "
                  style={{ width: `${skill.level}%` }}
                  initial={{
                    scaleX: 0,
                    originX: 0,
                  }}
                  variants={{
                    visible: {
                      scaleX: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mt-10 text-white">Idiomas</h2>
          <div className="mt-8 space-y-4">
            {languages.map((lng, index) => (
              <div className="w-full md:w-64" key={index}>
                <motion.h3
                  className="text-lg md:text-xl font-bold text-gray-100"
                  initial={{
                    opacity: 0,
                  }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 1,
                        delay: 2 + index * 0.2,
                      },
                    },
                  }}
                >
                  {lng.title}
                </motion.h3>
                <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                  <motion.div
                    className="h-full bg-indigo-500 rounded-full "
                    style={{ width: `${lng.level}%` }}
                    initial={{
                      scaleX: 0,
                      originX: 0,
                    }}
                    variants={{
                      visible: {
                        scaleX: 1,
                        transition: {
                          duration: 1,
                          delay: 2 + index * 0.2,
                        },
                      },
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);

  const nextProject = () => {
    setCurrentProject((currentProject + 1) % projects.length);
  };

  const previousProject = () => {
    setCurrentProject((currentProject - 1 + projects.length) % projects.length);
  };

  return (
    <Section>
      <div className="flex w-full h-full gap-8 items-center justify-center">
        <button
          className="hover:text-indigo-600 transition-colors"
          onClick={previousProject}
        >
          ← Anterior
        </button>
        <h2 className="text-3xl md:text-5xl font-bold">Proyectos Recientes</h2>
        <button
          className="hover:text-indigo-600 transition-colors"
          onClick={nextProject}
        >
          Siguiente →
        </button>
      </div>
    </Section>
  );
};

const ContactSection = () => {
  return (
    <Section>
      <h2 className="text-3xl md:text-5xl font-bold">Contactame</h2>
      <div className="mt-8 p-8 rounded-md bg-white bg-opacity-50 w-96 max-w-full">
        <form>
        <div className="flex items-center">
        <FontAwesomeIcon className="mr-2 text-green-600" icon={faWhatsapp} style={{ fontSize: '35px' }} />
        <a href="https://api.whatsapp.com/send?phone=4425785179">
          4425785179
        </a>
      </div>
      <br/>
      <div className="flex items-center">
        
        <FontAwesomeIcon className="mr-2" icon={faEnvelope} style={{ fontSize: '35px' }} />
         sgfarreradev@gmail.com
      </div>
      <br/>
      <div className="flex items-center">
        
        <a href="https://www.instagram.com/saulagf115/">
        <FontAwesomeIcon className="mr-2 text-[#E1306C]" icon={faInstagram} style={{ fontSize: '35px' }} />
        </a>
        
        <a href="https://www.youtube.com/channel/UC1d452U6DrPOeeMypXKNz3A">
        <FontAwesomeIcon className="mr-2 text-[#ff4141]" icon={faYoutube} style={{ fontSize: '35px' }} />
        </a>
        
      </div>
        </form>
      </div>
      <br/>
      
    </Section>
  );
};
