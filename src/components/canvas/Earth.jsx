import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("../src/assets/earth.glb");

  return (
    <primitive object={earth.scene} scale={1} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 1000,
        position: [0, 0, 5],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* Luces */}
        <ambientLight intensity={2} /> {/* Luz ambiental */}
        <pointLight position={[10, 10, 10]} intensity={2.5} /> {/* Luz puntual */}

        {/* Controles y modelo */}
        <OrbitControls
          autoRotate
          enableZoom={true}
          maxPolarAngle={Math.PI}
          minPolarAngle={0}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;