import css from 'styled-jsx/css';

export default css`
  button {
    border: 0;
    color: white;
    background-color: black;
    cursor: pointer;
    border-radius: 999px;
    font-size: 1.6rem;
    padding: 12px 24px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 8px;
  }

  button:disabled {
    opacity: 0.2;
    pointer-events: none;
    user-interaction: none;
  }
`;
