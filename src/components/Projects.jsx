import { Image, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";

import { motion } from "framer-motion-3d";
import { atom, useAtom } from "jotai";
import { useEffect, useRef } from "react";

export const projects = [
  
  {
    title: "Generador Dibujo",
    url: "https://saulaugustogascafarreradeveloper.github.io/DrawGenerator/",
    image: "projects/dibujo.jpg",
    description: "Dibuja y descarga las coordenadas en JSON",
  },
  {
    title: "Pagina FESSJO",
    url: "https://fessjo-git-main-saulaugustogascafarreradeveloper.vercel.app",
    image: "projects/FESSJOPAGINA.jpg",
    description: "Pagina desarollada para empresa FESSJO",
  },
  {
    title: "Generador Blogs",
    url: "https://youtu.be/ObdVu9IopEo",
    image: "projects/blogs.jpg",
    description: "Saas Generador de Blogs SEO con OpenAI",
  },
  {
    title: "URAvatar",
    url: "https://ur-avatar-ai-6ctp.vercel.app",
    image: "projects/UrAvatar.png",
    description: "Saas Generador de imagenes por medio de AI uando NextJS,ChakraUI y Prisma",
  },
  {
    title: "Web Portafolio",
    url: "https://3-d-saul-cv-v2.vercel.app",
    image: "projects/portafolio.jpg",
    description: "Sketch ThreeJS and NextJS portafolio sonido de fondo",
  },
  {
    title: "VP Manager",
    url: "https://res.cloudinary.com/saul115/video/upload/v1691446608/cigfdfogu8o3jr0qkj7x.mp4",
    image: "projects/vpmanager.jpg",
    description: "Software para Gestionar Videos en cloudinary",
  },
  {
    title: "Quizmefy",
    url: "https://quizmefy-pro.vercel.app",
    image: "projects/quizmefy.jpg",
    description: "Software que usa OpenAI para simular una plataforma de cuestionarios - desarollo en progreso",
  },
];

const Project = (props) => {
  const { project, highlighted } = props;

  const background = useRef();
  const bgOpacity = useMotionValue(0.4);

  useEffect(() => {
    animate(bgOpacity, highlighted ? 0.7 : 0.4);
  }, [highlighted]);

  useFrame(() => {
    background.current.material.opacity = bgOpacity.get();
  });

  return (
    <group {...props}>
      <mesh
        position-z={-0.001}
        onClick={() => window.open(project.url, "_blank")}
        ref={background}
      >
        <planeGeometry args={[2.2, 2]} />
        <meshBasicMaterial color="black" transparent opacity={0.4} />
      </mesh>
      <Image
        scale={[2, 1.2, 1]}
        url={project.image}
        toneMapped={false}
        position-y={0.3}
      />
      <Text
        maxWidth={2}
        anchorX={"left"}
        anchorY={"top"}
        fontSize={0.2}
        position={[-1, -0.4, 0]}
      >
        {project.title.toUpperCase()}
      </Text>
      <Text
        maxWidth={2}
        anchorX="left"
        anchorY="top"
        fontSize={0.1}
        position={[-1, -0.6, 0]}
      >
        {project.description}
      </Text>
    </group>
  );
};

export const currentProjectAtom = atom(Math.floor(projects.length / 2));

export const Projects = () => {
  const { viewport } = useThree();
  const [currentProject] = useAtom(currentProjectAtom);

  return (
    <group position-y={-viewport.height * 3.03 + 1}>
      {projects.map((project, index) => (
        <motion.group
          key={"project_" + index}
          position={[index * 2.5, 0, -3]}
          animate={{
            x: 0 + (index - currentProject) * 2.5,
            y: currentProject === index ? 0 : -0.1,
            z: currentProject === index ? -2 : -3,
            rotateX: currentProject === index ? 0 : -Math.PI / 3,
            rotateZ: currentProject === index ? 0 : -0.1 * Math.PI,
          }}
        >
          <Project project={project} highlighted={index === currentProject} />
        </motion.group>
      ))}
    </group>
  );
};
