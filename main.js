const nameIn = document.querySelector('#name');
const userIn = document.querySelector('#user-name');
const emailIn = document.querySelector('#email');
const webIn = document.querySelector('#website');
const pass1In = document.querySelector('#password');
const pass2In = document.querySelector('#password2');
const form = document.querySelector('form');
const msgElm = document.querySelector('small');

function checkInput(){
    const nameVal = nameIn.value.trim(); //trim() function removes the space from input.
    const userVal = userIn.value.trim();
    const emailVal = emailIn.value.trim();
    const webVal = webIn.value.trim();
    const pass1Val = pass1In.value.trim();
    const pass2Val = pass2In.value.trim();

    //name
    if(nameVal === ''){
        errorMsg(nameIn,'Name cannot be blank');
    }else if(nameVal.length <=3){
        errorMsg(nameIn, 'At least 3 chars needed!')
    }
    else if(!validName(nameVal)){
        errorMsg(nameIn, 'Name is not valid!');
    }
    else{
        successMsg(nameIn)
    }

    //username
    if(userVal === ''){
        errorMsg(userIn,'username cannot be blank');
    }else if(userVal.length <= 4){
       errorMsg(userIn, 'Username must be greater than 4 chars');
    }else if(!validuser(userVal)){
        errorMsg(userIn, 'Username is not valid!')
    }
    else{
        successMsg(userIn)
    }

    //email
    if(emailVal === ''){
        errorMsg(emailIn,'Email cannot be blank');
    }else if(!validEmail(emailVal)){
        errorMsg(emailIn, 'Email is not valid!');
    }
    else{
        successMsg(emailIn)
    }

    //web
    if(webVal === ''){
        errorMsg(webIn,'Website cannot be blank');
    }else if(!validWeb(webVal)){
        errorMsg(webIn, 'Website is not valid!');
    }
    else{
        successMsg(webIn)
    }

    //password 1
    if(pass1Val === ''){
        errorMsg(pass1In,'Password cannot be blank');
    }else if(pass1Val.length <=7){
        errorMsg(pass1In, 'At least 8 chars needed!')
    }
    else if(!validpass1(pass1Val)){
        errorMsg(pass1In, 'Special chars & numbers needed');
    }
    else{
        successMsg(pass1In)
    }

    //matching password
    if(pass2Val===''|| pass2Val !== pass1Val){
        errorMsg(pass2In, 'Password is not matched!')
    }

}

//function for regular expression

//checking if the name is valid with regX
function validName(nameVal){
    return /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/gm.test(nameVal);
}

//checking if the name is valid with regX
function validuser(nameVal2){
    return /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,12}[a-zA-Z0-9]$/.test(nameVal2);
}

//checking for valid email
function validEmail(emailVal){
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(emailVal);
}

//checking for valid website......
function validWeb(webVal){
    return /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig.test(webVal);
}

//checking for valid password
function validpass1(pass1Val){
    return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/gm.test(pass1Val);
}


//functions for showing the messages........
function errorMsg(namePrm,msg){
    const frmControl = namePrm.parentElement;
    const small = frmControl.querySelector('small');

    small.textContent = msg;   //adding message.
    frmControl.className = 'frmControl error';

}

function successMsg(namePrm){
    const frmControl = namePrm.parentElement;
    frmControl.className = 'frmControl success'
}


//managing submit
    form.addEventListener('submit', (evt)=>{
        console.log('s')
        evt.preventDefault();
        checkInput();
})