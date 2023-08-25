import "./Birds.css"
import { useState, useEffect } from "react"


export default function(props) {

    const [birds, setBirds] = useState([])

    useEffect(async () => {
        try {
            const response = await fetch("https://ga-audubon-api.herokuapp.com/api/birds")
            const birdsData = await response.json()
            setBirds(birdsData)
            // console.log(birdsData)
        } catch(err) {
            console.log(err)
        }
    }, [])

    const birdsList = birds.map((bird) => {
        return (
            <div className="card">
                <div className="card-image">
                    <img
                        src={bird.image}
                        alt={bird.name}
                    />
                </div>
                <div className="card-title">
                    <h3>{bird.name}</h3>
                </div>
            </div>
        )
    })

    return(
        <section className="container">
            {birdsList}
        </section>
    )
}