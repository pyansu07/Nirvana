# 🚀 Nirvana

Welcome to the repository for our Smart India Hackathon (SIH) project! This repository contains the source code, documentation, and resources related to our innovative solution. We are Team Nirvana, students from the Indian Institute of Information Technology Nagpur, a group of passionate individuals committed to making a difference through technology.

## 👥 Team Members

- **Shreyash Verma** 
- **Supratit Datta**
- **Aryan Bhise**
- **Pyansu Nahak**
- **Lakshit Khandelwal**
- **Aditi Chandak**

Nirvana is a cutting-edge space solutions agency dedicated to pioneering space research and missions. The project focuses on advancing space exploration technologies, including satellite imagery enhancement.

## Features and Functionality

- **User Authentication**: Sign up and log in using email and password or social media accounts (Google, GitHub).
- **Image Processing**: Upload images for processing with BM3D denoising and view results.
- **Dynamic Navigation**: Smooth scrolling and responsive navigation for an enhanced user experience.
- **Interactive Timelines**: Display upcoming space missions through a vertical timeline component.
- **Responsive Design**: Built with a mobile-first approach, ensuring usability across devices.

  ## Technology Stack

- **Frontend**: React, React Router, Framer Motion, GSAP
- **Backend**: Flask, Flask-CORS
- **Image Processing**: OpenCV, scikit-image, BM3D
- **Styling**: CSS modules and responsive design techniques.

  ## Installation Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/pyansu07/Nirvana.git
   cd Nirvana
   ```

2. **Install frontend dependencies**:
   ```bash
   cd client
   npm install
   ```

3. **Setup the backend**:
   - Navigate to the server directory:
     ```bash
     cd server/models/Image-Enhanced
     ```
   - Install the required Python packages:
     ```bash
     pip install Flask flask-cors opencv-python scikit-image bm3d
     ```

4. **Configure Firebase**:
   - Create a Firebase project and add your web app.
   - Replace the Firebase configuration in `client/src/utils/firebaseConfig.jsx` with your project's credentials.

5. **Run the backend**:
   ```bash
   python app.py
   ```

6. **Run the frontend**:
   ```bash
   cd client
   npm start
   ```

## Usage Guide

- Navigate to `http://localhost:3000` in your web browser.
- Create an account or log in to access the main features.
- Use the "Image Processing" section to upload images and see the processed results.
- Explore upcoming missions in the "Launches" section.

## API Documentation

- **POST /api/process-image**: Upload an image for processing.
  - **Request**: Form-data containing the image file.
  - **Response**: JSON object containing the original and processed image URLs along with the PSNR value.

