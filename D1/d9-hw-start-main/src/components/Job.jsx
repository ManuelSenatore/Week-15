import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FcLike} from  "react-icons/fc"
import { FcLikePlaceholder} from  "react-icons/fc"
import { useDispatch, useSelector } from 'react-redux'
import { addToFavAction } from '../redux/actions'
const Job = ({ data }) => {

  const jobsContent = useSelector((state) => state.jobs.content)
  const dispach = useDispatch()
 return(
  <Row
    className="mx-0 mt-3 p-3"
    style={{ border: '1px solid #00000033', borderRadius: 4 }}
  >
    <Col xs={3}>
      <Link to={`/${data.company_name}`}>{data.company_name}</Link>
    </Col>
    <Col xs={8}>
      <a href={data.url} target="_blank" rel="noreferrer">
        {data.title}
      </a>
    </Col>
    <Col xs={1}>
         {jobsContent.some((e) => e._id === data._id) ? (
        <Col xs={2}>
        <FcLike 
        style= {{fontSize: '20px'}} />
        </Col>) : (<Col xs={2}>
          <FcLikePlaceholder style= {{fontSize: '20px', cursor: 'pointer'}}
           onClick={() => {
            dispach(addToFavAction(data))
          }} />
        </Col>
      )}
    </Col>
  </Row>
 )
}

export default Job
