import React from "react";

const MyProfile = () => {
    return (
        <div className="container-fluid min-vh-100">
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
                <a className="navbar-brand" href="#">Profile Page</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Settings</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Logout</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="row">
                {/* Sidebar for profile info */}
                <div className="col-md-3 bg-light sidebar p-4">
                    <div className="text-center mb-4">
                        <img 
                            src="https://picsum.photos/300/200?random=4" 
                            alt="Profile" 
                            className="rounded-circle mb-3 img-fluid"
                        />
                        <h2 className="fw-semibold">Mark Jerome Santos</h2>
                        <p className="text-muted mb-1">santos.markjerome@auf.com</p>
                        <p className="text-muted">Location: Angeles City, Philippines</p>
                        <p className="text-muted">Bio: Passionate about technology, finance, and sustainable living.</p>
                    </div>
                    <h3 className="fw-semibold">Contact Information</h3>
                    <p className="text-muted">Phone: +63 912 345 6789</p>
                    <p className="text-muted">LinkedIn: <a href="#" className="text-primary">linkedin.com/in/markjeromesantos</a></p>
                    <p className="text-muted">Twitter: <a href="#" className="text-info">@markjeromesantos</a></p>
                    <button className="btn btn-primary mt-4">Edit Profile</button>
                </div>

                {/* Main content area */}
                <div className="col-md-9">
                    <div className="mb-4">
                        <h1 className="display-4 fw-bold">Projects</h1>
                        <p className="lead text-muted">Here are some of my recent projects.</p>
                    </div>
                    
                    <div className="row">
                        {/* Project Card 1 */}
                        <div className="col-md-4 mb-4">
                            <div className="card">
                                <img src="https://picsum.photos/300/200?random=1" className="card-img-top" alt="Project 1" />
                                <div className="card-body text-light">
                                    <h5 className="card-title">Project Title 1</h5>
                                    <p className="card-text">A brief description of what this project is about.</p>
                                    <a href="#" className="btn btn-primary">View Project</a>
                                </div>
                            </div>
                        </div>

                        {/* Project Card 2 */}
                        <div className="col-md-4 mb-4">
                            <div className="card">
                                <img src="https://picsum.photos/300/200?random=2" className="card-img-top" alt="Project 2" />
                                <div className="card-body text-light">
                                    <h5 className="card-title">Project Title 2</h5>
                                    <p className="card-text">A brief description of what this project is about.</p>
                                    <a href="#" className="btn btn-primary">View Project</a>
                                </div>
                            </div>
                        </div>

                        {/* Project Card 3 */}
                        <div className="col-md-4 mb-4">
                            <div className="card">
                                <img src="https://picsum.photos/300/200?random=3" className="card-img-top" alt="Project 3" />
                                <div className="card-body text-light">
                                    <h5 className="card-title">Project Title 3</h5>
                                    <p className="card-text">A brief description of what this project is about.</p>
                                    <a href="#" className="btn btn-primary">View Project</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="mt-5 text-center">
                <p className="text-muted">© 2024 Mark Jerome Santos. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default MyProfile;
