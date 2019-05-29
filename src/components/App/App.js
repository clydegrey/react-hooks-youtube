import React, { useState } from 'react';
import Styles from './App.module.css';
import SearchBar from '../SearchBar/SearchBar';
import youtube from '../../api/Youtube';
import VideoList from '../VideoList/VideoList';

const App = () => {
  const [appState, appSetState] = useState({ videos: [] });
  const [selectedVideoState, selectedVideoSetState] = useState({
    videoID: null
  });
  const onSubmitHandler = async term => {
    // const result = await appSetState({ term });
    const res = await youtube.get('/search', {
      params: {
        q: term,
        type: 'video'
      }
    });
    appSetState({ videos: res.data.items });
  };

  const onClickHandler = videoID => {
    selectedVideoSetState({ videoID });
  };

  return (
    <div className={Styles.app}>
      <h2>Now Playing: {selectedVideoState.videoID}</h2>
      <SearchBar submitHandler={onSubmitHandler} />
      <VideoList onClickHandler={onClickHandler} videos={appState.videos} />
    </div>
  );
};

export default App;
