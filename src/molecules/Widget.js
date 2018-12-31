/** @jsx jsx */
import { jsx } from '@emotion/core';
import Layout from '../atoms/Layout';
import Paragraph from '../atoms/Paragraph';
import Icon from '../atoms/Icon/Icon';

const Widget = ({
  count,
  title,
  iconName,
  linkTo,
  widgetWidth = '100%',
  widgetHeight = '80px',
}) => (
  <Layout
    css={{
      width: widgetWidth,
      height: widgetHeight,
      background: '#FF590B',
      borderBottom: '4px solid orange',
      borderRadius: '4px',
      color: 'white',
    }}
  >
    <Layout
      css={{
        margin: '0 10px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}
    >
      {!linkTo ? (
        <Paragraph
          fontWeight="bold"
          fontSize="1.5rem"
          textAlign="center"
          css={{ margin: 0, marginTop: '15px' }}
        >
          {count}
        </Paragraph>
      ) : (
        <a href={linkTo} css={{ textDecoration: 'none', color: 'white' }}>
          <Icon size="3x" iconName={iconName} marginTop="7px" />
        </a>
      )}

      <Paragraph css={{ margin: 'auto auto 5px 5px' }}>{title}</Paragraph>
    </Layout>
  </Layout>
);

export default Widget;
