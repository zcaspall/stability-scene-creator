# stability-scene-creator Time Line
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
