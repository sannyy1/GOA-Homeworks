let nameInp = document.getElementById('name');
let lastNameInp = document.getElementById('lastName');
let emailInp = document.getElementById('email');
let pass = document.getElementById('pass');
let confirmPass = document.getElementById('confirmPass');
let btn = document.getElementById('btn');
let messageDiv = document.getElementById('message');

btn.addEventListener('click', function() {

    if (nameInp.value == '' || lastNameInp.value == '' || emailInp.value == '' || pass.value == '' || confirmPass.value == '') {
        alert('Please enter information');
        return;
    }

    
    if (pass.value != confirmPass.value) {
        

        document.body.style.backgroundColor = 'red';
        messageDiv.textContent = 'Warning: Passwords do not match!';
        messageDiv.style.color = 'white';
        return;
    }

    document.body.style.backgroundColor = 'lightgreen';
    messageDiv.textContent = 'Successfully registered!';
    messageDiv.style.color = 'green';
});