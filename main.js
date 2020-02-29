    // let platDuJour = ""; 
    // const jourActuel = "mardi";
    // let jourSuivant = "mercredi";
    // let platSuivant = ""

    // if(jourActuel === "lundi"){
    //   jourSuivant ="mardi";
    //   platDuJour = "hamburgers";
    //   platSuivant= "sushis"
    // }
    // else if(jourActuel === "mardi"){
    //   jourSuivant = "mercredi"
    //   platDuJour = 'gratin dauphinois';
    //   platSuivant = "risotto"
    // }
    // else if(jourActuel === "mercredi"){
    //     jourSuivant = "jeudi";
    // platSuivant = "steack hachée frites";
    //   platDuJour = "tacos aux poulets"
    // }
    // else if(jourActuel === "jeudi"){
    //     jourSuivant ="vendredi";
    //     platDuJour = "salade niçoise";
    //   platSuivant = "choux fleur"
    // }
    // else if(jourActuel === "vendredi"){
    //     jourSuivant = "samedi"
    //   platDuJour = "mafé"
    //   platSuivant = "pizza 3 fromages"
      
    // }
    // else if(jourActuel === "samedi"){
    //     jourSuivant = "dimanche"; 
    //   platDuJour = "rôtis de porc";
    //   platSuivant = "colier de lardon";
    // }
    // else if (jourActuel === "dimanche"){
    //     jourSuivant = "lundi";
    //   platSuivant = "nems aux poulet";
    //   platDuJour = "filet o\'fish"
    // }
    // else{
    //     console.log("erreur jour : non reconnu");
    // }
    // console.log(`nous sommes ${jourActuel} et nous servons des ${platDuJour}.\nDemain nous serons ${jourSuivant} et nous servirons des ${platSuivant}.`);

    // switch(jourActuel){
    //   case "lundi":
    //     jourSuivant = "mardi";
    //     platDuJour = "ratatouille";
    //     platSuivant = "magarita";
    //     break;
    //   case "mardi":
    //     jourSuivant = "mercredi";
    //     platDuJour = "steak vegan pâtes"
    //     platSuivant = "hot dog frites maison"
    //     break;
    //   case "mercredi":
    //     jourSuivant = "jeudi";
    //     platDuJour = "planche à charcutrie";
    //     platSuivant = "macdos";
    //     break;
    //   case "jeudi":
    //     jourSuivant = "vendredi";
    //     platDuJour = "nems aux légume du potager";
    //     platSuivant = "poulet rôti agrémenté de sa sauce curry";
    //     break;
    //   case "vendredi":
    //     jourSuivant = "samedi";
    //     platDuJour = "gratin d'aubergine";
    //     platSuivant = "fusillini aux légumes du soleil"
    //     break;
    //   case "samedi":
    //     jourSuivant = "dimanche";
    //     platDuJour = "pastel aux thon et poulet";
    //     platSuivant = "croque monsieur";
    //     break;
    //   case "dimanche":
    //     jourSuivant = "lundi";
    //     platDuJour = "kfc";
    //     platSuivant = "burgers king"
    //   default: 
      
    // }
    // if(jourSuivant){
    //   console.log(`Aujourd'hui nous sommes ${jourActuel} et nous servons ${platDuJour} \nDemain nous serons ${jourSuivant} et nous servirons des ${platSuivant} `);
    //   }

// Crée 4 personnages de fiction ayant comme particularités:-point de sante ;-point de force ;point de défence et d'attaque. Les 4 personnages sont Lucas, Ted, Mat et sophie.

const combattant = {
   nom:"lucas",
   sante: 100,
   arme: "glaive",
  attaque:"coup de glaive",
   pa:60,
   decrire(){
    console.log(`${this.nom } a ${this.sante} points de santé, a ${this.pa} points d'attaque et a comme arme un ${this.arme}`);
   },
   attaque(personnage) {
     personnage.sante = personnage.sante - this.pa
     console.log(`${this.nom} avec son ${this.arme} met un coup de ${this.arme} et enleve ${this.pa} à ${personnage.nom}`);
     if(personnage.sante <= 0){
       personnage.sante = 0 
       console.log(`${personnage.nom} est mort`)
     }
   }
 }


 const guerrier = {
   nom:"Damien",
   sante:100,
   attaque:"coup d'epee",
   arme: "epee de chevalier ",
   pa:20,
   decrire (){
     console.log(`${this.nom} a ${this.sante} points de santé , ${this.pa} points d'attaque et a comme arme une ${this.arme}`)
   },
   attaque(personnage) {
     personnage.sante = personnage.sante - this.pa
     console.log(`${this.nom} avec son ${this.arme} met un coup de ${this.arme} et enleve ${this.pa} à ${personnage.nom}`);
     if(personnage.sante <= 0){
       personnage.sante = 0 
       console.log(`${personnage.nom} est mort`)
     }
   }
 }

 const samourai = {
   nom: "Nobu",
   sante : 100,
   attaque: "coup de katana",
   arme:"katana",
   pa:30,
   decrire (){
     console.log(`${this.nom} a ${this.sante} points de sante, ${this.pa} points d'attaque et a comme arme une ${this.arme}`)
   }, 
   attaque(personnage) {
   personnage.sante = personnage.sante - this.pa
    console.log(`${this.nom} avec son ${this.arme} met un coup de ${this.arme} et enleve ${this.pa} à ${personnage.nom}`);
    if(personnage.sante <= 0){
      personnage.sante = 0 
      console.log(`${personnage.nom} est mort`)
    }

    }
  }
  

 

 combattant.decrire();
 guerrier.decrire();
 combattant.attaque(guerrier);
 combattant.decrire();
 guerrier.decrire();
 guerrier.attaque(combattant);
 combattant.decrire();
 guerrier.decrire();
 combattant.attaque(guerrier);
 combattant.decrire();
 guerrier.decrire();
 samourai.decrire();
 samourai.attaque(combattant);
 samourai.decrire();
 combattant.decrire();
 combattant.attaque(samourai);
 combattant.decrire();
 samourai.decrire();
 samourai.attaque(combattant);
 samourai.decrire();
 combattant.decrire();
 


// lucas.decrire()
// const Ted =
//   prenon: "Ted",
//   sante: 180,
//   pointAtt:55,
//   pointDef:45,
//   arme: hache,
//   decrire (){
//     return`${Ted.prenon} a ${Ted.sante} et il a  `
//   }
// }

// function Personne(prenom, sante) {
//   this.prenom = prenom;
//   this.sante = sante;
// }

// Personne.prototype.decrire = function() {
//   console.log(`${this.prenonm} a ${this.sante}`);
// }

// let ted = new Personne('Ted', 180)

// ted.decrire;
  
