"use client";
import * as THREE from "three";
import { createRoot } from "react-dom/client";
import React, { useRef, useState, useEffect, RefObject } from "react";
import { Canvas, useFrame, ThreeElements } from "@react-three/fiber";
import { useGLTF, MeshReflectorMaterial, BakeShadows } from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  DepthOfField,
  ToneMapping,
} from "@react-three/postprocessing";
import { easing } from "maath";
import { suspend } from "suspend-react";
import { Instances, Computers } from "./3d-objects/Computers";
import { useTheme } from "next-themes";
const suzi = import("@pmndrs/assets/models/bunny.glb") as Promise<any>;
function Box(props: ThreeElements["mesh"]) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  useFrame((state, delta) => (meshRef.current.rotation.x += delta));
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={new THREE.Color("rgb(100%, 0%, 0%)")} />
    </mesh>
  );
}

function Bun(props: any) {
  const { nodes } = useGLTF((suspend(suzi) as any).default) as { nodes: any };
  return (
    <mesh receiveShadow castShadow geometry={nodes.mesh.geometry} {...props}>
      <meshStandardMaterial color="#222" roughness={0.5} />
    </mesh>
  );
}

const CameraRig: React.FC = () => {
  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [
        -1 + (state.pointer.x * state.viewport.width) / 3,
        (1 + state.pointer.y) / 2,
        5.5,
      ],
      0.5,
      delta
    );
    state.camera.lookAt(0, 0, 0);
  });

  return <></>;
};

const ThreeFiberScene = ({ pref }: { pref: RefObject<HTMLDivElement> }) => {
  const { theme } = useTheme();

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    theme === "dark"
      ? containerRef.current?.classList.remove("grayscale")
      : containerRef.current?.classList.add("grayscale");
  }, [theme]);
  return (
    <div
      ref={containerRef}
      className={`fixed -z-50 min-h-full h-full min-w-full top-0 left-0 right-0 bottom-0`}
    >
      <Canvas
        shadows
        dpr={[1, 1.5]}
        camera={{ position: [-1.5, 1, 5.5], fov: 45, near: 1, far: 20 }}
        eventSource={pref.current ?? undefined}
        eventPrefix="client"
      >
        {/* Lights */}
        <color attach="background" args={["black"]} />
        <hemisphereLight intensity={0.15} groundColor="black" />
        <spotLight
          decay={0}
          position={[10, 20, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />
        {/* Main scene */}
        <group position={[-0, -1, 0]}>
          {/* Auto-instanced sketchfab model */}
          <Instances>
            <Computers scale={0.5} />
          </Instances>
          {/* Plane reflections + distance blur */}
          <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[50, 50]} />
            <MeshReflectorMaterial
              mirror={0}
              blur={[300, 30]}
              resolution={2048}
              mixBlur={1}
              mixStrength={180}
              roughness={1}
              depthScale={1.2}
              minDepthThreshold={0.4}
              maxDepthThreshold={1.4}
              color="#202020"
              metalness={0.8}
            />
          </mesh>
          {/* Bunny and a light give it more realism */}
          <Bun
            scale={0.4}
            position={[0, 0.3, 0.5]}
            rotation={[0, -Math.PI * 0.85, 0]}
          />
          <pointLight
            distance={1.5}
            intensity={1}
            position={[-0.15, 0.7, 0]}
            color="orange"
          />
        </group>
        {/* Postprocessing */}
        <EffectComposer>
          <Bloom
            luminanceThreshold={0}
            mipmapBlur
            luminanceSmoothing={0.0}
            intensity={5}
          />
          <DepthOfField
            target={[0, 0, 13]}
            focalLength={0.3}
            bokehScale={15}
            height={700}
          />
        </EffectComposer>
        {/* Camera movements */}
        <CameraRig />
        {/* Small helper that freezes the shadows for better performance */}
        <BakeShadows />
      </Canvas>
      {/* <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas> */}
    </div>
  );
};

export default ThreeFiberScene;
