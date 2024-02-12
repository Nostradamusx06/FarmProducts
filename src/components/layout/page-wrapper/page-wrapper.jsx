import React from "react";
import Header from "/src/components/layout/header/header";
import Footer from "/src/components/layout/footer/footer";
import MainPage from "/src/components/pages/main-page/main-page";
import Order from "/src/components/pages/order/order";
import { Main } from "./styles";

function PageWrapper({ children, features, products }) {
  return (
    <>
      <Header />
      <Main>
        <MainPage features={features} />
      </Main>
      <Footer />
    </>
  );
}

export default PageWrapper;
