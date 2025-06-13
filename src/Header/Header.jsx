import headerIcon from "../assets/HeaderIcon.png";
export default function Header({ headerText }) {
  return (
    <header>
      <img src={headerIcon} alt="Header Icon"></img>
      <h1> {headerText ? headerText : "Chef Cluade"}</h1>
    </header>
  );
}
