import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import SongList from './SongList.js';

const AlbumList = (props) => (
    <div className="albumList">
        {
            props.albums.map(album => {
                return <NavLink to={`${props.url}/album/${album.id}`} key={album.title}>{album.title}</NavLink>
            })
        }
        <Route path={`${props.path}/album/:id`} render={({ match }) => {
            if (props.albums.find(album => Number(match.params.id) === album.id)) {
                return <SongList {...match} songs={props.albums.find(album => Number(match.params.id) === album.id).songs} />
            } else {
                return null;
            }
        }
        } />
    </div>
);

export default AlbumList;
