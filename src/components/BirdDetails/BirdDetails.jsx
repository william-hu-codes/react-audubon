import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function(props) {

    const [bird, setBird] = useState(null)
    const { id } = useParams()

    useEffect(async () => {
        const response = await fetch(`https://ga-audubon-api.herokuapp.com/api/birds/${id}`)
        const birdData = await response.json()
        setBird(birdData)
    }, [])

    if (!bird) {
        return <h3>Loading bird information...</h3>
    }

    return(
        <div className="details-container">
            <img
            src={bird.image}
            alt={bird.name}
            />
        <div className="details">
          <h2>{bird.name}</h2>
          <h3>({bird.genus})</h3>
          <h4>Conservation Status</h4>
          <p>
            {bird.conservationStatus}
          </p>
          <a
            href={bird.homepage}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More
          </a>
        </div>
      </div>
    )
    
}