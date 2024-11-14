"use client";

import { Dispatch, SetStateAction, Suspense, useState } from "react";
import { Vector3, type Mesh } from "three";
import { OrbitControls, StatsGl, TransformControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  EffectComposer,
  Outline,
  Selection,
} from "@react-three/postprocessing";

import Controls from "./Controls";
import Block from "./elements/Block";
import { BlockName, BlockState } from "./types";

import styles from "./BuilderCanvas.module.css";

const INITIAL_BLOCKS: BlockState[] = [
  {
    block: BlockName.StoneBrick,
    position: new Vector3(0, 0, 0),
  },
  {
    block: BlockName.StoneBrick,
    position: new Vector3(1, 0, 0),
  },
  {
    block: BlockName.StoneBrick,
    position: new Vector3(2, 0, 0),
  },
  {
    block: BlockName.StoneBrick,
    position: new Vector3(0, 0, 1),
  },
  {
    block: BlockName.Sandstone,
    position: new Vector3(1, 0, 1),
  },
  {
    block: BlockName.StoneBrick,
    position: new Vector3(2, 0, 1),
  },
  {
    block: BlockName.StoneBrick,
    position: new Vector3(0, 0, 2),
  },
  {
    block: BlockName.StoneBrick,
    position: new Vector3(1, 0, 2),
  },
  {
    block: BlockName.StoneBrick,
    position: new Vector3(2, 0, 2),
  },
];

interface SceneProps {
  blocks: BlockState[];
  setEditObject: Dispatch<SetStateAction<Mesh | undefined>>;
}

function Scene({ blocks, setEditObject }: SceneProps) {
  const onClick = (e: Mesh) => {
    setEditObject(e);
    console.log("clicked:");
    console.log(e);
  };

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight />
      <Selection>
        <EffectComposer multisampling={8} autoClear={false}>
          <Outline
            blur
            visibleEdgeColor="white"
            edgeStrength={100}
            width={1000}
          />
        </EffectComposer>
        {blocks.map(({ block, position }) => (
          <Block
            key={`${position.x}${position.y}${position.z}`}
            block={block}
            position={position}
            onClick={onClick}
          />
        ))}
      </Selection>
    </>
  );
}

export default function BuilderCanvas() {
  const [editing, setEditing] = useState<boolean>(false);
  const [editObject, setEditObject] = useState<Mesh>();
  const [blocks, setBlocks] = useState<BlockState[]>(INITIAL_BLOCKS);
  return (
    <div className={styles.container}>
      <Controls />
      <Canvas
        onPointerMissed={() => {
          setEditObject(undefined);
        }}
      >
        <Suspense fallback={null}>
          <StatsGl className={styles.glStats} />
          <Scene blocks={blocks} setEditObject={setEditObject} />
          <OrbitControls enabled={!editObject} />
          <TransformControls
            enabled={editObject !== null}
            showX={editObject !== null}
            showY={editObject !== null}
            showZ={editObject !== null}
            mode="translate"
            translationSnap={1}
            onMouseDown={() => {
              console.log("Editing");
              console.log(editObject);
              console.log("----");
            }}
            onMouseUp={(e) => {
              console.log("Done editing");
              console.log(e);
              console.log("****");
            }}
            object={editObject}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
