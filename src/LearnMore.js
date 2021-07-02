import React, { useState,useEffect,useRef } from 'react';
import { CircularProgress } from '@material-ui/core';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function LearnMore({match}) {
    const hitUrl=`http://hn.algolia.com/api/v1/items/${match.params.hitId}`;
    const [newsData,setNewsData]=useState();
    const [loadingData,setLoadingData]=useState(true);
    const [errorFound,setErrorFound]=useState({err:false,errText:"No error"});

    useEffect(()=>{
        setLoadingData(true);
        fetch(hitUrl)
        .then(response=>response.ok && response.json())
        .then(data=>{
            setNewsData(data);
            console.log('Got data from server:',data);
            setLoadingData(false);
        })
        .catch(err=>console.log(err))
    },[])

    if (loadingData) return <div style={{display: "flex",justifyContent: "center",alignItems: "center",width:"100%",height:"100vh"}}><CircularProgress /></div>
    if (errorFound.err){
      return (
        <div style={{display: "flex",justifyContent: "center",alignItems: "center",width:"100%",height:"100vh"}}>
          <p>Something went wrong. {errorFound.errText} </p>
          <p> Click <a href="/">here</a> to go back to the main page.</p>
        </div>
      )
    }


    return (
        <div className="container">
            <div className="news-container">
                <div className="title">
                    <a href={newsData.url} className="title-text">
                        {newsData.title}  
                    </a>
                    <a href={newsData.url} className="title-url">
                        ({newsData.url})
                    </a>
                </div>
                <div className="under">
                    <a href={newsData.url}>
                        {newsData.points} {newsData.points > 1 ? "points" : "point"} 
                    </a>
                    <p> by </p>
                    <a href={newsData.url}>
                        {newsData.author}
                    </a>
                    <p>|</p>
                    <a href={newsData.url}>
                        {(new Date(newsData.created_at)).toLocaleString()}
                    </a>
                    <p>|</p>
                    <a href={newsData.url}>
                        {newsData.num_comments} {newsData.num_comments > 1 ? "comments" : "comment"}
                    </a>
                </div>
            
            </div>
            <div style={{marginTop:20}}>
            {newsData.children.map(item=>
            {   let margin=0;
                return (
                /* console.log(item); */
                    <Comment 
                    key={item.id}
                    margin={margin}
                    author={item.author}
                    created_at={item.created_at}
                    text={item.text}
                    children={item.children}
                    />
            )})
                 
            }
            
            </div>
        </div>
    )
}


function Comment(props) {
    const hasChildren=props.children && props.children.length;
    return (
            <div className="commentDiv" style={{marginLeft:props.margin}}>
                <div className="under">
                <a href="/">{props.author}</a>
                <a href="/">{props.created_at}</a>
                </div>
                
                {/* DANGER :) */}
                <div className="comments" dangerouslySetInnerHTML={{__html: props.text}}></div>

                {hasChildren ? props.children.map(item=>(
                    <Comment 
                    key={item.id}
                    margin={props.margin+10}
                    author={item.author}
                    created_at={item.created_at}
                    text={item.text}
                    children={item.children}
                    />
                )):""}
            </div>
    )
}