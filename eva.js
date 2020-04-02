// Exercice 1 - Total d'une commande -- Ok
function calcul() {
    var prix = parseInt(prompt("Saississez le prix"));
    var qte = parseInt(prompt("Saississez la quantité"));
    var tot = prix * qte;
    return tot;
}

function remise(tot) {
    if (tot >= 100 && tot <= 200) {
        tot = tot * 0.95;
        console.log(tot);
    }
    else if (tot > 200) {
        tot = tot * 0.90;
        console.log(tot);
    }
    return tot;
}
function fraisDePort(tot) {
    var port = ((2 * tot) / 100)
        if (port < 6) {
        return 6;
    }
    if (tot > 500) {
        return 0;
    }
    return port;
}
function coutTotal() {
    var tot = calcul();
    var rem = remise(tot);
    var frais = fraisDePort(tot);
    console.log(remise(tot) + fraisDePort(tot));
}


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

// Exercice 4 - Calcul du nombre de jeunes, de moyens et de vieux -- Ok
function Recensement() {
    var tab = [];
    do {
        var ajoutAge = parseInt(prompt("Ajouter votre Age"));
        tab.push(ajoutAge);
        console.log(ajoutAge);
        console.log(tab);
    } while (ajoutAge < 100);

    var classe = window.prompt("Quel tranche d'âge souhaitez-vous?");
    if (classe == "jeune") {
        var tab = tab.filter(jeune);
        function jeune(value) {
            return value < 20;
        }
        console.log(tab);
    }
    else if (classe == "moyen") {
        var tab = tab.filter(moyen);
        function moyen(value) {
            return value >= 20 && value <= 40;
        }
        console.log(tab);
    }
    else if (classe == "vieux") {
        var tab = tab.filter(vieux);
        function vieux(value) {
            return value > 40;
        }
        console.log(tab);
    }
    else {
        console.log("Je n'ai pas compris votre demande");
    }
}

// Exercice 5 - Table de multiplication -- Ok
function TableMultiplication(value) {
    for (var i = 0; i <= 10; i++) {
        var somme = value * i
        console.log(i + "x" + value + "=" + somme)
    }
}

//Exercice 6 - Recherche d'un prénom -- Ok
function Recherche() {
    var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
    console.log(tab)
    var rechercher = prompt("Quels noms recherchez-vous? ")
    var pos = tab.indexOf(rechercher);
    if (pos) {
        var removedItem = tab.splice(pos, 1);
        var ajout = tab.push(" ");
        console.log(tab)
    }
    else {
        console.log("Je n'ai pas trouvé le nom");
    }
}


// Exercice 7 - vérification d'un formulaire
// Voir jarditou