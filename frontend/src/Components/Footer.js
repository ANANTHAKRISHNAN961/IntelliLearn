import { Container,Nav } from "react-bootstrap";

function Footer(){
    return(
        <footer className="bg-primary text-white text-center py-3">
        <Container>
          <p>© 2024 Intelli Learn. All rights reserved.</p>
          <Nav className="justify-content-center">
            <Nav.Link href="#privacy" className="text-white">Privacy Policy</Nav.Link>
            <Nav.Link href="#terms" className="text-white">Terms of Service</Nav.Link>
            <Nav.Link href="#contact" className="text-white">Contact</Nav.Link>
          </Nav>
        </Container>
      </footer>
    )
}

export default Footer;