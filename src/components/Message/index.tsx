const TextMessage = ({ text }: { text: string }) => {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
};

const ImageMessage = ({
  text,
  imageUrl,
}: {
  text: string;
  imageUrl: string;
}) => {
  return (
    <div>
      <img src={imageUrl} />
      {text && <p>{text}</p>}
    </div>
  );
};

const AudioMessage = ({ audioUrl }: { audioUrl: string }) => {
  return (
    <div>
      <audio controls>
        <source src={audioUrl} />
      </audio>
    </div>
  );
};

export { TextMessage, ImageMessage, AudioMessage };
