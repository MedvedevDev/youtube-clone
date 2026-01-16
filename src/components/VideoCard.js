export const VideoCard = ({ info }) => {
  if (!info) return null;

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img src={thumbnails.medium.url} alt="video" className="rounded-lg" />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

// higher order function
export const AdVideoCard = ({ info }) => {
  return (
    <div className="border border-red-900">
      <VideoCard info={info} />
    </div>
  );
};
