import React from 'react';

const SongList = (props) => (
    <div className="songList">
        {
            props.songs.map(song => {
                return <p to={`${props.url}/song/${song.id}`} key={song.title}>Title: {song.title} - Length: {song.length} - Rating: {song.rating}</p>
            })
        }
    </div>
);

export default SongList;
