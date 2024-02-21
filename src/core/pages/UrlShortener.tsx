import Description from '@/core/components/Description';
import UrlShortenerForm from '@/core/components/UrlShortenerForm';
import { css } from '@linaria/core';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const style = css`
`;

function UrlShortener() {
  const { t } = useTranslation();

  return (
    <div className={style}>
      <Typography variant='h3' data-cy='mainTitle'>{t('title')}</Typography>
      <Description/>
      <UrlShortenerForm/>
    </div>
  );
}

export default UrlShortener;