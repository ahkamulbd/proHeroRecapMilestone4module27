//console.log('This is login')

document.getElementById('submit-btn').addEventListener('click', function () {
    const userEmailText = document.getElementById('user-email');
    const userEmailTextInput = userEmailText.value;
    //console.log(userEmailTextInput);
    userEmailText.value = '';

    const userPasswordText = document.getElementById('user-password');
    const userPasswordTextInput = userPasswordText.value;
    //console.log(userPasswordTextInput)
    userPasswordText.value = '';

    if (userEmailTextInput === 'ami@aronno.com' && userPasswordTextInput === '12345') {
        console.log('Valid User');
    }
    else {
        console.log('Invalid User');
    }
})