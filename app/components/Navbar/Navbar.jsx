import styled from "styled-components";
import Header from "./Header";
import UserArea from "./UserArea";

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
  border-bottom: 1px solid #222222;
`;

export default function Navbar() {
  return (
    <Navigation>
      <Header />
      <UserArea />
    </Navigation>
  );
}
