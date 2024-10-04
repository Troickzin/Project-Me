import "./SobreMim.scss";
import MeImage from "../../assets/Me.png";
import {
  CssIcon,
  FigmaIcon,
  GitIcon,
  HtmlIcon,
  JavaScriptIcon,
  MongoDVIcon,
  NodeJSIcon,
  ReactJSIcon,
  SassIcon,
  StyledComponentsIcon,
  ViteIcon,
  VSCodeIcon,
} from "../../Components/Icons";

export default function Sobre_Mim() {
  const Techs = [
    { Titulo: "Figma", Desc: "SLA", Icon: <FigmaIcon /> },
    { Titulo: "VS Code", Desc: "SLA2", Icon: <VSCodeIcon /> },
    { Titulo: "Git", Desc: "SLA", Icon: <GitIcon /> },
    { Titulo: "HTML", Desc: "SLA2", Icon: <HtmlIcon /> },
    { Titulo: "CSS", Desc: "SLA", Icon: <CssIcon /> },
    { Titulo: "JavaScript", Desc: "SLA2", Icon: <JavaScriptIcon /> },
    { Titulo: "React.JS", Desc: "SLA", Icon: <ReactJSIcon /> },
    {
      Titulo: "Styled Components",
      Desc: "SLA2",
      Icon: <StyledComponentsIcon />,
    },
    { Titulo: "VITE", Desc: "SLA", Icon: <ViteIcon /> },
    { Titulo: "Node.JS", Desc: "SLA2", Icon: <NodeJSIcon /> },
    { Titulo: "MongoDB", Desc: "SLA", Icon: <MongoDVIcon /> },
    { Titulo: "SASS", Desc: "SLA2", Icon: <SassIcon /> },
  ];

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

        <div className="Techs">
          {Techs.map((e) => {
            return <button className="Container_Tech">{e.Icon}</button>;
          })}
        </div>

        <div className="Description_Tech">
          <h2 className="Tech_Title">Titulo</h2>
          <p className="Tech_Text">Descrição</p>
        </div>
      </div>
    </>
  );
}
