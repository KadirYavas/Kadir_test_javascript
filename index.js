// Exo 2

let maBoolean = true;

// Exo 3

let monArray = [];

// Exo 4

let monObjet = {

};

// Exo 5

let monString = "";

// Exo 6

let monInt = 23;

// Exo 7

let objetExo7 = {
    nom: "",
    grandir(){

    },
}

// Exo 8

premierFonction = (nombreUn, nombreDeux) => {

}

// Exo 9

if(monInt < 8){

}
else{

}

// Exo 10

let cpt;

for(let i = 0; i < 10; i++){
    cpt = i
}

// Exo 11

let date = new Date()
let today = date.toLocaleDateString()
console.log(today)

// Exo 12

let mot = "lalala"

majuscule = () => {
    mot = mot.toUpperCase()
    console.log(mot)
}

majuscule()

// Exo 13

let majFirstLast = "radar"

firstLast = () => {
    let change = majFirstLast.charAt(0).toUpperCase() + majFirstLast.substring(1,4).toLowerCase() + majFirstLast.charAt(4).toUpperCase()
    console.log(change)
}

firstLast()

// Exo 14

let longueur = "Salut toi";

long = () => {
    alert(longueur.length)
}

long()

// Exo 15

aleatoire = (max) => {
    alert(Math.floor(Math.random() * Math.floor(max)));
}

aleatoire(101)

// Exo 16

aleaDeuxChiffre = (nombre1, nombre2) => {
    alert(nombre1+Math.floor(Math.random()*(nombre2-nombre1+1)))
}

// Exo 17

clgValeur = (valeur) => {
    if(typeof valeur == typeof monArray){
        alert('Votre valeur est de type Array')
    }
    else if(typeof valeur == typeof maBoolean){
        alert('Votre valeur est de type Boolean')
    }
    else if(typeof valeur == typeof monInt){
        alert('Votre valeur est de type Integer')
    }
    else if(typeof valeur == typeof monObjet){
        alert('Votre valeur est de type Objet')
    }
    else if(typeof valeur == typeof monString){
        alert('Votre valeur est de type String')
    }
}

clgValeur();

// Exo 18

let perso = {
    nom: "",
    age: "",
    modeling(nom, age){
        this.nom = nom;
        this.age = age;
        alert(`Bonjour ${perso.nom} tu as ${perso.age} ans`)
    },
}

perso.modeling("Kadir", 23)

// Exo 19

let key = {
    addKey(){
        perso.prenom = "Yavas";
        console.log(perso)
    }
}

key.addKey()

// Exo 20

let carre = {  
    size: "",
    borderAspect: "",
    epaisseur: "",
    couleur: "",
    remplir(size, borderAspect, epaisseur, couleur){
        this.size = size;
        this.borderAspect = borderAspect;
        this.epaisseur = epaisseur;
        this.couleur = couleur;
        if(borderAspect !== "solid" || borderAspect !== "dotted"){
            alert('Veuillez entrez une valeur correcte pour borderAspect')
        } else {
            console.log(carre)
        }
        if(couleur != "red" || couleur != "blue" || couleur != "green"){
            alert('Veuillez entrez une valeur correcte pour couleur')
        }
    }
}

carre.remplir(15, "dotted", "20mm", "blue")