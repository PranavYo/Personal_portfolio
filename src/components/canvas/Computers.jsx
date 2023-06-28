import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect, useState } from 'react'
import Loader from '../Loader'

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [scale, setScale] = useState(0.75)

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
    }
    
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if(screenWidth < 450) setScale(0.4)
    else if(screenWidth >= 450 && screenWidth < 600) setScale(0.6)
    else if(screenWidth >= 600) setScale(0.75)
  }, [screenWidth])
  

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black'/>
      <pointLight intensity={1}/>
      <spotLight 
        position={[-20, 50, 10]}
        castShadow
      />
      <primitive 
        object={computer.scene}
        scale={scale}
        position={(screenWidth < 450) ? [0, -2.5, -0.8] : [0, -3.5, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

function ComputersCanvas() {
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{position: [20, 3, 5], fov: 25}}
      gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={ <Loader/> }>
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
          <Computers />
      </Suspense>

      <Preload all/>
    </Canvas>
  )
}


export default ComputersCanvas

{/*Suspense - fetcing of async data with a fallback which tells what to do while the data is fetching */}