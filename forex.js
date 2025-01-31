async function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    //const apiKey = 'ce628909f8-481fa0dcc9-sqyoj1'; // Get your API key from https://www.exchangerate-api.com
    const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const rate = data.rates[toCurrency];
        const result = amount * rate;
        document.getElementById('convertedAmount').innerText = result.toFixed(2);
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to fetch exchange rates');
    }
}

document.getElementById('transactionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const recipient = document.getElementById('recipient').value;
    const accountNumber = document.getElementById('accountNumber').value;
    const bankName = document.getElementById('bankName').value;
    const transferAmount = document.getElementById('transferAmount').value;
    
    // Here you would handle the form submission, e.g., sending to a server
    console.log('Transfer to:', recipient, accountNumber, bankName, transferAmount);
    alert('Transaction submitted!'); // Just for demonstration
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.style.display = 'block'; // Show the selected section
        } else {
            section.style.display = 'none'; // Hide other sections
        }
    });
}