import { Box, Typography } from '@mui/material';
import classNames from 'classnames';
import { css } from '@linaria/core';
import { useTranslation } from 'react-i18next';

const style = css`
  margin: 2em;
`;

function Description() {
  const { t } = useTranslation();
  return (
    <Box className={classNames(style)}>
      <Typography variant='body1'></Typography>
      {t('description')}
    </Box>
  )
}

export default Description;