import { css } from '@linaria/core';
import classNames from 'classnames';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

const style = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1em;

  form-input {
    display: flex;
    width: 50%;
  }
  form-button {
    display: flex;
    width: 50%;
  }
`;

function LanguageToggle() {
  const { i18n } = useTranslation();
  const mapLanguage: Record<string, string> = {
    fr: 'en',
    en: 'fr'
  }

  const handleChangeLanguage = () => {
    i18n.changeLanguage(mapLanguage[i18n.language])
  };

  return (
    <div className={classNames(style)}>
      <Button 
        className='form-button' 
        variant="contained"
        fullWidth={true} 
        onClick={() => handleChangeLanguage()}>
          {mapLanguage[i18n.language]}
      </Button>
    </div>
  );
}

export default LanguageToggle;