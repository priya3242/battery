document.addEventListener("DOMContentLoaded", function() {
    const deviceInfoInstance = new DeviceInfo();

    // Check if the device-info element exists
    const deviceInfoElement = document.getElementById('device-info');
    if (!deviceInfoElement) {
        console.error("Error: 'device-info' element not found in the DOM.");
        return;
    }

    deviceInfoInstance.fetchDeviceInfo(function(info) {
        // Safely update the content
        deviceInfoElement.innerHTML = `
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

