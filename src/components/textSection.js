import {Jumbotron, Container} from 'react-bootstrap';
import "../css/typography.css";

function TextSection() {
  return (
    <section className="text">
      <Jumbotron className="bg-none">
        <Container>
            <h1>Srajan <span className="color">Shetty</span></h1>
            <p>I’m a freelance software designer, with +2 years of experience</p>
        </Container>
      </Jumbotron>
    </section>
  );
}

export default TextSection;
