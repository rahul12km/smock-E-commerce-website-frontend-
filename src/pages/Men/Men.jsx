import React, { useEffect } from "react";
import Layout from "../../components/Layout/Layout";

const Men = ({ setProgress }) => {
  useEffect(() => {
    setProgress(40);
    setTimeout(() => {
      setProgress(100);
    }, 1500);
  }, []);
  return (
    <div>
      <Layout />
    </div>
  );
};

export default Men;
