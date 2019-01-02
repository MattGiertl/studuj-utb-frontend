import styled from '@emotion/styled';

const Paragraph = styled.p(
  ({
    fontSize = '1 rem',
    fontWeight = 'normal',
    color = 'white',
    textAlign = 'left',
  }) => ({
    fontSize: fontSize,
    fontWeight: fontWeight,
    color: color,
    textAlign: textAlign,
  }),
);

export default Paragraph;
