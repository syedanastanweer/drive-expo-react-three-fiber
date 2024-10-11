import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  ChromaticAberration,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import {
  CubeCamera,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import './App.css';
import Ground from './components/Ground'
import Car from './components/Car'
import Rings from './components/Rings'
import Boxes from './components/Boxes'
import FloadingGrid from './components/FloatingGrid'



function CarShow() {
  return (
    <>
      {/* OrbitControls to allow the user to interact with the scene (rotate, zoom) */}
      <OrbitControls
        target={[0, 0.35, 0]}  // Target point of rotation
        maxPolarAngle={1.45}    // Limit the vertical rotation
        minDistance={3}         // Minimum zoom distance
        maxDistance={10}        // Maximum zoom distance to prevent zooming out too far
      />

      {/* PerspectiveCamera with an FOV of 50 degrees */}
      <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />

      {/* Set background color to black */}
      <color args={[0, 0, 0]} attach="background" />

      <spotLight
        color={[1, 0.25, 0.7]}
        intensity={1.5}
        angle={0.6}
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={2}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />

      <Ground/>
      <CubeCamera resolution={256} frames={Infinity}>
        {(texture) => (
          <>
            <Environment map={texture} />
            <Car />
          </>
        )}
      </CubeCamera>
      <Rings/>
      <Boxes/>
      <FloadingGrid/>

      <EffectComposer>
       <Bloom
          blendFunction={BlendFunction.ADD}
          intensity={0.3} // The bloom intensity.
          width={300} // render width
          height={300} // render height
          kernelSize={5} // blur kernel size
          luminanceThreshold={0.15} // luminance threshold. Raise this value to mask out darker elements in the scene.
          luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
        />
        <ChromaticAberration
          blendFunction={BlendFunction.NORMAL} // blend mode
          offset={[0.0005, 0.0012]} // color offset
        /> 
      </EffectComposer>
    </>
  )


}

function App() {
  return (
    <Suspense fallback={null}>
      <Canvas shadows>
        <CarShow />
      </Canvas>
    </Suspense>
  );
}

export default App;
