import React, { useEffect } from "react";
import { useGLTF } from "@react-three/drei"
import Model2 from '../assets/gtr_2-v1.glb'
import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";

/*
author: Allay Design (https://sketchfab.com/Alister.Dsouza)
license: CC-BY-NC-ND-4.0 (http://creativecommons.org/licenses/by-nc-nd/4.0/)
source: https://sketchfab.com/3d-models/nissan-gtrs-max-nfs-most-wanted-bmw-version-1d4a30cf127c426b9e8d8a46aded19df
title: Nissan GTRs - Max (NFS Most Wanted BMW Version)
*/

function Car(props) {
    const { scene } = useGLTF(Model2)

    useEffect(() => {
        scene.scale.set(0.08, 0.08, 0.08);
        // scene.position.set(0, -0.035, 0);
        scene.rotation.set(0, Math.PI/2, 0);
        scene.traverse((object) => {
          if (object instanceof Mesh) {
            object.castShadow = true;
            object.receiveShadow = true;
            object.material.envMapIntensity = 10;
          }
        });
      }, [scene]);

    useFrame((state, delta) => {
        let t = state.clock.getElapsedTime();
        let group = scene.children[0].children[7]
   
        group.children[0].rotation.y = t * 2;
        group.children[1].rotation.y = t * 2;
        group.children[2].rotation.y = t * 2;
        group.children[3].rotation.y = t * 2;
      });
    return (<primitive object={scene}/>)
    
    // return (
    //     <group {...props} dispose={null}>
    //         <group rotation={[-Math.PI / 2, 0, 0]}>
    //             <group rotation={[Math.PI / 2, Math.PI , 0]} scale={0.005}>
    //                 <group scale={4.15}>
    //                     <group rotation={[-Math.PI / 2, 0, 0]}>
    //                         <group rotation={[Math.PI / 2, 0, 0]}>
    //                             <group rotation={[-Math.PI / 2, 0, 0]}>
    //                                 <group rotation={[Math.PI / 2, 0, 0]}>
    //                                     <group position={[0.02, 36.42, -3.64]} rotation={[Math.PI, 0, -Math.PI]} scale={60}>
    //                                         <mesh geometry={nodes.Object_0.geometry} material={materials.BlackPlastic} castShadow
    //                                             receiveShadow />
    //                                     </group>
    //                                     <group position={[0.05, 25.14, 128.34]} rotation={[Math.PI, 0, -Math.PI]} scale={60}>
    //                                         <mesh geometry={nodes.Object_1.geometry} material={materials.BreaksRedPaint} castShadow
    //                                             receiveShadow />
    //                                     </group>
    //                                     <group position={[0.01, 27.74, 12.57]} rotation={[Math.PI, 0, -Math.PI]} scale={60}>
    //                                         <mesh geometry={nodes.Object_2.geometry} material={materials.Chrome} castShadow
    //                                             receiveShadow />
    //                                     </group>
    //                                     <group position={[0, 21.41, 16.93]} rotation={[Math.PI, 0, -Math.PI]} scale={60}>
    //                                         <mesh geometry={nodes.Object_3.geometry} material={materials.FrameBlack} castShadow
    //                                             receiveShadow />
    //                                     </group>
    //                                     <group position={[0, 21.43, 0.22]} rotation={[Math.PI, 0, -Math.PI]} scale={60}>
    //                                         <mesh geometry={nodes.Object_4.geometry} material={materials.RimsChrome} castShadow
    //                                             receiveShadow />
    //                                     </group>
    //                                     <group position={[0, 21.08, -0.37]} rotation={[Math.PI, 0, -Math.PI]} scale={60}>
    //                                         <mesh geometry={nodes.Object_5.geometry} material={materials.Tyre} castShadow
    //                                             receiveShadow />
    //                                     </group>
    //                                     <group position={[0, 21.08, 11.05]} rotation={[Math.PI, 0, -Math.PI]} scale={60}>
    //                                         <mesh geometry={nodes.Object_6.geometry} material={materials.ChromeBLurred} castShadow
    //                                             receiveShadow />
    //                                     </group>
    //                                     <group position={[0.02, 39.08, -105.26]} rotation={[Math.PI, 0, -Math.PI]} scale={60}>
    //                                         <mesh geometry={nodes.Object_7.geometry} material={materials.LightsFrontLed} castShadow
    //                                             receiveShadow />
    //                                     </group>
    //                                     <group position={[0.02, 37.8, 0.6]} rotation={[Math.PI, 0, -Math.PI]} scale={60}>
    //                                         <mesh geometry={nodes.Object_8_1.geometry} material={materials.jesko_df} castShadow
    //                                             receiveShadow />
    //                                     </group>
    //                                     <group position={[0.02, 55.73, -23.02]} rotation={[Math.PI, 0, -Math.PI]} scale={60}>
    //                                         <mesh geometry={nodes.Object_9.geometry} material={materials.Mirror} castShadow
    //                                             receiveShadow />
    //                                     </group>
    //                                     <group position={[0.02, 55.97, 5.47]} rotation={[Math.PI, 0, -Math.PI]} scale={60}>
    //                                         <mesh geometry={nodes.Object_10.geometry} material={materials.LightGlassFront} castShadow
    //                                             receiveShadow />
    //                                     </group>
    //                                     <group position={[0, 32.25, -7.64]} rotation={[Math.PI, 0, -Math.PI]} scale={60}>
    //                                         <mesh geometry={nodes.Object_11_1.geometry} material={materials.Material_001} castShadow
    //                                             receiveShadow />
    //                                     </group>
    //                                     <group position={[0.01, 38.06, 131.95]} rotation={[Math.PI, 0, -Math.PI]} scale={60}>
    //                                         <mesh geometry={nodes.Object_12.geometry} material={materials.emitbrake} castShadow
    //                                             receiveShadow />
    //                                     </group>
    //                                     <group position={[-20.22, 37.69, -29.68]} rotation={[Math.PI, 0, -Math.PI]} scale={60}>
    //                                         <mesh geometry={nodes.Object_13.geometry} material={materials.Default_Material} castShadow
    //                                             receiveShadow />
    //                                     </group>
    //                                     <group position={[0.01, 53.98, 45.06]} rotation={[Math.PI, 0, -Math.PI]} scale={60}>
    //                                         <mesh geometry={nodes.Object_14_1.geometry} material={materials.material} castShadow
    //                                             receiveShadow />
    //                                     </group>
    //                                     <group position={[0.02, 44.07, 109.81]} rotation={[Math.PI, 0, -Math.PI]} scale={60}>
    //                                         <mesh geometry={nodes.Object_15.geometry} material={materials.LightsBackLed} castShadow
    //                                             receiveShadow />
    //                                     </group>
    //                                     <group position={[0.01, 45.02, 111.87]} rotation={[Math.PI, 0, -Math.PI]} scale={60}>
    //                                         <mesh geometry={nodes.Object_16.geometry} material={materials.Led_Orange} castShadow
    //                                             receiveShadow />
    //                                     </group>
    //                                     <group position={[0.01, 26.75, -0.67]} rotation={[Math.PI, 0, -Math.PI]} scale={60}>
    //                                         <mesh geometry={nodes.Object_17_1.geometry} material={materials.BlackMetal} castShadow
    //                                             receiveShadow />
    //                                     </group>
    //                                     <group position={[0.02, 36.54, 35.04]} rotation={[Math.PI, 0, -Math.PI]} scale={60}>
    //                                         <mesh geometry={nodes.Object_19.geometry} material={materials.Car_CarbonFieber} castShadow
    //                                             receiveShadow />
    //                                     </group>
    //                                     <group position={[0.02, 39.67, -2.35]} rotation={[Math.PI, 0, -Math.PI]} scale={60}>
    //                                         <mesh geometry={nodes.Object_20_1.geometry} material={materials.WhitePaint} castShadow
    //                                             receiveShadow />
    //                                     </group>
    //                                     <group position={[2.14, 62.81, 101.4]} rotation={[Math.PI, 0, -Math.PI]} scale={60}>
    //                                         <mesh geometry={nodes.Object_21.geometry} material={materials.LightChrome} castShadow
    //                                             receiveShadow />
    //                                     </group>
    //                                 </group>
    //                             </group>
    //                         </group>
    //                     </group>
    //                 </group>
    //             </group>
    //         </group>
    //     </group>
    // )
}
export default Car

useGLTF.preload(Model2)
