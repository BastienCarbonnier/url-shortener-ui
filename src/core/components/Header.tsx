import { AppBar, Toolbar, Typography } from '@mui/material';
import LanguageToggle from './LanguageToggle';
import classNames from 'classnames';
import { css } from '@linaria/core';
import { HEADER_HEIGHT } from '../constants/style.constant';
import { useTranslation } from 'react-i18next';

const style = css`
  height: ${HEADER_HEIGHT};
  .toolbar {
    justify-content: space-between;
  }
`;

function Header() {
  const { t } = useTranslation();
  return (
    <header className={classNames(style)}>
      <AppBar component="nav">
        <Toolbar className='toolbar'>
          <Typography variant='h5'>{t('title')}</Typography>
          <LanguageToggle></LanguageToggle>
        </Toolbar>
      </AppBar>
    </header>
  )
}

export default Header;