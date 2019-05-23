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
        <Route path="/artists/:id" render={({ match }) => {
            if (props.artists.find(artist => Number(match.params.id) === artist.id)) {
                return <AlbumList {...match} albums={props.artists.find(artist => Number(match.params.id) === artist.id).albums} />
            } else {
                return null;
            }
        }
        } />
    </div>
);

export default ArtistList;
