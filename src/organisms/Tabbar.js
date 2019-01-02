import React from 'react';
import Ribbon from '../atoms/Ribbon';

const TabBar = ({ children, bordered, addPadding }) => (
  <Ribbon addPadding={addPadding} bordered={bordered}>
    {children}
  </Ribbon>
);

export default TabBar;
