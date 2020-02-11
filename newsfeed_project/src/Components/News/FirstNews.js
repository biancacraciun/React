import React from 'react';
import './News_Style/News.scss';

const FirstNews = props => {
    return (
        <div className="article">
            <a id="title" href={props.info.url} target="_blank">{props.info.title}</a>
            <a id="published" href={props.info.source.url} target="_blank">{props.info.source.name} published at: {props.info.publishedAt}</a>
        </div>
    )
}

export default FirstNews;