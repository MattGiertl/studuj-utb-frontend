/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import Layout from '../atoms/Layout';

const Wrapper = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
}));

const PageLayoutWrapper = ({
  header,
  children,
  footer,
  backgroundCol,
  contentHeight,
  ...props
}) => (
  <Wrapper {...props}>
    <Layout css={{ position: 'sticky', top: '0' }}>{header}</Layout>
    <Layout
      css={{
        background: 'white',
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
        height: contentHeight,
      }}
    >
      {children}
    </Layout>
    <Layout
      css={{
        background: backgroundCol,
        position: 'fixed',
        bottom: 0,
        width: '100%',
      }}
    >
      {footer}
    </Layout>
  </Wrapper>
);

export default PageLayoutWrapper;
