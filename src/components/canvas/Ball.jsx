import React, {Suspense} from 'react'
import {Canvas} from '@react-three/fiber'
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei'
import Loader from '../Loader'


// The decal property is used in some rendering engines or libraries to specify that a particular texture should be applied as a decal on a 3D object
// The mesh property or concept refers to the representation of a 3D object's geometry and appearance in computer graphics, allowing for rendering, manipulation, and interaction with the object in a 3D scene.
const Ball = (props) => {
  const [decal] = useTexture([props.imgIcon])

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.25]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial 
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal 
          map={decal} 
          position={[0, 0, 1]}
          rotation={[2*Math.PI, 0, 6.25]} // Mirroring the image
          flatShading
        />
      </mesh>
    </Float>
  )
}

const BallCanvas = (props) => {
  const {icon} = props
  return (
    <Canvas
      frameloop='demand'
      gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={ <Loader /> }>
        <OrbitControls 
          enableZoom={false} 
          // maxPolarAngle={Math.PI}
          // minPolarAngle={Math.PI}
        />
          <Ball imgIcon={icon}/>
      </Suspense>

      <Preload all/>
    </Canvas>
  )
}

export default BallCanvas