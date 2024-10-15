import { Container,Card,Row,Col } from "react-bootstrap";

function Testimonials(){
    return(
        <section className="py-5">
        <Container>
          <h2 className="text-center mb-5">What People Are Saying</h2>
          <Row>
            <Col md={4}>
              <Card className="text-center">
                <Card.Body>
                  <Card.Text>“Intelli Learn has made teaching so much easier and more effective.”</Card.Text>
                  <Card.Footer>— Teacher</Card.Footer>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-center">
                <Card.Body>
                  <Card.Text>“I can track my child’s progress and feel more involved in their learning.”</Card.Text>
                  <Card.Footer>— Parent</Card.Footer>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-center">
                <Card.Body>
                  <Card.Text>“I love the quizzes and the AI chatbot helps me understand better.”</Card.Text>
                  <Card.Footer>— Student</Card.Footer>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    )
}

export default Testimonials;