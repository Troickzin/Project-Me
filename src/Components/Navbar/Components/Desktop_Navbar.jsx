import { useEffect, useState } from "react";
import { LinkedinIcon, GithubIcon, SunIcon } from "../../Icons";
import "../Navbar.scss";

import logoImg from "../../../assets/Logo/Logo_45px.png";

export default function Desktop_Navbar() {
  //   const [small, setSmall] = useState("");
  //   const [socialButVisible, setSocialButVisible] = useState(false);

  //   useEffect((e) => {});
  //   addEventListener("scroll", (e) => {
  //     const ScrollDown = document.getElementById("Scroll-Down");
  //     const SocialButNav = document.getElementById("Social_Midia_Navbar");
  //     if (window.scrollY == 0) {
  //       setSmall("");
  //       ScrollDown.style.opacity = 1;
  //     } else if (window.scrollY <= 200) {
  //       setSmall("Small");
  //       ScrollDown.style.opacity = 0;
  //     }

  //     if (window.scrollY >= 600 && socialButVisible == false) {
  //       SocialButNav.style.transform = "translateY(0%)";
  //       setSocialButVisible(true);
  //     } else if (window.scrollY <= 600 && socialButVisible == true) {
  //       SocialButNav.style.transform = "translateY(-200%)";
  //       setSocialButVisible(false);
  //     }
  //   });

  //   function altern() {
  //     const Blue = document.querySelector(".Blue_Color");
  //     const Red = document.querySelector(".Red_Color");
  //     const Html = document.querySelector("html");
  //     if (Blue) {
  //       Html.classList.remove("Blue_Color");
  //       Html.classList.add("Red_Color");
  //       console.log("Blue!");
  //     } else if (Red) {
  //       Html.classList.remove("Red_Color");
  //       Html.classList.add("Blue_Color");
  //       console.log("Red!");
  //     }
  //   }

  return (
    <div className={"Navbar"}>
      <img src={logoImg} />
      {/* <div className="Social_Midia_Navbar" id="Social_Midia_Navbar">
        <a
          href="https://www.linkedin.com/in/edson-luiz-mendon%C3%A7a-ramos/"
          target="_blank"
        >
          <LinkedinIcon />
        </a>
        <a href="https://github.com/Troickzin" target="_blank">
          <GithubIcon />
        </a>
      </div>
      <li className="Buttons_Navbar">
        <ul>
          <button>Home</button>
        </ul>
        <ul>
          <button>Sobre Mim</button>
        </ul>
        <ul>
          <button>Projetos</button>
        </ul>
        <ul>
          <button>Contato</button>
        </ul>
      </li>
      <button className="Theme_Button" onClick={altern}>
        <SunIcon />
      </button> */}
    </div>
  );
}
