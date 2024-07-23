import { useParams } from "react-router-dom"

function OtherColor() {
  
  const {color} = useParams();
  
  return (
    <>
      <h2>{color}</h2>
    </>
  )
}

export default OtherColor