import React, {Suspense, useCallback, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRouter } from 'next/router'
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import * as S from './styles'

const Model = (props) => {
  const group = useRef();
  const [isActive, setActive] = useState(null)

  const { nodes, materials } = useGLTF("/test.gltf");

  useFrame(({clock}) => {
    group.current.rotation.y = clock.getElapsedTime()
  })

  return (
    <group ref={group} {...props} dispose={null} scale={0.4}>
      <mesh
        onClick={props.handleClick}
        onPointerEnter={(e) => setActive(true)}
        onPointerLeave={(e) => setActive(false)}
        castShadow
        receiveShadow
        geometry={nodes.Curve007_1.geometry}
        material={materials["Material.001"]}
      />
      <mesh
        onClick={props.handleClick}
        onPointerEnter={(e) => setActive(true)}
        onPointerLeave={(e) => setActive(false)}
        castShadow
        receiveShadow
        geometry={nodes.Curve007_2.geometry}
        material={materials["Material.002"]}
      />
    </group>
  )
}
const R3F = () => {
  const router = useRouter()


  const handleClick = useCallback(() => {
    router.push("/due")
  }, [router])

  return (
    <S.CanvasWrapper>
    <Canvas>
      <Suspense fallback={null}>
        <Model handleClick={handleClick} />
        <OrbitControls />
        <Environment preset="forest" background />
      </Suspense>
    </Canvas>
  </S.CanvasWrapper>
  )
}
export default R3F