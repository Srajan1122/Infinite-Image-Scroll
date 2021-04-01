import {Image} from 'react-bootstrap';

function SingleImage({url, key, des}) {
  return (
    <Image key={key} src={url} alt={des} />
  );
}

export default SingleImage;
