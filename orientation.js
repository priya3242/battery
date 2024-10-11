document.addEventListener('DOMContentLoaded', function() {
    // Function to update the phone icon based on the current orientation
    function updateOrientationIcon(alpha) {
        const phoneIcon = document.getElementById('phone-icon');
        const orientationDisplay = document.getElementById('orientation');

        // Determine orientation based on alpha value
        if (alpha >= 45 && alpha < 135) {
            // Landscape Right
            phoneIcon.src = 'https://via.placeholder.com/150/FFD700/000000?text=Landscape+Right'; // Landscape image for right
            phoneIcon.style.transform = 'rotate(90deg)'; // Rotate for landscape
            orientationDisplay.textContent = 'Landscape Right';
        } else if (alpha >= 135 && alpha < 225) {
            // Landscape Left
            phoneIcon.src = 'https://via.placeholder.com/150/FFD700/000000?text=Landscape+Left'; // Landscape image for left
            phoneIcon.style.transform = 'rotate(-90deg)'; // Rotate for landscape
            orientationDisplay.textContent = 'Landscape Left';
        } else {
            // Portrait
            phoneIcon.src = 'https://via.placeholder.com/150/FFD700/000000?text=Portrait'; // Portrait image
            phoneIcon.style.transform = 'rotate(0deg)'; // No rotation for portrait
            orientationDisplay.textContent = 'Portrait';
        }
    }

    // Listen for device orientation events
    window.addEventListener('deviceorientation', function(event) {
        const rotationZ = event.alpha; // Z-axis rotation (alpha)

        // Debug log to check if rotationZ is being captured
        console.log("Rotation Z: ", rotationZ);

        // Update the UI with the Z-axis rotation details
        const rotationZElement = document.getElementById('rotation-z');
        if (rotationZElement) {
            rotationZElement.textContent = rotationZ.toFixed(2); // Use toFixed to format the number
        } else {
            console.error("Element with ID 'rotation-z' not found.");
        }

        // Update the phone icon and orientation text based on alpha value
        updateOrientationIcon(rotationZ);
    });

    // Update the icon when the page loads
    updateOrientationIcon(0); // Default to portrait at page load

    // Update the icon when the orientation changes
    window.addEventListener('resize', function() {
        updateOrientationIcon(parseFloat(document.getElementById('rotation-z').textContent));
    });
});
