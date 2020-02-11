import React, {useEffect, useState} from 'react';
import '../Core/ArticleContent_Style/ArticleContent.scss';
import ArticleContent from '../Core/ArticleContent';

function Sport () {
    const [myData, setMyData] = useState([]);

    useEffect(() => {
        fetch("https://newsapi.org/v2/everything?q=sport&language=en&apiKey=f78429391b694814a39ce2343347f643")
        .then(response => response.json())
        .then(res => setMyData(res.articles))
    }, []);

    return (
        <div className="infos">
            {myData.map((data, index) => <ArticleContent data={data} key={index} />)}
        </div>
    )
}

export default Sport;