import { useEffect, useState } from "react";
import Loader from "../Misc/Loader";

export default function ProductSection() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const result = await response.json();
      console.log(result);
      setIsLoading(false);
    })();
  }, []);

  return isLoading ? <Loader /> : <div>ProductSection</div>;
}
