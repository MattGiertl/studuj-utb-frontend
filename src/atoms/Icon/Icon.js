/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const utbIcon = require('./utb-ico-white.png');

const Icon = ({ iconName, size, color }) => (
  <FontAwesomeIcon size={size} icon={iconName} color={color} />
);

export const UtbIcon = () => (
  <img
    css={{ height: '28px', display: 'block' }}
    alt="UTB logo"
    src={utbIcon}
  />
);

export default Icon;
