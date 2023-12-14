# stability-scene-creator 
## Timeline
``` SQL
-- Make a front-end webpage for input [DONE]
-- Write code that takes user input and sends information to stability [DONE]
-- Receive and display the image from Stability [DONE]
```

## Generation Variables <br>

![image](https://github.com/zcaspall/stability-scene-creator/assets/98758553/1f4f84be-cf74-4020-b396-77a58b60bdca)

> ##### init_image
Instead of using noise to start the diffusion process, the init_image is used.

> ##### image_strength
image_strength goes from 0 to 1. The value determines how much the init_image influences the generated image. If the value is closer to one, Stability will generate images similar to the init_image. If the value is closer to zero generated images will be much different from the init_image.

> ##### cfg_scale
Accepted cfg_values range from 0 to 35. The cfg_scale determines how closely the generation process follows the prompt given.

# References:
- Croitoru, F.-A., Hondru, V., Ionescu, R. T., & Shah, M. (2023). Diffusion models in vision: A survey. IEEE Transactions on Pattern Analysis and Machine Intelligence, 45(9), 10850–10869. https://doi.org/10.1109/tpami.2023.3261988 
- Stability Ai - Developer Platform. (n.d.). https://platform.stability.ai/docs/getting-started 
- eV, L. (n.d.). Laion/Laion-high-resolution · datasets at hugging face. laion/laion-high-resolution · Datasets at Hugging Face. https://huggingface.co/datasets/laion/laion-high-resolution 
<br>

## Stable Diffusion
Stable diffusion is an open source latent diffusion model developed by Stability AI. The model gets it name from the concept of using text encoding to "stabilize" latent diffusion models, allowing the user to guide the model with prompts and even images. A big part of what makes the stable diffusion model unique to other generative models is actually the dataset that it was trained on. Stable diffusion was trained on the LAION5B dataset, an open source dataset created by the nonprofit organization LAION. This dataset consists of 5 billion image-text pairs scraped from across the internet. This dataset is what allows stable diffusion to guide it's latent diffusion model towards a wide range of images and subjects.

### Latent Diffusion
Latent diffusion is a model for image generation that relies on, using an encoder to convert the image into latent space, corrupting the image with gaussian noise withing this latent space through an algorithm, and then reversing the corruption process to reveal the original image, and finally decoding the image into a human readable format. When trained this way, what you are left with is a neural network that has the ability to take random gaussian noise and turn it into a full image. There are many different algorithms that have been used in the latent diffusion process, the three most popular ones can be seen in the figure below.
![image](https://github.com/zcaspall/stability-scene-creator/assets/55821382/3344e019-7e21-4346-8c36-d1bbb10c19b1)
This process is called Unconditional image generation. There have been no conditions placed on the model in which it looks to for guidance in the denoising process. This works well when given a small dataset; for example, if it were given a dataset consisting of only images of dogs the denoising process would be able to produce an image of a dog very easily. However, stable diffusion is trained on one of the biggest image datasets ever collected and needs some guidance so that it can create coherent images.

#### Text-to-Image Synthesis
One of the most groundbreaking feats of image generation models is their ability to create an image from a text prompt. The key part of text-to-image synthesis is the text encoder, stable diffusion uses CLIP. CLIP was originally developed as a computer vision model.
![image](https://github.com/zcaspall/stability-scene-creator/assets/55821382/ccbf0fa6-3472-483a-9b4a-e3aa51557be8)
CLIP works by running a text encoder and an image encoder in parrallel to train a neural network to be able to accurately predict (image,text) pairings when given either of the two. Researchers working on the stable diffusion model realized that this could be used to guide their model towards the correct image. When given a text input, CLIP creates an image embedding in latent space. In short, CLIP knows what image the text prompt is looking for and uses this information to then guide and narrow down the stable diffusion model to the correct images from its training data. This is the core functionality of stable diffusion and how it's able to create images from text input. However, the problem with this for real world applications is to get the exact image you want you need to write a lengthy, detailed prompt. Prompt engineering alone is becoming a skill in and of itself, but stable diffusion allows for multiple inputs into their model.

#### Image-to-Image Synthesis
How image-to-image synthesis works is by running the input image through the same process as the training data for latent diffusion. Once the image has been fully corrupted with gaussian noise, the image and and the noisy image that is being produced by the model are denoised in parallel. Periodically the two images are compared, the model will then try and guide the generated image to look more like the noisy input image at each stage. This allows the model to create an image from the input image without just returning an identical image. This combined with a text prompt allows for good user control over the generated image. For our project, we wanted to be able to take user drawings rather than full input images. This would allow the user to use a crude drawing and a prompt to create images.

## Implementaion
The goal of this project was to create a prototype for a web application that would allow the user to draw a crude scene on a virtual canvas accompanied by a simple text prompt and for stable diffusion to return a high quality generated image. First to accomplish this we needed to decide on a tech stack.
- **React**: For the frontend we picked the javascript library React. This decision was mostly based on preference for a frontend library, but React's state handling through hooks made it much simpler to implement the virtual canvas over vanilla javascript. This fact made it a vital part of the implementation.
- **TypeScript**: For the backend we decided to go with TypeScript. We decided to go the TypeScript because we were dealing with such strict datatypes, specifically the image binary file produced by the virtual canvas. This got rid of many headaches that come with working with data in an untyped language.
- **NextJs**: We decided to use the NextJs framework to make tooling easier and to allow for a more seamless communication between the frontend and the backend.
