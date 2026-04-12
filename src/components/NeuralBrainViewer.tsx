import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useWorkspace } from "@/contexts/WorkspaceContext";

const NODE_COUNT = 40;
const EDGE_COUNT = 60;

const NeuralGraph = ({ activeSection, totalSections }: { activeSection: number; totalSections: number }) => {
  const nodesRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const glowRef = useRef<THREE.Points>(null);

  const { nodePositions, edgePositions, nodeColors, glowPositions } = useMemo(() => {
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

    const colors = new Float32Array(NODE_COUNT * 3);
    const glow = new Float32Array(NODE_COUNT * 3);
    // Copy positions for glow layer
    glow.set(positions);

    return { nodePositions: positions, edgePositions: edges, nodeColors: colors, glowPositions: glow };
  }, []);

  // Animate colors based on active section
  useFrame(({ clock }) => {
    const t = clock.elapsedTime;

    if (nodesRef.current) {
      nodesRef.current.rotation.y = t * 0.05;
      nodesRef.current.rotation.x = Math.sin(t * 0.03) * 0.1;

      // Update node colors: nodes "near" the active section glow emerald
      const colorsAttr = nodesRef.current.geometry.attributes.color;
      if (colorsAttr) {
        const arr = colorsAttr.array as Float32Array;
        const sectionRatio = totalSections > 1 ? activeSection / (totalSections - 1) : 0;

        for (let i = 0; i < NODE_COUNT; i++) {
          const nodeRatio = i / (NODE_COUNT - 1);
          const dist = Math.abs(nodeRatio - sectionRatio);
          const intensity = Math.max(0, 1 - dist * 3); // falloff
          const pulse = 0.5 + 0.5 * Math.sin(t * 2 + i * 0.5);
          const glow = intensity * (0.7 + 0.3 * pulse);

          // Emerald green: rgb(145, 242, 110) → normalized
          arr[i * 3] = 0.3 + glow * 0.27;     // R
          arr[i * 3 + 1] = 0.4 + glow * 0.55; // G  
          arr[i * 3 + 2] = 0.35 + glow * 0.08; // B
        }
        colorsAttr.needsUpdate = true;
      }
    }

    if (linesRef.current) {
      linesRef.current.rotation.y = t * 0.05;
      linesRef.current.rotation.x = Math.sin(t * 0.03) * 0.1;
    }

    if (glowRef.current) {
      glowRef.current.rotation.y = t * 0.05;
      glowRef.current.rotation.x = Math.sin(t * 0.03) * 0.1;

      const mat = glowRef.current.material as THREE.PointsMaterial;
      const sectionRatio = totalSections > 1 ? activeSection / (totalSections - 1) : 0;
      // Pulse the glow layer opacity
      mat.opacity = 0.15 + 0.25 * Math.sin(t * 1.5) * (0.5 + sectionRatio * 0.5);
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
          <bufferAttribute
            attach="attributes-color"
            count={NODE_COUNT}
            array={nodeColors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial vertexColors size={0.1} sizeAttenuation transparent opacity={0.95} />
      </points>

      {/* Glow layer — larger, softer points behind active nodes */}
      <points ref={glowRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={NODE_COUNT}
            array={glowPositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial color="#91F26E" size={0.25} sizeAttenuation transparent opacity={0.15} />
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
  const { activeSection, totalSections } = useWorkspace();

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
          <NeuralGraph activeSection={activeSection} totalSections={totalSections} />
          <OrbitControls enableZoom enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
        <div className="absolute bottom-3 left-3 right-3">
          <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-muted/80 backdrop-blur-sm">
            <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-[10px] text-muted-foreground font-medium">
              Neural network active — Section {activeSection + 1} focused
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeuralBrainViewer;
