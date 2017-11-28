import React from 'react';

import './index.css';

const Checkbox = ({ onClick, checkId, checkCom, key }) => (
  <span className="checkbox">
    <input className="checkbox" id="checkbox1" type="checkbox" onClick={onClick} />
    <label></label>
  </span>
  
);

export default Checkbox;