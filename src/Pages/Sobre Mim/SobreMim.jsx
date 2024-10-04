import "./SobreMim.scss";

export default function Sobre_Mim() {
  return (
    <>
      <div className="SobreMim">
        <div className="SobreMim_Title">
          <div className="Detail_Title" />
          <h1>Sobre Mim</h1>
        </div>
        <p>
          Olá! eu tenho 18 anos e estou em busca de um estágio para desenvolver
          as minhas habilidades em programação e áreas correlatas. Sou estudante
          de sistema de informações. E-mail de contato:
          <span>edsonluizm.ramos@gmail.com</span>
        </p>
      </div>

      <div className="Image_Thumb">
        <div className="Image_Back_Effect">
          <div className="Back_Effect_Detail"></div>
        </div>

        <div className="Image_Profile">
          <img className="Profile" src="" />
        </div>
      </div>

      <div className="Techs">
        <div className="Container_Tech">
          <img className="Thumb_Tech" src="" />
        </div>
      </div>

      <div className="Description_Tech">
        <h2 className="Tech_Title">Titulo</h2>
        <p className="Tech_Text">Descrição</p>
      </div>
    </>
  );
}
