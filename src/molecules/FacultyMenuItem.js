/** @jsx jsx */
import { jsx } from '@emotion/core';
import Layout from '../atoms/Layout';

const FacultyMenuItem = ({ toggleField, children, facultyShortcut }) => (
  <Layout
    onClick={toggleField}
    css={{
      flex: 1,
      background: '#EDEDED',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}
  >
    {children}
  </Layout>
);

export default FacultyMenuItem;
