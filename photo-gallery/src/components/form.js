import React, { useState } from 'react';

function Form({ images, setImages }) {
    const [imageFile, setImageFile] = useState(null);
    const [caption, setCaption] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const value = caption;
        const newImage = {
            caption: value,
            id: images.length + 1,
            image: imageFile ? URL.createObjectURL(imageFile) : null
        };
        setImages((prevImages) => [
            ...prevImages,
            newImage
        ]);

        const updatedImages = JSON.stringify([...images, newImage]);
        localStorage.setItem("images", updatedImages);
        event.target.reset();
        setImageFile(null);
        setCaption('');
    };

    const handleImageChange = (event) => {
        setImageFile(event.target.files[0]);
    };

    const handleCaptionChange = (event) => {
        setCaption(event.target.value);
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="input-container">
                <label htmlFor="image">Choose Image</label>
                <input type="file" name="image" onChange={handleImageChange} />
                <div className="img-thumbs img-thumbs-hidden" id="img-preview"></div>
                <input
                    type="text"
                    placeholder="Enter caption..."
                    id="caption"
                    name="caption"
                    value={caption}
                    onChange={handleCaptionChange}
                />
            </div>
            <button type="submit">Upload</button>
        </form>
    );
}

export default Form;
