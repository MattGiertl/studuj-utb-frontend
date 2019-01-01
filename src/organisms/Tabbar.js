import React from 'react';
import Ribbon from '../atoms/Ribbon';

const TabBar = ({ children, bordered, addPadding }) => <Ribbon bordered={bordered}>{children}</Ribbon>;

export default TabBar;
