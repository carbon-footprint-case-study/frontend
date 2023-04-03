import { margin } from '@mui/system';
import Card from 'react-bootstrap/Card';

function DisplayCard({data}) {
  return (
    <>
        <Card
          bg= "light"
          key= "light"
          text= "dark"
          style={{ width: '15rem' , height : '15rem',  margin : {top : '20px'}}}
          className="mb-2"
        >
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title> Card Title </Card.Title>
            <Card.Text>
              your carbon footprint due to home is {data}
            </Card.Text>
          </Card.Body>
        </Card>
    
    </>
  );
}

export default DisplayCard;