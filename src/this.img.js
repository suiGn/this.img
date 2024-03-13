// this.img.js
import { createImageFormatter } from './createImageFormatter.js';
import { logImageSuccess, logImageError } from './this.img.promises.js';

async function thisImg(imageFilePath) {
    let { formatter, error } = await createImageFormatter(imageFilePath);
    
    if (error) {
        return Promise.reject(error);
    }

    try {
        const processedImage = await formatter.process();
        return Promise.resolve(processedImage);
    } catch (processingError) {
        return Promise.reject(processingError.message);
    }
}

// Attach the promise handlers to thisImg
thisImg.promise = {
  success: logImageSuccess,
  error: logImageError,
};

console.log("this.img Loaded.");
export default thisImg;
