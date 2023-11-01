import styled from "styled-components";
import Filter from "./Filter";
import Sort from "./Sort";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

export default function FilterSection() {
  return (
    <Wrapper>
      <Filter />
      <Sort />
    </Wrapper>
  );
}
