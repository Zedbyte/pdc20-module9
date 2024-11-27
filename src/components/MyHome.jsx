import React from "react";

const MyHome = () => {
    return (
        <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100 text-center">
            <div className="mb-3">
                <h1 className="display-4 fw-bold">Welcome to the Home Page</h1>
                <p className="lead text-muted">This is the home page of the simple navigation example</p>
                <button className="btn btn-primary mt-3 px-4 py-2">Get Started</button>
            </div>   
        </div>             
    );  
}

export default MyHome;
