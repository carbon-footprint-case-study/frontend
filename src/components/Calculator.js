import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicExample() {
    return (
        <Form className='mx-4'>
            <Form.Group className="mb-3" >
                <Form.Label><h5>YOUR DIET</h5></Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">Veg</option>
                    <option value="2">Non Veg</option>
                </Form.Select>
                {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text> */}
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Daily Calories</Form.Label>
                <Form.Control type="number" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Your CO2 Emissions</Form.Label>
                <Form.Control disabled />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default BasicExample;