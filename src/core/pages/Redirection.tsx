import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getFullUrl } from '../services/shortener.service';
import { BackendResponse } from '../models/response.model';
import { useTranslation } from 'react-i18next';
import { CircularProgress, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { PARAMS_KEY_SHORT_ID } from '../constants/request.constant';

function Redirection() {
  const { t } = useTranslation('', { keyPrefix: 'pages.redirection' });
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const shortId = searchParams.get(PARAMS_KEY_SHORT_ID);
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
      <Typography variant='h4'>{t('title')}</Typography>
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