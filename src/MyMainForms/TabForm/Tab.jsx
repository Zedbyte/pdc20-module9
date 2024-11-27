import React from 'react';

const Tab = ({ name, isActive, onClick }) => {

    const tabStyle = {
        padding: '10px 20px',
        cursor: 'pointer',
        borderBottom: isActive ? '2px solid #007bff' : '#f1f1f1', // Blue when active, gray otherwise
        color: isActive ? '#fff' : '#000', // White text when active
        border: '1px solid #ccc',
        borderRadius: '5px',
        margin: '0 5px',
    };

    return (
        <div 
            className={`tab ${isActive ? 'active-tab' : ''}`} 
            onClick={onClick}
        >
            {name}
        </div>
    );
};

export default Tab;
