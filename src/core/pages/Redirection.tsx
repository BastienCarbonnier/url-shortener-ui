import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getFullUrl } from '../services/shortener.service';
import { BackendResponse } from '../models/response.model';
import { useTranslation } from 'react-i18next';
import { CircularProgress, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

function Redirection() {
  const { t } = useTranslation('', { keyPrefix: 'pages.redirection' });
  const { shortId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(shortId);
    if (shortId) {
      getFullUrl(shortId).then((response: BackendResponse) => {
        setTimeout(() => {
          console.log(response.data)
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