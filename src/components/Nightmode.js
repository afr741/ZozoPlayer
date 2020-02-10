import React from 'react';
import StyledNightMode from './styles/StyledNightmode';

const NightMode = ({ NightModeCallback, nightMode }) => (
  <StyledNightMode>
    <span>NightMode</span>;
    <label className='switch'>
      <input type='checkbox' checked={nightMode} onChange={NightModeCallback} />
      <span className='slider round' />
    </label>
  </StyledNightMode>
);
export default NightMode;
