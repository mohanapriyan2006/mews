import news from '../assets/news.jpg';

const NewsItems = ({title,description,src,url}) => {
  return (
   
      <div className=" card card-color text-light mb-3 d-inline-block my-3 mx-3 px-2 py-3" style={{maxWidth: "300px"}}>
        <img src={src? src: news} style={{height:"200px" , width: '270px'}} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0,50)}</h5>
          <p className="card-text">{description?description.slice(0,90):"‘Fartleks’ are an effective way to add intensity to activities, which a growing body of science indicates can make your workouts more beneficial."}</p>
          <a href={url} className="btn btn-primary">Read more</a>
        </div>
      </div>
    
  )
}

export default NewsItems