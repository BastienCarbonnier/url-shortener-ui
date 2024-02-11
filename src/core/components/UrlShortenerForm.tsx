import { css } from '@linaria/core';
import classNames from 'classnames';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useTranslation } from 'react-i18next';
import { shortenUrl } from '../services/shortener.service';
import { useForm } from "react-hook-form";

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
  const [shortenedUrl, setShortenedUrl] = useState();
  const { register, handleSubmit } = useForm();

  const handleFormSubmit = async (data: any) => {
    console.log(data);
    const res = await shortenUrl(data['urlToShorten'], 'https://www.google.com');
    console.log(res.data);
    setShortenedUrl(res.data.data['shortenedUrl']);
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
          startIcon={<CloudUploadIcon />} 
          fullWidth={true}>
          {t('url-shortener-form.button-title')}
        </Button>
      </form>

      {window.location.origin + '/short/' + shortenedUrl}
    </div>
  );
}

export default UrlShortenerForm;