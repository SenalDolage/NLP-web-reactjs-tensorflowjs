import { Navbar, Container } from 'react-bootstrap';
import './styles.css';

export const Header = () => {
    return (
        <header className="header">
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand>TensorFlow NLP Demo App</Navbar.Brand>
                </Container>
            </Navbar>
        </header>
    )
}