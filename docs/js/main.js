const form = document.forms.signup;
const firstName = document.forms.signup.firstName;
const lastName = document.forms.signup.lastName;
const email = document.forms.signup.email;
const password = document.forms.signup.password;

let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?w+)*(\.\w{2,3})+$/g; // JS reGex for Email validation.

let regName = /\d+$/g; // JS reGex for Name validation.

let errors = document.querySelectorAll('.error');
let errorImg = document.querySelectorAll('.error-img');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (checkInputs()) {
        form.submit();
    }
});

function checkInputs() {
    let firstNameValue = firstName.value.trim();
    let lastNameValue = lastName.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();

    if (firstNameValue === "") {
        setErrorFor(firstName, "First Name cannot be empty");
        return false;

    } else if (regName.test(firstNameValue)) {
        setErrorFor(firstName, "First Name can only contain letters");
        return false;

    } else {
        setSuccessFor(firstName);
    }

    if (lastNameValue === "") {
        setErrorFor(lastName, "Last Name cannot be empty");
        return false;

    } else if(regName.test(lastNameValue)) {
        setErrorFor(lastName, "Last Name can only contain letters");
        return false;

    } else {
        setSuccessFor(lastName);
    }

    if (emailValue === "") {
        setErrorFor(email, "Email cannot be empty");
        return false;

    } else if (!regEmail.test(emailValue)) {
        setErrorFor(email, "Email is not valid");
        return false;
    
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === "") {
        setErrorFor(password, "Password cannot be empty");
        return false;

    } else {
        setSuccessFor(password);
    }

    return true;
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const error = formControl.querySelector('.message');
    const errorImg = formControl.querySelector('.error-img');

    error.innerText = message;
    errorImg.style.display = 'block';
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    const errorImg = formControl.querySelector('.error-img');

    errorImg.style.display = 'none';
    formControl.className = 'form-control success';
}