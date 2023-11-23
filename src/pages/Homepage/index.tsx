import Message from "@/components/Message";
import { ActiveUsersList } from "../ActiveUsersList";
import Header from "@/components/Header";
import { Link } from "react-router-dom";

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

const HomePage = () => (
  <>
    <Header>
      <Link to="/dashboard">Go to Dashboard</Link>
    </Header>
    <OtherHomeStuff />
  </>
);

export default HomePage;
