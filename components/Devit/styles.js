import css from 'styled-jsx/css';
import { colors, spaces } from 'styles/theme';

export const devitStyles = css`
  article {
    padding: ${spaces[1]} ${spaces[2]} 0;
    border: 1px #f4f7f7;
    border-style: solid none;
    display: flex;
    width: 100%;
    /* border: 1px solid blue; */
  }

  .picture {
    min-width: 46px;
    margin-inline-end: ${spaces[1]};
  }

  .body {
    min-width: 0;
    flex-grow: 1;
  }

  header {
    display: flex;
    justify-content: space-between;
    gap: ${spaces[0]};
    font-size: 1.5rem;
    height: 19px;
    width: 100%;
  }

  .header__info {
    overflow-x: hidden;
    display: flex;
    justify-content: space-between;
    gap: 12px;
    flex: 1 1 auto;
  }

  .primary_data {
    white-space: nowrap;
    font-weight: 700;
    overflow: hidden;
    min-width: 12ch;
    flex: 1 1 auto;
    /* height: 19px; */
  }

  .secondary_data {
    display: flex;
    gap: ${spaces[0]};
    color: ${colors.t_secondaty};
    min-width: 10ch;
    flex: 0 1 auto;
  }

  .secondary_data span {
    flex: 1 1 auto;
    min-width: 2ch;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .secondary_data time {
    flex: 1 0 auto;
  }

  :global(.verified-icon) {
    fill: ${colors.twitter} !important;
  }

  :global(.devit_avatar) {
    border-radius: 50%;
  }

  :global(.more_icon) {
    min-width: 12px;
  }
`;
