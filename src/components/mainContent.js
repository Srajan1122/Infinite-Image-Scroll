import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Navbar, Nav, Container} from 'react-bootstrap';
import SingleImage from './singleImage.js';
import InfiniteScroll from 'react-infinite-scroll-component';
import "../css/typography.css";
import "../css/spacing.css";

function MainContent() {
    const [state, setState] = useState({images:[], search:"Table"});
    
    useEffect(() => {
        fetchImages();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const fetchImages = (count = 10) => {
        const apiRoot = "https://api.unsplash.co";
        const accessKey = process.env.REACT_APP_ACCESSKEY;
    
        axios
          .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=${count}&query=${state.search}`)
          .then(res => {
            var image = {images: [...state.images, ...res.data]}
            setState({...state, ...image});
          })
          .catch(err => {
              console.log(err);
          })
    }

    const changeSearch = (s) => {
        const apiRoot = "https://api.unsplash.com";
        const accessKey = process.env.REACT_APP_ACCESSKEY;
    
        axios
          .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=10&query=${s}`)
          .then(res => {
            setState({images: [...res.data], search:s});
          })
          .catch(err => {
              console.log(err);
          })
    }

    return (
        <section>
            <header className="text padding-4">
            <Navbar bg="none" variant="light">
                <Nav className="mr-auto">
                    <Container>
                        <Nav.Link onClick={() => {changeSearch("Table")}} ><span className="navItem">Tables</span></Nav.Link>
                        <Nav.Link onClick={() => {changeSearch("Dogs")}}><span className="navItem">Dogs</span></Nav.Link>
                        <Nav.Link onClick={() => {changeSearch("Cats")}}><span className="navItem">Cats</span></Nav.Link>
                        <Nav.Link onClick={() => {changeSearch("Wallpaper")}}><span className="navItem">Wallpaper</span></Nav.Link>
                    </Container>
                </Nav>
            </Navbar>
            </header>

            <InfiniteScroll
                dataLength={state.images.length}
                next={fetchImages}
                hasMore={true}
            >

                <Container fluid>
                    {state.images.map(image => (
                        <SingleImage url={image.urls.thumb} key={image.id} id={image.id} des={image.description} />
                    ))}
                </Container>

            </InfiniteScroll>
        </section>
    );
}

export default MainContent;
