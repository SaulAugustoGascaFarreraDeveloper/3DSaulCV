import React, { useEffect, useRef, useState } from 'react';
import { LoadingScreen } from './LoadingScreen';

 export const LSTest = (props) => {

  const {started,setStarted} = props


  const canvasRef = useRef(null);
  const isMobile = window.innerWidth < 768

  useEffect(() => {
    const canvasElement = canvasRef.current;
    const ctx = canvasElement.getContext('2d');
    let columns, fontSize, drops;

    const initializeMatrix = () => {
      canvasElement.width = window.innerWidth;
      canvasElement.height = window.innerHeight;
      fontSize = isMobile ? 20 : 25;
      columns = Math.floor(canvasElement.width / fontSize);
      if (columns <= 0) {
        columns = 1; // Establecer una columna mínima si el cálculo resulta en un valor inválido
      }
      drops = Array(columns).fill(1);
    };

    const drawMatrix = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.09)';
      ctx.fillRect(0, 0, canvasElement.width, canvasElement.height);

      ctx.fillStyle = '#0F0'; // green text
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = String.fromCharCode(0x30A0 + Math.random() * (0x30FF - 0x30A0 + 1));
        //const text2 = "SaulAugustoGascaFarreraDeveloper".chartAt(Math.floor(Math.random() * (0x30FF - 0x30A0 + 1)))
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvasElement.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    initializeMatrix();
    const intervalId = setInterval(drawMatrix, 30);

    return () => clearInterval(intervalId);
  }, []);

 

  return (
    <>
      <div>
      <canvas
        ref={canvasRef}
        className={`fixed top-0 left-0 w-full h-full z-50 transition-opacity duration-1000 pointer-events-none ${started ? "opacity-0" : "opacity-100"}`}
      ></canvas>
      <LoadingScreen started={started} setStarted={setStarted} />
    </div>
      
    </>
  );
};


export const LS2 = () => {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center opacity-75 z-20">
        <div className="text-white text-9xl">Loading...</div>
      </div>
    )
  }
  
//   const MatrixComponent = () => {
//     return (
//       <>
//         <LSTest />
//         <LS2 />
        
//       </>
//     );
//   };

//   export default MatrixComponent