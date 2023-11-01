"use client";

import styled from "styled-components";
import Navbar from "./components/Navbar/Navbar";
import FilterSection from "./components/FilterSection.jsx/FilterSection";
import ProductSection from "./components/ProductSection/ProductSection";

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

export default function Home() {
  return (
    <Wrapper className="bg-custom-white text-custom-black font-custom-font">
      <Navbar />
      <FilterSection />
      <ProductSection />
    </Wrapper>
  );
}
