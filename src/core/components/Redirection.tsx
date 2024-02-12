import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getFullUrl } from '../services/shortener.service';
import { BackendResponse } from '../models/response.model';

function Redirection() {
  const { shortId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (shortId) {
      getFullUrl(shortId).then((response: BackendResponse) => {
        console.log(response);
        window.location.href = response.data.fullUrl;
      }).catch((error) => {
        console.log(error.response.data);

        navigate('/404');
      })
    } else {
      navigate('/404');
    }
  }, [])
  return (
    <div>
      <h1>Redirection</h1>
    </div>
  );
};

export default Redirection;