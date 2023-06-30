//characters for passwords
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
"0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
"~","!","@","#","$","%","^","&","*","(",")","_","-","+","=","<",">","?", "/"];

let pwLength = 15;
let password1 = document.getElementById("password1");
let password2 = document.getElementById("password2");
let copyPW1 = document.getElementById("password1-div");
let copyPW2 = document.getElementById("password2-div");
let select = document.getElementById("password-length");
let alert = document.getElementById("alert-msg");

// gets value from the drop down 15 or 20
select.onchange = function(){
    pwLength = this.value;
}
// returns a random number from 0 to the length of the characters array
function randomCharacters(){
     return Math.floor(Math.random()* characters.length);
}
// uses a loop to run the randomCharacters function enough times 
// to get either 30 or 40 random characters, then adds them to either password
function generatePasswords(){
    let option1 = "";
    let option2 = "";
    for(let i = 0; i < (pwLength*2); i++){
        if(i % 2 === 0){
            option1 += characters[randomCharacters()];
        } else{
            option2 += characters[randomCharacters()];
        }
    }
    password1.textContent = option1;
    password2.textContent = option2;
}
// click event for password 1, allows for copy to clipboard
copyPW1.addEventListener("click", function(){   
    navigator.clipboard.writeText(password1.textContent)
        .then(() => {
            alert.style.visibility = 'visible';   
            alert.style.transform = 'scale(1.4)'; 
            setTimeout(()=>{
                alert.style.transform = 'scale(.96)';
                alert.style.visibility = 'hidden';
            }, 500);   
        })
        .catch((err) => {
            console.error('Failed to copy: ', err);
        });
});
//click event for password 2, allows for copy to clipboard
copyPW2.addEventListener("click", function(){
    navigator.clipboard.writeText(password2.textContent)
        .then(() => {
            alert.style.visibility = 'visible';   
            alert.style.transform = 'scale(1.4)'; 
            setTimeout(()=>{
                alert.style.transform = 'scale(.96)';
                alert.style.visibility = 'hidden';
            }, 500);  
        })
        .catch((err) => {
            console.error('Failed to copy: ', err);
        });
});
 