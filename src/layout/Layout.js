import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

Layout.propTypes = {};

function Layout({ children }) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
