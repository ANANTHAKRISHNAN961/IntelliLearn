import { Container,Button } from "react-bootstrap";

function Hero(){
    return(
        <section className="bg-primary text-white text-center py-5">
        <Container>
          <h1 className="display-4">Empowering Learning, Anytime, Anywhere</h1>
          <p className="lead">
            Transforming classrooms with AI-powered learning, real-time quizzes, and progress tracking.
          </p>
          <Button variant="light" size="lg" href="#signup" className="me-2">
            Get Started
          </Button>
          <Button variant="outline-light" size="lg" href="#learnmore">
            Learn More
          </Button>
        </Container>
      </section>
    )
}

export default Hero;