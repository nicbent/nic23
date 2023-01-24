import { useRef, forwardRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { View, Preload, OrbitControls } from '@react-three/drei'

function TextBlock({ text }) {

    return (

        <div className='text inline-block'>{text}&nbsp;</div>
    )
}




export default TextBlock