import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

function Home(){

    const { categoryName } = useParams();
    const [news, setNews] = useState([]);
  
    useEffect(() => {
      const fetchCategoryNews = async () => {
        try {
          const response = await axios.get(
            `https://newsapi.org/v2/top-headlines?country=tr&category=${categoryName}&apiKey=76f017549224f488970f1835f9db971`
          );
          setNews(response.data.articles);
        } catch (error) {
          console.error("Error fetching category news:", error);
        }
      };
      fetchCategoryNews();
    }, [categoryName]);
    return(
        <div>
            <h2 className="my-4">{categoryName} News</h2>
            aloo
            <div className="row">
            {news.map((article, index) => (
            <div key={index} className="col-md-4 mb-4">
            <div className="card">

              <img src={article.urlToImage} className="card-img-top" alt={article.title} />
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.description}</p>
                <a href={article.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Read More</a>
              </div>
                </div>
            </div>
            ))}
            </div>
            
        </div>
    )

}

export default Home; 