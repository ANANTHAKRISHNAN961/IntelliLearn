import { Container,Card,Row,Col } from "react-bootstrap";

function Introduction(){
    return(
        <section className="py-5">
        <Container>
          <Row className="text-center">
            <Col md={3}>
              <Card className="border-0">
                <Card.Body>
                  <Card.Title>For Institutions</Card.Title>
                  <Card.Text>Manage courses and student progress with ease.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="border-0">
                <Card.Body>
                  <Card.Title>For Teachers</Card.Title>
                  <Card.Text>Share lessons, track engagement, and grade students effortlessly.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="border-0">
                <Card.Body>
                  <Card.Title>For Students</Card.Title>
                  <Card.Text>Interactive learning with AI-driven assistance and quizzes.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="border-0">
                <Card.Body>
                  <Card.Title>For Parents</Card.Title>
                  <Card.Text>Monitor academic progress and attendance in real-time.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    )
}

export default Introduction;