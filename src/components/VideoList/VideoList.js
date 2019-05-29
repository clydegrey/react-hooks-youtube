import React from 'react';
import VideoItem from '../VideoItem/VideoItem';

const VideoList = ({ videos, onClickHandler }) => {
  console.log(videos);
  const renderedList = videos.map(video => (
    <VideoItem
      key={video.id.videoId}
      onClickHandler={onClickHandler}
      video={video}
    />
  ));
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
