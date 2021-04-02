import {Col, Image} from 'react-bootstrap';
import '../css/singleImage.css';


function SingleImage({url, url2, id, des}) {

  const makeVisible = () => {
    var x = document.getElementById(id);
    x.style.opacity = 1;
  }

  setTimeout(makeVisible, 200);
  
  return (
    <Col md={4} sm={6} xs={12} lg={3}>
      <div className="image-div">
        <a href={url2} className="h">
          <Image className="image"  src={url} id={id} alt={des} />
        </a>
      </div>
    </Col>
  );
}

export default SingleImage;
