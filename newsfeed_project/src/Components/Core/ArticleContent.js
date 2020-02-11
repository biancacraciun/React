import React from 'react';
import './ArticleContent_Style/ArticleContent.scss'; 

function ArticleContent (props) {
    return (
        <div className="section">
            <p id="title">{props.data.title}</p>
            <img id="presentational" src={props.data.urlToImage} alt={props.data.title} name={props.data.title}></img>
            <p id="description">{props.data.description}</p>
            <a id="link" target="_blank" href={props.data.url}>{props.data.content}</a>
            <p id="published">{props.data.author} published at: {props.data.publishedAt}</p>
        </div>
    ) 
}

export default ArticleContent;