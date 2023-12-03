import fetch from 'node-fetch'
import { FormData }from 'formdata-node'
import fs from 'node:fs'


//This may need to be changed so it can use proper selected engine
const engineId = 'stable-diffusion-xl-1024-v1-0'
const apiHost = process.env.API_HOST ?? 'https://api.stability.ai'

//Get our API Key
const apiKey = process.env.STABILITY_API_KEY

if(!apiKey){
    throw new Error('Stability key requiered')
}

//appends information to send to Stability
const formData = new FormData()
formData.append('init_image', /* place holder */)
//formData.append('init_image_mode', 'IMAGE_STRENGTH')
//formData.append('image_strength', )
formData.append('text_prompts[0][text]', 'Black Sheep with purple horns')

const response = await fetch(
    `${apiHost}/v1/generation/${engineId}/image-to-image`,
    {
      method: 'POST',
      headers: {
        ...formData.getHeaders(),
        Accept: 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: formData,
    }
  )