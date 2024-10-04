import { useState } from "react";
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
} from "../../../Components/Icons";

export default function TechsArray() {
  const TechsArray = [
    {
      Titulo: "Figma",
      Desc: "Figma é um editor gráfico de vetor e prototipagem de projetos de design baseado principalmente no navegador web.",
      Icon: <FigmaIcon />,
    },
    {
      Titulo: "VS Code",
      Desc: "O Visual Studio Code é um editor de código-fonte desenvolvido pela Microsoft para Windows, Linux e macOS.",
      Icon: <VSCodeIcon />,
    },
    {
      Titulo: "Git",
      Desc: "Git é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo.",
      Icon: <GitIcon />,
    },
    {
      Titulo: "HTML",
      Desc: "HTML é uma linguagem de marcação utilizada na construção de páginas na Web. ",
      Icon: <HtmlIcon />,
    },
    {
      Titulo: "CSS",
      Desc: "CSS é um mecanismo para adicionar estilos a uma página web, aplicado diretamente nas tags HTML ou ficar contido dentro das tags <style>.",
      Icon: <CssIcon />,
    },
    {
      Titulo: "JavaScript",
      Desc: "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.",
      Icon: <JavaScriptIcon />,
    },
    {
      Titulo: "React.JS",
      Desc: "O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.",
      Icon: <ReactJSIcon />,
    },
    {
      Titulo: "Styled Components",
      Desc: "Utilizando literais de modelo marcados (uma adição recente ao JavaScript) e o poder do CSS, os componentes estilizados permitem que você escreva código CSS real para estilizar seus componentes.",
      Icon: <StyledComponentsIcon />,
    },
    {
      Titulo: "VITE",
      Desc: "Vite é um servidor de desenvolvimento local escrito por Evan You, o criador do Vue.js, e usado por padrão pelo Vue e para modelos de projeto React.",
      Icon: <ViteIcon />,
    },
    {
      Titulo: "Node.JS",
      Desc: "Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web.",
      Icon: <NodeJSIcon />,
    },
    {
      Titulo: "Mongo DB",
      Desc: "MongoDB é um software de banco de dados orientado a documentos livre, de código aberto e multiplataforma, escrito na linguagem C++.",
      Icon: <MongoDVIcon />,
    },
    {
      Titulo: "SASS",
      Desc: "Sass é uma linguagem de folhas de estilo concebida inicialmente por Hampton Catlin e desenvolvida por Natalie Weizenbaum.",
      Icon: <SassIcon />,
    },
  ];

  const [descIcon, setDescIcon] = useState(TechsArray[0].Icon);

  function Focus(e) {
    const Selected = document.querySelector(".Container_Tech.Selected");

    const InfoTitle = document.querySelector(".Tech_Title_Content");
    const InfoDesc = document.querySelector(".Tech_Text");

    const ID = e.target.id;

    Selected.classList.remove("Selected");
    e.target.classList.add("Selected");

    TechsArray.filter((e) => {
      if (e.Titulo == ID) {
        InfoDesc.innerHTML = e.Desc;
        InfoTitle.innerHTML = e.Titulo;
        setDescIcon(e.Icon);
      }
    });
  }

  return (
    <>
      <div className="Techs">
        {TechsArray.map((e, index) => {
          if (index == 0) {
            return (
              <button
                className={"Container_Tech Selected"}
                id={e.Titulo}
                onFocus={(e) => {
                  Focus(e);
                }}
              >
                {e.Icon}
              </button>
            );
          }
          return (
            <button
              className={"Container_Tech"}
              id={e.Titulo}
              onFocus={(e) => {
                Focus(e);
              }}
            >
              {e.Icon}
            </button>
          );
        })}
      </div>

      <div className="Description_Tech">
        <h1 className="Tech_Title">
          <div className="Tech_Icon">{descIcon}</div>
          <span className="Tech_Title_Content">{TechsArray[0].Titulo}</span>
        </h1>
        <p className="Tech_Text">{TechsArray[0].Desc}</p>
      </div>
    </>
  );
}
