import { useContext, useEffect, useState } from "react"
import NewsItems from "./NewsItems";
import ContextData from "../context/ContextData";


const NewsBoard = () => {

  const { category, articles,isLoading } = useContext(ContextData);

  return (
    <>
      {isLoading ? (
        <div>
          <h2 className="text-center text-primary m-5">News are loading...</h2>
        </div>
      ) :
        (<div className="news-board">

          {articles.map((news, index) => {
            return <NewsItems
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          })}
        </div>)
      }
    </>
  );
}

export default NewsBoard