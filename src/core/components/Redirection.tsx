import { useParams } from 'react-router-dom';

function Redirection() {
  const { shortId } = useParams();
  console.log(shortId);
  return (
    <div>
      <h1>Redirection</h1>
    </div>
  );
};

export default Redirection;