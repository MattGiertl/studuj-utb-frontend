import styled from '@emotion/styled';

const Paragraph = styled.p(({ fontSize, fontWeight, color, textAlign }) => ({
  fontSize: fontSize ? fontSize : '1rem',
  fontWeight: fontWeight ? fontWeight : 'normal',
  color: color ? color : 'white',
  textAlign: textAlign ? textAlign : 'left',
}));

export default Paragraph;
