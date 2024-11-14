import { type ThreeEvent, type Vector3, useLoader } from "@react-three/fiber";
import { type Mesh, TextureLoader } from "three";
import { BRICK_DIMENSIONS } from "../constants";
import { BlockName, BlockProps } from "../types";

export default function TopBottomSideTextureCube({
  position,
  block,
  onClick,
  onPointerOver,
  onPointerOut,
}: BlockProps) {
  const [textureMapTop, textureMapBottom, textureMapSide] = useLoader(
    TextureLoader,
    [
      `textures/${BlockName[block]}_top.webp`,
      `textures/${BlockName[block]}_bottom.webp`,
      `textures/${BlockName[block]}_side.webp`,
    ]
  );
  return (
    <mesh
      position={position}
      onClick={onClick}
      onPointerOver={onPointerOver}
      onPointerOut={onPointerOut}
    >
      <boxGeometry args={BRICK_DIMENSIONS} />
      <meshStandardMaterial attach="material-0" map={textureMapSide} />
      <meshStandardMaterial attach="material-1" map={textureMapSide} />
      <meshStandardMaterial attach="material-2" map={textureMapTop} />
      <meshStandardMaterial attach="material-3" map={textureMapBottom} />
      <meshStandardMaterial attach="material-4" map={textureMapSide} />
      <meshStandardMaterial attach="material-5" map={textureMapSide} />
    </mesh>
  );
}
