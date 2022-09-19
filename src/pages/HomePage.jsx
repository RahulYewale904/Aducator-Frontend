import React, { Suspense, lazy } from "react";

import Jumbo from "../components/Home_Compo/Jumbo";
import About from "../components/Home_Compo/About";
import Category from "../components/Home_Compo/category";

export default function HomePage() {
  return (
    <>
      <Jumbo />
      <Category />
      <About />
    </>
  );
}
