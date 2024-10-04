import "./SobreMim.scss";
import MeImage from "../../assets/Me.png";

import Techs from "./Components/Techs.jsx";

export default function Sobre_Mim() {
  return (
    <>
      <div className="SobreMim">
        <div className="SobreMim_Title">
          <div className="Detail_Title" />
          <h1>Sobre Mim</h1>
          <p>
            Olá! eu tenho 18 anos e estou em busca de um estágio para
            desenvolver as minhas habilidades em programação e áreas correlatas.
            Sou estudante de sistema de informações.
            <br />
            <br /> E-mail de contato:<span> edsonluizm.ramos@gmail.com</span>
          </p>
        </div>

        <div className="Image_Thumb">
          <div className="Image_Back_Effect">
            <div className="Back_Effect_Detail"></div>

            <div className="Image_Profile">
              <img className="Profile" src={MeImage} />
            </div>
          </div>
        </div>

        <Techs />
      </div>
    </>
  );
}
