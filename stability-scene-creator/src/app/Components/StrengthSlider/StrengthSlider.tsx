"use client";
import React, { useEffect, useState } from 'react';

interface SliderProps {
    getStrength: (strength: string) => void;
}

const StrengthSlider = ({ getStrength }: SliderProps) => {
    const [strength, setStrength] = useState<string>(".5");

    const handleSlide = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStrength(event.target.value);
    }

    useEffect(() => {
        getStrength(strength);
    }, [strength]);

    return (
        <>
            <label htmlFor="strength-slider">Strength:</label>
            <p>{strength}</p>
            <input id="strength-slider" name="strength-slider" 
                type="range" min="0" max="1" step="0.01" value={strength} onChange={handleSlide}/>   
        </>
    );
};

export default StrengthSlider;