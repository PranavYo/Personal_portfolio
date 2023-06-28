import { Points, Preload, shaderMaterial } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { random } from 'maath'
import React, { Suspense, useRef } from 'react'
import { Vector3 } from 'three'

const Stars = (props) => {
  const ref = useRef()

  const sphere = random.inSphere(new Float32Array(5000), {radius: 1.2})

  // const positions = sphere.reduce((acc, curr, index) => {
  //   if(index % 3 === 0) {
  //     acc.push(new Vector3(curr, sphere[index + 1], sphere[index + 2]))
  //   }
  //   return acc
  // }, [])

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 4
    ref.current.rotation.y -= delta / 4
  })

  return (
    <group position={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <pointsMaterial 
          transparent
          color='#ffffff'
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

export default function StarsCanvas() {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{position: [0, 0, 1]}}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        
        <Preload all />
      </Canvas>
    </div>
  )
}