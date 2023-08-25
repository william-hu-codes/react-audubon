import "./NewBirdForm.css"

 export default function(props) {
    return (
        <div className="form-container">
            <h2>Add a New Bird</h2>
            <form className="new-form">
                <h4>Name</h4>
                <input type="text" name="name" />
                <h4>Genus </h4>
                <input type="text" name="genus" />
                <h4>Image </h4>
                <input type="text" name="image" />
                <h4>Homepage </h4>
                <input type="text" name="homepage" />
                <h4>Conservation status</h4>
                <textarea name="conservationStatus" cols="30" rows="10"></textarea>
            </form>
        </div>
    )
}