import React from 'react';

export default function NewsLine(props) {
    const urlToArticle="/learnmore/"+props.objectID;

    function difference(date1) {
        let date2 = new Date();
        const date1utc = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
        const date2utc = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
        const day = 1000*60*60*24;
        let diffInDays = (date2utc - date1utc)/day;
        return diffInDays < 30 ? `${diffInDays} days ago` : diffInDays < 365 ? `${Math.round(diffInDays/30)} months ago` :  `${Math.round(diffInDays/365)} years ago`
      }

    return (
        <div className="news-container">
            <div className="title">
                <a href={urlToArticle} className="title-text">
                    {props.title}  
                </a>
                <a href={props.newsUrl} className="title-url">
                    ({props.newsUrl})
                </a>
            </div>
            <div className="under">
                <a href={urlToArticle}>
                    {props.points} {props.points > 1 ? "points" : "point"} 
                </a>
                <p>|</p>
                <a href={urlToArticle}>
                    {props.author}
                </a>
                <p>|</p>
                <a href={urlToArticle}>
                    {difference(new Date(props.created_at))}
                </a>
                <p>|</p>
                <a href={urlToArticle}>
                    {props.num_comments} {props.num_comments > 1 ? "comments" : "comment"}
                </a>
            </div>
        
        </div>
        
    )
}