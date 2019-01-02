/** @jsx jsx */
import { jsx } from '@emotion/core';
import Paragraph from '../atoms/Paragraph';

const UnderlinedHeading = ({ title }) => (
  <Paragraph
    color="black"
    fontWeight="bold"
    css={{
      paddingBottom: '3px',
      borderBottom: '1px solid black',
      marginBottom: '10px',
    }}
  >
    {title}
  </Paragraph>
);

export default UnderlinedHeading;
