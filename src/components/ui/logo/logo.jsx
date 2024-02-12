import React from "react";
import { useLocation } from "react-router-dom";
import { ReactComponent } from "/src/assets/logo.svg";
import { Text, StyledLogo, StyledLogoMainPage } from "./styles";
import { AppRoute } from "/src/const";


function Logo() {
  const { pathname } = useLocation();

  return pathname === AppRoute.MAIN ? (
    <StyledLogoMainPage>
      <ReactComponent />
      <Text>Фермерские продукты</Text>
    </StyledLogoMainPage>
  ) : (
    <StyledLogo to={AppRoute.MAIN}>
      <ReactComponent />
      <Text>Фермерские продукты</Text>
    </StyledLogo>
  );
}

export default Logo;
