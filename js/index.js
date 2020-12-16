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

function formSubmited(evt) {
    evt.preventDefault();
    console.log('Mon formulaire est "submit" ');
    // console.log(evt);
    console.log(evt.target[0].value);
    console.log(evt.target[1].value);
    console.log(evt.target[2].value);
    console.log(evt.target[3].value);
    //autre method
    console.log(document.querySelector('#editor-title'));

}
//accrochage d'un ecouteur d'event sur une balise 
//event : submit
//fonction à declencher pour l'event -> formSubmited
document.querySelector('form').addEventListener('submit',formSubmited);