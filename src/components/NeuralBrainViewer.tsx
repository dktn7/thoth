import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const NODE_COUNT = 40;
const EDGE_COUNT = 60;

const NeuralGraph = () => {
  const nodesRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const { nodePositions, edgePositions } = useMemo(() => {
    const positions = new Float32Array(NODE_COUNT * 3);
    for (let i = 0; i < NODE_COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 4;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 4;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }

    const edges = new Float32Array(EDGE_COUNT * 6);
    for (let i = 0; i < EDGE_COUNT; i++) {
      const a = Math.floor(Math.random() * NODE_COUNT);
      const b = Math.floor(Math.random() * NODE_COUNT);
      edges[i * 6] = positions[a * 3];
      edges[i * 6 + 1] = positions[a * 3 + 1];
      edges[i * 6 + 2] = positions[a * 3 + 2];
      edges[i * 6 + 3] = positions[b * 3];
      edges[i * 6 + 4] = positions[b * 3 + 1];
      edges[i * 6 + 5] = positions[b * 3 + 2];
    }

    return { nodePositions: positions, edgePositions: edges };
  }, []);

  useFrame(({ clock }) => {
    if (nodesRef.current) {
      nodesRef.current.rotation.y = clock.elapsedTime * 0.05;
      nodesRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.03) * 0.1;
    }
    if (linesRef.current) {
      linesRef.current.rotation.y = clock.elapsedTime * 0.05;
      linesRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.03) * 0.1;
    }
  });

  return (
    <>
      <points ref={nodesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={NODE_COUNT}
            array={nodePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial color="#91F26E" size={0.08} sizeAttenuation transparent opacity={0.9} />
      </points>

      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={EDGE_COUNT * 2}
            array={edgePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#484b6a" transparent opacity={0.15} />
      </lineSegments>
    </>
  );
};

const NeuralBrainViewer = () => {
  return (
    <div className="h-full flex flex-col glass-panel">
      <div className="px-3 py-2.5 border-b">
        <h3 className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
          Neural Brain
        </h3>
      </div>
      <div className="flex-1 relative">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <NeuralGraph />
          <OrbitControls enableZoom enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
        <div className="absolute bottom-3 left-3 right-3">
          <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-muted/80 backdrop-blur-sm">
            <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-[10px] text-muted-foreground font-medium">
              Neural network active — {NODE_COUNT} nodes
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeuralBrainViewer;
