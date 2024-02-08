import UrlShortenerForm from '@/core/components/UrlShortenerForm';
import { css } from '@linaria/core';
import { useTranslation } from 'react-i18next';

const style = css`
`;

function UrlShortener() {
  const { t } = useTranslation();
  return (
    <div className={style}>
      <h1>{t('title')}</h1>
      <UrlShortenerForm/>
    </div>
  );
}

export default UrlShortener;