import React from "react";
import Header from "/src/components/layout/header/header";
import Footer from "/src/components/layout/footer/footer";
import MainPage from "/src/components/pages/main-page/main-page";
import Order from "/src/components/pages/order/order";
import { Main } from "./styles";

// Обёртка для контента страниц
function PageWrapper({ children, features, products }) {
  return (
    <>
      <Header />
      <Main>
        <Order products={products} />
      </Main>
      <Footer />
    </>
  );
}

export default PageWrapper;
