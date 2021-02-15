import React from 'react';
import Title from './Title';

const FilmTitles = ({titles}) => {

    const titlesNodes = titles.map((title) => {
        return(
            <Title name={title.name} key={title.id}>{title.url}</Title>
        )
    })


    return(
        <div className="film-titles">
            {titlesNodes}
            <hr></hr>
            <a className='more-info' href="https://www.imdb.com/calendar/?region=gb" target="_blank">View more upcoming releases</a>
        </div>
    )
    }

export default FilmTitles;