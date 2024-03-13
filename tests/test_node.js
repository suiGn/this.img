// Assuming thisImg.js is properly set up to use ImgFormatterNode in a Node environment
import thisImg from '../index.js'; // Adjust the path based on your file structure

thisImg('path/to/image.jpg')
  .then(thisImg.promise.success)
  .catch(thisImg.promise.error);