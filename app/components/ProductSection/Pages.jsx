import styled from "styled-components";
import Loader from "../Misc/Loader";
import Card from "./Card";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-evenly;
`;

export default function Pages({ data, loading }) {
  return loading ? (
    <Loader />
  ) : (
    <Wrapper>
      {data.map((item, index) => (
        <Card data={item} key={index} />
      ))}
    </Wrapper>
  );
}
