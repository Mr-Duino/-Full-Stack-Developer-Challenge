document.getElementById('businessCardForm').addEventListener('submit', function (e) {
    e.preventDefault();
    // Get the input values
    const name = document.getElementById('name').value;
    const role = document.getElementById('role').value;
    const company = document.getElementById('company').value;
    // Redirect to the display page with query parameters
    window.location.href = `card.html?name=${encodeURIComponent(name)}&role=${encodeURIComponent(role)}&company=${encodeURIComponent(company)}`;
});