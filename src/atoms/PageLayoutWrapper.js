import styled from '@emotion/styled';
import React from 'react';
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
    <Layout css={{ background: backgroundCol }}>{header}</Layout>
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
    <Layout css={{ background: backgroundCol }}>{footer}</Layout>
  </Wrapper>
);

export default PageLayoutWrapper;
