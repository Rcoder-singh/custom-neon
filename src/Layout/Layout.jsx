import React from "react";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";

const Layout = ({ component }) => {
  return (
    <div >
      <Header />
      {component}
      <Footer />
    </div>
  );
};

export default Layout;
