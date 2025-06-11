document.addEventListener('DOMContentLoaded', () => {
    const balanceElement = document.getElementById('balance');
    const targetBalance = 200000; // The target balance to display
    let currentBalance = 0;
    const speed = 100; // Determine how fast the balance loads (lower is faster)

    const updateBalance = () => {
        const increment = targetBalance / speed;
        currentBalance += increment;

        if (currentBalance < targetBalance) {
            balanceElement.textContent = Math.ceil(currentBalance).toLocaleString();
            setTimeout(updateBalance, 50);
        } else {
            balanceElement.textContent = targetBalance.toLocaleString(); // Ensures the balance is set exactly at the end
        }
    };

    updateBalance();
    
});
