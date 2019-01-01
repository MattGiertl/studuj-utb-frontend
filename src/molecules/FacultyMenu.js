/** @jsx jsx */
import { jsx } from '@emotion/core';
import Layout from '../atoms/Layout';
import Icon from '../atoms/Icon/Icon';
import Paragraph from '../atoms/Paragraph';
import FacultyMenuItem from './FacultyMenuItem';

const FacultyMenu = ({ toggleField, facultyShortcut }) => (
  <Layout
    css={{
      height: '30px',
      width: '100%',
      marginBottom: '10px',
    }}
  >
    <FacultyMenuItem toggleField={toggleField}>
      <Paragraph color="#808080">Zobrazit obory</Paragraph>
      <Icon marginRight="10px" iconName="chevron-down" color="gray" />
    </FacultyMenuItem>
  </Layout>
);

export default FacultyMenu;
