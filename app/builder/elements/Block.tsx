import { useState } from "react";
import type { BufferGeometry, Material, Mesh, NormalBufferAttributes, Object3DEventMap } from "three";
import type { Vector3 } from "@react-three/fiber";
import { Select } from "@react-three/postprocessing";

import SingleTextureCube from "./SingleTextureCube";
import TopBottomSideTextureCube from "./TopBottomSideTextureCube";
import { BlockAttributes, BlockName, BlockType } from "../types";

interface Props {
  block: BlockName;
  position: Vector3;
  onClick: (object: Mesh) => void;
}

export default function Block({ block, position, onClick }: Props) {
  const [hovered, setHovered] = useState<boolean>(false);

  let BlockComponent;
  switch (BlockAttributes[block].type) {
    case BlockType.SingleTextureCube:
      BlockComponent = SingleTextureCube;
      break;
    case BlockType.TopBottomSideTextureCube:
      BlockComponent = TopBottomSideTextureCube;
      break;
    default:
      return null;
  }

  return (
    <Select enabled={hovered}>
      <BlockComponent
        block={block}
        position={position}
        onClick={(e) => {
          e.stopPropagation();
          // TODO: Don't type-cast this - find out the right type to use from three for the BlockProps's mouse events
          onClick(e.object as Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[], Object3DEventMap>);
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
        }}
        onPointerOut={() => {
          setHovered(false);
        }}
      />
    </Select>
  );
}
