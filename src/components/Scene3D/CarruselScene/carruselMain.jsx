import { Canvas } from "@react-three/fiber";
import CarruselScene from './CarruselScene.jsx';
import * as THREE from 'three';

export const Carrusel = () => {
  


  return (
    <Canvas
    style={{height: '100%', width: '100%'}}
    dpr={[0.5, 1.2]}
    performance={{current: 1,min: 0.1,max: 1,debounce: 200,regress: 0.5}}


    gl={{
      antialias: false,
  
      powerPreference: 'high-performance',

      toneMapping: THREE.NoToneMapping,
      gammaOutput: true,
      outputColorSpace: THREE.SRGBColorSpace,
    }}
   
    >
        <CarruselScene/>
    </Canvas>
  );
};

export default Carrusel;