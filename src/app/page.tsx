"use client";

import React from "react";
import Header from "@/components/header";
import { MeteorsDemo } from "@/components/ui/meteor";
import { AuroraBackgroundDemo } from "@/components/ui/aurora-bg";
import { VortexDemo } from "@/components/ui/vortex";

const Page = () => {
  return (
  <>
    <Header />
    <AuroraBackgroundDemo />;
    <VortexDemo />;
    <MeteorsDemo />;
  </>
  ) 
};

export default Page;