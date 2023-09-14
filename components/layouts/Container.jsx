import React from "react";

const Container = ({ children }, props) => {
  return (
    <div {...props} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
};

export default Container;
