import React from "react";
import { Link } from "react-router-dom";

const CardComponent = ({ item }) => {
  return (
    <div className="w-[300px] h-[400px] border border-blue-600">
      <img
        src={item.thumbnail}
        alt=""
        className="w-full object-cover h-[150px]"
      ></img>
      <h2 className="uppercase extra-bold">{item.title}</h2>
      <p>{item.description}</p>

      <Link
        to={`/singleProduct/${item.id}`}
        className="px-[20px] py-[20px] bg-blue-400 text-white"
      >
        View Details
      </Link>
    </div>
  );
};

export default CardComponent;
