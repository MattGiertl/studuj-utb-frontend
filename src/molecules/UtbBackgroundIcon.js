/** @jsx jsx */
import { jsx } from '@emotion/core';
import Layout from '../atoms/Layout';
import { UtbIcon } from '../atoms/Icon/Icon';

const UtbBackgroundIcon = ({ facultyShortcut }) => {
  let backgroundColor = '#FF590B';
  switch (facultyShortcut) {
    case 'ft':
      backgroundColor = '#162883';
      break;
    case 'fai':
      backgroundColor = '#FBC400';
      break;
    case 'fame':
      backgroundColor = '#64B9E4';
      break;
    case 'flkr':
      backgroundColor = '#C9D30E';
      break;
    case 'fmk':
      backgroundColor = '#E53A38';
      break;
    case 'fhs':
      backgroundColor = '#B86407';
      break;
    default:
      break;
  }
  return (
    <Layout
      css={{
        background: backgroundColor,
        height: '50px',
        width: '50px',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <UtbIcon />
    </Layout>
  );
};

export default UtbBackgroundIcon;
