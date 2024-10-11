document.addEventListener("DOMContentLoaded", function() {
    const deviceInfoInstance = new DeviceInfo();

    // Get the device-info element
    const deviceInfoElement = document.getElementById('device-info');

    if (!deviceInfoElement) {
        console.error("Error: 'device-info' element not found in the DOM.");
        return;
    }

    // Fetch device info for the current device
    deviceInfoInstance.fetchDeviceInfo(function(info) {
        if (info) {
            deviceInfoElement.innerHTML = `
                <tr><th>Platform</th><td>${info.platform || 'Unknown'}</td></tr>
                <tr><th>Platform Version</th><td>${info.platformVersion || 'Unknown'}</td></tr>
                <tr><th>Architecture</th><td>${info.architecture || 'Unknown'}</td></tr>
                <tr><th>Model</th><td>${info.model || 'Unknown'}</td></tr>
                <tr><th>Browser Version</th><td>${info.browserVersion || 'Unknown'}</td></tr>
                <tr><th>Mobile</th><td>${info.isMobile ? 'Yes' : 'No'}</td></tr>
                <tr><th>Brands</th><td>${info.brands || 'Unknown'}</td></tr>
            `;
        } else {
            console.error("Error: Unable to fetch device info.");
        }
    });
});
