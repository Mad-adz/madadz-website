import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>404 Error page Not Found</h2>
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFound;
