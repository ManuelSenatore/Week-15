import { singleNotice } from "../types/notice"
import { Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

interface MySingleNoticeProps {
    item: singleNotice
}

const MySingleNotice = ({item}: MySingleNoticeProps ) => {
  return (
    <Card className="myCard">
      <Card.Img className="img-fluid" variant="top" src={item.imageUrl}/>
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          {item.summary}
        </Card.Text>
        <Link to={'/details' + item.id}>
        <Button variant="dark">Go To Details</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default MySingleNotice
