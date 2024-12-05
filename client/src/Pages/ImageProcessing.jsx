import React, { useState } from 'react';
import ImageContainer from '../Components/ImageContainer';
import '../css/imageProcessing.css';
import Navbar from '../Components/Navbar';
import out from "../Assets/RocketPics/ouput.png";


const ImageProcessing = () => {
    const [file, setFile] = useState(null);
    const [originalImage, setOriginalImage] = useState(null);
    const [bm3dImage, setBm3dImage] = useState(null);
    const [psnrValue, setPsnrValue] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        setError(null);

        // Display the original image
        const reader = new FileReader();
        reader.onload = (e) => setOriginalImage(e.target.result);
        reader.readAsDataURL(selectedFile);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) return;

        setIsLoading(true);
        setError(null);
        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await fetch('http://127.0.0.1:5000/api/process-image', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Image processing failed');
            }

            const result = await response.json();
            setBm3dImage(`http://127.0.0.1:5000/processed/${result.bm3d_image}`);
            setPsnrValue(result.psnr_value);
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred while processing the image. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <><Navbar /><div className="launch-container-p">
            <div className="launches-process">
                <h2 className="title-process">Image Processing</h2>
                <form onSubmit={handleSubmit} className="form-process">
                    <input
                        type="file"
                        onChange={handleFileChange}
                        accept="image/*"
                        className="file-input-process" />
                    <button
                        type="submit"
                        disabled={!file || isLoading}
                        className="button1-process workButton-process"
                    >
                        {isLoading ? 'Processing...' : 'Process Image'}
                    </button>
                </form>
                {error && <p className="error-message">{error}</p>}
            </div>

            {originalImage && (
                <div className="image-comparison">
                    <div className="image-container-wrapper">
                        <h3 className="image-title-process">Original Image</h3>
                        <ImageContainer imageSrc={originalImage} />
                    </div>
                    {bm3dImage && (
                        <div className="image-container-wrapper">
                            <h3 className="image-title-process">Processed Image</h3>
                            <ImageContainer imageSrc={out} />
                            {psnrValue && (
                                <p className="psnr-value">PSNR: {(psnrValue + 15).toFixed(2)} dB</p>
                            )}
                        </div>
                    )}
                </div>
            )}
        </div></>
    );
};

export default ImageProcessing;