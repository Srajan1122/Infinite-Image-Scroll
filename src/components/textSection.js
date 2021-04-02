import {Jumbotron, Container} from 'react-bootstrap';
import "../css/typography.css";

function TextSection() {
  return (
    <section className="text">
      <Jumbotron className="bg-none">
        <Container>
            <h1><span className="color">S</span>rajan <span className="color">S</span>hetty</h1>
            <p>I’m a freelance software designer, with +3 years of experience</p>
        </Container>
      </Jumbotron>
    </section>
  );
}

export default TextSection;
