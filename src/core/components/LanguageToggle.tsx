import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

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
    <div>
      <Button 
        className='form-button'
        color='inherit'
        data-cy='languageToggle'
        onClick={() => handleChangeLanguage()}>
          {mapLanguage[i18n.language]}
      </Button>
    </div>
  );
}

export default LanguageToggle;