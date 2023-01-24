import React, { useRef, useLayoutEffect } from 'react'
import { OrbitControls, CameraShake, Text, Html } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import { Particles } from './Particles'

import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

export default function App() {

  return (
    <>
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} gl={{ alpha: true, antialias: true }}>
        <OrbitControls makeDefault autoRotate autoRotateSpeed={0.5} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <CameraShake yawFrequency={1} maxYaw={0.05} pitchFrequency={1} maxPitch={0.05} rollFrequency={0.5} maxRoll={0.5} intensity={0.2} />
        <Text fontSize={0.75}>NB</Text>
        <Html transform scale={0.2} position={[0, -0.4, 0]}>
          <TypeWriter />
        </Html>
        <Particles />
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


      words.forEach((word, index) => {
        let tlText = gsap.timeline({ repeat: 1, repeatDelay: 1.5, yoyo: true });
        tlText.to(text.current, { duration: 1, text: word })
        tlMaster.add(tlText)
      });

    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className="flex flex-col">
      <div className='flex'>
        <div>not your average</div>
      </div>

      <div className='flex w-20'>
        <div className='mr-2'>digital </div>
        <div>de</div>
        <div ref={text}></div> 
      </div>

    </div>
  )
}