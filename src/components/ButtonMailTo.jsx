import React from "react";
import { Link } from "react-router-dom";

const ButtonMailto = ({ mailto, label }) => {
  return (
    <Link
      className="text-white bg-red-500 hover:bg-red-400 focus:outline-none font-medium rounded-md text-sm px-5 py-2.5 me-2 mt-4 mb-2 mx-auto"
      to='#'
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
    >
      {label}
    </Link>
  );
};

export default ButtonMailto;