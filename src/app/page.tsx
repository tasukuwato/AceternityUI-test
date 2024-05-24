"use client";

import React from "react";
import Header from "@/components/header";
import { MeteorsDemo } from "@/components/ui/meteor";
import { AuroraBackgroundDemo } from "@/components/ui/aurora-bg";

const Page = () => {
  return (
  <>
    <Header />
    <AuroraBackgroundDemo />;
    <MeteorsDemo />;
  </>
  ) 
};

export default Page;