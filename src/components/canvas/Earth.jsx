import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Loader from '../Loader'
import { OrbitControls, useGLTF } from '@react-three/drei'

const Earth = () => {

  const earth = useGLTF('./planet/scene.gltf')

  return (
    <primitive 
      object={earth.scene}
      scale={2.5}
    />
  )
}

const EarthCanvas = () => {

  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{preserveDrawingBuffer: true}}
      // camera={{
      //   position: [-4, 3, 6],
      //   fov: 55,
      //   near: 0.1,
      //   far: 200
      // }}
    >
      <Suspense fallback={ <Loader /> }>
        <OrbitControls 
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        
        <Earth />
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas