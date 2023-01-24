import { useRef, forwardRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { View, Preload, OrbitControls } from '@react-three/drei'

function Line({text}) {

    return (

        <div className="visual-block inline-block">
            <div className='text-6xl uppercase inline-block'>{text}</div>
            <div className='h-16 overflow-hidden w-32 inline-block'>
                <img className='w-full h-full object-cover' src='https://images.unsplash.com/photo-1516585303056-5697400f461d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1438&q=80' />
            </div>
            &nbsp;
        </div>
    )
}




export default Line