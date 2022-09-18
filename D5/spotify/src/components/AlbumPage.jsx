import React from "react";
import { useState, useEffect } from "react";
import { Container, } from "react-bootstrap";
import { useParams } from "react-router-dom";

const AlbumPage = (props) => {
  let headers = new Headers({
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    "X-RapidAPI-Key": "c74a0a086emshf55ffb8dbdcb59ap17a486jsnb83bb4d3e387",
  });

  const [thisAlbum, setThisAlbum] = useState(null);
  const params = useParams();

  useEffect(() => {
    console.log("params", params);
    console.log("params", props);
    handleAlbum();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAlbum = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/album/" +
          params.albumId,
        {
          method: "GET",
          headers,
        }
      );
      if (response.ok) {
        let album = await response.json(); // transforms the response into a JSON
        setThisAlbum(album);
      } else {
        console.log("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
    console.log("fetch", thisAlbum.tracks.data);
  };
  return (
    <Container className="myNewContainer">
      <div className="singleCard mt-5 ">
        <img src={thisAlbum?.cover} alt="album cover" />
        <p className="album-title mt-2">Album: {thisAlbum?.title}</p>
        <p className="artist-name">Artist: {thisAlbum?.artist.name}</p>
      </div>
    <div className="divFlex mt-5">
        {thisAlbum?.tracks.data.map((track, i) => (
          <div key={i} className="py-3 trackHover">
            <a href="#" className="card-title trackHover px-3 text-light" >
              {track.title}
            </a>
            <small className="duration text-light">
              {Math.floor(
                parseInt(track?.duration) / 60 // setting the duration minutes
              )}
              :
              {parseInt(track?.duration) % 60 < 10
                ? "0" + (parseInt(track?.duration) % 60) // checking che duration seconds, if they are less than 10 a 0 is prefixed
                : parseInt(track?.duration) % 60}
            </small>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default AlbumPage;
