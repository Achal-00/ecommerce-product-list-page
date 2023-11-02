import { constraintContext } from "@/app/page";
import { useState, useEffect, useContext } from "react";
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
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color),
    0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

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

const SubOptions = styled(Options)`
  &:hover {
    font-weight: 600;
  }
`;

export default function Sort() {
  const { constraints, setConstraints } = useContext(constraintContext);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (menu) {
      document.querySelector(".sort-menu").classList.replace("hidden", "grid");
    } else {
      document.querySelector(".sort-menu").classList.replace("grid", "hidden");
    }
  }, [menu]);

  return (
    <Wrapper onClick={() => setMenu((prev) => !prev)}>
      <Options className="text-[#aaa]">
        {constraints.sorting === "def"
          ? "Relevance"
          : constraints.sorting === "low"
          ? "Lowest Price"
          : "Highest Price"}
      </Options>
      <img src="icon-arrow.svg" alt="" />
      <OptionContainer className="shadow-md hidden sort-menu">
        <SubOptions
          onClick={() => setConstraints({ ...constraints, sorting: "def" })}
        >
          Relevance
        </SubOptions>
        <SubOptions
          onClick={() => setConstraints({ ...constraints, sorting: "low" })}
        >
          Price Lowest
        </SubOptions>
        <SubOptions
          onClick={() => setConstraints({ ...constraints, sorting: "high" })}
        >
          Price Highest
        </SubOptions>
      </OptionContainer>
    </Wrapper>
  );
}
