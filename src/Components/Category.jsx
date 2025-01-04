import { useContext } from "react"
import NewsBoard from "./NewsBoard"
import ContextData from "../context/ContextData"


const Category = () => {

    const {category} = useContext(ContextData);

  return (
    <div className="category">
        <h2 className="text-center"><span className="badge bg-primary my-4 mx-2">{category}</span>News</h2>
        
        <NewsBoard category={category}/>
    </div>
  )
}

export default Category