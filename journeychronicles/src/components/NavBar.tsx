type NavBarProps = {
  label?: string;
  icon?: HTMLImageElement;
};

const NavBar: React.FC<NavBarProps> = ({ label = "ddd" }) => {
  return (
    <div>
      <p>{label}</p>
    </div>
  );
};

export default NavBar;
