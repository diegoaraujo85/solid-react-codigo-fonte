export const Message = ({
  text,
  imageUrl,
  audioUrl,
}: {
  text?: string;
  imageUrl?: string;
  audioUrl?: string;
}) => {
  if (audioUrl) {
    return (
      <div>
        <audio controls>
          <source src={audioUrl} />
        </audio>
      </div>
    );
  }

  return (
    <div>
      {imageUrl && <img src={imageUrl} />}
      {text && <p>{text}</p>}
    </div>
  );
};
