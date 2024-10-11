
export function getCpuCores() {
    if (navigator.hardwareConcurrency) {
        document.getElementById('cpuCores').textContent = navigator.hardwareConcurrency;
    } else {
        document.getElementById('cpuCores').textContent = 'CPU core information not available.';
    }
}
