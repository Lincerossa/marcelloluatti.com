import React, {Suspense, useCallback, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, Text, Stars } from "@react-three/drei";
import * as S from './styles'
import theme from '../../styles/theme';

const Model = (props) => {
  const [isActive, setActive] = useState(null)
  const [hovered, setHovered] = useState(null)
  const group = useRef();

  const { materials } = useGLTF("/test.gltf");

  useFrame(({clock}) => {
    const time = clock.getElapsedTime() / 2
    if(time > props.timer) setActive(true)
    group.current.rotation.y = props.negative ? + time : - time
  })

  return (
    <group >
      <group ref={group} {...props} dispose={null} scale={0.4} position={props.position}>
        <mesh>
          <meshNormalMaterial  />
          <boxGeometry args={[1,2,1]} />
        </mesh>
      </group>
      {isActive && <group {...props} dispose={null} position={[1, props.position[1], props.position[2]]} >
        <Text
          fontSize={.3}
          cursor="pointer"
          color={hovered ? theme.colors.primary : "white"}
          textAlign="left"
          onClick={props.onClick}
          onPointerEnter={() => setHovered(true)}
          onPointerLeave={() => setHovered(false)} 
        >
          {props.text}
        </Text>
        </group>}
    </group>
  )
}
const R3F = () => {
  const router = useRouter()
  

  return (
    <S.CanvasWrapper>
      <Canvas>
        <Suspense fallback={null}>
          <OrbitControls />
          <Stars />
          <Model position={[0, 2, 0]} text="About" timer={.5} negative onClick={() => router.push("/about")} />
          <Model position={[0, 1, 0]} text="Projects" timer={.75} onClick={() => router.push("/projects")} />
          <Model position={[0, 0, 0]} text="Blog" timer={1} negative onClick={() => router.push("/blog")}/>
          <Model position={[0, -1, 0]} text="Lorem" timer={1.25} onClick={() => router.push("/lorem")}/>
          <Model position={[0, -2, 0]} text="Ipsum" timer={1.5} negative onClick={() => router.push("/ipsum")}/>
        </Suspense>
      </Canvas>
    </S.CanvasWrapper>
  )
}
export default R3F