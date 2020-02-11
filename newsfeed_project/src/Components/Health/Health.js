
import React,{useEffect, useState} from 'react';
import ArticleContent from '../Core/ArticleContent';
import '../Core/ArticleContent_Style/ArticleContent.scss';

function Health () {
    const [myData, setMyData] = useState([]);

    useEffect(() => {
        fetch("https://newsapi.org/v2/everything?q=health&language=en&apiKey=f78429391b694814a39ce2343347f643")
        .then(response => response.json())
        .then(res => {
            setMyData(res.articles);
        });
    }, []);

    return (
        <>
            <div className="infos">
                {myData.map((data, index) => <ArticleContent data={data} key={index} />)}
            </div>
        </>
    )
}

export default Health;