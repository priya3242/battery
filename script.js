document.addEventListener("DOMContentLoaded", function() {
    const deviceInfoInstance = new DeviceInfo();

    // Check if the device-info elements exist
    const deviceInfoElement1 = document.getElementById('device-info-1');
    const deviceInfoElement2 = document.getElementById('device-info-2');

    if (!deviceInfoElement1 || !deviceInfoElement2) {
        console.error("Error: Device info elements not found in the DOM.");
        return;
    }

    deviceInfoInstance.fetchDeviceInfo(function(info) {
        // Update the first column with platform details
        deviceInfoElement1.innerHTML = `
            <strong>Platform:</strong> ${info.platform}<br>
            <strong>Platform Version:</strong> ${info.platformVersion}<br>
            <strong>Architecture:</strong> ${info.architecture}<br>
            <strong>Model:</strong> ${info.model}<br>
        `;

        // Update the second column with browser and other details
        deviceInfoElement2.innerHTML = `
            <strong>Browser Version:</strong> ${info.browserVersion}<br>
            <strong>Mobile:</strong> ${info.isMobile ? 'Yes' : 'No'}<br>
            <strong>Brands:</strong> ${info.brands}<br>
        `;
    });
});
