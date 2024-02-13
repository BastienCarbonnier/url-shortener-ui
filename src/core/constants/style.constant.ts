import { css } from '@linaria/core';

export const HEADER_HEIGHT = '2em';
export const MARGIN_BOTTOM_ALERT = '2em';

export const styleAlertSuccess = css`
  color: white!important;
  background-color: green!important;
  margin-bottom: ${MARGIN_BOTTOM_ALERT};
`;

export const styleAlertError = css`
  color: white!important;
  background-color: #f44336!important;
  margin-bottom: ${MARGIN_BOTTOM_ALERT};
`;

export const styleIcon = css`
  color: white;
`;