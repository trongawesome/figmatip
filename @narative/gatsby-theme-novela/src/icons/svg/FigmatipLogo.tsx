import React from "react";
import styled from "@emotion/styled";

import { Icon } from '@types';


const FigmatipLogo: Icon = ({ fill }) => {
  return (
    <LogoContainer>
      <svg
        viewBox="0 0 294 294"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fillRule="evenodd" clipRule="evenodd" d="M282.4 147a135.4 135.4 0 11-270.8 0 135.4 135.4 0 01270.8 0zm11.6 0a147 147 0 11-294 0 147 147 0 01294 0zm-87-52.2c0-17.1-14-31-31.2-31h-52.7a31.1 31.1 0 00-16.9 57.1 31 31 0 00.3 51.6 31 31 0 0017.3 56.9h.3c17.4 0 31.6-14 31.6-31.4v-27.7a31.2 31.2 0 0051.3-23.7 31 31 0 00-14-25.9 31 31 0 0014-25.9zm-83.2 83.5h20.8V198c0 11.3-9.2 20.4-20.5 20.4h-.3c-11.1 0-20.2-9-20.2-20 0-11.1 9-20.1 20.2-20.1zm0-51.8h20.8v40.1h-20.8c-11.1 0-20.2-9-20.2-20s9-20 20.2-20zm31.9 20a20.1 20.1 0 0140.3 0c0 11.2-9 20.1-20.2 20.1-11.1 0-20.1-9-20.1-20zM123 74.9H144v40H123c-11 0-20.1-8.9-20.1-20 0-11 9-20 20.1-20zm32.6 0h20.1c11.2 0 20.2 9 20.2 20 0 11.1-9 20-20.2 20h-20.1v-40z" fill="#27292D" />
      </svg>
    </LogoContainer>
  );
};

export default FigmatipLogo;

const LogoContainer = styled.div`
  svg path {
    fill: ${p => p.theme.colors.primary};
    transition: fill 0.25s var(--ease-in-out-quad);
  }
`;