import React from 'react';
import Ribbon from '../atoms/Ribbon';

const TabBar = ({ children, ...rest }) => (
  <Ribbon css={{ justifyContent: 'space-around' }} {...rest}>
    {children}
  </Ribbon>
);

export default TabBar;
