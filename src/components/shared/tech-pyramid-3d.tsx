import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

interface TechTier {
  label: string;
  tools: { name: string; logo: string }[];
}

const FACE_COLORS: [string, string, string, string] = [
  "#EE672C",
  "#7a3a78",
  "#5a3580",
  "#4D397F",
];

function Pyramid() {
  const groupRef = useRef<THREE.Group>(null);

  const { geometry, edgesGeo } = useMemo(() => {
    const geo = new THREE.ConeGeometry(1.8, 2.8, 4, 1);
    geo.rotateY(Math.PI / 4);
    geo.computeVertexNormals();

    const edges = new THREE.EdgesGeometry(geo, 30);
    return { geometry: geo, edgesGeo: edges };
  }, []);

  const materials = useMemo(() => {
    return FACE_COLORS.map(
      (color) =>
        new THREE.MeshPhysicalMaterial({
          color,
          metalness: 0.25,
          roughness: 0.4,
          clearcoat: 0.3,
          clearcoatRoughness: 0.2,
          side: THREE.DoubleSide,
        })
    );
  }, []);

  const baseMaterial = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: "#1a0e30",
        metalness: 0.4,
        roughness: 0.6,
        side: THREE.DoubleSide,
      }),
    []
  );

  const groupedGeo = useMemo(() => {
    const geo = geometry.clone();
    geo.clearGroups();
    const faceCount = 4;
    const vertsPerFace = 3;
    for (let i = 0; i < faceCount; i++) {
      geo.addGroup(i * vertsPerFace, vertsPerFace, i);
    }
    geo.addGroup(faceCount * vertsPerFace, 6, 4);
    return geo;
  }, [geometry]);

  const allMaterials = useMemo(
    () => [...materials, baseMaterial],
    [materials, baseMaterial]
  );

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.25}>
      <group ref={groupRef}>
        <mesh geometry={groupedGeo} material={allMaterials} />
        <lineSegments geometry={edgesGeo}>
          <lineBasicMaterial color="#ffffff" transparent opacity={0.15} />
        </lineSegments>
      </group>
    </Float>
  );
}

function GlowRing() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.PI / 2;
      ref.current.scale.setScalar(
        1 + Math.sin(state.clock.elapsedTime * 0.8) * 0.05
      );
    }
  });

  return (
    <mesh ref={ref} position={[0, -1.4, 0]}>
      <ringGeometry args={[1.6, 2.2, 64]} />
      <meshBasicMaterial
        color="#EE672C"
        transparent
        opacity={0.1}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function Particles() {
  const ref = useRef<THREE.Points>(null);
  const geo = useMemo(() => {
    const positions = new Float32Array(60 * 3);
    for (let i = 0; i < 60; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 6;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 5;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    return g;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <points ref={ref} geometry={geo}>
      <pointsMaterial
        size={0.03}
        color="#EE672C"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
}

export function TechPyramid3D({ tiers }: { tiers: TechTier[] }) {
  return (
    <div className="w-full relative">
      <div className="h-[350px] md:h-[420px]">
        <Canvas
          camera={{ position: [0, 0.6, 5], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
          style={{ background: "transparent" }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[5, 8, 5]}
            intensity={1.4}
            color="#ffffff"
          />
          <directionalLight
            position={[-4, 3, -2]}
            intensity={0.5}
            color="#EE672C"
          />
          <pointLight
            position={[0, 4, 0]}
            intensity={0.6}
            color="#EE672C"
            distance={10}
          />
          <Suspense fallback={null}>
            <Pyramid />
            <GlowRing />
            <Particles />
          </Suspense>
        </Canvas>
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-3xl mx-auto px-4">
        {tiers.map((tier, i) => (
          <div
            key={tier.label}
            className="flex items-center gap-3 rounded-xl px-4 py-3"
            style={{
              background: `${FACE_COLORS[i % 4]}12`,
              border: `1px solid ${FACE_COLORS[i % 4]}25`,
            }}
          >
            <div
              className="w-1 h-8 rounded-full shrink-0"
              style={{ background: FACE_COLORS[i % 4] }}
            />
            <div className="min-w-0">
              <p
                className="text-[0.6rem] uppercase tracking-wider font-bold mb-1"
                style={{ color: FACE_COLORS[i % 4] }}
              >
                {tier.label}
              </p>
              <div className="flex flex-wrap gap-1">
                {tier.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="size-6 rounded-md bg-white/90 shadow-sm flex items-center justify-center overflow-hidden"
                    title={tool.name}
                  >
                    <img
                      src={tool.logo}
                      alt={tool.name}
                      className="size-4 object-contain"
                      loading="lazy"
                      onError={(e) => {
                        const el = e.currentTarget;
                        el.style.display = "none";
                        const parent = el.parentElement;
                        if (parent) {
                          const fallback = document.createElement("span");
                          fallback.className =
                            "text-[0.4rem] font-bold text-[#4D397F] leading-none";
                          fallback.textContent = tool.name
                            .slice(0, 2)
                            .toUpperCase();
                          parent.appendChild(fallback);
                        }
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
