import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = ({ iconName, size }) => (
  <FontAwesomeIcon size={size} icon={iconName} />
);

export default Icon;
