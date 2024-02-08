import { css } from '@linaria/core';
import classNames from 'classnames';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

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
  const [urlToShorten, setUrlToShorten] = useState('');

  return (
    <div className={classNames(style)}>
      <TextField className='form-input' value={urlToShorten} onChange={(event) => setUrlToShorten(event.target.value)}></TextField>
      <Button className='form-button' variant="contained" startIcon={<CloudUploadIcon />} fullWidth={true} onClick={() => console.log(urlToShorten)}>Essai</Button>
    </div>
  );
}

export default UrlShortenerForm;