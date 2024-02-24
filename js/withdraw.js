//console.log('Withdraw Button set');

document.getElementById('withdraw-btn').addEventListener('click', function () {
    //console.log('Withdraw button clicked');

    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputString = withdrawInput.value;
    const withdrawInputFloat = parseFloat(withdrawInputString);
    //console.log(withdrawInputFloat);

    const withdrawAmount = document.getElementById('withdraw-amount');
    const withdrawAmountString = withdrawAmount.innerText;
    const withdrawAmountFloat = parseFloat(withdrawAmountString);

    const currentWithdrawAmount = withdrawInputFloat + withdrawAmountFloat;

    withdrawAmount.innerText = currentWithdrawAmount.toFixed(2);

    // Calculating Balance Amount with Withdraw:

    const balanceAmount = document.getElementById('balance-amount');
    const balanceAmountString = balanceAmount.innerText;
    const balanceAmountFloat = parseFloat(balanceAmountString);

    const currentBalanceAmount = balanceAmountFloat - withdrawInputFloat;

    balanceAmount.innerText = currentBalanceAmount.toFixed(2);

    withdrawInput.value = '';
})