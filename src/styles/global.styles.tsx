import { fontStyle } from './font.styles';
import { css, Global } from '@emotion/react';
import { FC } from 'react';

export const GlobalStyles: FC = () => {
  return (
    <Global
      styles={css`
        ${fontStyle}

        html {
          height: 100%;
        }

        html,
        body {
          position: relative;
          font-family: 'Ubuntu', sans-serif;
          overflow-x: auto;
          width: 100%;
        }

        * {
          box-sizing: border-box;
          padding: 0;
          margin: 0;
          border: 0;
          background: white;
          color: black;
          li {
            list-style-type: none;
          }
          ul {
            margin-left: 0;
            padding-left: 0;
          }
        }

        span {
          background-color: inherit;
        }

        svg {
          background-color: inherit;
        }

        button {
          cursor: pointer;
        }
      `}
    />
  );
};
