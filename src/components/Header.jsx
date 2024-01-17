import "../styles/header.css";
import TroppyIcon from "./Icons";

function Header() {
  return (
    <div className="header_container">
      <div className="header">
        <span>Play Score</span>
        <TroppyIcon />
      </div>
      <p>Hidden in the middle of text</p>
    </div>
  );
}
export default Header;
