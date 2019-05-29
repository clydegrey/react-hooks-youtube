import React from 'react';
import styles from './VideoItem.module.css';

const VideoItem = ({ video, onClickHandler }) => {
  console.log(video);
  return (
    <div
      onClick={() => onClickHandler(video.snippet.title)}
      className={`${styles.video_item} item}`}
    >
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt=""
      />
      <div className="content">
        <h2 className="header">{video.snippet.title}</h2>
      </div>
    </div>
  );
};

export default VideoItem;
