import "./NewBirdForm.css"
import { useState } from "react"

 export default function({ birds, addBird }) {
    const [formData, setFormData] = useState({})
    // const navigate = useNavigate()

    function handleChange(evt) {
        const newFormData = {...formData, [evt.target.name]:evt.target.value}
        setFormData(newFormData)
    }

    function handleFormSubmission(evt) {
        evt.preventDefault()
        console.log("submitting form")
        formData._id = (Date.now() % 1000000).toString()
        // console.log(formData._id)
        addBird(formData)
        setFormData({})
    }
    console.log("form data: ", formData)
    // console.log("form data: ", formData)
    return (
        <div className="form-container">
            <h2>Add a New Bird</h2>
            <form className="new-form" onSubmit={handleFormSubmission}>
                <h4>Name</h4>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
                <h4>Genus </h4>
                <input type="text" name="genus" value={formData.genus} onChange={handleChange} />
                <h4>Image </h4>
                <input type="text" name="image" value={formData.image} onChange={handleChange} />
                <h4>Homepage </h4>
                <input type="text" name="homepage" value={formData.homepage} onChange={handleChange} />
                <h4>Conservation status</h4>
                <textarea name="conservationStatus" cols="30" rows="10" value={formData.conservationStatus} onChange={handleChange} ></textarea>
                <button type="submit">Add Bird</button>
            </form>
        </div>
    )
}