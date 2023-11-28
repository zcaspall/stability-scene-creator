"use client";
import React, { useEffect, useState } from 'react';
import TextPrompt from '../TextPrompt/TextPrompt';
import Canvas from '../Canvas/Canvas';
import ModelSelector from '../ModelSelector/ModelSelector';
import StyleSelector from '../StyleSelector/StyleSelector';

const SidebarForm = () => {
    const [img, setImg] = useState<Blob | null>();
    const [height, setHeight] = useState<number>();
    const [width, setWidth] = useState<number>();
    const [path, setPath] = useState<string>();
    const [style, setStyle] = useState<string | undefined>(undefined);

    const onModelSelect = (modelPath: string, imgHeight: number, imgWidth: number) => {
        setPath(modelPath);
        setHeight(imgHeight);
        setWidth(imgWidth);
    }
    
    const onStyleSelect = (artStyle: string) => {
        setStyle(artStyle);
    }

    const getCanvas = (canvas: HTMLCanvasElement) => {
        let imgBlob: Blob | null;
        canvas.toBlob((blob) => {
            setImg(blob);
        });
    }

    return (
        <form> 
            <TextPrompt label="Prompt" id="prompt" name="prompt"></TextPrompt>
            <ModelSelector selectModel={onModelSelect} />
            <StyleSelector selectStyle={onStyleSelect} />
            <Canvas handleCanvas={getCanvas}/>
        </form>
    );
};

export default SidebarForm;