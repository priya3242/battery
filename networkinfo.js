// networkInfo.js
export function getNetworkInfo() {
    if ('connection' in navigator) {
        document.getElementById('networkType').textContent = navigator.connection.effectiveType;
        document.getElementById('downlinkSpeed').textContent = `${navigator.connection.downlink} Mbps`;
        document.getElementById('latency').textContent = `${navigator.connection.rtt} ms`;
    } else {
        document.getElementById('networkType').textContent = 'Network information not available.';
    }
}
