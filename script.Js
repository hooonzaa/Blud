const database = ["petr", "Banan", "Fanda"];

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  console.log(username, password);

  const loginData = username + "." + password;

  for (let i = 0; i < database.length; i++) {
    if (loginData == database[i]){
    console.log("Login successful");
    break}
  else if ( i == database.length - 1 ) {

console.log("Login failed");

    }


    }
  
}



















function conversation() {
  Hello();
  HowAreYou();
}
function Hello() {
  document.getElementById("constPozdrav").innerHTML += "Ahoj lidi";
}
function HowAreYou() {
  console.log("Jak se máš");

  document.getElementById("constPozdrav").innerHTML += " Jak se máš";
}
