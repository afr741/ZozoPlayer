import React from 'react';
import Video from '../Video';
import PlaylistHeader from '../PlaylistHeader';
import PlaylistItems from './PlaylistItems';
import NightMode from '../Nightmode';
import StyledPlaylist from '../styles/StyledPlaylist';

const Playlist = props => (
  <StyledPlaylist>
    <NightMode />
    <PlaylistHeader />
    <PlaylistItems />
  </StyledPlaylist>
);

export default Playlist;
