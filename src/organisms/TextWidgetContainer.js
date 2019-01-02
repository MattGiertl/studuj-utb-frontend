/** @jsx jsx */
import { jsx } from '@emotion/core';
import Layout from '../atoms/Layout';

const TextWidgetContainer = ({ children }) => (
  <Layout
    css={{ flexDirection: 'column', overflow: 'scroll', marginBottom: '50px' }}
  >
    {children}
  </Layout>
);

export default TextWidgetContainer;
