// Listen for device orientation events
window.addEventListener('deviceorientation', function(event) {
    // Extract the alpha, beta, and gamma values
    const alpha = event.alpha; // Z-axis rotation (0-360)
    const beta = event.beta; // X-axis rotation (-180 to 180)
    const gamma = event.gamma; // Y-axis rotation (-90 to 90)
    
    // Update the UI with the orientation details
    document.getElementById('alpha').textContent = alpha.toFixed(2);
    document.getElementById('beta').textContent = beta.toFixed(2);
    document.getElementById('gamma').textContent = gamma.toFixed(2);

    // Rotate the phone icon based on the device orientation
    const phoneIcon = document.getElementById('phone-icon');
    phoneIcon.style.transform = `rotateZ(${alpha}deg) rotateX(${beta}deg) rotateY(${gamma}deg)`;
});

// Accelerometer data (optional)
window.addEventListener('devicemotion', function(event) {
    const acceleration = event.acceleration;
    const totalAcceleration = Math.sqrt(acceleration.x**2 + acceleration.y**2 + acceleration.z**2);

    document.getElementById('acceleration').textContent = totalAcceleration.toFixed(2);
});
