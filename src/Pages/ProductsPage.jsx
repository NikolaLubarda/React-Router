import React, { useEffect, useState } from "react";
import ProductService from "../Services/ProductService";
import CardComponent from "../Components/CardComponent";

const ProductsPage = ({}) => {
  const [data, setAllData] = useState([]);
  useEffect(() => {
    ProductService.getAllProducts()
      .then((res) => setAllData(res.data.products))
      .catch((err) => console.log(err));
    console.log(data);
  }, []);
  return (
    <div>
      <div>
        {" "}
        <h1 className="text-center text-blue-500 mt-[20px] text-3xl">
          Products
        </h1>
      </div>
      <div className="flex gap-[20px] flex-wrap items-center justify-center text-center">
        {data.map((item) => (
          <CardComponent item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
