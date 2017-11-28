import React from 'react';

import './index.css';

const Item = ({ children, onFocus, onBlur,liStyle }) => (
  <li className="item" onFocus={onFocus} onBlur={onBlur} style={liStyle}>
    {children}
  </li>
);

export default Item;
