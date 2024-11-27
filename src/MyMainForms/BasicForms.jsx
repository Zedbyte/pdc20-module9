import React, { useState } from "react";

const BasicForm = () => {
    const [name, setName] = useState("");

    const handleChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Submitted Name: ${name}`);
    };

    return (
        <form onSubmit={handleSubmit} className="container p-4 mt-4 border rounded bg-light shadow-sm">
            <div className="mb-3">
                <label htmlFor="name" className="form-label" style={{ fontWeight: "500" }}>
                    Name:
                </label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter your name"
                    style={{ fontSize: "1rem", borderColor: "#d0d7de" }}
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
            {name && (
                <p className="mt-3 text-muted">
                    Your name is: <strong>{name}</strong>
                </p>
            )}
        </form>
    );
};

export default BasicForm;
