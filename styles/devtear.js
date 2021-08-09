import css from 'styled-jsx/css';
import { spaces } from './theme';

export const devtearStyles = css`
  form {
    margin: ${spaces[2]};
  }

  .devtear_header {
    display: flex;
    align-items: flex-start;
  }
  .devtear_header :global(img) {
    height: 49px !important;
  }

  .uploaded_image2publish {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  .wrapper_image {
    position: relative;
  }

  .wrapper_image button {
    position: absolute;
    top: 4px;
    left: 6px;
    width: 32px;
    height: 32px;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    border-radius: 50%;
  }
`;
