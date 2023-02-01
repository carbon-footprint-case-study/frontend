import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import Food from './images/Food.jpg'
import Trans1 from './images/Transportation1.png'
import Co2 from './images/carbon-dioxide.jpg'

function CarouselFadeExample() {
    return (
        <Container>
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Food}
                    alt="First slide"
                />
                {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Trans1}
                    alt="Third slide"
                />
                {/* <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Co2}
                    alt="Third slide"
                />
                {/* <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption> */}
            </Carousel.Item>
        </Carousel>
        </Container>
    );
}

export default CarouselFadeExample;