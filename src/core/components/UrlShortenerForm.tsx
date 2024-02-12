import { css } from '@linaria/core';
import classNames from 'classnames';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import { useTranslation } from 'react-i18next';
import { shortenUrl } from '../services/shortener.service';
import { useForm } from "react-hook-form";
import { constructShortenedUrlForId } from '../utils/url.utils';

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

function UrlShortenerForm() {
  const { t } = useTranslation();
  const [shortenedUrl, setShortenedUrl] = useState('');
  const { register, handleSubmit } = useForm();

  const copyToClipboard = async (shortenedUrl: string) => {
    await navigator.clipboard.writeText(shortenedUrl);
    console.log("Copied!!!");
  }

  const handleFormSubmit = async (data: any) => {
    console.log(data);
    shortenUrl(data['urlToShorten']).then((response) => {
      const shortenedUrl = constructShortenedUrlForId(response.data.shortenedUrl);
      setShortenedUrl(shortenedUrl);
      copyToClipboard(shortenedUrl);
    }).catch((error) => {
      console.log(error);
    })
  }

  return (
    <div className={classNames(style)}>
      <form onSubmit={handleSubmit((data: any) => handleFormSubmit(data))}>
        <TextField 
          {...register("urlToShorten")}
          className='form-input'>
        </TextField>
        <Button 
          className='form-button' 
          variant="contained"
          type='submit'
          startIcon={<ContentCutIcon/>}>
          {t('url-shortener-form.button-title')}
        </Button>
      </form>
      {shortenedUrl}
    </div>
  );
}

export default UrlShortenerForm;