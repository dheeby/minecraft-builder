import type { ThreeEvent } from "@react-three/fiber";
import { Vector3 } from "three";

export enum BlockName {
  Sandstone,
  StoneBrick,
}

export enum BlockType {
  SingleTextureCube,
  TopBottomSideTextureCube,
}

export enum BlockCategory {
  Ore,
  Sediment,
  Stone,
  Wood,
}

interface BlockAttribute {
  type: BlockType;
  category: BlockCategory;
}

export const BlockAttributes: Record<BlockName, BlockAttribute> = {
  [BlockName.Sandstone]: {
    type: BlockType.TopBottomSideTextureCube,
    category: BlockCategory.Stone,
  },
  [BlockName.StoneBrick]: {
    type: BlockType.SingleTextureCube,
    category: BlockCategory.Stone,
  },
};

export interface BlockProps {
  block: BlockName;
  position: Vector3;
  onClick: (event: ThreeEvent<MouseEvent>) => void;
  onPointerOver: () => void;
  onPointerOut: () => void;
}

export interface BlockState {
  block: BlockName;
  position: Vector3;
}
