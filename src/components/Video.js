import React from 'react';
import ReactPlayer from 'react-player';
import StyleVideoWrapper from './styles/StyledVideoWrapper';
import StyledVideo from './styles/StyledVideo';
import StyledVideoWrapper from './styles/StyledVideoWrapper';

const Video = ({ active, autoplay, endCallBack, progressCallback }) => (
  <StyledVideo>
    <StyledVideoWrapper>
      <ReactPlayer
        width='100%'
        height='100%'
        style={{ position: 'absolute', top: '0' }}
        playing={autoplay}
        controls={true}
        url={active.video}
        onEnded={endCallBack}
        onProgress={progressCallback}
      />
    </StyledVideoWrapper>
  </StyledVideo>
);

export default Video;
