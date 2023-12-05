"use server";
require('dotenv')
import fetch from 'node-fetch'
import FormData from 'form-data'
import fs from 'node:fs'
import exp from 'node:constants'

const apiHost = process.env.API_HOST
const apiKey = process.env.API_KEY
const formData = new FormData();

if(!apiKey){
    throw new Error('Stability key required')
}

interface generationData {
    model: string,
    textPrompts: Array<{
      text: string,
      weight: number,
    }>,
    img: Blob,
}

const GenerateImage = (formData: generationData) => {
    console.log(formData);
};

export default GenerateImage;