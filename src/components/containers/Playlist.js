import React from 'react';
import Video from '../Video';
import PlaylistHeader from '../PlaylistHeader';
import PlaylistItems from './PlaylistItems';
import NightMode from '../Nightmode';
import StyledPlaylist from '../styles/StyledPlaylist';

const Playlist = ({ videos, active, nightModeCallback, nightMode }) => (
  <StyledPlaylist>
    <NightMode nightModeCallback={nightModeCallback} nightMode={nightMode} />
    <PlaylistHeader active={active} total={videos.length} />
    <PlaylistItems video={videos} active={active} />
  </StyledPlaylist>
);

export default Playlist;
