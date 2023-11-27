export type Video = {
  title: string;
  duration: number;
  coverUrl: string;
};

type LiveStream = {
  name: string
  previewUrl: string
}

type VideoListProps = {
  items: Array<Video | LiveStream>;
};

type ThumbnailProps = {
  coverUrl: string
}

const Thumbnail = ({ coverUrl }: ThumbnailProps) => {

  return (
      <img src={coverUrl} height="64px" alt='Video Thumbnail' />
  );
};

const VideoList = ({ items }: VideoListProps) => {
  return (
    <ul>
      {items.map((item) => {

        if ('coverUrl' in item) {
          // é um vídeo
          return <Thumbnail key={item.title} coverUrl={item.coverUrl} />
        } else {
          // é um stream ao vivo
          return <Thumbnail key={item.name} coverUrl={item.previewUrl} />
        }
      })}
    </ul>
  );
};

export default VideoList;
