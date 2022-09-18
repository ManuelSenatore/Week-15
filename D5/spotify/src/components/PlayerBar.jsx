import React from 'react'
import { Container,Row, Col } from 'react-bootstrap'

const PlayerBar = () => {
  return (
    <Row>
    <Container className="container-fluid fixed-bottom bg-container pt-1">
    <Row className="row">
        <Col className="col-lg-10 offset-lg-2">
            <Row className="justify-content-flex-start">
                <div
                    className="col-6 col-md-4 col-lg-2 offset-3 offset-md-4 offset-lg-5 playerControls mt-1"
                >
                    <div className='playFlex'>
                        <a href="#1">
                            <img src="playerbuttons/Shuffle.png" alt="shuffle" />
                        </a>
                        <a href="#1">
                            <img src="playerbuttons/Previous.png" alt="shuffle" />
                        </a>
                        <a href="#1">
                            <img src="playerbuttons/Play.png" alt="shuffle" />
                        </a>
                        <a href="#1">
                            <img src="playerbuttons/Next.png" alt="shuffle" />
                        </a>
                        <a href="#1">
                            <img src="playerbuttons/Repeat.png" alt="shuffle" />
                        </a>
                    </div>
                </div>
            </Row>
            <Row className=" justify-content-center playBar py-3">
                <Col className="col-8 col-md-6">
                    <div className="progress">
                        <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow="0"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        ></div>
                    </div>
                </Col>
            </Row>
        </Col>
    </Row>
</Container>
</Row>
  )
}

export default PlayerBar
