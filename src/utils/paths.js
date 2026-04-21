/**
 * Utility function to get the correct image path with base URL
 * This is needed for GitHub Pages deployment where the app is served from a subdirectory
 * 
 * @param {string} imagePath - The image path relative to public/ (e.g., "images/foto.png")
 * @returns {string} - The full path including the base URL
 */
export function getImagePath(imagePath) {
  // Remove leading slash if present
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  
  // Get the base URL from Vite's environment
  const baseUrl = import.meta.env.BASE_URL;
  
  // Combine base URL with image path
  return `${baseUrl}${cleanPath}`;
}

/**
 * Process an object with image paths and convert them to use the base URL
 * Works recursively for nested objects and arrays
 * 
 * @param {Object|Array|string} data - The data to process
 * @returns {Object|Array|string} - The processed data with correct paths
 */
export function processImagePaths(data) {
  if (typeof data === 'string' && data.includes('/images/')) {
    return getImagePath(data);
  }
  
  if (Array.isArray(data)) {
    return data.map(item => processImagePaths(item));
  }
  
  if (data && typeof data === 'object') {
    const processed = {};
    for (const [key, value] of Object.entries(data)) {
      processed[key] = processImagePaths(value);
    }
    return processed;
  }
  
  return data;
}
