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
        <h1>Products</h1>
      </div>
      <div>
        {data.map((item) => {
          <CardComponent item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default ProductsPage;
