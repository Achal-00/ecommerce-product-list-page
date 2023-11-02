"use client";

import styled from "styled-components";
import Navbar from "./components/Navbar/Navbar";
import FilterSection from "./components/FilterSection.jsx/FilterSection";
import ProductSection from "./components/ProductSection/ProductSection";
import { createContext, useState } from "react";

const Wrapper = styled.main`
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 2rem;
  background: #e9e9e9;
  color: #222222;

  @media (orientation: landscape) {
    padding: 1rem 4rem;
  }
`;

export const constraintContext = createContext();

export default function Home() {
  const [constraints, setConstraints] = useState({
    filter: "",
    sorting: "def",
  });

  return (
    <Wrapper className="font-custom-font">
      <Navbar />
      <constraintContext.Provider value={{ constraints, setConstraints }}>
        <FilterSection />
        <ProductSection />
      </constraintContext.Provider>
    </Wrapper>
  );
}
