import { Container } from 'react-bootstrap';
import './styles.css';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="bg-primary dark">
                <Container>
                    <div className="navbar-fixed-bottom">
                        <p className="navbar-text text-white text-center mb-0">© {new Date().getFullYear()}</p>
                    </div>
                </Container>
            </div>
        </footer>
    )
}
