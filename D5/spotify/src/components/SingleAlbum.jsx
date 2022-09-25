import React from "react";
import { useNavigate } from "react-router-dom";

const SingleAlbum = (props) => {
  const navigate = useNavigate()
  return (
    <div className="singleCard">
      <img
       style={{cursor: 'pointer'}}
       onClick={() => navigate('/album' + props.album.id) }
       src={props.album.cover} alt="album cover" />
      <p
       style={{cursor: 'pointer'}}
       onClick={() => navigate('/album' + props.album.id) }
      >Album: {props.album.title}</p>
      <p
       style={{cursor: 'pointer'}}
       onClick={() => navigate('/artist' + props.artist.id) }
      >Artist: {props.artist.name}</p>
    </div>
  );
};

export default SingleAlbum;
