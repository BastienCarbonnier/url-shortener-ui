import { createBrowserRouter } from 'react-router-dom';
import Error500Page from '@/core/components/error/Error500Page';
import UrlShortener from '@/url-shortener/UrlShortener';

const router = createBrowserRouter([
  { path: '/500', element: <Error500Page /> },
  { path: '/', element: <UrlShortener /> },
]);

export default router;