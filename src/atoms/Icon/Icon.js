/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const utbIcon = require('./utb-ico-white.png');

const Icon = ({ iconName, size }) => (
  <FontAwesomeIcon size={size} icon={iconName} />
);

export const UtbIcon = () => (
  <img css={{ height: '28px' }} alt="UTB logo" src={utbIcon} />
);

export default Icon;
