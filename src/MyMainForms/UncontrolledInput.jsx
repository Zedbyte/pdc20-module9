import React, { useRef } from "react";

const UncontrolledInput = () => {
    const phoneRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Phone Number: ${phoneRef.current.value}`);
    };

    return (
        <form onSubmit={handleSubmit} className="container p-4 mt-4 border rounded bg-light shadow-sm">
            <div className="mb-3">
                <input
                    type="text"
                    ref={phoneRef}
                    className="form-control"
                    placeholder="Enter your phone number"
                    style={{ fontSize: "1rem", borderColor: "#d0d7de" }}
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    );
};

export default UncontrolledInput;
