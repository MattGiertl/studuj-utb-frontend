/** @jsx jsx */
import { jsx } from '@emotion/core';
import Widget from '../molecules/Widget';
import Layout from '../atoms/Layout';

const WidgetContainer = props => (
  <Layout
    css={{
      width: '100%',
      flexDirection: 'column',
      marginTop: '15px',
      marginBottom: '10px',
    }}
  >
    <Widget count="10 000" title="Počet studentů" />
    <Layout css={{ justifyContent: 'space-between', marginTop: '15px' }}>
      <Widget sm count="6" title="Počet fakult" widgetWidth="48%" />
      <Widget sm count="111" title="Počet oborů" widgetWidth="48%" />
    </Layout>
  </Layout>
);

export default WidgetContainer;