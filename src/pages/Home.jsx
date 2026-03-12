import { useState } from "react";
import DOBGate from "../components/DOBgate";
import FlowerScene from "../components/FlowerScene";
import BirthdayMessage from "../components/BirthdayMessage";
import FloatingHearts from "../components/FloatingHearts"
import ConfettiEffect from "../components/ConfettiEffect"
import MagicParticles from "../components/MagicParticles"
import BackgroundMusic from "../components/BackgroundMusic"
import RosePetals from "../components/RosePetals"
import MagicParticle from "../components/MagicParticle"
import bgImage from "../assets/rug3.png";

export default function Home() {

  const [unlocked, setUnlocked] = useState(false);

  if (!unlocked) {
    return <DOBGate onUnlock={() => setUnlocked(true)} />;
  }

  return (
    <div className="h-screen w-screen relative overflow-hidden bg-cover bg-gradient-to-b from-rose-900 via-red-800 to-rose-950"
    style={{ backgroundImage: `url(${bgImage})` }}>

        {/* Background Music */}
        <BackgroundMusic/>
      {/* 3D Background */}
      <div className="absolute inset-0">
        <FlowerScene />
      </div>
      <RosePetals/>

<MagicParticle/>
        {/* Floating Hearts */}
        <FloatingHearts/>
        <MagicParticles/>
        <ConfettiEffect/>
        {/* Letter Component */}
        
      {/* Birthday Message Overlay */}
      <BirthdayMessage />

      {/* Photo Slideshow */}
      
    </div>
  );
}