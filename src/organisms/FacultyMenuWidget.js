/** @jsx jsx */
import { jsx } from '@emotion/core';
import FacultyWidget from '../molecules/FacultyWidget';
import Layout from '../atoms/Layout';
import FacultyMenu from '../molecules/FacultyMenu';

const FacultyMenuWidget = ({ facultyName, facultyShortcut, toggleField }) => (
  <Layout css={{ flexDirection: 'column' }}>
    <FacultyWidget
      toggleField={toggleField}
      facultyName={facultyName}
      facultyShortcut={facultyShortcut}
    />
    <FacultyMenu facultyShortcut={facultyShortcut} toggleField={toggleField} />
  </Layout>
);

export default FacultyMenuWidget;
