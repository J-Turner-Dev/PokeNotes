import MenuButton from "../components/MenuButton";

const Header = () => {
  return (
    <div className="app-header">
      <h1>
        <MenuButton />
      </h1>
      <h1>&nbsp; Poke Notes</h1>
    </div>
  );
};

export default Header;
