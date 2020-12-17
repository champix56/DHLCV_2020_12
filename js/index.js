//chargement du DOM est bien achevé
addEventListener('load', function (evt) {
    console.log(evt)
    //usage d'une fonction
    initialisationJS('Alexandre');
    //accrochage d'un ecouteur d'event sur une balise 
    //event : submit
    //fonction à declencher pour l'event -> formSubmited
    document.querySelector('form').addEventListener('submit', formSubmited);
});

//declaration d'une fonction
function initialisationJS(prenom) {
    //deffinition d'une variable et affectation d'un contenu
    var jsload = document.querySelector('#jsload');
    //moddif. du contenu html de la balise dans la var
    jsload.innerHTML = 'mon <span style="font-weight:900">JS</span> est chargé pour ' + prenom;
    //moddif. du style de la balise dans la var
    jsload.style.backgroundColor = 'LIME';
}


function formSubmited(evt) {
    evt.preventDefault();
    console.log('Mon formulaire est "submit" ');
    // console.log(evt);
    console.log(evt.target[0].value);
    console.log(evt.target['date'].value);
    console.log(evt.target[2].value);
    console.log(evt.target[3].value);
    //autre method
    //console.log(document.querySelector('form'));
    var monFormulaire=document.forms['editor-form'];
    //usage de moment js 
    //var dateFormated=moment(monFormulaire['date'].value,'DD MM YYYY')

    createPostit(   
                    monFormulaire['title'].value, 
                    monFormulaire['date'].value, 
                    monFormulaire['time'].value,
                    monFormulaire['description'].value
                );
}
/**
 * Fonction de création d'un postit avec ajout dans la balise div#list
 * @param {String} titre titre de la note
 * @param {String} date date ISO AAAA-MM-JJ pour la note
 * @param {String} heure heure ISO HH:MM:SS pour la note
 * @param {String} description description de la note
 */
function createPostit(titre,date,heure,description) {
    var postit=document.createElement('div');
    // postit.setAttribute('class','postit');
    //postit.className='postit';
    //ajout d'une class dans la liste de class d'un element
    postit.classList.add('postit');
    //possibilité de suppression d'une class d'une balise
    //postit.classList.remove('postit');
    //-----------------------------------
    //creation du contenu par interpretation de la chaine et constitution d'un DOM pour cette balise
    postit.innerHTML='<div class="close"><img src="img/close.png"/></div><div class="postit-titre">'+titre+'</div>\
    date : <span class="datetime">'+date+'</span> heure : <span class="datetime">'+heure+'</span>\
    <h2>Description :</h2>'+description;
    
    //selection a partir de postit de ".close img" , puis addEventListener('click',deletePostit)
    postit.querySelector('.close img').addEventListener('click',deletePostit);

    //selection de la liste de postit
    var liste=document.querySelector('#list');
    //ajout dans la liste de l'element
    liste.append(postit);
}
function deletePostit(evt) {
    console.log('evenement lié à la suppression d\'une note',evt);
    evt.currentTarget.parentElement.parentElement.remove(); 
}