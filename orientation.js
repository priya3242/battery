// Function to update the phone icon based on the current orientation
function updateOrientationIcon(alpha, beta) {
    const phoneIcon = document.getElementById('phone-icon');

    // Determine orientation based on alpha and beta
    if (alpha >= 45 && alpha < 135) {
        // Landscape Right
        phoneIcon.src = 'https://via.placeholder.com/150/FFD700/000000?text=Landscape+Right'; // Landscape image for right
        phoneIcon.style.transform = 'rotate(90deg)'; // Rotate for landscape
        document.body.style.backgroundColor = '#3c3c3c'; // Change background color
    } else if (alpha >= 225 && alpha < 315) {
        // Landscape Left
        phoneIcon.src = 'https://via.placeholder.com/150/FFD700/000000?text=Landscape+Left'; // Landscape image for left
        phoneIcon.style.transform = 'rotate(-90deg)'; // Rotate for landscape
        document.body.style.backgroundColor = '#3c3c3c'; // Change background color
    } else if (beta > 45) {
        // Portrait Up
        phoneIcon.src = 'https://via.placeholder.com/150/FFD700/000000?text=Portrait+Up'; // Portrait image
        phoneIcon.style.transform = 'rotate(0deg)'; // No rotation for portrait up
        document.body.style.backgroundColor = '#111'; // Change background color
    } else if (beta < -45) {
        // Portrait Down
        phoneIcon.src = 'https://via.placeholder.com/150/FFD700/000000?text=Portrait+Down'; // Portrait image
        phoneIcon.style.transform = 'rotate(0deg)'; // No rotation for portrait down
        document.body.style.backgroundColor = '#111'; // Change background color
    } else {
        // Intermediate Position
        phoneIcon.src = 'https://via.placeholder.com/150/FFD700/000000?text=Intermediate'; // Intermediate image
        phoneIcon.style.transform = 'rotate(0deg)'; // No rotation for intermediate
        document.body.style.backgroundColor = '#222'; // Change background color
    }
}

// Listen for device orientation events
window.addEventListener('deviceorientation', function(event) {
    const rotationX = event.beta; // Front-Back tilt
    const rotationY = event.gamma; // Left-Right tilt
    const rotationZ = event.alpha; // Z-axis rotation

    // Update the UI with the rotation details
    document.getElementById('rotation-x').textContent = rotationX.toFixed(2);
    document.getElementById('rotation-y').textContent = rotationY.toFixed(2);
    document.getElementById('rotation-z').textContent = rotationZ.toFixed(2);

    // Update the phone icon based on alpha and beta values
    updateOrientationIcon(rotationZ, rotationX);
});

// Handle device motion for acceleration
window.addEventListener('devicemotion', function(event) {
    const acceleration = event.acceleration;
    const totalAcceleration = Math.sqrt(acceleration.x**2 + acceleration.y**2 + acceleration.z**2);
    document.getElementById('acceleration').textContent = totalAcceleration.toFixed(2);
});

// Update the icon when the page loads
updateOrientationIcon(0, 0); // Default to portrait at page load

// Update the icon when the orientation changes
window.addEventListener('resize', function() {
    updateOrientationIcon(document.getElementById('rotation-z').textContent, document.getElementById('rotation-x').textContent);
});
