import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { singleNotice } from "../types/notice";
import { Card} from "react-bootstrap"

const NoticeDetails = () => {
  const [details, setDetails] = useState<singleNotice | null>(null);
  const params = useParams();

  useEffect(() => {
    fetchNoticeDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchNoticeDetails = async () => {
    try {
      const response = await fetch(
        `https://api.spaceflightnewsapi.net/v3/articles/ ${params.noticeId}`
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setDetails(data);
      } else {
        console.log("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const myTime = (string: string): string => {
    let date = new Date(string);
    return date.toLocaleDateString('en-US', {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    })
}

  return (
    <div className="home-detail">
    {
        details && ( 
       <Card className="card-detail text-center" style={{ width: "80%" }}>
         <Card.Img className="img-fluid" variant="top" src={details.imageUrl} />
         <Card.Body>
           <Card.Title>{details.title}</Card.Title>
           <Card.Text>
             {details.summary}
           </Card.Text>
           <Card.Text>{myTime(details.publishedAt)}</Card.Text>
           <Card.Text>{details.newsSite}</Card.Text>
         </Card.Body>
         <Card.Body>
           <Card.Link className="text-decoration-none" href={details.url} target='blank'>Link to Notice</Card.Link>
         </Card.Body>
       </Card>
        )}
    </div>
  );
};

export default NoticeDetails;
