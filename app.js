//  function cube(x)
//  {
//      var resultat = x*x*x;
//      return resultat;
//  }
//  var resultatCube = cube(3);
//  document.getElementById("cube").innerHTML = "Le cube de " + 3 + " est égal à " + resultatCube + " . ";

//  function produit(x, y)
//  {
//      var resultat = x*y;
//     return resultat;
//  }
//  var resultatProduit = produit(3, 5);

// document.getElementById("nb").innerHTML = "Le produit de " + 3 + " x " + 5 + " est égal à " + resultatProduit + " . ";

// function afficheImage (image)
// {
//     document.getElementById("papillon").innerHTML = "<img src=" + image+">"
// }
// afficheImage("papillon.jpg")

// Exercice 1 - Tableau
// function affichageTableau (){
// var myTableau = [];
// var x = parseInt(prompt("Saississez la longueur du tableau:"));
// for (var i = 0; i < x; i++)
// {
//     var nb = myTableau.push(prompt("Saississez un légume"));
// }
// console.log(myTableau);

// document.getElementById("tableau").innerHTML = myTableau
// }
// affichageTableau()
// var resultat = 0;
// //Exercice 3 - Menu

// do {
//     var menu = window.prompt("Saississez le numéro de la commande");
//     switch (menu) {
//         case "1":
//             multiples()
//                     function multiples() {
//                         var N = parseInt(window.prompt("Saississez un nombre entier : "));
//                         var X = parseInt(window.prompt("Saississez un nombre entier : "));
//                         var i = 1;
//                         do {
//                             resultat = i * X;
//                             console.log(i + " x " + X + " = " + resultat);
//                             i++;
//                         }
//                         while (i <= N);
//                         document.getElementById("multiples").innerHTML 
//                     }
//             // Exercice 5 -multiples

//             break;
//         case "2":
//             moyenne()
//             // Exercice 4 Moyenne
//             function moyenne() {
//                 var nombreDeNote = parseInt(window.prompt("Saississez le nombre de note : "));
//                 var somme = 0;
//                 do {
//                     var nombre = parseInt(window.prompt("Saississez votre note : "));
//                     somme += nombre;
//                 }
//                 while (nombre <= 0)
//                 var resultat = somme / nombreDeNote;
//                 console.log(resultat);
//             }
//             document.getElementById("moyenne").innerHTML
//             break;
//         case "3":
//             voyelle()
//             // Exercice 6 - Nombre de voyelles
//             function voyelle(mot, voyelles) {
//                 var i = 0;
//                 var mot = window.prompt("Saississez votre mot : ");
//                 var voyelles = ["a", "e", "i", "o", "u", "y"];
//                 for (var j = 0; j < mot.length; j++) {
//                     var lettre = mot.substr(j, 1);
//                     if (voyelles.indexOf(lettre) >= 0) {
//                         i++;
//                     }
//                 }
//                 return ("Il y a " + i + " voyelle(s)");
//             }
//             document.getElementById("voyelle").innerHTML
//             // window.alert("il y a "+i+" voyelle(s)");
//             break;
//         case "4":
//             lettres()
//             // Exercice 2 - Compter le nombre de lettres
//             function lettres(phrase, lettre) {
//                 var i = 0;
//                 var phrase = window.prompt("Saississez votre phrase: ");
//                 var lettre = window.prompt("Saississez votre lettre: ");
//                 for (var j = 0; j < phrase.length; j++) {
//                     var l = phrase.substr(j, 1);
//                     if (lettre.indexOf(l) >= 0) {
//                         i++;
//                     }
//                 }
//                 return ("Il y a " + i + " " + lettre + " dans la phrase");

//             }
//             document.getElementById("compter").innerHTML
//     }
// }
// while (menu != 5);

//Exercice 4 - String Token
// function strtok (){
//     var n = parseInt(window.prompt("Entrer le nombre de mot(s) :"));
//     var myTableau = [];
//         for(i=0; i<n; i++){
//         var str1 = myTableau.push(prompt("Choississez un mot :"));
//     }
//     var valeur = parseInt(prompt("Quel valeur voulez-vous extraire?"));
//     console.log(myTableau);
//     console.log(myTableau[valeur]);
// }
// strtok()

// Exercice - Tri à bulle
var myTableau = [5, 18, 14, 4, 26];
myTableau.sort()<0;
console.log(myTableau);


