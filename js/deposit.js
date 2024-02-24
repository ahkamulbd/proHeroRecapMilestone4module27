//console.log('This is deposit');

document.getElementById('deposit-btn').addEventListener('click', function () {
    //console.log('Deposit clicked');
    const depositInput = document.getElementById('deposit-input');
    const depositInputText = depositInput.value;
    //console.log(depositInputText);
    const depositInputFloat = parseFloat(depositInputText);
    //console.log(depositInputDigit);


    const depositAmount = document.getElementById('deposit-amount');
    const depositAmountString = depositAmount.innerText;
    const depositAmountFloat = parseFloat(depositAmountString);

    const currentDepositAmount = depositInputFloat + depositAmountFloat;
    console.log(currentDepositAmount);

    depositAmount.innerText = currentDepositAmount.toFixed(2);

    depositInput.value = '';

    //console.log(depositAmountString);

})