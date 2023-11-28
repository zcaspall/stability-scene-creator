"use client";
import React, { useEffect, useState } from 'react';

interface StyleSelectorProps {
    selectStyle: (style: string) => void;
}
const StyleSelector = ({ selectStyle }: StyleSelectorProps) => {
    const handleStyleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        selectStyle(event.target.value)
    }

    return (
        <>
            <label htmlFor="style-selector">Style:</label>
            <select name="style-selector" id="style-selector" defaultValue="none" onChange={handleStyleChange}>
                <option value="none">None</option>
                <option value="enhance">Enhance</option>
                <option value="anime">Anime</option>
                <option value="photographic">Photographic</option>
                <option value="digital-art">Digital Art</option>
                <option value="comic-book">Comic Book</option>
                <option value="fantasy-art">Fantasy Art</option>
                <option value="line-art">Line Art</option>
                <option value="analog-film">Analog Film</option>
                <option value="neon-punk">Neon Punk</option>
                <option value="isometric">Isometric</option>
                <option value="low-poly">Low Poly</option>
                <option value="origami">Origami</option>
                <option value="modeling-compound">Model Compound</option>
                <option value="cinematic">Cinematic</option>
                <option value="3d-model">3D Model</option>
                <option value="pixel-art">Pixel Art</option>
                <option value="tile-texture">Tile Texture</option>
            </select>
        </>
    );
};

export default StyleSelector;