import React from "react";
import HoofdAfbeelding from "../img/hoofdafbeeldingLogo.png";
import { DividerTypeTwo } from "./divider";
import "../pages/home.css";

export function IntroScreen() {
  return (
    <>
      <img id="hoofdafbeelding" src={HoofdAfbeelding} alt="" />
    </>
  );
}
