export const constructShortenedUrlForId = (shortUrlId: string) => {
  return window.location.origin + '/short/' + shortUrlId;
}