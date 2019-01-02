/** @jsx jsx */
import { jsx } from '@emotion/core';
import Layout from './Layout';

const FieldsOfStudyContainer = ({ children }) => (
  <Layout css={{ flexDirection: 'column', marginBottom: '10px' }}>
    {children}
  </Layout>
);

export default FieldsOfStudyContainer;
