import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Navbar, Nav, Container} from 'react-bootstrap';
import SingleImage from './singleImage.js';
import InfiniteScroll from 'react-infinite-scroll-component';


function MainContent() {
    const [state, setState] = useState({images:[], search:""});
    
    useEffect(() => {
        fetchImages();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    console.log(state);

    const fetchImages = (count = 10) => {
        const apiRoot = "https://api.unsplash.com";
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
            <Navbar bg="none" variant="light">
                <Nav className="mr-auto">
                    <Container>
                        <Nav.Link onClick={() => {changeSearch("")}} >All</Nav.Link>
                        <Nav.Link onClick={() => {changeSearch("Dogs")}}>Dogs</Nav.Link>
                        <Nav.Link onClick={() => {changeSearch("Cats")}}>Cat</Nav.Link>
                        <Nav.Link onClick={() => {changeSearch("Wallpaper")}}>Wallpaper</Nav.Link>
                    </Container>
                </Nav>
            </Navbar>

            <InfiniteScroll
                dataLength={state.images.length}
                next={fetchImages}
                hasMore={true}
            >

                <Container>
                    {state.images.map(image => (
                        <SingleImage url={image.urls.thumb} key={image.id} des={image.description} />
                    ))}
                </Container>

            </InfiniteScroll>

        </section>
    );
}

export default MainContent;
