import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import Food1 from './images/Food1.jpeg'
import Trans1 from './images/Transportation1.png'
import Co2 from './images/carbon-dioxide.jpg'

function Carousels() {
    return (
        <Container>
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Food1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Livestock production generates nearly a fifth of the world’s greenhouse gases — more than transportation.</h3>
                    {/* <p>Livestock production generates nearly a fifth of the world’s greenhouse gases — more than transportation.</p> */}
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Trans1}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    {/* <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Co2}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    {/* <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p> */}
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </Container>
    );
}

export default Carousels;