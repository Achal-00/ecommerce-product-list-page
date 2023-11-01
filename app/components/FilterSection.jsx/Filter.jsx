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

export default function Filter() {
  const { constraints, setConstraints } = useContext(constraintContext);
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
        <Options
          className="hover:font-medium"
          onClick={() => setConstraints({ ...constraints, filter: "" })}
        >
          All
        </Options>
        <Options
          className="hover:font-medium"
          onClick={() =>
            setConstraints({ ...constraints, filter: "electronics" })
          }
        >
          Electronics
        </Options>
        <Options
          className="hover:font-medium"
          onClick={() => setConstraints({ ...constraints, filter: "jewelery" })}
        >
          Jewellery
        </Options>
        <Options
          className="hover:font-medium"
          onClick={() =>
            setConstraints({ ...constraints, filter: "men's clothing" })
          }
        >
          Men
        </Options>
        <Options
          className="hover:font-medium"
          onClick={() =>
            setConstraints({ ...constraints, filter: "women's clothing" })
          }
        >
          Women
        </Options>
      </OptionContainer>
    </Wrapper>
  );
}
