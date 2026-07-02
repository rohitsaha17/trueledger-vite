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
const FACE_ANGLES = [
  Math.PI / 4,
  (3 * Math.PI) / 4,
  (5 * Math.PI) / 4,
  (7 * Math.PI) / 4,
];

function createFaceGeo(
  topR: number,
  botR: number,
  height: number,
  faceIndex: number
): THREE.BufferGeometry {
  const segW = 12;
  const segH = 6;
  const a1 = FACE_ANGLES[faceIndex];
  const a2 = FACE_ANGLES[(faceIndex + 1) % 4];

  const tl = [topR * Math.sin(a1), height / 2, topR * Math.cos(a1)];
  const tr = [topR * Math.sin(a2), height / 2, topR * Math.cos(a2)];
  const bl = [botR * Math.sin(a1), -height / 2, botR * Math.cos(a1)];
  const br = [botR * Math.sin(a2), -height / 2, botR * Math.cos(a2)];

  const positions: number[] = [];
  const uvs: number[] = [];
  const indices: number[] = [];

  for (let iy = 0; iy <= segH; iy++) {
    const t = iy / segH;
    for (let ix = 0; ix <= segW; ix++) {
      const s = ix / segW;
      positions.push(
        (1 - t) * ((1 - s) * bl[0] + s * br[0]) +
          t * ((1 - s) * tl[0] + s * tr[0]),
        (1 - t) * bl[1] + t * tl[1],
        (1 - t) * ((1 - s) * bl[2] + s * br[2]) +
          t * ((1 - s) * tl[2] + s * tr[2])
      );
      uvs.push(s, t);
    }
  }

  for (let iy = 0; iy < segH; iy++) {
    for (let ix = 0; ix < segW; ix++) {
      const a = iy * (segW + 1) + ix;
      const b = a + 1;
      const c = a + segW + 1;
      const d = c + 1;
      indices.push(a, b, d, a, d, c);
    }
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  return geo;
}

function createCapGeo(radius: number, up: boolean): THREE.BufferGeometry {
  const s = Math.SQRT1_2;
  const positions = [
    0, 0, 0, radius * s, 0, radius * s, -radius * s, 0, radius * s,
    -radius * s, 0, -radius * s, radius * s, 0, -radius * s,
  ];
  const ny = up ? 1 : -1;
  const normals = [0, ny, 0, 0, ny, 0, 0, ny, 0, 0, ny, 0, 0, ny, 0];
  const indices = up
    ? [0, 2, 1, 0, 3, 2, 0, 4, 3, 0, 1, 4]
    : [0, 1, 2, 0, 2, 3, 0, 3, 4, 0, 4, 1];

  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute("normal", new THREE.Float32BufferAttribute(normals, 3));
  geo.setIndex(indices);
  return geo;
}

function createTierEdges(
  topR: number,
  botR: number,
  height: number
): THREE.BufferGeometry {
  const tv = [0, 1, 2, 3].map((i) => {
    const a = FACE_ANGLES[i];
    return [topR * Math.sin(a), height / 2, topR * Math.cos(a)];
  });
  const bv = [0, 1, 2, 3].map((i) => {
    const a = FACE_ANGLES[i];
    return [botR * Math.sin(a), -height / 2, botR * Math.cos(a)];
  });

  const positions: number[] = [];
  for (let i = 0; i < 4; i++) {
    positions.push(...tv[i], ...tv[(i + 1) % 4]);
    positions.push(...bv[i], ...bv[(i + 1) % 4]);
    positions.push(...tv[i], ...bv[i]);
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  return geo;
}

function createFaceTexture(
  tier: TechTier,
  tierIndex: number,
  logos: (HTMLImageElement | null)[]
): THREE.CanvasTexture {
  const topR = RADII[tierIndex];
  const botR = RADII[tierIndex + 1];
  const avgFaceW = ((topR + botR) / 2) * Math.SQRT2;
  const aspect = avgFaceW / TIER_HEIGHT;

  const h = 400;
  const w = Math.max(400, Math.round(h * aspect));
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d")!;
  const color = TIER_COLORS[tierIndex];

  ctx.fillStyle = color;
  ctx.fillRect(0, 0, w, h);

  const grad = ctx.createLinearGradient(0, 0, 0, h);
  grad.addColorStop(0, "rgba(255,255,255,0.14)");
  grad.addColorStop(0.4, "rgba(255,255,255,0)");
  grad.addColorStop(1, "rgba(0,0,0,0.22)");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = "#ffffff";
  const labelSize = Math.round(h * 0.085);
  ctx.font = `bold ${labelSize}px Arial,sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  ctx.fillText(tier.label.toUpperCase(), w / 2, Math.round(h * 0.06));

  const logoSize = Math.round(h * 0.22);
  const pad = Math.round(h * 0.045);
  const totalLogosW = tier.tools.length * (logoSize + pad) - pad;
  const sx = (w - totalLogosW) / 2;
  const sy = Math.round(h * 0.3);

  tier.tools.forEach((tool, i) => {
    const lx = sx + i * (logoSize + pad);

    ctx.shadowColor = "rgba(0,0,0,0.3)";
    ctx.shadowBlur = 10;
    ctx.shadowOffsetY = 4;

    ctx.fillStyle = "#ffffff";
    const r = Math.round(logoSize * 0.15);
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
      const p = Math.round(logoSize * 0.12);
      ctx.drawImage(
        logos[i]!,
        lx + p,
        sy + p,
        logoSize - p * 2,
        logoSize - p * 2
      );
    } else {
      ctx.fillStyle = color;
      const abbrSize = Math.round(logoSize * 0.38);
      ctx.font = `bold ${abbrSize}px Arial,sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(
        tool.name.slice(0, 2).toUpperCase(),
        lx + logoSize / 2,
        sy + logoSize / 2
      );
    }

    ctx.fillStyle = "rgba(255,255,255,0.85)";
    const nameSize = Math.round(h * 0.045);
    ctx.font = `bold ${nameSize}px Arial,sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    const label =
      tool.name.length > 10 ? tool.name.slice(0, 9) + "…" : tool.name;
    ctx.fillText(label, lx + logoSize / 2, sy + logoSize + Math.round(h * 0.02));
  });

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
      setTexture(createFaceTexture(tier, tierIndex, logos));
    });
  }, [tier, tierIndex]);

  const topR = RADII[tierIndex];
  const botR = RADII[tierIndex + 1];
  const totalH = totalTiers * TIER_HEIGHT + (totalTiers - 1) * GAP;
  const y = totalH / 2 - tierIndex * (TIER_HEIGHT + GAP) - TIER_HEIGHT / 2;
  const color = TIER_COLORS[tierIndex];

  const faceGeos = useMemo(
    () => [0, 1, 2, 3].map((fi) => createFaceGeo(topR, botR, TIER_HEIGHT, fi)),
    [topR, botR]
  );

  const topCapGeo = useMemo(() => createCapGeo(topR, true), [topR]);
  const botCapGeo = useMemo(() => createCapGeo(botR, false), [botR]);
  const edgesGeo = useMemo(
    () => createTierEdges(topR, botR, TIER_HEIGHT),
    [topR, botR]
  );

  const sideMat = useMemo(() => {
    if (texture) {
      return new THREE.MeshPhysicalMaterial({
        map: texture,
        metalness: 0.12,
        roughness: 0.42,
        clearcoat: 0.25,
      });
    }
    return new THREE.MeshPhysicalMaterial({
      color,
      metalness: 0.2,
      roughness: 0.45,
      clearcoat: 0.2,
    });
  }, [texture, color]);

  const capMat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color,
        metalness: 0.3,
        roughness: 0.5,
      }),
    [color]
  );

  return (
    <group position={[0, y, 0]}>
      {faceGeos.map((geo, i) => (
        <mesh key={i} geometry={geo} material={sideMat} />
      ))}
      <mesh
        geometry={topCapGeo}
        position={[0, TIER_HEIGHT / 2, 0]}
        material={capMat}
      />
      <mesh
        geometry={botCapGeo}
        position={[0, -TIER_HEIGHT / 2, 0]}
        material={capMat}
      />
      <lineSegments geometry={edgesGeo}>
        <lineBasicMaterial color="#ffffff" transparent opacity={0.1} />
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
