import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Navbar, Nav, Container, Row } from 'react-bootstrap';
import SingleImage from './singleImage.js';
import { Loader } from './loader';
import InfiniteScroll from 'react-infinite-scroll-component';
import "../css/typography.css";
import "../css/spacing.css";
import { SRLWrapper } from "simple-react-lightbox";
import $ from 'jquery';


function MainContent() {
    const [state, setState] = useState({images:[], search:""});

    $(function(){
        $(".container a").on('click', function(){
          console.log("Hello");
          $(this).siblings().removeClass('active');
          $(this).addClass('active')
        })
    });
    
    useEffect(() => {
        fetchImages();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const generateKey = (pre) => {
        return `${ pre }_${ new Date().getMilliseconds() }_${Math.random()}`;
    }

    const fetchImages = (count = 20) => {
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
          .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=20&query=${s}`)
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
                        <Nav.Link onClick={() => {changeSearch("")}} className="active"><span className="navItem">All</span></Nav.Link>
                        <Nav.Link onClick={() => {changeSearch("Mandala")}}><span className="navItem">Mandala</span></Nav.Link>
                        <Nav.Link onClick={() => {changeSearch("Desserts")}}><span className="navItem">Desserts</span></Nav.Link>
                        <Nav.Link onClick={() => {changeSearch("Decoration")}}><span className="navItem">Decoration</span></Nav.Link>
                        <Nav.Link onClick={() => {changeSearch("Nature")}}><span className="navItem">Nature</span></Nav.Link>
                        <Nav.Link onClick={() => {changeSearch("Vintage")}}><span className="navItem">Vintage</span></Nav.Link>
                    </Container>
                </Nav>
            </Navbar>
            </header>
            <InfiniteScroll
                dataLength={state.images.length}
                next={fetchImages}
                hasMore={true}
                loader={<Loader />}
            >
            <SRLWrapper>
                <Container fluid>
                    <Row>
                    {state.images.map(image => (
                        <SingleImage url={image.urls.thumb} url2={image.urls.full} key={ generateKey(image.id) } id={image.id} des={image.description} />
                    ))}
                    </Row>
                </Container>
            </SRLWrapper>

            </InfiniteScroll>
        </section>
    );
}

export default MainContent;
