import { Link } from "react-router-dom";
import { ActiveUsersList } from "../../pages/ActiveUsersList";
import Message from "../Message";
import Button from "../Button";
import { CharCountInput } from "../Input";

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

    <Button handleClick={() => {}}>Click</Button>

    <CharCountInput
      value="Hello, World!"
      onChange={(e) => {
        console.log(e.target.value);
      }}
    />
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
const HomePage = () => (
  <>
    <Header>
      <Link to="/dashboard">Go to Dashboard</Link>
    </Header>
    <OtherHomeStuff />
  </>
);
const DashboardPage = () => (
  <>
    <Header>
      <Link to="/home">Go to Home</Link>
    </Header>
    <OtherDashboardStuff />
  </>
);

export { HomePage, DashboardPage };
