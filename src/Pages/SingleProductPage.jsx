import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductService from "../Services/ProductService";

const SingleProductPage = ({}) => {
  const { id } = useParams();
  const [singleData, setSingleData] = useState({});

  useEffect(() => {
    ProductService.getSingleProduct(id)
      .then((res) => setSingleData(res.data))
      .catch((err) => err);
  }, []);

  console.log(id);

  return (
    <div>
      <img src={singleData.thumbnail}></img>
    </div>
  );
};

export default SingleProductPage;
