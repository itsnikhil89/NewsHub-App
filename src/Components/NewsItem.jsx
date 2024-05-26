
import image from '../assets/defaultImage.jpg'
const NewsItem = ({title,description,src,url}) => {
  return (
    <div className="card bg-success text-light mb-2 d-inline-block my-3 mx-3" style={{maxWidth:"350px"}}>
  <img src={src? src:image} style={{height:"200px" }} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description? description.slice(0,70):"Stay informed with the latest developments on this breaking story. Read more for key updates and detailed analysis."}</p>
    <a href={url} className="btn btn-outline-light">Read More</a>
  </div>
</div>
  )
}

export default NewsItem