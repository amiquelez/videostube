import React from 'react';
import './Video.scss';

const video = (props) => {
    return (
        <div className="Video">
            <img src={props.img} alt="Video" />
            <h3>{props.title}</h3>
        </div>
    )
}

export default video;