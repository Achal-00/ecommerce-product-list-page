"use client";

import styled from "styled-components";
import Navbar from "./components/Navbar/Navbar";
import FilterSection from "./components/FilterSection.jsx/FilterSection";
import ProductSection from "./components/ProductSection/ProductSection";
import { createContext, useEffect, useState } from "react";

const Wrapper = styled.main`
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 2rem;

  @media (orientation: landscape) {
    padding: 1rem 4rem;
  }
`;

export const constraintContext = createContext();

export default function Home() {
  const [constraints, setConstraints] = useState({
    filter: "",
    sort: "",
  });

  useEffect(() => {
    console.log(constraints);
  }, [constraints])

  return (
    <Wrapper className="bg-custom-white text-custom-black font-custom-font">
      <Navbar />
      <constraintContext.Provider value={{ constraints, setConstraints }}>
        <FilterSection />
        <ProductSection />
      </constraintContext.Provider>
    </Wrapper>
  );
}
