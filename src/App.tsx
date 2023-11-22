import Message from "./components/Message";
import { ActiveUsersList } from "./pages/ActiveUsersList";

function App() {
  return (
    <>
      <ActiveUsersList />

      <Message.Text text="Hello, World!" />
      <Message.Image
        text="Hello, World!"
        imageUrl="https://picsum.photos/200/300"
      />
      <Message.Audio audioUrl="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
    </>
  );
}

export default App;
