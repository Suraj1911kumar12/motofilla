// Loader.js

import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border-t-4 border-blue-500 rounded-full animate-spin w-12 h-12"></div>
    </div>
  );
};

export default Loader;
