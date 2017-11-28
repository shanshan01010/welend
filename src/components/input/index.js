import React from 'react';

import './index.css';

const Input = ({value, onChange}) => (
    <input type="text" className="input" onChange={onChange} value={value} placeholder="添加待办事项"/>
);

export default Input;