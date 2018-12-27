import React, { HTMLAttributes, SFC } from 'react';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import * as H from 'history';
import Paragraph from '../atoms/Paragraph';

const Wrapper = styled.div({
  display: 'block',
  flex: 1,
  fontSize: '1rem',
  cursor: 'pointer',
  textDecoration: 'none',
  textOverflow: 'ellipsis',
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
    {icon && <Icon name={icon} color="inherit" />}
    <Paragraph css={{ margin: 0, padding: 0 }}>{label}</Paragraph>
  </>
);

const TabBarItem = ({
  icon,
  label,
  to,
  exact,
  strict,
  ...rest
}) => {
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
