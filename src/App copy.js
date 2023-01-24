import * as THREE from 'three'
import React, { Suspense, useEffect, useState, useRef, useLayoutEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Reflector, Text, useTextur, Html } from '@react-three/drei'
import { motion, MotionConfig } from "framer-motion"

import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);


export default function App() {

  return (
    <>
      <Canvas camera={{ position: [0, 0, 10] }}>
        <Suspense fallback={null}>
          <VideoText position={[0, 1, 0]} />
          <mesh position={[0, 0, 0]}>
            <Html>
              <Baby />
            </Html>
          </mesh>

          <ambientLight intensity={0.5} />
          <spotLight position={[0, 10, 0]} intensity={0.3} />
          <directionalLight position={[-50, 0, -40]} intensity={0.7} />
        </Suspense>
      </Canvas>
    </>
  )
}


function VideoText(props) {
  const [video] = useState(() => Object.assign(document.createElement('video'), { src: '/drei.mp4', crossOrigin: 'Anonymous', loop: true, muted: true }))
  useEffect(() => void video.play(), [video])
  return (
    <>
      <Text font="/usual.otf" fontSize={2.5} letterSpacing={-0.07} {...props}>
        NB
        <meshBasicMaterial toneMapped={false}>
          <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
        </meshBasicMaterial>
      </Text>

    </>
  )
}


function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object

  return (
    <mesh
      {...props}
      color="black"
      scale={1}
    >
      <planeGeometry args={[1, 0.1]} />

    </mesh>
  )
}


/*

function Intro() {
  const [vec] = useState(() => new THREE.Vector3())
  return useFrame((state) => {
    state.camera.position.lerp(vec.set(state.mouse.x * 3.5, 3 + state.mouse.y * 3.5, 10), 1)
    state.camera.lookAt(0, 0, 0)
  })
}

*/


function Baby() {

  const babe = useRef();
  const text = useRef();

  const words = ['veloper', 'signer']

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      let tlMaster = gsap.timeline({ repeat: -1 });

      words.map((word) => {
        let tl1 = gsap.timeline({ repeat: 1, repeatDelay: 1.5, yoyo: true });
        tl1.to(text.current, { duration: 1, text: word })
        tlMaster.add(tl1)
      })

    }, babe);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={babe} className="flex flex-col w-80 lg:text-2xl md:text-xl -translate-x-1/2">
      <div className='flex justify-center items-center'>
        <div>not your average</div>
      </div>

      <div className='flex justify-center items-center'>
      <div className='mr-2'>digital </div>
        <div>de</div>
        <div ref={text}></div>
        <div className='w-2 h-6 bg-white'></div>
      </div>

    </div>
  )
}


function TypeWriter({ letters }) {
  const [reversed, setReversed] = useState(false);
  const app = useRef();

  const menuRefs = useRef([]);
  menuRefs.current = [];


  const first = ['H', 'E', 'L', 'L', 'O']


  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      let tl = gsap.timeline();
      tl.fromTo(menuRefs.current, { opacity: 0 }, { opacity: 1, stagger: 0.1 }
      );
    }, app);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el) => {
    if (el && !menuRefs.current.includes(el)) {
      menuRefs.current.push(el);
    }
  };

  return (
    <div ref={app} className="flex">
      {letters.map((letter, index) => {
        return (
          <div key={index} ref={addToRefs}>{letter}</div>
        )

      })}
      <div>|</div>
    </div>
  );
}





function TestIT({ letters }) {

  const [isOpen, setIsOpen] = useState(false);



  const container = {
    hidden: {
      transition: {
        staggerChildren: 0.25, staggerDirection: -1
      }
    },
    show: {
      transition: {
        staggerChildren: 0.25
      }

    }
  }

  let items = {
    hidden: { opacity: 0, y: -50 },
    show: {
      opacity: 1,
      y: 0,

    },
  };

  return (

    <motion.div variants={container} initial="hidden" animate='show' className='flex' /*onAnimationComplete={() => setIsOpen(!isOpen)}*/ >

      {letters.map((letter, index) => {
        return (
          <motion.div variants={items}>
            {letter}
          </motion.div>
        )

      })}

    </motion.div>

  );
}