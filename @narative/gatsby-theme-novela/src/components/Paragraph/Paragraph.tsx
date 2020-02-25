import styled from "@emotion/styled";
import mediaqueries from "@styles/media";

const Paragraph = styled.p`
  line-height: 1.556;
  font-size: 16px;
  color: ${p => p.theme.colors.articleText};
  font-family: ${p => p.theme.fonts.body};
  transition: ${p => p.theme.colorModeTransition};
  margin: 0 auto 35px;
  width: 100%;

  b {
    font-weight: 800;
  }

`;

export default Paragraph;
