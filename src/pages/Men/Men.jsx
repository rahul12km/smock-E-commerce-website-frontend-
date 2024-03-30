import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { getProducts } from "../../Actions/ProductAction";
import { useDispatch, useSelector } from "react-redux";
import useFilter from "../../Custom Hooks/Filter";

const Men = ({ setProgress }) => {
  const product = useSelector((state) => state.product);
  const [menData, setMenData] = useState([]);
  const dispatch = useDispatch();
  const { data, addFilter, removeFilter, resetFilters } = useFilter(
    product?.data
  );
  const filterByFor = (operand, item) => item.For.toLowerCase() === operand;

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    if (product.status === "loading") {
      setProgress(40);
    }
    if (product.status === "idle") {
      setProgress(100);
      console.log(product);

      addFilter({ operand: "men", opcode: filterByFor });
    }
    if (product.status === "error") {
      console.log("error hai bhai error hai ");
    } else {
      setProgress(100);
    }
  }, [product.status]);

  useEffect(() => {
    setMenData(data);
  }, [data]);

  if (product?.status === "idle") {
    return (
      <div>
        <Layout Data={menData} />
      </div>
    );
  }
};

export default Men;
