// memoryInfo.js
export function getDeviceMemory() {
    if ('deviceMemory' in navigator) {
        document.getElementById('deviceMemory').textContent = `${navigator.deviceMemory} GB`;
    } else {
        document.getElementById('deviceMemory').textContent = 'Device memory information not available.';
    }
}
