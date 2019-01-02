/** @jsx jsx */
import { jsx } from '@emotion/core';
import Layout from '../atoms/Layout';
import Paragraph from '../atoms/Paragraph';
import Icon from '../atoms/Icon/Icon';
import { NavLink } from 'react-router-dom';

const FieldOfStudy = ({ facultyShortcut, title, additionalInfo, to }) => {
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
    <NavLink to={`/studium/obor-${to}`} css={{ textDecoration: 'none' }}>
      <Layout
        css={{
          height: '40px',
          padding: '10px 0',
          marginBottom: '5px',
          borderBottom: '1px solid gray',
        }}
      >
        <Layout css={{ background: backgroundColor, width: '5px' }} />
        <Layout
          css={{
            flexDirection: 'column',
            marginLeft: '10px',
            height: '100%',
            justifyContent: 'center',
          }}
        >
          <Paragraph
            css={{ margin: 0, padding: 0 }}
            color="black"
            fontSize="0.8rem"
          >
            {title}
          </Paragraph>
          <Paragraph
            css={{ margin: 0, padding: 0 }}
            color="gray"
            fontSize="0.8rem"
          >
            {additionalInfo}
          </Paragraph>
        </Layout>
        <Layout
          css={{
            height: '100%',
            alignItems: 'center',
            marginLeft: 'auto',
            marginRight: '10px',
            borderLeft: '0.001em solid gray',
            paddingLeft: '10px',
          }}
        >
          <Icon color="gray" iconName="chevron-right" />
        </Layout>
      </Layout>
    </NavLink>
  );
};

export default FieldOfStudy;
