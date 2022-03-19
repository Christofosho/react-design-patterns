import React from "react";
import { render } from "react-dom";
import FloatInput from "./component/FloatInput.jsx";

render(
  <FloatInput showError={true} />,
  document.getElementById("root")
);