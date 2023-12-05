'use server';
require('dotenv');
import axios from "axios";

const API_HOST = process.env.API_HOST;
const API_KEY = process.env.API_KEY;

if (!API_KEY) {
    throw new Error('Stability key required');
}

export interface GenerationResponse {
    artifacts: Array<{
      base64: string
      seed: number
      finishReason: string
    }>
}

export async function generateImage(formData: FormData): Promise<any> {
    let engineId = formData.get('engine_id');
    formData.delete('engine_id');
    let response = axios({
        url: `${API_HOST}/v1/generation/${engineId}/image-to-image`,
        method: "POST",
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${process.env.API_KEY}`,
        },
        data: formData,
    })
        .then((response) => {
            if (response.status !== 200) {
                throw new Error(`Non-200 response: ${response.statusText}`);
            }
            return response.data as GenerationResponse;
        })

        .catch((err) => {
            return err;
        })

    return response;
}