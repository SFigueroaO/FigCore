import React from "react";
import { createRoot } from "react-dom/client";
import FigCoreLanding from "./App";
import "./styles.css";

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <FigCoreLanding />
  </React.StrictMode>,
);
