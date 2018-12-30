/** @jsx jsx */
import { jsx } from '@emotion/core';
import Layout from '../atoms/Layout';
import Icon from '../atoms/Icon/Icon';
import Paragraph from '../atoms/Paragraph';
import FacultyMenuItem from './FacultyMenuItem';
import { NavLink } from 'react-router-dom';

const FacultyMenu = ({ toggleField, facultyShortcut }) => (
  <Layout
    css={{
      height: '30px',
      width: '100%',
      borderTop: '1px solid #808080',
      marginBottom: '10px',
    }}
  >
    <FacultyMenuItem toggleField={toggleField}>
      <Icon iconName="chevron-down" color="gray" />
      <Paragraph color="#808080">Zobrazit obory</Paragraph>
    </FacultyMenuItem>
    <NavLink
      to={`/study/faculty/${facultyShortcut}`}
      css={{ width: '50%', textDecoration: 'none' }}
    >
      <FacultyMenuItem>
        <Icon iconName="info-circle" color="#808080" />
        <Paragraph
          css={{ margin: 0, padding: '6px 0' }}
          color="#808080"
        >
          Více o fakultě
        </Paragraph>
      </FacultyMenuItem>
    </NavLink>
  </Layout>
);

export default FacultyMenu;
