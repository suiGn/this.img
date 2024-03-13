/*
    createImgFormatter.js
    ⓝⓔⓤⓡⓞⓝⓢ.ⓜⓔ 🖼️🖼️🖼️🖼️
    🅸🅼🅰🅶🅴
*/
// In createImgFormatter.js

import ImgFormatterNode from './nodejs/imgFormatter.node.js';
import ImgFormatterBrowser from './browser/imgFormatter.browser.js';

function isNode() {
    return typeof window === 'undefined';
}

function isBrowser() {
    return typeof window !== 'undefined';
}

function isPath(input) {
    return typeof input === 'string';
}

function isURL(input) {
    try {
        new URL(input);
        return true;
    } catch (e) {
        return false;
    }
}

function isBlob(input) {
    return input instanceof Blob;
}

/**
 * Creates an instance of the appropriate ImgFormatter (Node or Browser) based on the environment and input type.
 * @param {string | Blob} imageInput - The path to the image file, a Blob, or a URL.
 * @returns {Promise<{formatter: ImgFormatterNode | ImgFormatterBrowser, error: string | null}>} 
 * An object containing the formatter or an error message.
 */
export async function createImageFormatter(imageInput) {
    try {
        if (isNode()) {
            if (!isPath(imageInput)) {
                throw new Error("Invalid input type: Input must be a string path in Node.js environment.");
            }
            return { formatter: new ImgFormatterNode(imageInput), error: null };
        } else if (isBrowser()) {
            if (!isURL(imageInput) && !isBlob(imageInput)) {
                throw new Error("Invalid input type: Input must be a URL or Blob in browser environment.");
            }
            return { formatter: new ImgFormatterBrowser(imageInput), error: null };
        } else {
            throw new Error("Unsupported environment.");
        }
    } catch (error) {
        return { formatter: null, error: error.message };
    }
}
