"use client";
import styles from './Sidebar.module.css';
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
        formData.append('engine_id', model);
        if (textPrompts) {
            textPrompts.forEach((prompt, index) => {
                formData.append(`text_prompts[${index}][text]`, prompt.text);
                formData.append(`text_prompts[${index}][weight]`, prompt.weight.toString());
            })
        }
        if (img) {
            formData.append('init_image', img);
        }
        if (imgStrength) {
            formData.append('image_strength', imgStrength.toString());
        }
        formData.append('cfg_scale', "30")
        let response = await generateImage(formData) as GenerationResponse;
        let genImgBin = response.artifacts[0].base64;
        setGenImg(genImgBin);
    };
    return (
        <form onSubmit={generate} className={styles.form}>
            <div className={styles.sidebar}>
                <TextPrompt label="Prompt:" id="prompt" name="prompt" handlePrompt={handlePrompt} />
                <StrengthSlider getStrength={getStrength}/>
                <button>Generate</button>
            </div>
            <div id='canvas-container'>
                {genImg ? (<Image src={`data:image/jpeg;base64,${genImg}`} alt="generated image." height={height} width={width} className={styles.image} />) 
                : (<Canvas handleCanvas={getCanvas} height={height} width={width}/>)}
            </div>
        </form>
    );
};

export default SidebarForm;