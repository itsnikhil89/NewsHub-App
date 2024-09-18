import { useEffect } from "react"
import { useState } from "react"
import NewsItem from "./NewsItem"


const NewsBoard = ({category}) => {

    const[articles,setArticles]=useState([])

    useEffect(()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`

        fetch(url).then(response=>response.json()).then(data=> setArticles(data.articles))
    },[category])
  return (
    <>
        <h2 className="text-center my-3 tex  font-weight-bolder">Latest <span className="badge bg-success">News</span>
        </h2>
        {/* {mapping for getting news individually from articles array that we fetch from api} */}
        {articles.map((news,index)=>{
            return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
        })}
    </>
  )
}

export default NewsBoard