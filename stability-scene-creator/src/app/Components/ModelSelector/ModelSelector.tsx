"use client";
import React, { useEffect, useState } from 'react';

interface ModelSelectorProps {
    selectModel: (path: string, height: number, width: number) => void;
}

const ModelSelector = ({ selectModel }: ModelSelectorProps) => {
    const xlModel = "stable-diffusion-xl-1024-v1-0";
    const v1Model = "stable-diffusion-v1-6";
    const [model, setModel] = useState("stable-diffusion-xl-1024-v1-0");

    const handleModelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setModel(event.target.value);
    }

    useEffect(() => {
        let path =   `https://api.stability.ai/v1/generation/${model}/image-to-image`;
        let height = 1024;
        let width = 1024;
        if (model === v1Model) {
            height = 512;
            width = 512;
        }
        selectModel(path, height, width);
    })

    return(
        <>
            <label htmlFor="model-select">Model:</label>
            <select name="model-select" id="model-select" onChange={handleModelChange}>
                <option value={xlModel}>Stable Diffusion XL 1.0</option>
                <option value={v1Model}>Stable Diffusion 1.6</option>
            </select>
        </>
    );
};

export default ModelSelector;