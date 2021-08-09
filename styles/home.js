import css from 'styled-jsx/css';
import { colors, spaces } from 'styles/theme';
import { addOpacity } from 'styles/utils';
export const homeStyles = css`
  header {
    align-items: center;
    border-bottom: 1px solid #ccc;
    display: flex;
    height: 53px;
    padding: 0 ${spaces[2]};
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 10;
    background: #fffa;
    backdrop-filter: blur(5px);
  }

  h2 {
    font-size: 21px;
  }

  section {
    flex: 1 1 auto;
  }
  .container {
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  nav {
    width: 100%;
    height: 52.5px;
    border-top: 1px solid #ccc;
    position: absolute;
    bottom: 0;
    z-index: 10;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  nav a {
    min-height: 100%;
    flex: 1 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  nav a:hover {
    background: radial-gradient(
      ${addOpacity(colors.twitter, 0.2)} 15%,
      transparent 17%
    );
    background-size: 200px 200px;
    background-position: center;
  }

  nav a :global(svg) {
    font-size: 2.5rem;
    color: ${colors.twitter};
    /* background: #09f; */
  }

  .createDevit {
    position: absolute;
    bottom: 55px;
    right: 15px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${colors.twitter};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  :global(svg.svgCreate) {
    font-size: 2.2rem !important;
    fill: white;
  }
`;
