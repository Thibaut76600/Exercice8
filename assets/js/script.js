var lastName = 'Nom : Lavisse';
var firstName = 'Prénom : Thibaut';
var city = 'Ville : New York';

function displayVar() {
    alert(lastName + '\n' + firstName + '\n' + city);
}

function displayInfo() {
    var newfirstName = document.getElementById('firstName').value;
    alert("Bonjour" + " " + newfirstName + " " + "!")
}

var valeur = prompt("Votre prénom");
alert("Bonjour" + " " + valeur + " " + "!");


function displayVar2() {
    var lastName2 = document.getElementById('lastName2').value;
    var firstName2 = document.getElementById('firstName2').value;
    var city2 = document.getElementById('city2').value;
    alert(lastName2 + '\n' + firstName2 + '\n' + city2);
}

function calcul() {
    var x = document.getElementById('x').value;
    var y = document.getElementById('y').value;
    var z = x % y;
    alert(z);
}

function calcul2() {
    var pointure = document.getElementById('pointure').value;
    var annee = document.getElementById('annee').value;
    var calculer = ((((pointure * 2) + 5) * 50) - (annee)) + 1769;
    alert(calculer)
}

function verification() {
    var age = document.getElementById('age').value;
    if (age >= 18) {
        alert('Vous êtes majeur !');
    } else {
        alert('Va te branler ailleur mon bezo !');
    }
}