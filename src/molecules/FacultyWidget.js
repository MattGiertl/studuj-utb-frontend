/** @jsx jsx */
import { jsx } from '@emotion/core';
import Layout from '../atoms/Layout';
import Paragraph from '../atoms/Paragraph';
import UtbBackgroundIcon from './UtbBackgroundIcon';
import { NavLink } from 'react-router-dom';

const FacultyWidget = ({ facultyName, facultyShortcut }) => (
  <NavLink
    to={`studium/fakulta-${facultyShortcut}`}
    css={{ textDecoration: 'none' }}
  >
    <Layout css={{ alignItems: 'center' }}>
      <UtbBackgroundIcon facultyShortcut={facultyShortcut} />
      <Paragraph fontSize="0.9rem" color="black" css={{ paddingLeft: '10px' }}>
        {facultyName}
      </Paragraph>
    </Layout>
  </NavLink>
);

export default FacultyWidget;
