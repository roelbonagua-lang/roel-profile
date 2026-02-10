import HeroSection from "@/components/hero-section";
import StatsSection from "@/components/stats-3";
import TeamSection from "@/components/team";
import { FeatherIcon } from "lucide-react";
import { Feature } from "motion";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      {/* <Feature /> */}
      {/* <IntersectionSection />   */}
      <StatsSection />
      <TeamSection />

  
       </div>
          
  );
}
