/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const utbIcon = require('./utb-ico-white.png');

const Icon = ({ iconName, size, color, marginTop }) => (
  <FontAwesomeIcon
    size={size}
    icon={iconName}
    color={color}
    css={{ marginTop: marginTop }}
  />
);

export const UtbIcon = () => (
  <img
    css={{ height: '28px', display: 'block' }}
    alt="UTB logo"
    src={utbIcon}
  />
);

export default Icon;
