import "./NewBirdForm.css"
import { useState } from "react"

 export default function(props) {
    const [formData, setFormData] = useState({})
    function handleChange(evt) {
        const newFormData = {...formData, [evt.target.name]:evt.target.value}
        setFormData(newFormData)
    }

    function handleFormSubmission(evt) {
        console.log("submitting form")
    }
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