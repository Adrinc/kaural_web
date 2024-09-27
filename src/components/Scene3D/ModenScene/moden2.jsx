import { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from 'three';
export default function Moden(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("models/moden2.glb");
  const { actions } = useAnimations(animations, group);
  

   useEffect(() => {

     actions['rotar'].play();
        
  }, []);


  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Suelo"
          castShadow
          receiveShadow
          geometry={nodes.Suelo.geometry}
          material={ new THREE.MeshStandardMaterial({color: 0x000000, toneMapped: true, emissiveIntensity:0}) }
          position={[0.415, -0.005, -0.04]}
          scale={0.556}
        />
        <group
          name="Cuerpo"
          position={[0.218, 1.049, 0.071]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.149, 0.131, 0.076]}
        >
          <mesh
            name="Plano003"
            castShadow
            receiveShadow
            geometry={nodes.Plano003.geometry}
            material={materials["Material.006"]}
          />
          <mesh
            name="Plano003_1"
            castShadow
            receiveShadow
            geometry={nodes.Plano003_1.geometry}
            material={materials.qrcode}
          />
          <mesh
            name="Plano003_2"
            castShadow
            receiveShadow
            geometry={nodes.Plano003_2.geometry}
            material={materials.Plata}
          />
          <mesh
            name="Plano003_3"
            castShadow
            receiveShadow
            geometry={nodes.Plano003_3.geometry}
            material={materials.white}
          />
          <mesh
            name="Plano003_4"
            castShadow
            receiveShadow
            geometry={nodes.Plano003_4.geometry}
            material={materials["Material.009"]}
          />
          <mesh
            name="Plano003_5"
            castShadow
            receiveShadow
            geometry={nodes.Plano003_5.geometry}
            material={materials.gray}
          />
          <mesh
            name="Plano003_6"
            castShadow
            receiveShadow
            geometry={nodes.Plano003_6.geometry}
            material={materials.Bronce}
          />
          <mesh
            name="Plano003_7"
            castShadow
            receiveShadow
            geometry={nodes.Plano003_7.geometry}
            material={materials.Plastic_black}
          />
          <mesh
            name="Plano003_8"
            castShadow
            receiveShadow
            geometry={nodes.Plano003_8.geometry}
            material={materials.material_0}
          />
          <mesh
            name="Plano003_9"
            castShadow
            receiveShadow
            geometry={nodes.Plano003_9.geometry}
            material={materials.yellow}
          />
          <mesh
            name="Plano003_10"
            castShadow
            receiveShadow
            geometry={nodes.Plano003_10.geometry}
            material={materials.Upurple}
          />
          <mesh
            name="Plano003_11"
            castShadow
            receiveShadow
            geometry={nodes.Plano003_11.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            name="Plano003_12"
            castShadow
            receiveShadow
            geometry={nodes.Plano003_12.geometry}
            material={materials.usb3}
          />
          <mesh
            name="Plano003_13"
            castShadow
            receiveShadow
            geometry={nodes.Plano003_13.geometry}
            material={materials.black}
          />
          <mesh
            name="Plano003_14"
            castShadow
            receiveShadow
            geometry={nodes.Plano003_14.geometry}
            material={materials.black}
          />
        </group>
        <group
          name="logo"
          position={[0.809, 0.214, -0.031]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.364, 0.878, 0.364]}
        >
          <mesh
            name="Curve002"
            castShadow
            receiveShadow
            geometry={nodes.Curve002.geometry}
            material={materials.Upurple}
          />
          <mesh
            name="Curve002_1"
            castShadow
            receiveShadow
            geometry={nodes.Curve002_1.geometry}
            material={materials["Material.008"]}
          />
        </group>
        <group name="Esqueleto" position={[0.806, 0.635, -0.064]} scale={0.146}>
          <skinnedMesh
            name="Logo_luz"
            geometry={nodes.Logo_luz.geometry}
            material={materials.Material}
            skeleton={nodes.Logo_luz.skeleton}
          />
          <primitive object={nodes.Bone} />
        </group>
        <mesh
          name="Cubo"
          castShadow
          receiveShadow
          geometry={nodes.Cubo.geometry}
          material={materials["Material.004"]}
          position={[0.815, 0.65, -0.052]}
          scale={[0.007, 0.187, 0.187]}
        />
        <mesh
          name="botones"
          castShadow
          receiveShadow
          geometry={nodes.botones.geometry}
          material={materials["Material.001"]}
          position={[0.814, 0.434, -0.043]}
          scale={[0.009, 0.012, 0.028]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("models/moden2.glb");
