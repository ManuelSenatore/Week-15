import React from "react";
import { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ArtistPage = () => {
  let headers = new Headers({
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    "X-RapidAPI-Key": "c74a0a086emshf55ffb8dbdcb59ap17a486jsnb83bb4d3e387",
  });

  const [thisArtist, setThisArtist] = useState(null);
  const [titleArtist, setTitleArtist] = useState(null);
  const params = useParams();

  useEffect(() => {
    handleArtist();
    console.log( 'artistfetch', thisArtist);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleArtist = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/artist/" +
          params.artistId,
        {
          method: "GET",
          headers,
        }
      );

      if (response.ok) {
        let artist = await response.json();
        setTitleArtist(artist);

        let tracksResponse = await fetch(
          // await the fetch of the artist songs
          "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
            titleArtist?.name,
            {
              method: "GET",
              headers,
            }
            );
            
            console.log(titleArtist?.name);
        if (tracksResponse.ok) {
          let tracklist = await tracksResponse.json();
          setThisArtist(tracklist);
        }
      } else {
        alert("Failed to fetch the artist songs");
      }
    } catch (error) {
      console.log(error);
    }
    
  };
  return (
    <Container className="myNewContainer">
       {
        titleArtist && (
      <div className="d-flex flex-column mt-5">
        <h2 className="text-center text-light">{titleArtist.name}</h2>
        <p className="text-center text-light">
          {titleArtist.nb_fan} Followers
        </p>
      <div className="d-flex justify-content-center" id="button-container">
        <Button className="btn-success mr-3 mainButton " variant="success" id="playButton">
          PLAY
        </Button>
        <Button
          className=" btn-outline-light mainButton " 
          variant="outline-light"
          id="followButton"
        >
          FOLLOW
        </Button>
      </div>
      </div>
        )
      } 
       {
        thisArtist.data?.map((data, i) => (
          data ?? (
      <div key={i} class="col-sm-auto col-md-auto text-center mb-5">
              <img class="img-fluid" src={
                data?.album.cover_medium // creating the album image anchor
              } alt="1" />
            <p>
                Track: {
                  data?.title.length < 16
                    ? data?.title 
                    : data?.title.substring(0, 16) + '...' // setting the track title, if it's longer than 16 chars cuts the rest
                } <br />
                Album: {
                  data?.album.title.length < 16
                    ? data?.album.title
                    : data?.album.title.substring(0, 16) + '...' // setting the track title, if it's longer than 16 chars cuts the rest
                }
            </p>
      </div>
          )
        ))
      } 
    </Container>
  );
};

export default ArtistPage;
