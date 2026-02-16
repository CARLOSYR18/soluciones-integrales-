import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { Group } from "three"

export default function Modelo() {
  const gltf = useGLTF("/cuboJB.glb")
  const { scene } = gltf

  const groupRef = useRef<Group>(null)

  // Rotación sobre su eje Y
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.02
    }
  })

  return (
    <group ref={groupRef} scale={1.5}>
      <primitive object={scene} />
    </group>
  )
}
