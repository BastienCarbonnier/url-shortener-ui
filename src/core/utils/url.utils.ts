import { PARAMS_KEY_SHORT_ID } from '../constants/request.constant';

export const constructShortenedUrlForId = (shortUrlId: string) => {
  return `${window.location.origin}/short/?${PARAMS_KEY_SHORT_ID}=${shortUrlId}`;
}