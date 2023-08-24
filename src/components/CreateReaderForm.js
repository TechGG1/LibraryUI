import React, { useState } from "react";
import axios from "axios";

const CreateReaderForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        dateOfBirth: "",
        address: "",
        email: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send data to the backend using Axios (replace 'API_ENDPOINT' with your backend API URL)
            const response = await axios.post("API_ENDPOINT", formData);
            console.log(response.data); // Handle the response as needed
            // Reset the form after successful submission
            setFormData({
                name: "",
                surname: "",
                dateOfBirth: "",
                address: "",
                email: "",
            });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h1>Create Reader</h1>
            <div className="form-group">
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
            <div className="form-group">
                <label htmlFor="surname">Surname:</label>
                <input
                    type="text"
                    id="surname"
                    name="surname"
                    value={formData.surname}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="dateOfBirth">Date of Birth:</label>
                <input
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="address">Address:</label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default CreateReaderForm;
