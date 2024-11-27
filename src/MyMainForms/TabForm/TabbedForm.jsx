import React, {useState} from 'react';
import Tab from './Tab';
import TabContent from './TabContent';
import './TabbedForm.css';

const TabbedForm = () => {
    const [activeTab, setActiveTab] = useState('basic');
    const [formData, setFormData] = useState({
        name:'',
        age:'',
        email:'',
        phone:'',
        username:'',
        password:'',
    });

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const handleChange = (field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Submitted Data ${JSON.stringify(formData, null, 2)}`);
    };

    // Check if all required fields are filled
    const isFormValid = Object.values(formData).every(value => value.trim() !== '');
    
    return (
        <div className='tab-container'>
            <h1>Tabbed form with Shared State</h1>
            <div className="navbar-container">
    <Tab
        name="Basic Information"
        isActive={activeTab === "basic"}
        onClick={() => handleTabChange("basic")}
        className={`navbar-tab ${activeTab === "basic" ? "active" : ""}`}
    />
    <Tab
        name="Contact Information"
        isActive={activeTab === "contact"}
        onClick={() => handleTabChange("contact")}
        className={`navbar-tab ${activeTab === "contact" ? "active" : ""}`}
    />
    <Tab
        name="Account Information"
        isActive={activeTab === "account"}
        onClick={() => handleTabChange("account")}
        className={`navbar-tab ${activeTab === "account" ? "active" : ""}`}
    />
</div>


            <form onSubmit={handleSubmit}>
                <TabContent 
                activeTab={activeTab}
                formData={formData}
                onChange={handleChange}/>

                <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={!isFormValid} // Disable the button if any field is empty
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default TabbedForm;