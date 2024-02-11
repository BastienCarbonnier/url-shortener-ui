import { createBrowserRouter } from 'react-router-dom';
import Error500Page from '@/core/components/error/Error500Page';
import UrlShortener from '@/url-shortener/UrlShortener';
import Redirection from '@/core/components/Redirection';

const router = createBrowserRouter([
  { path: '/500', element: <Error500Page /> },
  { path: '/short/:shortId', element: <Redirection />, },
  { path: '/', element: <UrlShortener /> },
]);

export default router;