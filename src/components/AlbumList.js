import React from 'react';
import { NavLink } from 'react-router-dom';
// import './ArtistList.css';

const AlbumList = (props) => (
    <div className="albumList">
        {
            props.artist ? 
            props.artist.albums.map(album => {
                return <NavLink to={`${props.match.path}/${album.id}`} key={album.title}>{album.title}</NavLink>
            }) : null
        }
    </div>
);

export default AlbumList;
