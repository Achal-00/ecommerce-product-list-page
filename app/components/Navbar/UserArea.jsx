import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export default function UserArea() {
  return (
    <Wrapper>
      <img src="icon-cart.svg" alt="cart" />
      <img
        src="image-avatar.png"
        alt="user"
        className="w-8 border-2 border-rose-600 rounded-full"
      />
    </Wrapper>
  );
}
