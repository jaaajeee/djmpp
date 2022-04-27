import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
const Signin = () => {
    
    return (
        <div className="container d-justify-content-center">
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                   
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remeber me" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Sign in
                </Button>
                <br />
                <span> Or dont have an account ? <a href='/signup' >Sign up</a> </span>
            </Form>
            </div>
    );
    }
    export default Signin;