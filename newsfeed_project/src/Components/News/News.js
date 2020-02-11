import React, { useEffect, useState } from 'react';
import FirstNews from './FirstNews';
import NewsHeader from './NewsHeader';
import './News_Style/News.scss';

function News () {
    const [myData, setMyData] = useState([]);
 
    useEffect(() => {
        fetch("https://gnews.io/api/v3/top-news?max=15&token=aa5d3ea71048e15775285e9fc694a0c8")
        .then(response => response.json())
        .then(resp => setMyData(resp.articles))
        .catch(err => console.log('Error: ' + err))
    }, [])

    return (
        <div className="top__section">
            <NewsHeader />
            <div className="top__news">
                {myData.map((data, index) => <FirstNews info={data} key={index} />)}
             </div>
        </div>
    )
}

export default News;