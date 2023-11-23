import { Link, useLocation } from "react-router-dom";
import { ActiveUsersList } from "../../pages/ActiveUsersList";
import Message from "../Message";

const Logo = () => (
  <div>
    <h1>Logo</h1>
  </div>
);

const OtherHomeStuff = () => (
  <div>
    <h1>Home stuff</h1>
    <ActiveUsersList />

    <Message.Text text="Hello, World!" />
    <Message.Image
      text="Hello, World!"
      imageUrl="https://picsum.photos/200/300"
    />
    <Message.Audio audioUrl="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
  </div>
);

const OtherDashboardStuff = () => (
  <div>
    <h1>Dashboard stuff</h1>
  </div>
);

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header>
      <Logo />
      {pathname === "/dashboard" && <Link to="/home">Go to home</Link>}
      {pathname === "/home" && <Link to="/dashboard">Go to dashboard</Link>}
    </header>
  );
};
const HomePage = () => (
  <>
    <Header />
    <OtherHomeStuff />
  </>
);
const DashboardPage = () => (
  <>
    <Header />
    <OtherDashboardStuff />
  </>
);

export { HomePage, DashboardPage };
