/** @jsx jsx */
import { jsx } from '@emotion/core';
import Widget from '../molecules/Widget';
import Layout from '../atoms/Layout';

const WidgetContainer = ({
  upperCount,
  upperTitle,
  leftCount,
  leftTitle,
  rightCount,
  rightTitle,
}) => (
  <Layout
    css={{
      width: '100%',
      flexDirection: 'column',
      marginTop: '15px',
      marginBottom: '10px',
    }}
  >
    <Widget count={upperCount} title={upperTitle} />
    <Layout css={{ justifyContent: 'space-between', marginTop: '15px' }}>
      <Widget count={leftCount} title={leftTitle} widgetWidth="48%" />
      <Widget count={rightCount} title={rightTitle} widgetWidth="48%" />
    </Layout>
  </Layout>
);

export default WidgetContainer;
