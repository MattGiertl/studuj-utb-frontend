/** @jsx jsx */
import { jsx } from '@emotion/core';
import FacultyWidget from '../molecules/FacultyWidget';
import Layout from '../atoms/Layout';
import FacultyMenu from '../molecules/FacultyMenu';

const FacultyMenuWidget = ({ facultyName, facultyShortcut }) => (
  <Layout css={{ flexDirection: 'column' }}>
    <FacultyWidget
      facultyName={facultyName}
      facultyShortcut={facultyShortcut}
    />
    <FacultyMenu />
  </Layout>
);

export default FacultyMenuWidget;
