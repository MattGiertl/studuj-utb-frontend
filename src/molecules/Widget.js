/** @jsx jsx */
import { jsx } from '@emotion/core';
import Layout from '../atoms/Layout';
import Paragraph from '../atoms/Paragraph';

const Widget = ({ count, title, sm }) => (
  <Layout
    css={{
      width: sm ? '48%' : '100%',
      height: '80px',
      background: '#FF590B',
      borderBottom: '4px solid gray',
      borderRadius: '4px',
      color: 'white',
    }}
  >
    <Layout
      css={{
        margin: '0 10px',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <Paragraph
        fontWeight="bold"
        fontSize="1.5rem"
        textAlign="center"
        css={{ margin: 0, marginTop: '15px' }}
      >
        {count}
      </Paragraph>
      <Paragraph
        css={{ marginTop: 'auto', marginLeft: '5px', marginBottom: '5px' }}
      >
        {title}
      </Paragraph>
    </Layout>
  </Layout>
);

export default Widget;
