import { useEffect, useState } from "react";
import Pages from "./Pages";
import Pagination from "./Pagination";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function ProductSection() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    (async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      setData(await response.json());
      setIsLoading(false);
    })();
  }, []);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = data.slice(itemOffset, endOffset);

  //   const indexOfLastItem = currentPage * itemsPerPage;
  //   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  //   const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

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
