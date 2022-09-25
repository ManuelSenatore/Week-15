import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import StartingLoad from "./StartingLoad";

const IndexPage = () => {
  let rockArtists = [
    "queen",
    "u2",
    "thepolice",
    "eagles",
    "thedoors",
    "oasis",
    "thewho",
    "bonjovi",
  ];

  let popArtists = [
    "maroon5",
    "coldplay",
    "onerepublic",
    "jamesblunt",
    "katyperry",
    "arianagrande",
  ];

  let hipHopArtists = ["eminem", "snoopdogg", "lilwayne", "drake", "kanyewest"];

  const artContenent = useSelector((state) => state.art.artists);
  const navigate = useNavigate();

  const [hipHopRandomArtists, setHipHopRandomArtists] = useState([]);
  const [popRandomArtists, setPopRandomArtists] = useState([]);
  const [rockRandomArtists, setRockRandomArtists] = useState([]);

  const randomLoad = () => {
    while (rockRandomArtists.length < 4) {
      let artist = rockArtists[Math.floor(Math.random() * rockArtists.length)];
      if (!rockRandomArtists.includes(artist)) {
        let copy = rockRandomArtists;
        rockRandomArtists.push(artist);
        setRockRandomArtists(copy);
      }
    }

    while (popRandomArtists.length < 4) {
      let artist = popArtists[Math.floor(Math.random() * popArtists.length)];
      if (!popRandomArtists.includes(artist)) {
        let copy = popRandomArtists;
        popRandomArtists.push(artist);
        setPopRandomArtists(copy);
      }
    }

    while (hipHopRandomArtists.length < 4) {
      let artist =
        hipHopArtists[Math.floor(Math.random() * hipHopArtists.length)];
      if (!hipHopRandomArtists.includes(artist)) {
        let copy = hipHopRandomArtists;
        hipHopRandomArtists.push(artist);
        setHipHopRandomArtists(copy);
      }
    }
  };

  useEffect(() => {
    randomLoad();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="body">
        <Container className="container-fluid">
          <Row className="myContainer">
            <div className="col-9 col-lg-11 mainLinks d-none d-md-flex text-light">
              <p>TRENDING</p>
              <p>PODCAST</p>
              <p>MOODS AND GENRES</p>
              <p>NEW RELEASES</p>
              <p>DISCOVER</p>
            </div>
          </Row>
          {artContenent.length !== 0 && (
            <Container className="myContainer">
              <h2 className="text-light">Search Results</h2>
              <div className="searchResults">
                {artContenent.map((data, i) => (
                  <div className="albumCard">
                    <div className="singleCard searcCard">
                      <img
                        style={{cursor: 'pointer'}}
                        onClick={() => navigate("/album" + data.album.id)}
                        src={data.album.cover}
                        alt="album cover"
                      />
                      <p 
                        style={{cursor: 'pointer'}}
                        onClick={() => navigate("/album" + data.album.id)}>
                        Album: {data.album.title}
                      </p>
                      <p
                        style={{cursor: 'pointer'}} 
                        onClick={() => navigate("/artist" + data.artist.id)}>
                        Artist: {data.artist.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          )}
          <Container className="myContainer mb-5">
            <h2 className="text-light">Rock Classics</h2>
            <StartingLoad arr={rockRandomArtists} />
            <h2 className="text-light">Pop Culture</h2>
            <StartingLoad arr={popRandomArtists} />
            <h2 className="text-light">#HipHop</h2>
            <StartingLoad arr={hipHopRandomArtists} />
          </Container>
        </Container>
      </div>
    </>
  );
};
export default IndexPage;
