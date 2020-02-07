import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Slider1 from './img/slider1.jpg';
import Slider2 from './img/slider2.jpg';

class Home extends Component{ render(){ return(
    <React.Fragment>
    <div>
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" src={Slider1} alt="First slide" />
                <Carousel.Caption>
                    <h3>Welcome</h3>
                    <p>This is My Very First React Website</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={Slider2} alt="Second Slide" />
    
                <Carousel.Caption>
                    <h3>Hello Everyone</h3>
                    <p>You Want to know more ?</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
        <div className='about'>
        <h1>DIGITAL MEDIA IS OUR GAME</h1>
        <p>We are a digital agency, experts at showcasing your brand online.
Be it a new campaign or straight-up branding from scratch.
We create, we streamline and most importantly we amplify.</p>
        </div>
        </React.Fragment>
    ) } }
export default Home