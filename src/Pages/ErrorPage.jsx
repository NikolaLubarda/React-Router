import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const ErrorPage = ({}) => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(function () {
      navigate("/");
    }, 5000);
  }, []);
  return (
    <div>
      <h1 className="text-red-600 uperrcase underline">PAGE NOT FOUND!!!</h1>
      <Link to="/">HOME PAGE</Link>
    </div>
  );
};

export default ErrorPage;
