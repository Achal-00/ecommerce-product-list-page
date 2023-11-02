import { useContext, useEffect, useState } from "react";
import Pages from "./Pages";
import Pagination from "./Pagination";
import styled from "styled-components";
import { constraintContext } from "@/app/page";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function ProductSection() {
  const { constraints } = useContext(constraintContext);
  const [result, setResult] = useState([]);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    (async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const test = await response.json();
      setResult(test);
      setData(test);
      setIsLoading(false);
    })();
  }, []);

  useEffect(() => {
    if (constraints.filter === "" && constraints.sorting === "def") {
      setData(result);
      return;
    }
    switch (constraints.sorting) {
      case "def":
        setIsLoading(true);
        const temp = result.filter(
          (item) => item.category === constraints.filter
        );
        setData(temp);
        setIsLoading(false);
        break;

      case "low":
        if (constraints.filter !== "") {
          setIsLoading(true);
          const temp = result.filter(
            (item) => item.category === constraints.filter
          );
          temp.sort((a, b) => a.price - b.price);
          setData(temp);
          setIsLoading(false);
        } else {
          setIsLoading(true);
          const temp = result.toSorted((a, b) => a.price - b.price);
          setData(temp);
          setIsLoading(false);
        }
        break;

      case "high":
        if (constraints.filter !== "") {
          setIsLoading(true);
          const temp = result.filter(
            (item) => item.category === constraints.filter
          );
          temp.sort((b, a) => a.price - b.price);
          setData(temp);
          setIsLoading(false);
        } else {
          setIsLoading(true);
          const temp = result.toSorted((b, a) => a.price - b.price);
          setData(temp);
          setIsLoading(false);
        }
        break;

      default:
        break;
    }
  }, [constraints]);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = data.slice(itemOffset, endOffset);

  return (
    <Wrapper>
      <Pages data={currentItems} loading={isLoading} />
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={data.length}
        setItemOffset={setItemOffset}
      />
    </Wrapper>
  );
}
