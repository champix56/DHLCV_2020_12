//declaration d'une fonction
function initialisationJS(prenom) {
    //deffinition d'une variable et affectation d'un contenu
    var jsload = document.querySelector('#jsload');
    //moddif. du contenu html de la balise dans la var
    jsload.innerHTML = 'mon <span style="font-weight:900">JS</span> est chargé pour '+prenom;
    //moddif. du style de la balise dans la var
    jsload.style.backgroundColor = 'LIME';
}
//usage d'une fonction
initialisationJS('Alexandre');