// alert('hi');
/////////////////////page weare////////////////////////////

let details = document.querySelector('.details');
let photos = document.getElementById('photos');

let validForm = document.querySelector('.validForm');
let prenom = document.getElementById('prenom');
let nom = document.getElementById('nom');
let email = document.getElementById('email');
let message = document.getElementById('message');

// let inputs = document.querySelector('.input');


// let photosDetails = document.querySelectorAll('.details');
// photosDetails.forEach(element =>{


// element.addEventListener('mouseover', function(){
//     details.style.background= "transparent";
//     details.classList.add(change);
// });

// element.addEventListener('mouseout', function(){
//     details.style.background= "";
//     details.classList.remove(change);
// });

// });

document.addEventListener('mouseover', function(event) {
    if (event.target.matches('.details')) {
        event.target.style.background = "transparent";
        event.target.classList.add('change');
    }
});

document.addEventListener('mouseout', function(event) {
    if (event.target.matches('.details')) {
        event.target.style.background = "";
        event.target.classList.remove('change');
    }
});


//////////validation formulaire////////////////////

/////////function//////////
function showError(input, message){
    let allInputs = input.parentElement;
    allInputs.className = 'input error';
    let inputError = allInputs.querySelector('.inputError');
    inputError.innerText = message;
}

function showSuccess(input){
    let allInputs = input.parentElement;
    allInputs.className = 'input success';
}

function emailValid(email){
    let regexMail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    return regexMail.test(email);
}

function checking(allInput){
    allInput.foreach(function(input) {
        console.log(input);

    });
}
/////////Event listeners////////////////////

validForm.addEventListener('submit', function(e){
    e.preventDefault();
  
    if(prenom.value === '') {
        showError(prenom, 'Invalide Prenom');
    }else{
        showSuccess(prenom);
    }

    if(nom.value === '' ){
        showError(nom, 'Invalide Nom');
    }else{
        showSuccess(nom);
    }
    if(email.value === '') {
        showError(email, 'Invalide Email');

    }else if (!emailValid(email.value)){
        showError(email, 'Invalide Email');

    }else{
        showSuccess(email);
    }
    if(message.value === '') {
        showError(message, 'Invalide Prenom');
    }else{
        showSuccess(message);
    }

});