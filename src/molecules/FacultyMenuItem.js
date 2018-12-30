/** @jsx jsx */
import { jsx } from '@emotion/core';
import Layout from '../atoms/Layout';

const FacultyMenuItem = ({ toggleField, children }) => (
  <Layout
    onClick={toggleField}
    css={{
      flex: 1,
      background: '#EDEDED',
      borderRight: '1px solid gray',
      justifyContent: 'space-around',
      alignItems: 'center',
    }}
  >
    {children}
  </Layout>
);

export default FacultyMenuItem;
