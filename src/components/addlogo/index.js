import React from 'react';

import './index.css';

const Logo = ({ logoStyle, onClick }) => (
    <label className="logo" style={logoStyle} alt="添加" onClick={onClick}></label>
)

export default Logo;