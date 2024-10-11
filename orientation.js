// Function to update the phone icon based on the current orientation
function updateOrientationIcon() {
    const phoneIcon = document.getElementById('phone-icon');

    // Check the current orientation
    if (window.matchMedia("(orientation: portrait)").matches) {
        phoneIcon.src = 'https://via.placeholder.com/150/FFD700/000000?text=Portrait'; // Portrait image
        phoneIcon.style.transform = 'rotate(0deg)'; // No rotation for portrait
    } else {
        phoneIcon.src = 'https://via.placeholder.com/150/FFD700/000000?text=Landscape'; // Landscape image
        phoneIcon.style.transform = 'rotate(90deg)'; // Rotate for landscape
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
});

// Handle device motion for acceleration
window.addEventListener('devicemotion', function(event) {
    const acceleration = event.acceleration;
    const totalAcceleration = Math.sqrt(acceleration.x**2 + acceleration.y**2 + acceleration.z**2);
    document.getElementById('acceleration').textContent = totalAcceleration.toFixed(2);
});

// Update the icon when the page loads
updateOrientationIcon();

// Update the icon when the orientation changes
window.addEventListener('resize', updateOrientationIcon);
