import { useEffect, } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Job from './Job'
import { useDispatch, useSelector} from 'react-redux'
import { getCompanyJobsAction, getQueryParams } from '../redux/actions'
import { useParams } from 'react-router-dom'

const CompanySearchResults = () => {
  // const [jobs, setJobs] = useState([])

  const dispatch = useDispatch()
  const jobs = useSelector((state) => state.lists.jobsCompany)

  const params2 = useParams()

  useEffect(() => {
   dispatch(getQueryParams(params2.companyName)) 
   dispatch(getCompanyJobsAction())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <Container>
      <Row>
        <Col>
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default CompanySearchResults
