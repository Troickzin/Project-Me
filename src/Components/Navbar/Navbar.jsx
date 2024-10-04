import "./Navbar.scss";
import Mobile_Navbar from "./Components/Mobile_Navbar.jsx";
import Desktop_Navbar from "./Components/Desktop_Navbar.jsx";

export default function Navbar() {
  return (
    <>
      <Mobile_Navbar />
      <Desktop_Navbar />
    </>
  );
}
