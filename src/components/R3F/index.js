import React, {Suspense, useCallback, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import ArrowDownOutlined from '@ant-design/icons/ArrowDownOutlined'
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import * as S from './styles'
import theme from '../../styles/theme';

const Model = (props) => {
  const group = useRef();

  const { materials } = useGLTF("/test.gltf");

  useFrame(({clock}) => {
    const time = clock.getElapsedTime() / 2.5
    group.current.rotation.y = props.negative ? + time : - time
  })

  return (
    <group ref={group} {...props} dispose={null} scale={0.4} position={props.position} >
      <mesh
        castShadow
        receiveShadow
        material={materials["Material.001"]}
      >
        <boxGeometry args={[1,2,1]} />
      </mesh>
    </group>
  )
}
const R3F = () => {

  function handleScrollDown (){
    if(typeof window !== "undefined") {
      window.scroll({
        top: window.innerHeight,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
  return (
    <S.CanvasWrapper>
      <Canvas>
        <Suspense fallback={null}>
          <Model position={[0, -2, 0]} negative/>
          <Model position={[0, -1, 0]} />
          <Model position={[0, 0, 0]} negative/>
          <Model position={[0, 1, 0]} />
          <Model position={[0, 2, 0]} negative/>
          <OrbitControls />
          <Environment preset="park" background  />
          <ambientLight intensity={1} />
          <directionalLight color={theme.colors.thirdary} position={[0, 1, 3]} />
        </Suspense>
      </Canvas>
      <S.IconWrapper onClick={handleScrollDown}><ArrowDownOutlined /></S.IconWrapper>
    </S.CanvasWrapper>
  )
}
export default R3F