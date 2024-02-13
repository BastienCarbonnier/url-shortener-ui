import { createBrowserRouter } from 'react-router-dom';
import Error500Page from '@/core/pages/Error500Page';
import UrlShortener from '@/core/pages/UrlShortener';
import Redirection from '@/core/pages/Redirection';
import Error404Page from '@/core/pages/Error404Page';

const router = createBrowserRouter([
  { path: '/500', element: <Error500Page /> },
  { path: '/404', element: <Error404Page /> },
  { path: '/', element: <UrlShortener /> },
  { path: 'short/**', element: <Redirection /> }
]);

export default router;