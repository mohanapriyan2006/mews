
import { useContext } from "react"
import NewsBoard from "./NewsBoard"
import ContextData from "../context/ContextData"


const Home = () => {

  const {fetchError} = useContext(ContextData);

  return (
    <div className="home">
      {fetchError ? (
        <>
        <h3 className="text-center text-danger">Error: {fetchError} !</h3>
        </>
      )
      :
       (<>
        <h2 className="text-center">Latest <span className="badge bg-danger my-4">News</span></h2>
        <NewsBoard/>
      </>)}
    </div>
  )
}

export default Home