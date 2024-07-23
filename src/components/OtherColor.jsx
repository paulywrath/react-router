import { useParams, useNavigate } from "react-router-dom"

function OtherColor() {
  
  const {color} = useParams();
  
  const navigate = useNavigate();

  const backToHome = () => {
    navigate('/')
  }

  return (
    <>
      <button onClick={backToHome}>Back to Home</button>
      <h2>{color}</h2>
    </>
  )
}

export default OtherColor