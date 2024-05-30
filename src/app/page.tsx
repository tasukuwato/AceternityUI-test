"use client";

import React from "react";
import Header from "@/components/header";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { MeteorsDemo } from "@/components/ui/meteor";
import { AuroraBackgroundDemo } from "@/components/ui/aurora-bg";
import { VortexDemo } from "@/components/ui/vortex";
import { BentoGridDemo } from "@/components/ui/bento-grid"
import { ParallaxScrollDemo } from "@/components/ui/parallax-scroll";


const Page = () => {
  return (
  <>
    <Header />
    <AuroraBackgroundDemo />
    <VortexDemo />
    <MeteorsDemo />
    <BentoGridDemo />
    <ParallaxScrollDemo />
  </>
  ) 
};

export default Page;