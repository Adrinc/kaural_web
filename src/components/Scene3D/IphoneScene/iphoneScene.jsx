import {Environment, PerspectiveCamera, PresentationControls, Box,  MeshReflectorMaterial, Float} from '@react-three/drei'
import { Suspense } from 'react'
import { ToneMapping,  Bloom, EffectComposer} from '@react-three/postprocessing'
import { enviromentConfig} from '../scene_config.js';

import Iphone from './iphone.jsx';
import { BlendFunction, Resolution } from 'postprocessing';

import * as THREE from 'three'
export default function IphoneScene()
{
    let initCamera={far:2000, near: 0.1, fov: 45, position:[0.3, 4.2,11], rotation:[0, 0, 0]}
    const bloomIphone = {
        mipmapBlur: true,
        intensity: 1,
        luminanceThreshold: 0.9,
        luminanceSmoothing: 0.9,
        resolutionX: Resolution.AUTO_SIZE,
        resolutionY: Resolution.AUTO_SIZE,
        kernelSize: 1,
        blendFunction: BlendFunction.SCREEN,
    
      };
      const toneMappingConfig = {
        blendFunction: BlendFunction.SCREEN,
        mode: 3
        };
      const pointLightConfigs = {
            name: 'directional_light',
            castShadow: true,
            intensity: 8,
            position: [4, 4, 2],
            penumbra: 0,
            color: '#fff',
          };
      
    return <> 

<Suspense fallback={null}>
    <color attach="background" args={['#1b1b1d']} />
    <fog attach="fog" args={['#1b1b1d', 5, 50]} />
        <EffectComposer multisampling={4}>
            <ToneMapping {...toneMappingConfig}/>
            <Bloom {...bloomIphone} />
        </EffectComposer>
    </Suspense>

    
    <PerspectiveCamera makeDefault  {...initCamera}/>
 
    <Environment {...enviromentConfig}/>
    <pointLight {...pointLightConfigs} shadow-bias={-0.0003} shadow-mapSize={ [ 512*6,512*6] } shadow-normalBias={0.01}/>
    <ambientLight intensity={3.2} color={"#5d5d5d"} />
    <Suspense>

    <Box args={[100,100,50]} rotation={[-Math.PI/2,0,0]} position={[0,25,0]} receiveShadow   castShadow>
        <meshStandardMaterial side={THREE.DoubleSide} color={"#1b1b1d"} />
    </Box>

    <PresentationControls
     global={true}
     cursor={true}
     
    config={{ mass: 2, tension: 500 }}
    snap={{ mass: 4, tension: 1500 }}
    rotation={[0,-1.56,0]}
    polar={[-Math.PI / 3, Math.PI / 3]}
    azimuth={[-Math.PI / 1.4, Math.PI / 2]}>

<Float
  speed={3} // Animation speed, defaults to 1
  rotationIntensity={0.1} // XYZ rotation intensity, defaults to 1
  floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
  floatingRange={[-0.1, 0.3]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
>
 
    <Iphone  position={[-0.5,0,0]} />
</Float>

    <mesh rotation={[-Math.PI / 2, 0, 0]}>

    <planeGeometry args={[100, 100]} />
  <MeshReflectorMaterial
     blur={[300, 100]}
     resolution={2048}
     mixBlur={1}
     mixStrength={80}
     roughness={1}
     depthScale={1.2}
     minDepthThreshold={0.4}
     maxDepthThreshold={1.4}
     color="#0A0A0A"
     metalness={0.5}
  />
    
</mesh>
<Box args={[100,100,50]} rotation={[-Math.PI/2,0,0]} position={[0,2,0]} receiveShadow   castShadow> 

<meshStandardMaterial side={THREE.DoubleSide} color={"#000000"} />

</Box>
    </PresentationControls>
    </Suspense>

    </>
}