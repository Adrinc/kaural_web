import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useVideoTexture } from '@react-three/drei';
import * as THREE from 'three';

export default function Moden(props) {
  const { nodes, materials } = useGLTF("models/iphone.glb");

  
  const video = useVideoTexture('/videos/iphoneScreen.mp4');


  return (
    <group {...props} dispose={null}>
      <mesh
        name="pantalla_marco"
        castShadow
        receiveShadow
        geometry={nodes.pantalla_marco.geometry}
        material={materials.Black}
        position={[0.163, 4.145, -0.412]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2.041}
      />
      <mesh
        name="glass_front"
        castShadow
        receiveShadow
        geometry={nodes.glass_front.geometry}
        material={materials.Grass}
        position={[0.194, 4.145, -0.412]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2.041}
      />
      <group
        name="borde"
        position={[0.121, 4.145, -0.412]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2.041}
      >
        <mesh
          name="borde_1"
          castShadow
          receiveShadow
          geometry={nodes.borde_1.geometry}
          material={materials.TestMaterial}
        />
        <mesh
          name="borde_2"
          castShadow
          receiveShadow
          geometry={nodes.borde_2.geometry}
          material={materials[".001"]}
        />
        <mesh
          name="borde_3"
          castShadow
          receiveShadow
          geometry={nodes.borde_3.geometry}
          material={materials.Flash}
        />
        <mesh
          name="borde_4"
          castShadow
          receiveShadow
          geometry={nodes.borde_4.geometry}
          material={materials.Black}
        />
        <mesh
          name="borde_5"
          castShadow
          receiveShadow
          geometry={nodes.borde_5.geometry}
          material={materials.Labber}
        />
        <mesh
          name="borde_6"
          castShadow
          receiveShadow
          geometry={nodes.borde_6.geometry}
          material={materials.Lenscover}
        />
        <mesh
          name="borde_7"
          castShadow
          receiveShadow
          geometry={nodes.borde_7.geometry}
          material={materials["Lens.2"]}
        />
        <mesh
          name="borde_8"
          castShadow
          receiveShadow
          geometry={nodes.borde_8.geometry}
          material={materials.Back}
        />
        <mesh
          name="borde_9"
          castShadow
          receiveShadow
          geometry={nodes.borde_9.geometry}
          material={materials.Grass}
        />
      </group>
      <group
        name="glass_camaras"
        position={[-0.075, 6.499, -0.94]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        scale={0.18}
      >
        <mesh
          name="glass_camaras_1"
          castShadow
          receiveShadow
          geometry={nodes.glass_camaras_1.geometry}
          material={materials.Black}
        />
        <mesh
          name="glass_camaras_2"
          castShadow
          receiveShadow
          geometry={nodes.glass_camaras_2.geometry}
          material={materials.Grass}
        />
      </group>
      <mesh
        name="pantalla"
       
        geometry={nodes.pantalla.geometry}
        material={ new THREE.MeshBasicMaterial({map: video,  toneMapped: false }) }
        position={[0.16, 4.145, -0.414]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2.03}
      />
      <mesh
        name="back"
        castShadow
        receiveShadow
        geometry={nodes.back.geometry}
        material={materials.black}
        position={[-0.321, 7.101, -1.266]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.846}
      />
      <group
        name="glass_back"
        position={[-0.321, 7.101, -1.266]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.846}
      >
        <mesh
          name="glass_back_1"
          castShadow
          receiveShadow
          geometry={nodes.glass_back_1.geometry}
          material={materials["Grass.001"]}
        />
        <mesh
          name="glass_back_2"
          castShadow
          receiveShadow
          geometry={nodes.glass_back_2.geometry}
          material={materials.Back}
        />
      </group>
    </group>
  );
}

useGLTF.preload("models/iphone.glb");
