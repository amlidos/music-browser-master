import React from 'react';
import './ArtistList.css';
import AlbumList from './AlbumList';
import { Route, NavLink } from 'react-router-dom';

const ArtistList = (props) => (
    <div className="artistList">
        {props.artists.map(artist => {
            return (
            <div key={artist.id}>
                <NavLink to={`${props.match.path}/${artist.id}`} >{artist.name}&nbsp;</NavLink>
            </div>
            )
        })}
        <Route path="/artists/:id" render={({match}) => <AlbumList {...props} artist={props.artists.find(thisArtist => Number(match.params.id) === thisArtist.id)} />}/>
    </div>
);

export default ArtistList;
