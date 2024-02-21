import { css } from '@linaria/core';
import classNames from 'classnames';
import { useState } from 'react';
import { Button, Link, TextField, Typography } from '@mui/material';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import { useTranslation } from 'react-i18next';
import { shortenUrl } from '../services/shortener.service';
import { useForm } from "react-hook-form";
import { constructShortenedUrlForId } from '../utils/url.utils';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import { Alert } from '@mui/material';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { REGEX_URL_VALIDATION } from '../constants/regex.constant';
import { styleAlertError, styleAlertSuccess, styleIcon } from '../constants/style.constant';

const style = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1em;

  .shortened-url {
    margin-top: 2em;
  }
`;

const styleShortenedUrl = css`
  margin-top: 2em;
`;

interface IFormInput {
  urlToShorten: string
}

const schema = yup.object().shape({
  urlToShorten: yup
    .string()
    .required("error.required")
    .matches(REGEX_URL_VALIDATION, "error.invalid-format")
});

function UrlShortenerForm() {
  const { t } = useTranslation('', { keyPrefix: 'url-shortener-form'});
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [alreadyShortened, setAlreadyShortened] = useState(false);
  const [hasBackendError, setHasBackendError] = useState<boolean | null>(null);
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({ resolver: yupResolver(schema) });

  const copyToClipboard = async (shortenedUrl: string) => {
    await navigator.clipboard.writeText(shortenedUrl);
  }

  const handleFormSubmit = async (data: IFormInput) => {
    shortenUrl(data.urlToShorten).then((response) => {
      const shortenedUrlForId = constructShortenedUrlForId(response.data.shortenedUrl);
      setAlreadyShortened(response.data.alreadyShortened);
      setShortenedUrl(shortenedUrlForId);
      copyToClipboard(shortenedUrlForId);
      setHasBackendError(false);
    }).catch(() => {
      setHasBackendError(true);
    })
  }

  const renderValidationMessage = (): React.ReactNode => {
    let icon = <CloseIcon fontSize="inherit" className={styleIcon}/>;
    let message = t('alert.error');
    let style = styleAlertError;

    if (!hasBackendError) {
      icon = <CheckIcon fontSize="inherit" className={styleIcon}/>;
      message = t('alert.success');
      style = styleAlertSuccess;
    }
    return (<Alert icon={icon} className={style} data-cy='alertSuccess'>{message}</Alert>);
  };

  return (
    <>
      {hasBackendError != null && renderValidationMessage()}
      <form onSubmit={handleSubmit((data: any) => handleFormSubmit(data))} className={classNames(style)}>
        <TextField 
          {...register("urlToShorten")}
          error={errors.urlToShorten ? true : false}
          label={errors.urlToShorten?.message ? t(errors.urlToShorten.message) : t('label')}
          data-cy='urlToShorten'
          >
        </TextField>
        <Button
          variant="contained"
          type='submit'
          startIcon={<ContentCutIcon/>}>
          {t('button-title')}
        </Button>
      </form>
      { shortenedUrl && 
        <div className={styleShortenedUrl}>
          <Typography variant='h4'>{t('result.title')} {alreadyShortened ? t('result.alreadyShortened') : null}</Typography>
          <Link href={shortenedUrl} data-cy='urlShortenedLink'>{shortenedUrl}</Link>
        </div>
      }
    </>
  );
  }  

export default UrlShortenerForm;