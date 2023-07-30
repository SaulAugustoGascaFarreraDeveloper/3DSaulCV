import React, { useEffect, useRef } from 'react'

export const Test = () => {

    const canvasRef = useRef(null)

    useEffect(() => {

        const canvasElement = document.getElementById("matrix1");

        if (canvasElement) {
            const ctx = canvasElement.getContext("2d");

            ctx.fillStyle = 'red';
            ctx.fillRect(0, 0, canvasElement.width, canvasElement.height);
        }

    },[])


  return (
    <div  className='bg-indigo-900 w-full h-full' >

    </div>
  )
}
