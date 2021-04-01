import {Image} from 'react-bootstrap';
import '../css/singleImage.css';

function SingleImage({url, id, des}) {

  const makeVisible = () => {
    var x = document.getElementById(id);
    x.style.opacity = 1;
  }

  setTimeout(makeVisible, 300);

  return (
    <div className="image-div">
      <Image className="image" src={url} id={id} alt={des} />
    </div>
  );
}

export default SingleImage;
