import { useState, useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3rem;
  background: #fff;
  padding: 0 1rem;
  border-radius: 0.375rem;
  cursor: pointer;

  @media (orientation: landscape) {
    width: 16.67%;
  }
`;

const OptionContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: #fff;
  width: 100%;
  border-radius: 0.375rem;
  padding: 1rem;
  margin-top: 0.5rem;
  gap: 0.5rem;
  z-index: 100;
`;

const Options = styled.p`
  cursor: pointer;
`;

export default function Sort() {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (menu) {
      document.querySelector(".sort-menu").classList.replace("hidden", "grid");
    } else {
      document.querySelector(".sort-menu").classList.replace("grid", "hidden");
    }
  }, [menu]);

  return (
    <Wrapper className="shadow-md" onClick={() => setMenu((prev) => !prev)}>
      <Options className="text-[#aaa]">Relevance</Options>
      <img src="icon-arrow.svg" alt="" />
      <OptionContainer className="shadow-md hidden sort-menu">
        <Options className="hover:font-medium">Relevance</Options>
        <Options className="hover:font-medium">Price Lowest</Options>
        <Options className="hover:font-medium">Price Highest</Options>
      </OptionContainer>
    </Wrapper>
  );
}
