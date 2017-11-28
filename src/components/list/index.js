import React from 'react';

import Item from './item';

import './index.css';

const List = ({ children }) => (
  <ul className="list">
    {children}
  </ul>
);

List.Item = Item;

export default List;
