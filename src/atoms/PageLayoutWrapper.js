/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import Layout from '../atoms/Layout';

const Wrapper = styled.div(props => ({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
}));

const PageLayoutWrapper = ({
  header,
  children,
  footer,
  backgroundCol,
  ...props
}) => (
  <Wrapper {...props}>
    <Layout>{header}</Layout>
    <Layout
      css={{
        background: backgroundCol,
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
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
