import React, { useState } from 'react';

function EventonClick() {
    // ----------------- For Target --------------------
        const[inputValue, setInputValue] = useState(''); 
    // -------------------------------------------------

    const handleChange = (event) => {
        setInputValue(event.target.value);
        console.log(event.target.value);        
    }

    const handleEvent = (event) => {
        event.stopPropagation(); // Stops the event from propagating further.
        console.log(`Event type: ${event.type}`);
        handleClick();

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submission prevented");
        // Add additional form handling   
    };

    const handleClick = () => {
        alert("Button Clicked!");
        
    };

    return (
        <>  
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange}/>
                <button onClick={handleEvent}>Click Me!</button>
                <button type="submit">Submit</button>
            </form>

        </>
    );
}

export default EventonClick;
