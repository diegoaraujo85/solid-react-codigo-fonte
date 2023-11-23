import Button from "@/components/Button";
import Header from "@/components/Header";
import { CharCountInput } from "@/components/Input";
import { Link } from "react-router-dom";
import VideoList, { Video } from "../VideoList";

const videosItems: Video[] = [
  {
    coverUrl: "https://picsum.photos/200/300",
    title: "Video 1",
    duration: 120
  },
  {
    coverUrl: "https://picsum.photos/200/300",
    title: "Video 2",
    duration: 120
  }
]

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

    <VideoList items={videosItems} />
  </div>
);

const DashboardPage = () => (
  <>
    <Header>
      <Link to="/home">Go to Home</Link>
    </Header>
    <OtherDashboardStuff />
  </>
);

export default DashboardPage;
