import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function Signup() {
  return (
      
    <div className=''>
        <Form className='col-md'>
            <Form.Group className='mb-2' controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="Username" placeholder="Enter your Username" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group controlId="formBasicConfirmPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>

            <br />

            <h3>Your Personal Data</h3>
            <Form.Group controlId="formBasicCheckPersonal">
                <Form.Check type="checkbox" label="I agree to the Terms and Conditions" />
                    <Form.Text className="text-muted">
                        By clicking Sign Up, you agree to our Terms and that you have read our Data Policy, including our Cookie Use Policy.
                    </Form.Text>
            </Form.Group>

            <br />
            <Form.Group controlId="formBasicAge">
                <Form.Label>Age</Form.Label>
                <Form.Control type="number" placeholder="Enter age" />
            </Form.Group>

            <Form.Group controlId="formBasicWeight">
                <Form.Label>Weight</Form.Label>
                <Form.Control type="number" placeholder="Enter weight" />
            </Form.Group>

            <Form.Group controlId="formBasicHeight">
                <Form.Label>Height</Form.Label>
                <Form.Control type="number" placeholder="Enter height" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Sign Up
            </Button>
        </Form>
        <span> Or Already have  an account Sign in? <a href='/' >here</a> </span>
    </div>

  )
}
