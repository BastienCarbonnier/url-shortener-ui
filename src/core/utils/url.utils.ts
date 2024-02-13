export const getBaseForShortUrl = () => {
  return `${window.location.origin}/short/`;
}

export const constructShortenedUrlForId = (shortUrlId: string) => {
  return `${getBaseForShortUrl()}${shortUrlId}`;
}