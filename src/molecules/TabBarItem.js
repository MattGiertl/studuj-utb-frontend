// eslint-disable-next-line
import React from 'react';

/** @jsx jsx */
import { jsx } from '@emotion/core';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import Paragraph from '../atoms/Paragraph';
import Icon from '../atoms/Icon/Icon';

const Wrapper = styled.div({
  display: 'block',
  flex: 1,
  fontSize: '1rem',
  cursor: 'pointer',
  textDecoration: 'none',
  textOverflow: 'ellipsis',
  alignItems: 'center',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textAlign: 'center',
  color: 'gray',
  '&.active': {
    color: '#FF590B',
  },
});

const NavLinkWrapper = Wrapper.withComponent(NavLink);

const IconWithLabel = ({ icon, label }) => (
  <>
    {icon && <Icon size="lg" iconName={icon} />}
    <Paragraph
      fontSize="0.9rem"
      textAlign="center"
      color="black"
      css={{ margin: 0, paddingTop: '4px' }}
    >
      {label}
    </Paragraph>
  </>
);

const TabBarItem = ({ icon, label, to, exact, strict, ...rest }) => {
  if (to) {
    return (
      <NavLinkWrapper to={to} exact={exact} strict={strict} {...rest}>
        <IconWithLabel icon={icon} label={label} />
      </NavLinkWrapper>
    );
  }

  return (
    <Wrapper {...rest}>
      <IconWithLabel icon={icon} label={label} />
    </Wrapper>
  );
};

export default TabBarItem;
