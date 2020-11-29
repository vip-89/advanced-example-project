const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Показывает error message инпутов

function showError(input,message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small')
    small.innerText = message;
}

//success show outline

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success'


}

// Email validation
function checkEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(email.value.trim())){
        showSuccess(email)
    }
    else {
        showSuccess(email,'Email is not valid')
    }


}




//Check required fields
function checkRequired(inputArr){
inputArr.forEach(function(input){
if (input.value.trim()=== ''){
    showError(input,`${getFieldName(input)} is required`)
} else {
    showSuccess(input)
}
});
}

// check input length

function checkLenght (input,min,max) {
    if (input.value.length <min){
        showError(
            input,
            `${getFieldName(input)} must be at least ${min} characters`)
    }
    else if (input.value.length <max){
        showError(
            input,
            `${getFieldName(input)} must be less than ${max} characters`)
    } else {
        showSuccess(input)
    }
}

//Get FieldName
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkPassword(input1,input2){
    if (input1.value !== input2.value){
        showError(input2,'Password do not match')
    }

}
// event listner
form.addEventListener('submit',function (e) {
    e.preventDefault();
    // if (username.value === ''){
    //     showError(username,'User is required');
    // }
    // else {
    //     showSuccess(username)
    // }
    // if (email.value ===''){
    //     showError(email,'Email is required');
    // }
    // else {
    //     showSuccess(email)
    // }
    // if (password.value === ''){
    //     showError(password,'Password is required');
    // } else if(!isValidEmail(email.value)){
    //     showError(email,'Email is not valid')
    //
    // }
    // else {
    //     showSuccess(password)
    // }
    // if (password2.value === ''){
    //     showError(password2,'Password2 is required')
    // }
    // else {
    //     showSuccess(password2)
    // }
    checkRequired([username,email,password,password2]);
    checkLenght(username,3,15);
    checkLenght(password,6,25);
    checkEmail(email)
    checkPassword(password,password2)
})
