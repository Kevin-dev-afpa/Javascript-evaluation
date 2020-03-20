// Exercice 1 - Total d'une commande -- En cours

/*var PU = parseInt(prompt("Saississez le prix du produit: "));
var QTECOM = parseInt(prompt("Saississez la quantité: "));
*/

// Exercice 2 - Somme des entiers inférieurs à N -- Ok
function somme() {
    var N = parseInt(prompt("Saississez un nombre entier : "));
    console.log(N * (1 + N) / 2)
}

// Exercice 3 - Mini et Maxi -- Ok
function moyenne() {
    var n = parseInt(window.prompt("Entrer le nombre de note(s) :"));
    var myTableau = [];
    var somme = 0
    for (i = 0; i < n; i++) {
        var str1 = myTableau.push(parseInt(prompt("Ajouter une note :")));
        somme += myTableau[i]
    }
    var moyenne = somme / n
    console.log(myTableau)
    console.log(somme)
    console.log(moyenne)
    console.log(Math.max(...myTableau))
    console.log(Math.min(...myTableau))
}

// Exercice 4 - Calcul du nombre de jeunes, de moyens et de vieux -- En cours
function releve() {
    var myTableau = [10, 15, 20, 25, 27, 35, 42, 48, 56, 75];
    function jeune(value) {
        return value < 20;
    }
    function moyen(value) {
        return value >= 20 && value <= 40;
    }
    function vieux(value) {
        return value > 40;
    }
    console.log(myTableau)
}

// Exercice 5 - Table de multiplication -- Ok
function TableMultiplication(value) {
    for (var i = 0; i <= 10; i++) {
        var somme = value * i
        console.log(i + "x" + value + "=" + somme)
    }
}

// Exercice 6 - Recherche d'un prénom
// var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
// console.log(tab)
// var rechercher = prompt("Quels noms recherchez-vous? ")
// console.log(tab.includes(rechercher))
// if (rechercher) {
//     var ajout = tab.push(" ");
//     var sup = tab.splice(rechercher, 1)
// }
// console.log(tab)

function rechercher (prenom) {
    var prenom = prompt("Quels noms recherchez-vous?")
    return prenom
}
var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"].filter(!rechercher);

// Exercice 7 - vérification d'un formulaire
// Voir jarditou