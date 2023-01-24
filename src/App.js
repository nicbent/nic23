import React, { useRef, useLayoutEffect } from 'react'
import { OrbitControls, CameraShake, Text, Html } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import { useControls } from 'leva'
import { Particles } from './Particles'

import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

export default function App() {
  const props = useControls({
    focus: { value: 5.1, min: 3, max: 7, step: 0.01 },
    speed: { value: 1, min: 0.1, max: 100, step: 0.1 },
    aperture: { value: 7.0, min: 1, max: 7.0, step: 0.1 },
    fov: { value: 50, min: 0, max: 200 },
    curl: { value: 0.17, min: 0.01, max: 0.5, step: 0.01 }
  })
  return (
    <>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }} gl={{ alpha: true, antialias: true }}>
        <OrbitControls makeDefault autoRotate autoRotateSpeed={0.5} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <CameraShake yawFrequency={1} maxYaw={0.05} pitchFrequency={1} maxPitch={0.05} rollFrequency={0.5} maxRoll={0.5} intensity={0.2} />
        <Text fontSize={0.75}>NB</Text>
        <Html transform scale={0.175} position={[0, -0.4, 0]}>
          <TypeWriter />
        </Html>
        <Particles {...props} />
      </Canvas>
    </>
  )
}



function TypeWriter() {

  const container = useRef();
  const text = useRef();


  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const words = ['veloper', 'signer']

      let tlMaster = gsap.timeline({ repeat: -1 });

        words.forEach ((word, index) => {
        let tlText = gsap.timeline({ repeat: 1, repeatDelay: 1.5, yoyo: true });
        tlText.to(text.current, { duration: 1, text: word })
        tlMaster.add(tlText)
      });

    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className="flex flex-col min-w-[10rem] justify-center items-center uppercase">
      <div className='flex'>
        <div>not your average</div>
      </div>

      <div className='flex'>
      <div className='mr-2'>digital </div>
        <div>de</div>
        <div ref={text}></div>
        <div className='w-2 h-6 bg-white'></div>
      </div>

    </div>
  )
}