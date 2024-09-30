const passwordBox =document.getElementById("password");
const length = 12;

const generate = document.getElementById("generate");

const selectpassword = document.getElementById("selectpassword");
console.log(selectpassword);


const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const number ="1234567890"
const symbol = "!@#$%^&*(){}?/-"

const allChars= upperCase+lowerCase+number+symbol

function createPassword(){
    let password ="";
    password+=  upperCase[Math.floor(Math.random()*upperCase.length)]
    password+=  lowerCase[Math.floor(Math.random()*lowerCase.length)]
    password+=  number[Math.floor(Math.random()*number.length)]
    password+=  symbol[Math.floor(Math.random()*symbol.length)]

    while(length>password.length){
        password+=  allChars[Math.floor(Math.random()*allChars.length)]
    }
    passwordBox.value= password
}


generate.addEventListener("click",()=>{
    createPassword();
})


function copyPassword(){
    passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value);
}

selectpassword.addEventListener("click",()=>{
    copyPassword();
})