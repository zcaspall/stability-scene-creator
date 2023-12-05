"use client";
import React, { FormEvent, MouseEventHandler, useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import TextPrompt from '../TextPrompt/TextPrompt';
import Canvas from '../Canvas/Canvas';
import ModelSelector from '../ModelSelector/ModelSelector';
import StyleSelector from '../StyleSelector/StyleSelector';
import StrengthSlider from '../StrengthSlider/StrengthSlider';
// import GenerateImage from '../../api/ITI'
import { generateImage } from '../../actions';

interface GenerationResponse {
    artifacts: Array<{
      base64: string
      seed: number
      finishReason: string
    }>
}

interface textPrompt {
    text: string,
    weight: number,
}

interface generationData {
    data: {
      model: string,
      textPrompts: Array<textPrompt>,
      img: Blob,
    }
  }

const SidebarForm = () => {
    const [textPrompts, setTextPrompts] = useState<textPrompt[]>();
    const [img, setImg] = useState<Blob | null>();
    const [imgStrength, setImgStrength] = useState<number>();
    const [height, setHeight] = useState<number>(1024);
    const [width, setWidth] = useState<number>(1024);
    const [model, setModel] = useState<string>();
    const [style, setStyle] = useState<string | undefined>(undefined);
    const [genImg, setGenImg] = useState<string>();
    const formData = new FormData();
    let responseJson: GenerationResponse | undefined = undefined;

    const handlePrompt = (prompt: textPrompt) => {
        setTextPrompts([prompt]);
    };

    const onModelSelect = (model: string, imgHeight: number, imgWidth: number) => {
        setModel(model);
        setHeight(imgHeight);
        setWidth(imgWidth);
    };
    
    const onStyleSelect = (artStyle: string) => {
        setStyle(artStyle);
    };

    const getCanvas = (canvas: HTMLCanvasElement) => {
        let imgBlob: Blob | null;
        canvas.toBlob((blob) => {
            setImg(blob);
        }, "image/jpg");
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
        let response = await generateImage(formData) as GenerationResponse;
        let genImgBin = response.artifacts[0].base64;
        setGenImg(genImgBin);
    };
    return (
        <form onSubmit={generate}>
            <TextPrompt label="Prompt" id="prompt" name="prompt" handlePrompt={handlePrompt} />
            <ModelSelector selectModel={onModelSelect} />
            {/* <StyleSelector selectStyle={onStyleSelect} /> */}
            {genImg ? (<Image src={`data:image/jpg;base64,${genImg}`} alt="generated image." height={height} width={width} />) 
            : (<Canvas handleCanvas={getCanvas} height={height} width={width}/>)}
            {/* <StrengthSlider getStrength={getStrength}/> */}
            <button>Generate</button>
        </form>
    );
};

export default SidebarForm;