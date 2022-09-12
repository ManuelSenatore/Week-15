
import { Container, Row, Col, Form } from 'react-bootstrap'
import Job from './Job'
import { useDispatch, useSelector} from 'react-redux'
import { getJobsAction, getQueryAction } from '../redux/actions'

const MainSearch = () => {

  const dispatch = useDispatch()
  const jobs = useSelector((state) => state.lists.jobsList)
  const query = useSelector((state) => state.lists.query)
  // const [query, setQuery] = useState('')
  // const [jobs, setJobs] = useState([])



  const handleChange = (e) => {
    dispatch(getQueryAction(e.target.value)) 
    // setQuery(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(getJobsAction())
  }

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default MainSearch
