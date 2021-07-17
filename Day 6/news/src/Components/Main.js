// 179dd9e233aa4aea8beb2c492ebab310
import React, { useState, useEffect } from 'react';

const Main = () => {

    const [articles, setArticles] = useState([])
    const [search, setSearch] = useState("Microsoft")

    function readValue(value){
        setSearch(value);
    }
    
    function searchNews(){
        let url = `https://newsapi.org/v2/everything?q=${search}&apiKey=179dd9e233aa4aea8beb2c492ebab310`

        fetch(url)
        .then((response)=>response.json())
        .then((news)=>{
            setArticles(news.articles)
        })
    }

    useEffect(()=>{

        let url = "https://newsapi.org/v2/everything?q=microsoft&apiKey=179dd9e233aa4aea8beb2c492ebab310"

        fetch(url)
        .then((response)=>response.json())
        .then((news)=>{
            setArticles(news.articles)
        })

    }, [])

    // If we want to update the results as and when the user types in the search box, we use UseState as follows instead of searchNews function
    // useEffect(()=>{

    //     let url = `https://newsapi.org/v2/everything?q=${search}&apiKey=179dd9e233aa4aea8beb2c492ebab310`

    //     fetch(url)
    //     .then((response)=>response.json())
    //     .then((news)=>{
    //         setArticles(news.articles)
    //     })

    // }, [search])


    return(
        <div className="container">

            <h1>React News App</h1>
            
            <div className="filter">
                <input type="text" placeholder="Enter a Topic to Search" onChange={(event)=>{readValue(event.target.value)}} />
                <button className="button" onClick={searchNews}>Search</button>
            </div>

            {
                articles.length === 0 ? <img src="http://www.sudburycatholicschools.ca/wp-content/plugins/3d-flip-book/assets/images/dark-loader.gif" /> : 
 
                articles.map((article, index)=>(
                    <div key={index} className="article">
                        <div className="news-img">
                            <img src={article.urlToImage} />
                        </div>
                        <div className="news-detail">
                            <h2>{article.title}</h2>
                            <h4>{article.author}</h4>
                            <p>{article.description}</p>
                            <a href={article.url} target="blank">
                                <button className="button">Read Full Article</button>
                            </a>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Main;