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
`;

const Options = styled.p`
  cursor: pointer;
`;

export default function Filter() {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (menu) {
      document
        .querySelector(".filter-menu")
        .classList.replace("hidden", "grid");
    } else {
      document
        .querySelector(".filter-menu")
        .classList.replace("grid", "hidden");
    }
  }, [menu]);

  return (
    <Wrapper className="shadow-md" onClick={() => setMenu((prev) => !prev)}>
      <Options className="text-[#aaa]">Filter</Options>
      <img src="icon-arrow.svg" alt="" />
      <OptionContainer className="shadow-md hidden filter-menu">
        <Options className="hover:font-medium">All</Options>
        <Options className="hover:font-medium">Electronics</Options>
        <Options className="hover:font-medium">Men</Options>
        <Options className="hover:font-medium">Women</Options>
      </OptionContainer>
    </Wrapper>
  );
}
