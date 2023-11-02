import styled from "styled-components";
import Image from "next/image";

const Wrapper = styled.div`
  width: 24rem;
  min-height: 30rem;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 0.375rem;
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color),
    0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  padding: 1rem;
`;

const Content = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-grow: 1;
`;

const ImageHolder = styled.div`
  width: 10rem;
  height: 12rem;
  position: relative;
  margin: 0 auto;
`;

const TitleHolder = styled.div`
  flex-basis: 6rem;
  display: grid;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 500;
  place-self: center;
`;

const PriceHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const RatingHolder = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Description = styled.p`
  opacity: 0.6;
`;

const CartButton = styled.button`
  color: #fff;
  background-color: rgb(29 78 216 / 1);
  font-weight: 500;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding: 0.625rem 1.25rem;
  text-align: center;
  place-self: end;

  &:hover {
    background-color: rgb(30 64 175 / 1);
  }
`;

export default function Card({ data }) {
  return (
    <Wrapper>
      <ImageHolder>
        <Image src={data.image} fill={true} alt="product" />
      </ImageHolder>
      <Content>
        <TitleHolder>
          <Title>{data.title}</Title>
        </TitleHolder>
        <PriceHolder>
          <p>${data.price}</p>
          <RatingHolder>
            <img src="icon-star.svg" alt="star" />
            <p>{data.rating.rate}</p>
          </RatingHolder>
        </PriceHolder>
        <Description>{data.description}</Description>
      </Content>
      <CartButton>Add to Cart</CartButton>
    </Wrapper>
  );
}
