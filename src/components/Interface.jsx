import { ValidationError, useForm } from "@formspree/react";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { currentProjectAtom, projects } from "./Projects";
import { faWhatsapp,faInstagram, faGithub, faFacebook,faYoutube,faReact,faJs,faUnity,faHtml5,faMicrosoft} from '@fortawesome/free-brands-svg-icons';
import { faDatabase,faGamepad  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFlag,faFlagUsa } from "@fortawesome/free-solid-svg-icons";

const Section = (props) => {
  const { children, mobileTop } = props;
  

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
  const isMobile = window.innerWidth < 768;
  return (
    <Section mobileTop>
      <h1 className="text-3xl sm:text-20xl font-extrabold leading-snug mt-8 md:mt-0">
        Hola, soy
        <br />
        <span className="bg-white px-1 italic">Saul Augusto Gasca Farrera</span>
      </h1>
      <motion.p
        className={` ${isMobile ? "text-2lg" : "text-2xl"  } text-gray-900 mt-4`}
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

        
       
        

        <div className="flex items-center mb-5 mt-5">
          <strong className="mr-2">Edad:</strong> 29 años
        </div>

        

        <div className="flex items-center">
          <FontAwesomeIcon className="mr-3 text-black" icon={faGithub} style={{ fontSize: '35px' }} /><a href="https://github.com/SaulAugustoGascaFarreraDeveloper?tab=repositories">SaulAugustoGascaFarreraDeveloper</a>
        </div>
        
        
      </motion.p>
      <motion.button
        onClick={() => setSection(4)}
        className={`bg-indigo-600 text-white py-4 px-8 
      rounded-lg font-bold text-lg mt-4 md:mt-16`}
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
        Contáctame
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
    title: (
      <span>
        <FontAwesomeIcon
          className="mr-2 text-yellow-500 "
          icon={faJs}
          style={{ fontSize: "20px" }}
        />
        Javascript / NodeJS
      </span>
    ),
    level: 80,
  },
  {
    title: (
      <span>
        <FontAwesomeIcon
          className="mr-2 text-blue-700"
          icon={faReact}
          style={{ fontSize: "20px" }}
        />
        React / NextJS
      </span>
    ),
    level: 80,
  },
  {
    title: (
      <span>
        <FontAwesomeIcon
          className="mr-2 text-black"
          icon={faUnity}
          style={{ fontSize: "20px" }}
        />
        Unity / C#
      </span>
    ),
    level: 50,
  },
  {
    title: (
      <span>
        <FontAwesomeIcon
          className="mr-2 text-white "
          icon={faGamepad}
          style={{ fontSize: "20px" }}
        />
        Unreal Engine / C++
      </span>
    ),
    level: 50,
  },
  {
    title: (
      <span>
        <FontAwesomeIcon
          className="mr-2 text-orange-500 "
          icon={faHtml5}
          style={{ fontSize: "20px" }}
        />
        HTML / CSS
      </span>
    ),
    level: 80,
  },
  {
    title: (
      <span>
        <FontAwesomeIcon
          className="mr-2 text-blue-700 "
          icon={faMicrosoft}
          style={{ fontSize: "20px" }}
        />
        Microsoft Office
      </span>
    ),
    level: 75,
  },
  {
    title:(
      <span>
        <FontAwesomeIcon
          className="mr-2 text-yellow-500"
          icon={faDatabase}
          style={{ fontSize: "20px" }}
        />
        SQL
      </span>
    ),
    level: 60,
  },
  // Resto de las habilidades
];


const languages = [
  {
    title: (
      <span>
       
        Español
      </span>
    ),
    level: 100,
  },
  {
    title: (
      <span>
        
        Ingles
      </span>
    ),
    level: 60,
  },
  // Resto de los idiomas
];

const SkillsSection = () => {
  return (
    <Section>
      <motion.div className="w-full" whileInView={"visible"}>
        <h2 className="text-3xl md:text-5xl font-bold text-white">Habilidades</h2>
        <div className="mt-8 space-y-4">
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
          <h2 className="text-3xl md:text-5xl font-bold mt-10 text-white">
            Idiomas
          </h2>
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
  const [state, handleSubmit] = useForm("mayzgjbd");
  return (
    <Section>
      <h2 className="text-3xl md:text-5xl font-bold">Contáctame</h2>
      <div className="mt-8 p-8 rounded-md bg-white bg-opacity-50 w-96 max-w-full">
        <form>
        <div className="flex items-center">
        <FontAwesomeIcon className="mr-2 text-green-600 hover:-translate-y-[2px]" icon={faWhatsapp} style={{ fontSize: '35px' }} />
        <a href="https://api.whatsapp.com/send?phone=4425785179">
          4425785179
        </a>
      </div>
      <br/>
      <div className="flex items-center">
        
        <FontAwesomeIcon className="mr-2 hover:-translate-y-[2px]" icon={faEnvelope} style={{ fontSize: '35px' }} />
         sgfarreradev@gmail.com
      </div>
      <br/>
      <div className="flex items-center">
        
        <a href="https://www.instagram.com/saulagf115/">
        <FontAwesomeIcon className="mr-2 text-[#E1306C] hover:-translate-y-[2px]" icon={faInstagram} style={{ fontSize: '35px' }} />
        </a>
        
        <a href="https://www.youtube.com/channel/UC1d452U6DrPOeeMypXKNz3A">
        <FontAwesomeIcon className="mr-2 text-[#ff4141] hover:-translate-y-[2px]" icon={faYoutube} style={{ fontSize: '35px' }} />
        </a>

       

        
      </div>
      
      <div className="mt-2">
          <a className="text-[#000000]" href="/file/SaulAugusto_GascaFarrera_CV_2023.pdf" download={true}>
            <strong className="border-b-2 border-[#000000]">Descargar CV</strong>
          </a>
        </div>
        </form>
      </div>
      <br/>
    </Section>
  );
};
