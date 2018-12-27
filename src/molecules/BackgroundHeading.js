/** @jsx jsx */
import { jsx } from '@emotion/core';
import Paragraph from '../atoms/Paragraph';
import Layout from '../atoms/Layout';

const BackgroundHeading = ({ title }) => (
  <Layout
    css={{
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: '100%',
      background: '#EDEDED',
    }}
  >
    <Paragraph
      color="black"
      css={{ margin: '8px 10px', padding: 0 }}
      fontSize="0.75rem"
    >
      {title}
    </Paragraph>
  </Layout>
);

export default BackgroundHeading;
