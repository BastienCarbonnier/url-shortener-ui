export const getBaseForShortUrl = () => {
  return `${window.location.origin}/`;
}

export const constructShortenedUrlForId = (shortUrlId: string) => {
  return `${getBaseForShortUrl()}${shortUrlId}`;
}