import {
  Preload,
  useGLTF,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";

import CanvasLoader from "../Loader";
import ComputerModel from "./models/ComputerModel";
import { useMotionValue } from "framer-motion";
import Tooltip from "../Tooltip";

function Computers({ isMobile, setHovered, mouseX, mouseY }) {
  const { nodes, materials } = useGLTF("/models/desktop_pc/scene.gltf");

  return (
    <>
      <hemisphereLight intensity={1} groundColor="black" />
      <ambientLight intensity={0.65} />
      <spotLight intensity={1} position={[0, 1.5, 0.7]} angle={0.12} />
      <PerspectiveCamera makeDefault position={[0, 0, -8]} fov={30} />
      <pointLight intensity={2} position={[1, 1.3, 0]} color={"#804dee"} />
      <pointLight intensity={2} position={[-1, 1.3, 1]} color={"#804dee"} />
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        enableDamping={true}
        dampingFactor={0.05}
        enablePan={false}
        autoRotateSpeed={4}
        autoRotate={isMobile && true}
        makeDefault
      />
      <ComputerModel
        nodes={nodes}
        materials={materials}
        scale={isMobile ? 0.45 : 0.35}
        position={isMobile ? [-0.75, -0.7, 0] : [-0.5, -0.5, 0]}
        rotation={[-0.01, 1.6, -0.1]}
        setHovered={setHovered}
        mouseX={mouseX}
        mouseY={mouseY}
      />
    </>
  );
}

function ComputersCanvas({ isMobile }) {
  const [hovered, setHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  return (
    <>
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{
          outputColorSpace: THREE.SRGBColorSpace,
          alpha: true,
        }}
        className="cursor-pointer md:max-h-[400px] lg:max-h-[550px] xl:max-h-[700px] md:mt-16 lg:mt-12 xl:mt-0"
      >
        <Suspense fallback={<CanvasLoader />}>
          <Computers
            isMobile={isMobile}
            setHovered={setHovered}
            mouseX={mouseX}
            mouseY={mouseY}
          />
        </Suspense>
        <Preload all />
      </Canvas>
      <Tooltip hovered={hovered} mouseX={mouseX} mouseY={mouseY} />
    </>
  );
}

export default ComputersCanvas;
