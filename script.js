window.onload = function() {
    const deviceInfo = new DeviceInfo();
    deviceInfo.fetchDeviceInfo((info) => {
        document.getElementById('platform').textContent = info.platform;
        document.getElementById('platformVersion').textContent = info.platformVersion;
        document.getElementById('architecture').textContent = info.architecture;
        document.getElementById('model').textContent = info.model;
        document.getElementById('browserVersion').textContent = info.browserVersion;
        document.getElementById('isMobile').textContent = info.isMobile ? 'Yes' : 'No';
        document.getElementById('brands').textContent = info.brands;
    });
};
