import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

const CircularText = () => {
  const groupRef = useRef<THREE.Group>(null);
  const centerTextRef = useRef<THREE.Mesh>(null);

  const text = "LUCILLE WANG • DESIGN STRATEGIST • PORTFOLIO • ";
  const radius = 2.5;
  const characters = text.split('');

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = state.clock.elapsedTime * 0.2;
    }

    if (centerTextRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
      centerTextRef.current.scale.setScalar(scale);
    }
  });

  return (
    <group ref={groupRef}>
      {characters.map((char, index) => {
        const angle = (index / characters.length) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <Text
            key={index}
            position={[x, y, 0]}
            rotation={[0, 0, angle + Math.PI / 2]}
            fontSize={0.15}
            color="#0a0a0a"
            anchorX="center"
            anchorY="middle"
          >
            {char}
          </Text>
        );
      })}

      <Text
        ref={centerTextRef}
        position={[0, 0, 0]}
        fontSize={1.2}
        color="#0a0a0a"
        anchorX="center"
        anchorY="middle"
      >
        LW
      </Text>
    </group>
  );
};

export default CircularText;