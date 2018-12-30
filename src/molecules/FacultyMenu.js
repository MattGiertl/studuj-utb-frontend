/** @jsx jsx */
import { jsx } from '@emotion/core';
import Layout from '../atoms/Layout';
import Icon from '../atoms/Icon/Icon';
import Paragraph from '../atoms/Paragraph';
import FacultyMenuItem from './FacultyMenuItem';

const FacultyMenu = ({toggleField}) => (
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
    <FacultyMenuItem>
      <Icon iconName="info-circle" color="#808080" />
      <Paragraph color="#808080">Více o fakultě</Paragraph>
    </FacultyMenuItem>
  </Layout>
);

export default FacultyMenu;
