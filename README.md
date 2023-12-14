# stability-scene-creator
``` SQL
-- Make front end webpage for input [DONE]
-- Write dynamic API code [DONE]
-- Generate and recieve the image [DONE]
-- Display generated image [DONE]
```
<hr></hr>
References:
- Croitoru, F.-A., Hondru, V., Ionescu, R. T., & Shah, M. (2023). Diffusion models in vision: A survey. IEEE Transactions on Pattern Analysis and Machine Intelligence, 45(9), 10850–10869. https://doi.org/10.1109/tpami.2023.3261988 
- Stability Ai - Developer Platform. (n.d.). https://platform.stability.ai/docs/getting-started 
- eV, L. (n.d.). Laion/Laion-high-resolution · datasets at hugging face. laion/laion-high-resolution · Datasets at Hugging Face. https://huggingface.co/datasets/laion/laion-high-resolution 
<br>

## Stable Diffusion
Stable diffusion is an open source latent diffusion model developed by Stability AI. The model gets it name from the concept of using text encoding to "stabilize" latent diffusion models, allowing the user to guide the model with prompts and even images. A big part of what makes the stable diffusion model unique to other generative models is actually the dataset that it was trained on. Stable diffusion was trained on the LAION5B dataset, an open source dataset created by the nonprofit organization LAION. This dataset consists of 5 billion image-text pairs scraped from across the internet. This dataset is what allows stable diffusion to guide it's latent diffusion model towards a wide range of images and subjects.

### Latent Diffusion
Latent diffusion is a model for image generation that relies on corrupting the image with gaussian noise through an algorithm, and then reversing the corruption process to reveal the original image. When trained this way, what you are left with is a trained model that has the ability to take random gaussian noise and turn it into a full image. 
![image](https://github.com/zcaspall/stability-scene-creator/assets/55821382/3344e019-7e21-4346-8c36-d1bbb10c19b1)
