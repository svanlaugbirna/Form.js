const nameInput = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
const describe = document.getElementById('describe')
const successElement = document.getElementById('success')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let messages = []
    if (nameInput.value === '' || nameInput.value == null){
        messages.push('Name is required')
    }

    if (password.value.length <= 6) {
        messages.push('password must be longer than 6 letters')
    }

    if (describe.value.length <= 10) {
        messages.push('description must be longer than 8 letters')
    }

    if (password.value === 'password') {
        messages.push('password cannot be password')
    }

    if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(',')
    } else{

        e.preventDefault();
        errorElement.innerText = '';
        successElement.style.display = 'block';
    }
});