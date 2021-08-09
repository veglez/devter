import css from 'styled-jsx/css';
import { colors } from './theme';

export const Header = css`
  header {
    display: grid;
    place-items: center;
    place-content: center;
    gap: 16px;
    text-align: center;
    min-height: 100%;
  }

  h1 {
    color: ${colors.secondary};
    font-weight: 800;
    font-size: 3.2rem;
  }

  h2 {
    color: ${colors.primary};
    font-size: 2.4rem;
  }

  h2 span {
    display: block;
  }
`;
