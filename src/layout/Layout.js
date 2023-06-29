import React from "react";

import Header from "~/components/Header/Header";
import Main from "~/components/Main/Main";
import Footer from "~/components/Footer/Footer";

Layout.propTypes = {};

function Layout(props) {
  return (
    <>
      <Header />

      <Main />

      <Footer />
    </>
  );
}

export default Layout;
