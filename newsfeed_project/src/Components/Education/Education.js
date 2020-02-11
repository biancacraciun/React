import React, {useState , useEffect} from 'react';
import ArticleContent from '../Core/ArticleContent';
import '../Core/ArticleContent_Style/ArticleContent.scss';


function Education () {

    const [myData, setMyData] = useState([]);
        
    useEffect(() => {
        fetch("https://newsapi.org/v2/everything?q=education&school&language=en&apiKey=f78429391b694814a39ce2343347f643")
        .then(response => response.json())
        .then(res => setMyData(res.articles));
    }, [])
        
    return(
        <div className="infos">
            {myData.map((data, index) => <ArticleContent data={data} key={index} />)}
        </div>
    )
}

export default Education;