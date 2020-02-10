import React from 'react';
import StyledNightMode from './styles/StyledNightmode';

const NightMode = ({ nightMode, NightModeCallback }) => (
  <StyledNightMode>
    <span>NightMode!</span>;
    <label className='switch'>
      <input
        type='checkbox'
        checked={nightMode}
        onChange={(NightModeCallback, nightMode)}
      />
    </label>
    <span className='slider round' />
  </StyledNightMode>
);
export default NightMode;
