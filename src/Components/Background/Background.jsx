import "./Background.scss";
import backgroundImage from "../../assets/background.jpg";
function Background() {
  return (
    <>
      <div className="Background_Div">
        <img className="Background_Image" src={backgroundImage} />
        <div className="Background_Effect" />
      </div>
    </>
  );
}

export default Background;
