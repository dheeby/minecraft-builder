import { type ThreeEvent, type Vector3, useLoader } from "@react-three/fiber";
import { type Mesh, TextureLoader } from "three";
import { BRICK_DIMENSIONS } from "../constants";
import { BlockName, BlockProps } from "../types";

export default function SingleTextureCube({
  position,
  block,
  onClick,
  onPointerOver,
  onPointerOut,
}: BlockProps) {
  const textureMap = useLoader(
    TextureLoader,
    `textures/${BlockName[block]}.webp`
  );
  return (
    <mesh
      position={position}
      onClick={onClick}
      onPointerOver={onPointerOver}
      onPointerOut={onPointerOut}
    >
      <boxGeometry args={BRICK_DIMENSIONS} />
      <meshStandardMaterial map={textureMap} />
    </mesh>
  );
}
