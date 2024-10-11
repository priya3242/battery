document.addEventListener("DOMContentLoaded", function() {
    const deviceInfoInstance = new DeviceInfo(); // For both devices

    // Check if the device-info elements exist
    const deviceInfoElement1 = document.getElementById('device-info-1');
    const deviceInfoElement2 = document.getElementById('device-info-2');

    if (!deviceInfoElement1 || !deviceInfoElement2) {
        console.error("Error: Device info elements not found in the DOM.");
        return;
    }

    // Fetch device info for Device 1
    deviceInfoInstance.fetchDeviceInfo(function(info) {
        // Update Device 1 info
        deviceInfoElement1.innerHTML = `
            <strong>Platform:</strong> ${info.platform}<br>
            <strong>Platform Version:</strong> ${info.platformVersion}<br>
            <strong>Architecture:</strong> ${info.architecture}<br>
            <strong>Model:</strong> ${info.model}<br>
            <strong>Browser Version:</strong> ${info.browserVersion}<br>
            <strong>Mobile:</strong> ${info.isMobile ? 'Yes' : 'No'}<br>
            <strong>Brands:</strong> ${info.brands}<br>
        `;
    });

    // Fetch device info for Device 2 (using the same instance for demonstration)
    deviceInfoInstance.fetchDeviceInfo(function(info) {
        // Update Device 2 info
        deviceInfoElement2.innerHTML = `
            <strong>Platform:</strong> ${info.platform}<br>
            <strong>Platform Version:</strong> ${info.platformVersion}<br>
            <strong>Architecture:</strong> ${info.architecture}<br>
            <strong>Model:</strong> ${info.model}<br>
            <strong>Browser Version:</strong> ${info.browserVersion}<br>
            <strong>Mobile:</strong> ${info.isMobile ? 'Yes' : 'No'}<br>
            <strong>Brands:</strong> ${info.brands}<br>
        `;
    });
});
