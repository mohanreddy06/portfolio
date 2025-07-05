import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const NUM_STARS = 60;
const STAR_CONFIGS = Array.from({ length: NUM_STARS }).map((_, i) => ({
  radius: 2.5 + (i % 3) * 0.5 + Math.random() * 0.3,
  size: 0.04 + Math.random() * 0.02,
  speed: 0.7 + Math.random() * 0.7,
  phase: Math.random() * Math.PI * 2,
}));

function ImpressiveSphere(props) {
  const mesh = useRef();
  useFrame(() => {
    mesh.current.rotation.x += 0.008;
    mesh.current.rotation.y += 0.012;
  });
  return (
    <mesh {...props} ref={mesh} castShadow receiveShadow>
      <sphereGeometry args={[1.3, 96, 96]} />
      <meshPhysicalMaterial
        color="#7f9cf5"
        metalness={0.85}
        roughness={0.12}
        clearcoat={1}
        clearcoatRoughness={0.05}
        iridescence={0.45}
        iridescenceIOR={1.3}
        transmission={0.25}
        thickness={0.7}
        reflectivity={0.8}
        sheen={1}
        sheenColor="#a5b4fc"
      />
    </mesh>
  );
}

function OrbitingStar({ radius, size, speed, phase, index }) {
  const mesh = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + phase;
    mesh.current.position.x = radius * Math.cos(t);
    mesh.current.position.z = radius * Math.sin(t);
    mesh.current.position.y = 0.3 * Math.sin(t * 0.7 + index);
  });
  return (
    <mesh ref={mesh} castShadow={false} receiveShadow={false}>
      <sphereGeometry args={[size, 12, 12]} />
      <meshStandardMaterial color="#fff" emissive="#fff" emissiveIntensity={1.2} />
    </mesh>
  );
}

export default function ThreeDModel() {
  return (
    <div style={{ width: '100%', height: 340, maxWidth: 480, margin: '0 auto' }}>
      <Canvas shadows camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 10]} intensity={1.2} castShadow />
        <directionalLight position={[-10, -10, -10]} intensity={0.8} />
        <pointLight position={[0, 5, 0]} intensity={0.6} color="#7f9cf5" />
        <pointLight position={[0, -5, 0]} intensity={0.4} color="#a5b4fc" />
        
        <ImpressiveSphere position={[0, 0, 0]} />
        {STAR_CONFIGS.map((star, i) => (
          <OrbitingStar key={i} {...star} index={i} />
        ))}
        
        <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.7} />
      </Canvas>
    </div>
  );
} 