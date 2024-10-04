import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import Home from "./Pages/Home/Home";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Sobre_Mim from "./Pages/Sobre Mim/SobreMim";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Background />
    {/* <Navbar /> */}
    <Home />
    <Sobre_Mim />
  </StrictMode>
);
