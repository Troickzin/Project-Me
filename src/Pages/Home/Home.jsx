import Background from "../../Components/Background/Background";
import LogoImg from "../../assets/Logo/home_logo.png";

import "./Home.scss";
import {
  LinkedinIcon,
  GithubIcon,
  ArrowDownIcon,
} from "../../Components/Icons";
import Navbar from "../../Components/Navbar/Navbar";

function Home() {
  const text = "<Front-End/>";
  return (
    <>
      <Background />
      <Navbar />
      <div id="Home">
        <div className="Home_Container">
          <div className="Title_Container">
            <div className="Detail_Title" />
            <div className="Texts_OF">
              <h1>
                Olá! me chamo <br />
                <span>Edson Luiz M. Ramos</span>
                <br /> sou Desenvolvedor
                <span className="FE_Text">{" " + text}</span>
              </h1>
            </div>
          </div>
          <div className="Buttons_Container">
            <a
              href="https://www.linkedin.com/in/edson-luiz-mendon%C3%A7a-ramos/"
              target="_blank"
              draggable={false}
            >
              <LinkedinIcon /> Linkedin
            </a>
            <a
              href="https://github.com/Troickzin"
              target="_blank"
              draggable={false}
            >
              <GithubIcon />
              Github
            </a>
          </div>
        </div>
        <img className="Logo_Icon" src={LogoImg} draggable={false} />

        <h1 className="Scroll_Down" id="Scroll-Down">
          Scroll Down{" "}
          <div className="SDID">
            <ArrowDownIcon />
          </div>
        </h1>
      </div>
    </>
  );
}

export default Home;
