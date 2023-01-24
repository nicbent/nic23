import { useRef, forwardRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { View, Preload, OrbitControls } from '@react-three/drei'

function Visual({before, after}) {

    return (

        <div className="text visual-block inline-block">
            <div className="mr-[.25em] inline-block">{before}</div>
            <div className='h-16 overflow-hidden w-32 inline-block'>
                <img className='w-full h-full object-cover' src='https://images.unsplash.com/photo-1671099484139-b4674a9bf986?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' />
            </div>
            <div className="ml-[.25em] inline-block">{after}</div>

            &nbsp;
        </div>
    )
}




export default Visual