import { useRef, useMemo, Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

interface TechTier {
  label: string;
  tools: { name: string; logo: string }[];
}

const TIER_COLORS = ["#EE672C", "#b84560", "#7a3a78", "#5a3580", "#4D397F"];
const TIER_HEIGHT = 0.72;
const GAP = 0.06;
const RADII = [0.35, 0.72, 1.1, 1.55, 2.0, 2.45];

function createTierTexture(
  tier: TechTier,
  tierIndex: number,
  logos: (HTMLImageElement | null)[]
): THREE.CanvasTexture {
  const w = 2048;
  const h = 640;
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d")!;

  const faceW = w / 4;
  const color = TIER_COLORS[tierIndex];

  for (let face = 0; face < 4; face++) {
    const fx = face * faceW;

    ctx.fillStyle = color;
    ctx.fillRect(fx, 0, faceW, h);

    const grad = ctx.createLinearGradient(fx, 0, fx, h);
    grad.addColorStop(0, "rgba(255,255,255,0.14)");
    grad.addColorStop(0.4, "rgba(255,255,255,0)");
    grad.addColorStop(1, "rgba(0,0,0,0.22)");
    ctx.fillStyle = grad;
    ctx.fillRect(fx, 0, faceW, h);

    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 36px Arial,sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.fillText(tier.label.toUpperCase(), fx + faceW / 2, 32);

    const logoSize = 100;
    const pad = 20;
    const totalW = tier.tools.length * (logoSize + pad) - pad;
    const sx = fx + (faceW - totalW) / 2;
    const sy = 110;

    tier.tools.forEach((tool, i) => {
      const lx = sx + i * (logoSize + pad);

      ctx.shadowColor = "rgba(0,0,0,0.3)";
      ctx.shadowBlur = 10;
      ctx.shadowOffsetY = 4;

      ctx.fillStyle = "#ffffff";
      const r = 16;
      ctx.beginPath();
      ctx.moveTo(lx + r, sy);
      ctx.lineTo(lx + logoSize - r, sy);
      ctx.quadraticCurveTo(lx + logoSize, sy, lx + logoSize, sy + r);
      ctx.lineTo(lx + logoSize, sy + logoSize - r);
      ctx.quadraticCurveTo(
        lx + logoSize,
        sy + logoSize,
        lx + logoSize - r,
        sy + logoSize
      );
      ctx.lineTo(lx + r, sy + logoSize);
      ctx.quadraticCurveTo(lx, sy + logoSize, lx, sy + logoSize - r);
      ctx.lineTo(lx, sy + r);
      ctx.quadraticCurveTo(lx, sy, lx + r, sy);
      ctx.closePath();
      ctx.fill();

      ctx.shadowColor = "transparent";
      ctx.shadowBlur = 0;
      ctx.shadowOffsetY = 0;

      if (logos[i]) {
        const p = 10;
        ctx.drawImage(
          logos[i]!,
          lx + p,
          sy + p,
          logoSize - p * 2,
          logoSize - p * 2
        );
      } else {
        ctx.fillStyle = color;
        ctx.font = "bold 34px Arial,sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(
          tool.name.slice(0, 2).toUpperCase(),
          lx + logoSize / 2,
          sy + logoSize / 2
        );
      }

      ctx.fillStyle = "rgba(255,255,255,0.85)";
      ctx.font = "bold 22px Arial,sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "top";
      const label =
        tool.name.length > 12 ? tool.name.slice(0, 11) + "…" : tool.name;
      ctx.fillText(label, lx + logoSize / 2, sy + logoSize + 10);
    });
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.needsUpdate = true;
  return tex;
}

function TierMesh({
  tierIndex,
  tier,
  totalTiers,
}: {
  tierIndex: number;
  tier: TechTier;
  totalTiers: number;
}) {
  const [texture, setTexture] = useState<THREE.CanvasTexture | null>(null);

  useEffect(() => {
    Promise.all(
      tier.tools.map(
        (tool) =>
          new Promise<HTMLImageElement | null>((resolve) => {
            const img = new Image();
            img.crossOrigin = "anonymous";
            img.onload = () => resolve(img);
            img.onerror = () => resolve(null);
            img.src = tool.logo;
          })
      )
    ).then((logos) => {
      setTexture(createTierTexture(tier, tierIndex, logos));
    });
  }, [tier, tierIndex]);

  const topR = RADII[tierIndex];
  const botR = RADII[tierIndex + 1];

  const totalH = totalTiers * TIER_HEIGHT + (totalTiers - 1) * GAP;
  const y = totalH / 2 - tierIndex * (TIER_HEIGHT + GAP) - TIER_HEIGHT / 2;

  const geo = useMemo(() => {
    const g = new THREE.CylinderGeometry(topR, botR, TIER_HEIGHT, 4, 1);
    g.rotateY(Math.PI / 4);
    return g;
  }, [topR, botR]);

  const color = TIER_COLORS[tierIndex];

  const sideMat = useMemo(() => {
    if (texture) {
      return new THREE.MeshPhysicalMaterial({
        map: texture,
        metalness: 0.12,
        roughness: 0.42,
        clearcoat: 0.25,
        side: THREE.DoubleSide,
      });
    }
    return new THREE.MeshPhysicalMaterial({
      color,
      metalness: 0.2,
      roughness: 0.45,
      clearcoat: 0.2,
      side: THREE.DoubleSide,
    });
  }, [texture, color]);

  const capMat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color,
        metalness: 0.3,
        roughness: 0.5,
        side: THREE.DoubleSide,
      }),
    [color]
  );

  const edgesGeo = useMemo(() => new THREE.EdgesGeometry(geo, 20), [geo]);

  return (
    <group position={[0, y, 0]}>
      <mesh geometry={geo} material={[sideMat, capMat, capMat]} />
      <lineSegments geometry={edgesGeo}>
        <lineBasicMaterial color="#ffffff" transparent opacity={0.08} />
      </lineSegments>
    </group>
  );
}

function Apex({ totalTiers }: { totalTiers: number }) {
  const totalH = totalTiers * TIER_HEIGHT + (totalTiers - 1) * GAP;
  const y = totalH / 2 + 0.18;
  const geo = useMemo(() => {
    const g = new THREE.ConeGeometry(RADII[0], 0.36, 4, 1);
    g.rotateY(Math.PI / 4);
    return g;
  }, []);

  return (
    <mesh geometry={geo} position={[0, y, 0]}>
      <meshPhysicalMaterial
        color="#EE672C"
        metalness={0.3}
        roughness={0.35}
        clearcoat={0.4}
        emissive="#EE672C"
        emissiveIntensity={0.15}
      />
    </mesh>
  );
}

function GlowRing({ totalTiers }: { totalTiers: number }) {
  const ref = useRef<THREE.Mesh>(null);
  const totalH = totalTiers * TIER_HEIGHT + (totalTiers - 1) * GAP;
  const y = -(totalH / 2) - 0.05;

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.PI / 2;
      ref.current.scale.setScalar(
        1 + Math.sin(state.clock.elapsedTime * 0.8) * 0.05
      );
    }
  });

  return (
    <mesh ref={ref} position={[0, y, 0]}>
      <ringGeometry args={[2.3, 3.0, 64]} />
      <meshBasicMaterial
        color="#EE672C"
        transparent
        opacity={0.08}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function Particles() {
  const ref = useRef<THREE.Points>(null);
  const geo = useMemo(() => {
    const pos = new Float32Array(50 * 3);
    for (let i = 0; i < 50; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 7;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 5;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 7;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
    return g;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.04;
  });

  return (
    <points ref={ref} geometry={geo}>
      <pointsMaterial
        size={0.025}
        color="#EE672C"
        transparent
        opacity={0.35}
        sizeAttenuation
      />
    </points>
  );
}

function SegmentedPyramid({ tiers }: { tiers: TechTier[] }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.3;
  });

  return (
    <Float speed={1} rotationIntensity={0.08} floatIntensity={0.2}>
      <group ref={groupRef}>
        <Apex totalTiers={tiers.length} />
        {tiers.map((tier, i) => (
          <TierMesh
            key={tier.label}
            tierIndex={i}
            tier={tier}
            totalTiers={tiers.length}
          />
        ))}
      </group>
    </Float>
  );
}

export function TechPyramid3D({ tiers }: { tiers: TechTier[] }) {
  return (
    <div className="w-full">
      <div className="h-[500px] md:h-[620px]">
        <Canvas
          camera={{ position: [0, 1.2, 8], fov: 42 }}
          gl={{ antialias: true, alpha: true }}
          style={{ background: "transparent" }}
        >
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 8, 5]} intensity={1.4} />
          <directionalLight
            position={[-4, 3, -3]}
            intensity={0.4}
            color="#EE672C"
          />
          <pointLight
            position={[0, 5, 0]}
            intensity={0.5}
            color="#EE672C"
            distance={12}
          />
          <Suspense fallback={null}>
            <SegmentedPyramid tiers={tiers} />
            <GlowRing totalTiers={tiers.length} />
            <Particles />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
