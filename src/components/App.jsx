import React from "react";
import Footer from "./common/Footer";
import Header from "./common/Header";

function App({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default App;