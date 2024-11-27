import React, { useState } from "react";

const ControlledInput = () => {
    const [email, setEmail] = useState("");

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    return (
        <div className="container p-4 mt-4 border rounded bg-light shadow-sm">
            <div className="mb-3">
                <input
                    type="email"
                    value={email}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter your email"
                    style={{ fontSize: "1rem", borderColor: "#d0d7de" }}
                />
            </div>
        </div>
    );
};

export default ControlledInput;
