
 

const passwordBox= document.getElementById("password");


const length = 12;


const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const numbers="1234567890";
const symbools="@#$%^&*()_+~|}{><?-=/[]:";

const allchars= upperCase+lowerCase+numbers+symbools


function createPassword(){
    
    let password="";
    password+=upperCase[Math.floor(Math.random()*upperCase.length)];
    password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password+=numbers[Math.floor(Math.random()*numbers.length)];
    password+=symbools[Math.floor(Math.random()*symbools.length)];
    
    
    while(length>password.length){
        password+=allchars[Math.floor(Math.random()*allchars.length)]
    }
    passwordBox.value= password;
}




function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}
