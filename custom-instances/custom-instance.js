import { useEffect } from "react";

import authFetch from "./axios/custom";

const CustomInstance = () => {
  const fetchData = async () => {
    try {
      const resp1 = await authFetch("/react-store-products");
    } catch {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">custom instance</h2>;
};
export default CustomInstance;
