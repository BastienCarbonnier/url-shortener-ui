import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function Error404Page() {
  const { t } = useTranslation('', { keyPrefix: 'pages.error404'});
  return (
    <div>
      <Typography variant='h3'>{t('title')}</Typography>
      <Typography variant='body1'>{t('description')}</Typography>
    </div>
  );
}