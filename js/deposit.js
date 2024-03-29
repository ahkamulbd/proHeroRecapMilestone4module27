//console.log('This is deposit');

document.getElementById('deposit-btn').addEventListener('click', function () {
    //console.log('Deposit clicked');
    const depositInput = document.getElementById('deposit-input');
    const depositInputString = depositInput.value;
    //console.log(depositInputText);
    const depositInputFloat = parseFloat(depositInputString);
    //console.log(depositInputDigit);


    const depositAmount = document.getElementById('deposit-amount');
    const depositAmountString = depositAmount.innerText;
    const depositAmountFloat = parseFloat(depositAmountString);

    const currentDepositAmount = depositInputFloat + depositAmountFloat;
    //console.log(currentDepositAmount);

    depositAmount.innerText = currentDepositAmount.toFixed(2);

    // Calculating Balance Amount with Deposit:

    const balanceAmount = document.getElementById('balance-amount');
    const balanceAmountString = balanceAmount.innerText;
    const balanceAmountFloat = parseFloat(balanceAmountString);

    const currentBalanceAmount = balanceAmountFloat + depositInputFloat;

    balanceAmount.innerText = currentBalanceAmount.toFixed(2);

    depositInput.value = '';

    //console.log(depositAmountString);

})