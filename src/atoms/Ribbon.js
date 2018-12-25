import styled from '@emotion/styled';

const Ribbon = styled.div(props => ({
  height: props.height ? props.height : '2.5rem',
  color: 'white',
  background: 'orange',
  boxSizing: 'border-box',
  width: '100%',
  fontSize: '1rem',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  borderStyle: 'solid',
  borderWidth: 0,
}));

export default Ribbon;
