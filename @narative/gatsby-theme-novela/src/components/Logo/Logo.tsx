import React from "react";
import styled from "@emotion/styled";

import mediaqueries from "@styles/media";

import { Icon } from '@types';

const Logo: Icon = ({ fill = "white" }) => {
  return (
    <LogoContainer>
      <svg
        width="317"
        height="32"
        viewBox="0 0 317 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="Logo__Desktop"
      >
        <path d="M259.558 13.43v-3.016h-4.342V7.008h-4.81v3.406h-3.146v3.016h3.146v5.278c0 4.472 2.366 6.604 7.774 6.604.52 0 .962-.026 1.378-.052v-3.354l-.13-.078h-.676c-2.548 0-3.536-.832-3.536-3.224V13.43h4.342Zm1.72-9.178v4.056h5.538V4.252h-5.538ZM261.642 25h4.81V10.102h-4.81V25Zm20.961-15.21c-3.302 0-5.954.91-7.696 2.548v-2.236h-4.81v20.93h4.81v-7.93c1.664 1.43 4.186 2.21 7.514 2.21 6.344 0 10.348-2.808 10.348-7.592 0-4.836-4.056-7.93-10.166-7.93Zm-1.17 12.012c-4.186 0-6.526-1.534-6.526-4.264 0-2.73 2.314-4.238 6.526-4.238s6.526 1.508 6.526 4.238c0 2.73-2.314 4.264-6.526 4.264Zm13.613 2.054c2.626.91 6.708 1.482 10.608 1.482 6.942 0 10.114-1.794 10.114-5.096 0-6.656-15.99-3.406-15.99-5.954 0-.858 1.3-1.196 4.654-1.196 3.822 0 6.682.52 9.62 1.508l.182-.052v-3.562c-2.808-.806-5.85-1.196-9.178-1.196-6.734 0-10.088 1.638-10.088 4.81 0 6.682 15.99 3.38 15.99 5.98 0 1.04-1.482 1.456-5.434 1.456-3.744 0-6.864-.468-10.348-1.898l-.13.052v3.666ZM12.298 9.79c-3.692 0-7.02.598-9.932 1.976v4.03l.078.052C5.278 14.08 8.216 13.3 11.986 13.3c3.562 0 5.408.676 5.538 2.028l-7.566.39C3.614 16.03.91 17.486.91 20.528c0 3.146 2.808 4.784 8.268 4.784 3.926 0 6.474-.858 8.346-2.704V25h4.42v-9.49c0-3.848-3.172-5.72-9.646-5.72ZM9.724 21.802c-2.86 0-3.978-.468-3.978-1.482 0-.988 1.17-1.508 3.588-1.638l8.19-.442v.234c0 2.028-2.99 3.328-7.8 3.328Zm47.039-11.7h-5.174l-4.576 10.27-4.446-10.27h-4.628l-4.472 10.244-4.524-10.244h-5.226l-.078.104L30.867 25h4.784l4.55-10.036L44.75 25h4.862l7.228-14.794-.078-.104Zm22.863 7.462c0-4.888-4.108-7.774-10.79-7.774-6.812 0-11.076 2.99-11.076 7.722 0 4.706 4.16 7.8 11.726 7.8 3.458 0 6.266-.65 8.944-2.028v-4.16l-.104-.078c-2.496 1.69-4.862 2.548-8.762 2.548-3.926 0-6.37-.936-6.916-3.068h16.978v-.962Zm-10.738-4.446c2.678 0 5.07.702 6.032 2.548H62.726c1.066-1.846 3.51-2.548 6.162-2.548Zm13.03 10.738c2.625.91 6.707 1.482 10.607 1.482 6.942 0 10.114-1.794 10.114-5.096 0-6.656-15.99-3.406-15.99-5.954 0-.858 1.3-1.196 4.654-1.196 3.822 0 6.682.52 9.62 1.508l.182-.052v-3.562c-2.808-.806-5.85-1.196-9.178-1.196-6.734 0-10.088 1.638-10.088 4.81 0 6.682 15.99 3.38 15.99 5.98 0 1.04-1.482 1.456-5.434 1.456-3.744 0-6.864-.468-10.348-1.898l-.13.052v3.666Zm22.789-6.292c0 4.706 4.264 7.748 11.31 7.748s11.362-3.042 11.362-7.748c0-4.732-4.316-7.774-11.362-7.774s-11.31 3.042-11.31 7.774Zm17.862 0c0 2.782-2.314 4.238-6.552 4.238-4.186 0-6.5-1.456-6.5-4.238 0-2.782 2.314-4.264 6.5-4.264 4.238 0 6.552 1.482 6.552 4.264Zm34.07-7.774c-3.302 0-6.24 1.196-7.93 3.406-1.3-2.184-3.744-3.406-6.994-3.406-2.782 0-5.2.936-6.786 2.678v-2.366h-4.81V25h4.81v-5.85c0-3.9 1.742-5.85 5.382-5.85 3.172 0 4.654 1.482 4.654 4.888V25h4.81v-5.85c0-4.03 1.768-5.85 5.486-5.85 3.432 0 4.81 1.534 4.81 4.888V25h4.81v-7.592c0-4.784-3.068-7.618-8.242-7.618Zm32.7 7.774c0-4.888-4.108-7.774-10.79-7.774-6.812 0-11.076 2.99-11.076 7.722 0 4.706 4.16 7.8 11.726 7.8 3.458 0 6.266-.65 8.944-2.028v-4.16l-.104-.078c-2.496 1.69-4.862 2.548-8.762 2.548-3.926 0-6.37-.936-6.916-3.068h16.978v-.962Zm-10.738-4.446c2.678 0 5.07.702 6.032 2.548h-12.194c1.066-1.846 3.51-2.548 6.162-2.548Z" fill={fill}/>
        <path d="M219.426 7.668c.679-.82 1.446-1.309 2.47-1.575.635-.165 2.006-.102 2.609.12.26.095.546.24.634.322.161.148.161.148-.295.198-1.017.112-1.681.627-2.104 1.635-.132.312-.239.614-.239.67 0 .117-.74 2.923-1.277 4.844-.198.71-.36 1.302-.36 1.318 0 .015 1.195.037 2.656.048l2.656.022-.648 1.907h-5.226l-.328 1.196c-1.089 3.984-1.42 4.943-1.965 5.678a5.397 5.397 0 0 1-2.627 1.857c-.651.201-1.781.185-2.541-.035-.552-.16-1.111-.424-1.185-.56-.018-.035.228-.063.547-.063.706 0 1.221-.238 1.704-.789.408-.466.613-.966 1.038-2.538.193-.714.546-2.006.786-2.872.238-.865.434-1.641.434-1.724 0-.144-.116-.15-2.606-.15-2.057 0-2.598-.022-2.57-.102l.336-.974.299-.872h5.171l.073-.264c.04-.145.313-1.179.606-2.297.816-3.115 1.194-4.084 1.952-5Z" fill={fill}/>
        <path d="M228.048 9.615a2.503 2.503 0 1 1-5.006 0 2.503 2.503 0 0 1 5.006 0ZM213.958 22.222a2.503 2.503 0 1 1-5.006-.001 2.503 2.503 0 0 1 5.006 0Z" fill={fill}/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M219 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16Zm0-1.262c8.14 0 14.738-6.598 14.738-14.738S227.14 1.262 219 1.262 204.262 7.86 204.262 16 210.86 30.738 219 30.738Z" fill={fill}/>
      </svg>

      <svg width="114" height="32" viewBox="0 0 114 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="Logo__Mobile">
        <path d="M56.558 13.43v-3.016h-4.342V7.008h-4.81v3.406H44.26v3.016h3.146v5.278c0 4.472 2.366 6.604 7.774 6.604.52 0 .962-.026 1.378-.052v-3.354l-.13-.078h-.676c-2.548 0-3.536-.832-3.536-3.224V13.43h4.342Zm1.72-9.178v4.056h5.538V4.252h-5.538ZM58.642 25h4.81V10.102h-4.81V25ZM79.603 9.79c-3.302 0-5.954.91-7.696 2.548v-2.236h-4.81v20.93h4.81v-7.93c1.664 1.43 4.186 2.21 7.514 2.21 6.344 0 10.348-2.808 10.348-7.592 0-4.836-4.056-7.93-10.166-7.93Zm-1.17 12.012c-4.186 0-6.526-1.534-6.526-4.264 0-2.73 2.314-4.238 6.526-4.238s6.526 1.508 6.526 4.238c0 2.73-2.314 4.264-6.526 4.264Zm13.613 2.054c2.626.91 6.708 1.482 10.608 1.482 6.942 0 10.114-1.794 10.114-5.096 0-6.656-15.99-3.406-15.99-5.954 0-.858 1.3-1.196 4.654-1.196 3.822 0 6.682.52 9.62 1.508l.182-.052v-3.562c-2.808-.806-5.85-1.196-9.178-1.196-6.734 0-10.088 1.638-10.088 4.81 0 6.682 15.99 3.38 15.99 5.98 0 1.04-1.482 1.456-5.434 1.456-3.744 0-6.864-.468-10.348-1.898l-.13.052v3.666Z" fill={fill}/>
        <path d="M16.426 7.668c.679-.82 1.446-1.309 2.47-1.575.635-.165 2.006-.102 2.609.12.26.095.546.24.634.322.161.148.16.148-.295.198-1.017.112-1.68.627-2.104 1.635-.132.312-.24.614-.24.67 0 .117-.739 2.923-1.276 4.844-.198.71-.36 1.302-.36 1.318 0 .015 1.195.037 2.656.048l2.656.022-.648 1.907h-5.226l-.328 1.196c-1.088 3.984-1.42 4.943-1.965 5.678a5.398 5.398 0 0 1-2.627 1.857c-.652.201-1.78.185-2.541-.035-.552-.16-1.11-.424-1.185-.56-.018-.035.228-.063.547-.063.706 0 1.22-.238 1.704-.789.408-.466.613-.966 1.038-2.538.193-.714.546-2.006.785-2.872.24-.865.435-1.641.435-1.724 0-.144-.116-.15-2.606-.15-2.057 0-2.598-.022-2.57-.102l.336-.974.299-.872h5.17l.074-.264c.04-.145.313-1.179.606-2.297.816-3.115 1.194-4.084 1.952-5Z" fill={fill}/>
        <path d="M25.048 9.615a2.503 2.503 0 1 1-5.006 0 2.503 2.503 0 0 1 5.006 0ZM10.958 22.222a2.503 2.503 0 1 1-5.006 0 2.503 2.503 0 0 1 5.006 0Z" fill={fill}/><path fill-rule="evenodd" clip-rule="evenodd" d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16Zm0-1.262c8.14 0 14.738-6.598 14.738-14.738S24.14 1.262 16 1.262 1.262 7.86 1.262 16 7.86 30.738 16 30.738Z" fill={fill}/>
      </svg>
    </LogoContainer>
  );
};

export default Logo;

const LogoContainer = styled.div`
  .Logo__Mobile {
    display: none;
  }

  svg path {
    fill: ${p => p.theme.colors.primary};
    transition: fill 0.25s var(--ease-in-out-quad);
  }

  ${mediaqueries.tablet`
    .Logo__Desktop {
      display: none;
    }
    
    .Logo__Mobile{
      display: block;
    }
  `}
`;
