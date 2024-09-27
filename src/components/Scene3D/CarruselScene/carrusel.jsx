import { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Carrusel(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("models/carrusel.glb");
  const { actions } = useAnimations(animations, group);
  

   useEffect(() => {

     actions['rotacion'].play();
        
  }, []);


  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Plano_subdividido"
          castShadow
          receiveShadow
          geometry={nodes.Plano_subdividido.geometry}
          material={materials.portadas}
        />
      </group>
    </group>
  );
}

useGLTF.preload("models/carrusel.glb");
