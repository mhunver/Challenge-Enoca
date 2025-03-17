import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

import { Slide } from "react-slideshow-image";

import slideImages from "../../data/images";

import "react-slideshow-image/dist/styles.css";
import styles from "./Slider.module.css";

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
        <div className="container-home">
            <div className="slideshow-container">
            <div className={styles.container}>
      <Slide easing="ease">
        {slideImages.map((slide, index) => {
          return (
            <div className={styles.slide} key={slide}>
              <div style={{ backgroundImage: `url(${slideImages[index]})` }}>
                <span>Slide {index + 1}</span>
              </div>
            </div>
          );
        })}
      </Slide>
    </div>





</div>



<div className="row">
              <div className="col-md-6">
                <div className="post-entry-1">
                  
                  <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
                  <div className="post-meta">
                    
                    <span className="date-read">Jun 14 <span class="mx-1">•</span> 3 min read <span class="icon-star2"></span></span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="post-entry-2 d-flex bg-light">
                  <div className="thumbnail" ></div>
                  <div className="contents">
                    <h2>News Needs to Meet Its Audiences Where They Are</h2>

                    <div className="post-meta">
                      <span className="d-block"></span>
                      <span className="date-read">Jun 14 <span class="mx-1">•</span> 3 min read <span class="icon-star2"></span></span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            



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