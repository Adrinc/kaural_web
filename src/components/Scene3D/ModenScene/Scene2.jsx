import {Sparkles,  BakeShadows, Environment, OrbitControls, PerspectiveCamera, PresentationControls} from '@react-three/drei'
import React, { Suspense, useEffect } from 'react'
import { useControls } from 'leva';

import { ToneMapping , ChromaticAberration, Bloom, EffectComposer, Noise, Vignette } from '@react-three/postprocessing'
import { enviromentConfig, pointLightConfig } from '../scene_config.js';
import { vignetteConfig, chromaticAberrationConfig, bloomConfig, noiseConfig, toneMappingConfig } from '../scene_config.js';
import Moden from './moden2.jsx';

export default function Scene()
{
    let initCamera={far:2000, near: 0.1, fov: 35, position:[0, 0.5,3], rotation:[0, 0, 0]};
    

    return <> 

    <Suspense fallback={null}>
        <EffectComposer multisampling={4}>
            <ToneMapping {...toneMappingConfig}/>
          
     
      
            <Bloom {...bloomConfig} />
            <ChromaticAberration {...chromaticAberrationConfig} />
         
        </EffectComposer>
    </Suspense>
 
    <PerspectiveCamera makeDefault  {...initCamera}/>
    <Environment {...enviromentConfig}/>
    <pointLight {...pointLightConfig} shadow-bias={-0.0003} shadow-mapSize={ [ 512*6,512*6] } shadow-normalBias={0.01}/>
    <ambientLight intensity={5.2} color={"#5d5d5d"} />
    <Suspense>


    <PresentationControls
    config={{ mass: 2, tension: 500 }}
    snap={{ mass: 4, tension: 1500 }}
    rotation={[0.4,-2,0]}
    polar={[-Math.PI / 3, Math.PI / 3]}
    azimuth={[-Math.PI / 1.4, Math.PI / 2]}

>
<Moden  position={[-0.2,0.2,0]} />
</PresentationControls>


    

 
        
     
  
    </Suspense>

    </>
}