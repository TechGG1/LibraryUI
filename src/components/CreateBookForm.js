import React, { useState } from 'react';
import axios from 'axios';

const CreateBookForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        genre: '',
        author: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Send the form data to the backend using Axios
        axios.post('/books', formData)
            .then((response) => {
                console.log('Book created successfully:', response.data);
                // Reset the form after successful submission
                setFormData({
                    name: '',
                    genre: '',
                    author: '',
                });
            })
            .catch((error) => {
                console.error('Error creating book:', error);
            });
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h1>Create Book</h1>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="genre">Genre:</label>
                <input
                    type="text"
                    id="genre"
                    name="genre"
                    value={formData.genre}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="author">Author:</label>
                <input
                    type="text"
                    id="author"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Create Book</button>
        </form>
    );
};

export default CreateBookForm;