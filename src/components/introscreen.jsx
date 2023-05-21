import React from "react";
import HoofdAfbeelding from "../img/hoofdafbeelding.png";
import "../pages/pagestyling.css";
import { DividerTypeTwo } from "./divider";

export function IntroScreen() {
  return (
    <>
      <img id="hoofdafbeelding" src={HoofdAfbeelding} alt="" />
    </>
  );
}
