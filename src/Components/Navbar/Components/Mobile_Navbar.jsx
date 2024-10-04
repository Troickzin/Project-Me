import { LinkedinIcon, GithubIcon, SunIcon } from "../../Icons";
import "../Navbar.scss";

import logoImg from "../../../assets/Logo/Logo_45px.png";

export default function Mobile_Navbar() {
  return (
    <div className="Mobile_Navbar">
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
