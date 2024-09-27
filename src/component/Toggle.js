import React, { useState, useEffect } from 'react';

const ToggleButtons = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Function to handle the Up button click
    const handleUp = () => {
        setActiveIndex((prevIndex) => (prevIndex === 3 ? 0 : prevIndex + 1)); // Wrap around to 0
    };

    // Function to handle the Down button click
    const handleDown = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? 3 : prevIndex - 1)); // Wrap around to 3
    };

    // Function to handle key presses
    const handleKeyDown = (event) => {
        if (event.key === 'ArrowUp') {
            handleUp();
        } else if (event.key === 'ArrowDown') {
            handleDown();
        }
    };

    // Adding event listeners for keydown events
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
    const txtStyle = {
        Margin: "100px"
    }

    return (
        <div style={txtStyle}>
            <div>
                <button style={{ backgroundColor: activeIndex === 0 ? 'lightblue' : 'white', margin: "20px" }}>
                    Button 1
                </button>
                <button style={{ backgroundColor: activeIndex === 1 ? 'lightblue' : 'white', margin: "20px" }}>
                    Button 2
                </button>
                <button style={{ backgroundColor: activeIndex === 2 ? 'lightblue' : 'white', margin: "20px" }}>
                    Button 3
                </button>
                <button style={{ backgroundColor: activeIndex === 3 ? 'lightblue' : 'white', margin: "20px" }}>
                    Button 4
                </button>
            </div>
        </div>
    );
};

export default ToggleButtons;
