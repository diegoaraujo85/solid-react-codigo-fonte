export type Video = {
  title: string;
  duration: number;
  coverUrl: string;
};
type Props = {
  items: Array<Video>;
};

const Thumbnail = ({ video }: { video: Video }) => {
  const { coverUrl, duration, title } = video;
  return (
    <li>
      <img src={coverUrl} height="64px" alt={title} />
      <p>{title}</p>
      <small>{duration}</small>
    </li>
  );
};
const VideoList = ({ items }: Props) => {
  return (
    <ul>
      {items.map((item) => (
        <Thumbnail key={item.title} video={item} />
      ))}
    </ul>
  );
};

export default VideoList;
