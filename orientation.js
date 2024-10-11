// Listen for device orientation events
window.addEventListener('deviceorientation', function(event) {
    const alpha = event.alpha; // Z-axis rotation (0-360)
    const beta = event.beta; // X-axis rotation (-180 to 180)
    const gamma = event.gamma; // Y-axis rotation (-90 to 90)

    // Update the UI with the orientation details
    document.getElementById('alpha').textContent = alpha.toFixed(2);
    document.getElementById('beta').textContent = beta.toFixed(2);
    document.getElementById('gamma').textContent = gamma.toFixed(2);

    // Select the phone icon element
    const phoneIcon = document.getElementById('phone-icon');

    // Change the icon based on the beta value
    if (beta > -45 && beta < 45) { // Conditions for portrait orientation
        phoneIcon.src = 'https://via.placeholder.com/150/FFD700/000000?text=Portrait';
    } else { // Landscape orientation or tilted
        phoneIcon.src = 'https://via.placeholder.com/150/FFD700/000000?text=Landscape';
    }
});

// Accelerometer data (optional)
window.addEventListener('devicemotion', function(event) {
    const acceleration = event.acceleration;
    const totalAcceleration = Math.sqrt(acceleration.x**2 + acceleration.y**2 + acceleration.z**2);
    document.getElementById('acceleration').textContent = totalAcceleration.toFixed(2);
});
