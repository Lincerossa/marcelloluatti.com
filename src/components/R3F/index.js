import React, { Suspense, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { MathUtils } from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, Text, Stars } from '@react-three/drei';
import * as S from './styles'
import theme from '../../styles/theme';

const Sphere = (props) => {
  const { materials } = useGLTF('/test.gltf');
  return (
    <group position={props.position}>
      <mesh material={materials['Material.001']}>
        <sphereBufferGeometry args={[0.2, 20, 20]} />
      </mesh>
    </group>
  )
}
const Totem = (props) => {
  const [isActive, setActive] = useState(null)
  const [hovered, setHovered] = useState(null)
  const group = useRef();

  const { materials } = useGLTF('/test.gltf');

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime() / 4
    if (time > props.timer) setActive(true)
    group.current.rotation.y = props.negative ? +time : -time
  })

  return (
    <group onClick={props.onClick} onPointerEnter={() => setHovered(true)} onPointerLeave={() => setHovered(false)} onPointerDown={props.onClick}>
      <group ref={group} {...props} dispose={null} scale={0.4} position={props.position}>
        <mesh material={materials['Material.001']}>
          <boxGeometry args={[1, 2, 1]} />
        </mesh>
      </group>
      {isActive && (
      <group {...props} dispose={null} position={[props.negative ? -1 : 1, props.position[1], props.position[2]]}>
        <Text
          fontSize={0.3}
          cursor="pointer"
          color={hovered ? theme.colors.primary : 'white'}
          textAlign="left"
        >
          {props.text}
        </Text>
      </group>
      )}
    </group>
  )
}

const Lights = React.memo(() => {
  function Rn(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <>
      {Array.from({ length: 50 }).map((e, i) => <pointLight key={i} intensity={Rn(0, 4)} color={i % 5 ? theme.colors.secondary : theme.colors.primary} position={[Rn(-200, 200), Rn(-200, 200), Rn(-200, 200)]} />)}
      <ambientLight intensity={500} color={theme.colors.secondary} position={[0, 100, 100]} />
    </>
  )
})

function Surfing({ setSurfed }) {
  useFrame(({ camera }) => {
    if (camera.position.z > 5) {
      camera.position.z = MathUtils.lerp(camera.position.z, 4, 0.05)
    }
    if (camera.position.y > 0) {
      camera.position.y = MathUtils.lerp(camera.position.y, -1, 0.05)
    }

    if ((camera.position.y <= 0) && (camera.position.z <= 5)) {
      camera.position.y = 0
      camera.position.z = 5
      setSurfed(true)
    }
  })
  return null
}
const R3F = ({ items }) => {
  const router = useRouter()
  const [surfed, setSurfed] = useState(null)

  return (
    <S.CanvasWrapper>
      <Canvas camera={{ fov: 75, position: [0, 5, 700] }}>
        <Suspense fallback={null}>
          {surfed && <OrbitControls />}
          <Stars />
          {!surfed && <Surfing setSurfed={setSurfed} />}
          <Sphere position={[0, 3, 0]} />
          {items.map(({ text, slug }, i) => (<Totem key={text} position={[0, 2 - i, 0]} text={text} timer={0.5 + i * 0.15} negative={i % 2} onClick={() => slug && router.push(slug)} />))}
          <Sphere position={[0, 2 - items.length, 0]} />
          <Lights />
        </Suspense>
      </Canvas>
    </S.CanvasWrapper>
  )
}
export default R3F
