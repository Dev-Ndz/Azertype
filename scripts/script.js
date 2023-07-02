let score = 0
let nbrQuestions = 0
function afficherResultat(score,nbrQuestions){
    let spanScore = document.querySelector(".zoneScore span");
    let affichageScore = `${score} / ${nbrQuestions}`;
    spanScore.innerText = affichageScore;

}

function choisirPhrasesOuMots(){
    // Déclaration de la variable contenant le choix de l'utilisateur
    let choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
    // Tant que l'utilisateur n'a pas saisi "mots" ou "phrases", on lui redemande de saisir un choix
    while (choix !== "mots" && choix !== "phrases") {
    choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
    }
    if(choix =="mots"){
        return listeMots
    }else{
        return listePhrases
    }
}

function lancerBoucleDeJeu(tableauChoisi)
{
    for (let i = 0; i < tableauChoisi.length; i++) 
    {
        let motUtilisateur = prompt("Entrez : " + tableauChoisi[i])
        if (motUtilisateur === tableauChoisi[i]) 
        {
            score++
        }
    }
    return score
}

function lancerJeu(){
    let choix = choisirPhrasesOuMots()
    nbrQuestions = choix.length
    score = lancerBoucleDeJeu(choix)
    resultat=afficherResultat(score,nbrQuestions)
    console.log(resultat)
}

//lancerJeu();