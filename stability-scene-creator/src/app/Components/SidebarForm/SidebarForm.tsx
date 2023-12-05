"use client";
import React, { FormEvent, useState } from 'react';
import Image from 'next/image';
import TextPrompt, { textPrompt }from '../TextPrompt/TextPrompt';
import Canvas from '../Canvas/Canvas';
import StyleSelector from '../StyleSelector/StyleSelector';
import StrengthSlider from '../StrengthSlider/StrengthSlider';
import { generateImage, GenerationResponse } from '../../actions';


const SidebarForm = () => {
    const [textPrompts, setTextPrompts] = useState<textPrompt[]>();
    const [img, setImg] = useState<Blob | null>();
    const [imgStrength, setImgStrength] = useState<number>();
    const [style, setStyle] = useState<string | undefined>(undefined);
    const [genImg, setGenImg] = useState<string>();
    const formData = new FormData();
    const model: string = "stable-diffusion-xl-1024-v1-0"
    const height: number = 1024;
    const width: number = 1024; 

    const handlePrompt = (prompt: textPrompt) => {
        setTextPrompts([prompt]);
    };
    
    const onStyleSelect = (artStyle: string) => {
        setStyle(artStyle);
    };

    const getCanvas = (canvas: HTMLCanvasElement) => {
        let imgBlob: Blob | null;
        canvas.toBlob((blob) => {
            setImg(blob);
        }, "image/jpeg");
    };

    const getStrength = (strength: string) => {
        let canvStrength = Number(strength);
        setImgStrength(canvStrength);
    };
    
    const generate = async (e: FormEvent) => {
        e.preventDefault();
        if (model) {
            formData.append('engine_id', model);
        }
        if (textPrompts) {
            textPrompts.forEach((prompt, index) => {
                formData.append(`text_prompts[${index}][text]`, prompt.text);
                formData.append(`text_prompts[${index}][weight]`, prompt.weight.toString());
            })
        }
        if (img) {
            formData.append('init_image', img);
        }
        console.log(img);
        let response = await generateImage(formData) as GenerationResponse;
        let genImgBin = response.artifacts[0].base64;
        setGenImg(genImgBin);
    };
    return (
        <form onSubmit={generate}>
            <TextPrompt label="Prompt" id="prompt" name="prompt" handlePrompt={handlePrompt} />
            {/* <StyleSelector selectStyle={onStyleSelect} /> */}
            {genImg ? (<Image src={`data:image/jpeg;base64,${genImg}`} alt="generated image." height={height} width={width} />) 
            : (<Canvas handleCanvas={getCanvas} height={height} width={width}/>)}
            {/* <StrengthSlider getStrength={getStrength}/> */}
            <button>Generate</button>
        </form>
    );
};

export default SidebarForm;