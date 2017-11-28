import React from 'react';

import './index.css';

const Button = ({ children, onClick,style }) => (
<button className="button" onClick={onClick} style={style}>
  {children}
</button>
);

export default Button;
