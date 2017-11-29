import React from 'react';

import './index.css';

const TextContainer = ({ children, textStyle, checkCom }) =>(
    
    <span className="textcontainer" 
    style={{
        textDecoration: checkCom ? "line-through" : "none"
    }}>
    {children}
    </span>
    
)

export default TextContainer;