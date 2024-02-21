import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getFullUrl } from '../services/shortener.service';
import { BackendResponse } from '../models/response.model';
import { useTranslation } from 'react-i18next';
import { CircularProgress, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { getBaseForShortUrl } from '../utils/url.utils';

function Redirection() {
  const { t } = useTranslation('', { keyPrefix: 'pages.redirection' });
  const navigate = useNavigate();

  useEffect(() => {
    const shortId = window.location.href.replace(getBaseForShortUrl(), "");
    if (shortId) {
      getFullUrl(shortId).then((response: BackendResponse) => {
        setTimeout(() => {
          window.location.href = response.data.fullUrl;
        }, 1500);
      }).catch((error) => {
        console.log(error)
        navigate('/404');
      })
    } else {
      navigate('/404');
    }
  }, []);

  return (
    <div>
      <Typography variant='h4' data-cy='redirectionTitle'>{t('title')}</Typography>
      <CircularProgress
        size={50}
        sx={{
          color: grey[700],
          marginTop: '2em'
        }}
      />
    </div>
  );
};

export default Redirection;