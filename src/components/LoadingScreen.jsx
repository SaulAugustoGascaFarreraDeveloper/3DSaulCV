import { useProgress } from '@react-three/drei'
import React, { useEffect } from 'react'

export const LoadingScreen = (props) => {

    const {started,setStarted} = props

    const {progress,total,loaded,item} = useProgress()

    useEffect(() => {
        console.log(progress, total, loaded, item);


        if (progress === 100) {
          setTimeout(() => {
            setStarted(true);
          }, 2000);
        }
      }, [progress, total, loaded, item]);

  return (
    <div className={`fixed top-0 left-0 w-full h-full z-50 transition-opacity duration-1000 pointer-events-none
                    flex items-center justify-center 
                    ${started ? "opacity-0" : "opacity-100"}`}>
                    

        <div className='text-4xl md:text-9xl font-bold text-green-400 relative'>
            <div className='absolute top-0 left-0 overflow-hidden truncate text-clip transition-all duration-500'
                        style={{
                            width: `${progress}%`
                        }}>
                    CV Saul
            </div>

            <div className='opacity-40' >CV Saul</div>
        
        </div>


    </div>
  )
}