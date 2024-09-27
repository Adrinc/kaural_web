import {PerspectiveCamera} from '@react-three/drei'
import { Suspense } from 'react'



import Carrusel from './carrusel.jsx';

export default function CarruselScene()
{
    let initCamera={far:2000, near: 0.1, fov: 45, position:[0, 0,12], rotation:[0, 0, 0]}

    return <> 

   
 
    <PerspectiveCamera makeDefault  {...initCamera}/>

    <ambientLight intensity={20} color={"#5d5d5d"} />
    <Suspense>

        <Carrusel rotation={[0.4,-2,0]} position={[-1.,3,0]} />
    </Suspense>

    </>
}