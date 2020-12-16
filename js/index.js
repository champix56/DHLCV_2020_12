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
    console.log(evt.target[1].value);
    console.log(evt.target[2].value);
    console.log(evt.target[3].value);
    //autre method
    console.log(document.querySelector('#editor-title'));
}

function createPostit(params) {
    var postit=document.createElement('div');
    // postit.setAttribute('class','postit');
    //postit.className='postit';
    //ajout d'une class dans la liste de class d'un element
    postit.classList.add('postit');
    //possibilité de suppression d'une class d'une balise
    //postit.classList.remove('postit');
    //postit.innerHTML='Mon nouveau postit';

    //selection de la liste de postit
    var liste=document.querySelector('#list');
    //ajout dans la liste de l'element
    liste.append(postit);
}