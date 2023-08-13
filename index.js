const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


passEl1 = document.getElementById("pass1")
passEl2 = document.getElementById("pass2")


function generate() {
    passEl1.textContent = "";
    passEl2.textContent = "";
    let pwdLength = Number(prompt("Enter the length of password (max 15): "))

    if (pwdLength > 0 && pwdLength <= 15) {
        for (let i = 0; i < pwdLength; i++) {
            passEl1.textContent += characters[randomNumber()];
            passEl2.textContent += characters[randomNumber()];
        }
    } else {
        alert("Please enter a valid integer between 1 and 15.");
    }
}


function randomNumber() {
    return Math.floor(Math.random() * characters.length)
}