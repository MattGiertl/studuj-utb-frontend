import styled from '@emotion/styled';

const Ribbon = styled.div(props => ({
  boxSizing: 'border-box',
  width: '100%',
  fontSize: '0.9rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  minHeight: '50px',
  color: 'white',
  background: props.orange ? '#FF590B' : 'white',
}));

export default Ribbon;
