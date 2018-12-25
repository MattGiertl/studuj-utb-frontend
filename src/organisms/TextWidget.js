/** @jsx jsx */
import { jsx } from '@emotion/core';
import Layout from '../atoms/Layout';
import Widget from '../molecules/Widget';
import Paragraph from '../atoms/Paragraph';

const TextWidget = ({ title, text, number }) => (
  <Layout
    css={{
      width: '100%',
      marginBottom: '10px',
      borderBottom: '1px solid #EDEDED',
      paddingBottom: '5px',
    }}
  >
    <Widget count={number} widgetHeight="50px" widgetWidth="20%" />
    <Layout css={{ flexDirection: 'column', width: '80%', marginLeft: '10px' }}>
      <Paragraph
        css={{ margin: 0, padding: 0, paddingBottom: '3px' }}
        color="black"
        fontWeight="bold"
        fontSize="0.9rem"
      >
        {title}
      </Paragraph>
      <Paragraph css={{ margin: 0, padding: 0 }} color="gray" fontSize="0.8rem">
        {text}
      </Paragraph>
    </Layout>
  </Layout>
);

export default TextWidget;
