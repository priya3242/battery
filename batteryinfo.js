// batteryInfo.js
export function getBatteryInfo() {
    if ('getBattery' in navigator) {
        navigator.getBattery().then(battery => {
            document.getElementById('batteryCharging').textContent = battery.charging ? 'Yes' : 'No';
            document.getElementById('batteryLevel').textContent = `${(battery.level * 100).toFixed(0)}%`;
            battery.addEventListener('levelchange', () => {
                document.getElementById('batteryLevel').textContent = `${(battery.level * 100).toFixed(0)}%`;
            });
        });
    } else {
        document.getElementById('batteryCharging').textContent = 'Battery API not supported.';
    }
}
