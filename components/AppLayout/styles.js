import css from 'styled-jsx/css';
import { fonts, colors, breakpoints } from '../../styles/theme';
import { addOpacity } from '../../styles/utils';

export default css`
  div {
    display: grid;
    place-content: center;
    min-height: 100vh;
  }

  main {
    font-size: 1.6rem;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    width: 100vw;
    min-height: 100vh;
    position: relative;
  }
  @media (min-width: ${breakpoints.mobile}) {
    main {
      width: 500px;
    }
  }
`;

export const globalStyles = css.global`
  html,
  body {
    background-image: radial-gradient(
        ${addOpacity(colors.primary, 0.15)} 1px,
        transparent 1px
      ),
      radial-gradient(${addOpacity(colors.primary, 0.15)} 1px, transparent 1px);
    background-position: 0 0, 25px 25px;
    background-size: 50px 50px;
    padding: 0;
    margin: 0;
    font-family: ${fonts.base};
    font-size: 62.5%;
  }

  * {
    font-size: 1.5rem;
    box-sizing: border-box;
    padding: 0;
    margin: 0%;
  }
`;
