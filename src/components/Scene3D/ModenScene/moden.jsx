import { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Moden(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("models/moden.glb");
  const { actions } = useAnimations(animations, group);
  

   useEffect(() => {

     actions['Logo_luzAction'].play();
        
  }, []);


  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Logo_luz"
          castShadow
          receiveShadow
          geometry={nodes.Logo_luz.geometry}
          material={materials.Material}
          position={[0.845, 0.495, -0.03]}
          scale={0.932}
        />
        <group
          name="Cuerpo"
          position={[0.354, 0.539, 0.003]}
          scale={[0.012, 0.033, 0.012]}
        >
          <mesh
            name="Cubo015"
            castShadow
            receiveShadow
            geometry={nodes.Cubo015.geometry}
            material={materials.Material}
          />
          <mesh
            name="Cubo015_1"
            castShadow
            receiveShadow
            geometry={nodes.Cubo015_1.geometry}
            material={materials.white}
          />
          <mesh
            name="Cubo015_2"
            castShadow
            receiveShadow
            geometry={nodes.Cubo015_2.geometry}
            material={materials.blackCristal}
          />
          <mesh
            name="Cubo015_3"
            castShadow
            receiveShadow
            geometry={nodes.Cubo015_3.geometry}
            material={materials.gray}
          />
          <mesh
            name="Cubo015_4"
            castShadow
            receiveShadow
            geometry={nodes.Cubo015_4.geometry}
            material={materials.yellow}
          />
          <mesh
            name="Cubo015_5"
            castShadow
            receiveShadow
            geometry={nodes.Cubo015_5.geometry}
            material={materials.Upurple}
          />
          <mesh
            name="Cubo015_6"
            castShadow
            receiveShadow
            geometry={nodes.Cubo015_6.geometry}
            material={materials.black}
          />
          <mesh
            name="Cubo015_7"
            castShadow
            receiveShadow
            geometry={nodes.Cubo015_7.geometry}
            material={materials.Bronce}
          />
          <mesh
            name="Cubo015_8"
            castShadow
            receiveShadow
            geometry={nodes.Cubo015_8.geometry}
            material={materials["Material.004"]}
          />
          <mesh
            name="Cubo015_9"
            castShadow
            receiveShadow
            geometry={nodes.Cubo015_9.geometry}
            material={materials.Plata}
          />
          <mesh
            name="Cubo015_10"
            castShadow
            receiveShadow
            geometry={nodes.Cubo015_10.geometry}
            material={materials.BotonON}
          />
          <mesh
            name="Cubo015_11"
            castShadow
            receiveShadow
            geometry={nodes.Cubo015_11.geometry}
            material={materials["Material.001"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("models/moden.glb");
