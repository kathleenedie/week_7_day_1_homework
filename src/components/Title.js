import React from 'react';

const Title = ({name, children}) => {
    return(
        <ul className="title">
            <li><a href={children} target="_blank">{name}</a></li>
        </ul>
    )
}

export default Title;