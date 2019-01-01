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
  borderTop: props.bordered ? '1px solid #EDEDED' : null,
  paddingBottom: props.addPadding ? '20px' : null,
  paddingTop: props.addPadding ? '5px' : null,
}));

export default Ribbon;
