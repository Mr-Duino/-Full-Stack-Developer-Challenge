// Function to get query parameters
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}
// Set the values from query parameters
document.getElementById('displayName').textContent = getQueryParam('name');
document.getElementById('displayRole').textContent = getQueryParam('role');
document.getElementById('displayCompany').textContent = getQueryParam('company');