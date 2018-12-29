/** @jsx jsx */
import { jsx } from '@emotion/core';
import Layout from '../atoms/Layout';
import Paragraph from '../atoms/Paragraph';
import UtbBackgroundIcon from './UtbBackgroundIcon';

const FacultyWidget = ({ facultyName, facultyShortcut }) => (
  <Layout css={{ alignItems: 'center' }}>
    <UtbBackgroundIcon facultyShortcut={facultyShortcut} />
    <Paragraph fontSize="0.9rem" color="black" css={{ paddingLeft: '10px' }}>
      {facultyName}
    </Paragraph>
  </Layout>
);

export default FacultyWidget;
