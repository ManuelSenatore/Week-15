import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { FcCancel } from "react-icons/fc"
import { removeFromFavAction } from '../redux/actions'

const Favourites = () => {
    const jobsContent = useSelector((state) => state.jobs.content)
    const dispatch = useDispatch()
    return (
        <Container>
        {jobsContent.map((data, i) => (
            <Row key={i} className="mx-0 mt-3 p-3"
            style={{ border: '1px solid #00000033', borderRadius: 4 }}>
            <Col xs={3}>
            <Link to={`/${data.company_name}`}>{data.company_name}</Link>
            </Col>
            <Col xs={8}>
            <a href={data.url} target="_blank" rel="noreferrer">
            {data.title}
            </a>
            </Col>
            <Col xs={1}>
            <FcCancel
            style= {{fontSize: '20px', cursor: 'pointer'}}
            className='icon'
            variant="danger"
            onClick={() => {
                dispatch(removeFromFavAction(i))
            }}
            >
            </FcCancel>
            </Col>
            </Row>
            ))
        }
        </Container>
    )
}

export default Favourites
