import { Container,Card,Row,Col } from "react-bootstrap";

function Features(){
    return(
        <section className="bg-light py-5">
        <Container>
          <h2 className="text-center mb-5">Key Features</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>AI Chatbot Assistance</Card.Title>
                  <Card.Text>Get instant answers to your queries, anytime.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>Real-time Progress Tracking</Card.Title>
                  <Card.Text>Track student progress with detailed analytics.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>Interactive Quizzes</Card.Title>
                  <Card.Text>Challenge yourself with quizzes and get instant feedback.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    )
}

export default Features;