import React, {Suspense, useCallback, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { MathUtils} from 'three'
import { Canvas, useFrame,  } from '@react-three/fiber'
import { OrbitControls, useGLTF, Text, Stars,  Plane} from "@react-three/drei";
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
    <group>
      <group ref={group} {...props} dispose={null} scale={0.4} position={props.position}>
        <mesh material={materials["Material.001"]}>
          <boxGeometry args={[1,2,1]} />
        </mesh>
      </group>
      {isActive && <group {...props} dispose={null} position={[1, props.position[1], props.position[2]]}>
        <Text
          fontSize={.3}
          cursor="pointer"
          color={hovered ? theme.colors.primary : "white"}
          textAlign="left"
          onClick={props.onClick}
          onPointerDown={props.onClick}
          onPointerEnter={() => setHovered(true)}
          onPointerLeave={() => setHovered(false)} 
        >
          {props.text}
        </Text>
        </group>}
    </group>
  )
}


const Lights = React.memo(() => {
  function Rn(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <>
    {Array.from({length: 20}).map((e,i) => {
      return <pointLight key={i} intensity={Rn(0,5)} color={i% 2 ? theme.colors.primary : theme.colors.secondary} position={[Rn(-100, 100), Rn(-100, 100), Rn(-100, 100)]}  />
    })}
    <ambientLight intensity={500} color={theme.colors.secondary}  position={[0, 100, 100]}  />

  </>)
})

function Surfing({setSurfed}) {
  useFrame(({ clock, camera }) => {
    if(camera.position.z > 5) {
      camera.position.z = MathUtils.lerp(camera.position.z, 4, 0.06)
    }
    if(camera.position.y > 0) {
      camera.position.y = MathUtils.lerp(camera.position.y, -1, 0.06)
    }

    if( (camera.position.y <= 0) && (camera.position.z <= 5)) {
      camera.position.y = 0
      camera.position.z = 5
      setSurfed(true)
    }
    
  })
  return null
}


const R3F = () => {
  const router = useRouter()
  const [surfed, setSurfed] = useState(null)

  return (
    <S.CanvasWrapper>
      <Canvas camera={{ fov: 75, position: [0, 5, 700] }}>
        <Suspense fallback={null}>
          {surfed && <OrbitControls />}
          <Stars />
          {!surfed && <Surfing setSurfed={setSurfed} />}
          <Model position={[0, 2, 0]} text="About" timer={1} negative onClick={() => router.push("/about")} />
          <Model position={[0, 1, 0]} text="Projects" timer={1.25} onClick={() => router.push("/projects")} />
          <Model position={[0, 0, 0]} text="Blog" timer={1.5} negative onClick={() => router.push("/blog")}/>
          <Model position={[0, -1, 0]} text="Lorem" timer={1.75} onClick={() => router.push("/lorem")}/>
          <Model position={[0, -2, 0]} text="Ipsum" timer={2} negative onClick={() => router.push("/ipsum")}/>
          <Lights />
        </Suspense>
      </Canvas>
    </S.CanvasWrapper>
  )
}
export default R3F