import type { ThreeEvent, Vector3 } from "@react-three/fiber";

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
  onPointerOver: (event: ThreeEvent<MouseEvent>) => void;
  onPointerOut: (event: ThreeEvent<MouseEvent>) => void;
}

export interface BlockState {
  block: BlockName;
  position: Vector3;
}
