const baseTransactions = [
    { amount: "₹355500", description: "Purchased 5 Laptops" },
    { amount: "₹2000", description: "Purchased 10 Mouse Devices" },
    { amount: "₹78850", description: "Purchased 3 Smartphones" },
    { amount: "₹1888200", description: "Purchased 4 Tablets" },
    { amount: "₹4500", description: "Purchased Accessories" }
];

function generateRandomDate() {
    const today = new Date();
    const pastDate = new Date(today.setDate(today.getDate() - 30));
    return new Date(pastDate.getTime() + Math.random() * (today.getTime() - pastDate.getTime())).toISOString().split('T')[0];
}

function generateTransactions() {
    let transactions = [];
    for (let i = 0; i < 30; i++) {
        const randomTransaction = baseTransactions[Math.floor(Math.random() * baseTransactions.length)];
        transactions.push({
            date: generateRandomDate(),
            amount: randomTransaction.amount,
            description: randomTransaction.description
        });
    }
    return transactions.sort((a, b) => new Date(a.date) - new Date(b.date)); // Sort by date
}

let isVisible = false;  // Track visibility of the transaction list

function loadTransactions() {
    const container = document.querySelector('.transaction-container');
    if (!isVisible) {
        container.innerHTML = ''; // Clear previous content if any
        let transactions = generateTransactions(); // Generate random transactions each time

        // Sort transactions by date and get the latest 5 transactions
        transactions.sort((a, b) => new Date(b.date) - new Date(a.date));
        transactions = transactions.slice(0, 5);

        transactions.forEach(transaction => {
            const card = document.createElement('div');
            card.classList.add('transaction-card');
            card.innerHTML = `
                <strong>Date:</strong> ${transaction.date}<br>
                <strong>Amount:</strong> ${transaction.amount}<br>
                <strong>Description:</strong> ${transaction.description}
            `;
            container.appendChild(card);
        });
        isVisible = true;  // Update visibility status
    } else {
        container.innerHTML = ''; // Clear the container to hide transactions
        isVisible = false;  // Update visibility status
    }
}

function loadPeriodicReport() {
    const container = document.querySelector('.transaction-container');
    if (!isVisible) {
        const transactions = generateTransactions();
        let tableHTML = '<table class="transaction-table">';
        tableHTML += '<tr><th>Date</th><th>Amount</th><th>Description</th></tr>';

        transactions.forEach(transaction => {
            tableHTML += `
                <tr>
                    <td>${transaction.date}</td>
                    <td>${transaction.amount}</td>
                    <td>${transaction.description}</td>
                </tr>
            `;
        });

        tableHTML += '</table>';
        container.innerHTML = tableHTML;
        isVisible = true;  // Update visibility status
    } else {
        container.innerHTML = ''; // Clear the table to hide transactions
        isVisible = false;  // Update visibility status
    }
}

