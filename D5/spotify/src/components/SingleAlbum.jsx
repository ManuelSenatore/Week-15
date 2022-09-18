import React from "react";
import { Link } from "react-router-dom";

const SingleAlbum = (props) => {
  return (
    <div className="singleCard">
      <Link to={'/album' + props.album.id}>
      <img src={props.album.cover} alt="album cover" />
      </Link>
      <Link to={'/album' + props.album.id}>
      <p>Album: {props.album.title}</p>
      </Link>
      <Link to={'/artist' + props.artist.id}>
      <p>Artist: {props.artist.name}</p>
      </Link>
    </div>
  );
};

export default SingleAlbum;
