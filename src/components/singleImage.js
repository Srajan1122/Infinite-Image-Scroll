import {Image} from 'react-bootstrap';
import '../css/singleImage.css';


function SingleImage({url, url2, id, des}) {

  const makeVisible = () => {
    var x = document.getElementById(id);
    x.style.opacity = 1;
  }

  setTimeout(makeVisible, 200);
  
  return (
    <div className="image-div">
      <a href={url2}>
        <Image className="image"  src={url} id={id} alt={des} />
      </a>
    </div>
  );
}

export default SingleImage;
