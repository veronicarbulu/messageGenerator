const messages = ["Don't worry, be happy", "You are enough just as you are",
    "You are gold, baby", "Don't count the days, make the days count",
    "Be the change you want to see in the world", "Do your best everyday"];


//I STILL GET A REFERENCE ERROR WITH document. THIS WORKS ON MY HTML.
//But what if i want to do the function first, then add the document.byId?
const randomMessage = function (){
    document.getElementById("message").innerHTML = messages[Math.floor(Math.random() * messages.length)];
}



//DONT UNDERSTAND WHY CODE BELOW DOESN'T WORK. I added quotes and even removed parenthesis and nothing
// const randomMessage = () => messages[Math.floor(Math.random() * messages.length)]; 
// document.getElementById("message").innerHTML=randomMessage();



