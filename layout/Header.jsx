import Logo from "./Logo";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="w-screen">
      <div className="flex justify-between h-24 bg-blue-500 items-center">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
