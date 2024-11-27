import React from 'react';
import BasicForm from './BasicForms';
import ControlledInput from './ControlledInput';
import { Route, Routes, Link } from 'react-router-dom';
import './MyMainForms.css';
import UncontrolledInput from './UncontrolledInput';
import TabbedForm from './TabForm/TabbedForm';
import MyData from './MyData';

const MyMainForms = () => {
    return (
        <div className="main-container">
            {/* <h1 className="main-title">React Forms App</h1> */}
            
            <nav className="side-nav">
                <ul className="nav-list">
                    <li><Link to="basic-form" className="nav-link" >Basic Form</Link></li>
                    <li><Link to="controlled-input" className="nav-link" >Controlled Input</Link></li>
                    <li><Link to="uncontrolled-input" className="nav-link" >Uncontrolled Input</Link></li>
                    <li><Link to="tabbed-form" className="nav-link" >Tabbed Form</Link></li>
                    <li><Link to="my-data" className="nav-link" >My Data</Link></li>
                </ul>
            </nav>

            <div className="content-area">
                <Routes>
                    <Route path="basic-form" element={<BasicForm />} />
                    <Route path="controlled-input" element={<ControlledInput />} />
                    <Route path="uncontrolled-input" element={<UncontrolledInput />} />
                    <Route path="tabbed-form" element={<TabbedForm />} />
                    <Route path="my-data" element={<MyData />} />
                </Routes>
            </div>
        </div>
    );
};

export default MyMainForms;
