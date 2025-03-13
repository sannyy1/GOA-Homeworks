const btn = document.querySelector('button');
const inputField = document.getElementById('inputField');
const header = document.getElementById('header');

btn.addEventListener('click', function() {
    header.textContent = inputField.value;
});

btn.addEventListener('mouseover', function() {
    btn.style.backgroundColor = 'purple';
    btn.style.width = '500px';
});

btn.addEventListener('mouseout', function() {
    btn.style.backgroundColor = 'green';
    btn.style.width = '100px';
});
