// Function to update the phone icon based on the current orientation
function updateOrientationIcon() {
    const phoneIcon = document.getElementById('phone-icon');

    // Determine the orientation
    if (window.matchMedia("(orientation: portrait)").matches) {
        phoneIcon.src = 'https://example.com/portrait-phone.png'; // Replace with a 2D portrait phone image URL
    } else {
        phoneIcon.src = 'https://example.com/landscape-phone.png'; // Replace with a 2D landscape phone image URL
    }
}

// Listen for device orientation events
window.addEventListener('deviceorientation', function(event) {
    const alpha = event.alpha; // Z-axis rotation (0-360)
    const beta = event.beta; // X-axis rotation (-180 to 180)
    const gamma = event.gamma; // Y-axis rotation (-90 to 90)

    // Update the UI with the orientation details
    document.getElementById('alpha').textContent = alpha.toFixed(2);
    document.getElementById('beta').textContent = beta.toFixed(2);
    document.getElementById('gamma').textContent = gamma.toFixed(2);
});

// Handle device motion for acceleration (optional)
window.addEventListener('devicemotion', function(event) {
    const acceleration = event.acceleration;
    const totalAcceleration = Math.sqrt(acceleration.x**2 + acceleration.y**2 + acceleration.z**2);
    document.getElementById('acceleration').textContent = totalAcceleration.toFixed(2);
});

// Update the icon when the page loads
updateOrientationIcon();

// Update the icon when the orientation changes
window.addEventListener('resize', updateOrientationIcon);
