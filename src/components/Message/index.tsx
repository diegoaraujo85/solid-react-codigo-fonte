const Text = ({ text }: { text: string }) => {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
};

const Image = ({ text, imageUrl }: { text: string; imageUrl: string }) => {
  return (
    <div>
      <img src={imageUrl} />
      {text && <p>{text}</p>}
    </div>
  );
};

const Audio = ({ audioUrl }: { audioUrl: string }) => {
  return (
    <div>
      <audio controls>
        <source src={audioUrl} />
      </audio>
    </div>
  );
};

const Message = {
  Text,
  Image,
  Audio,
};

export default Message;
