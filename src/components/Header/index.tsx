const Logo = () => (
  <div>
    <h1>Logo</h1>
  </div>
);

const Header = ({ children }: { children?: React.ReactNode }) => {
  return (
    <header>
      <Logo />
      {children}
    </header>
  );
};

export default Header;
