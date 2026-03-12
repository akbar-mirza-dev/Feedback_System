import { Canvas } from "@react-three/fiber"
import { OrbitControls, Float } from "@react-three/drei"

function Rose({ position }) {
  return (
    <Float speed={2} rotationIntensity={1}>
      <mesh position={position}>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshStandardMaterial color="#ff0033" roughness={0.4}/>
      </mesh>
    </Float>
  )
}

export default function FlowerScene() {
  return (

    <Canvas camera={{ position:[0,2,5] }}>

      <ambientLight intensity={0.7}/>
      <pointLight position={[3,5,3]} intensity={1.5}/>

      {/* Turkish rug floor */}
      <mesh rotation={[-Math.PI/2,0,0]}>
        <planeGeometry args={[15,15]}/>
        <meshStandardMaterial color="#7b0000"/>
      </mesh>

      {/* Roses */}
      <Rose position={[0,0.4,0]} />
      <Rose position={[1,0.4,-1]} />
      <Rose position={[-1,0.4,-1]} />
      <Rose position={[1.5,0.4,1]} />
      <Rose position={[-1.5,0.4,1]} />

      <OrbitControls enableZoom={false}/>

    </Canvas>

  )
}