/**
 * Permet l'appel HTTP avec XMLHttpRequest
 * @param {Uri} ressourceUrl chemin de la ressource
 */
function get(ressourceUrl) {
    //instanciation de XHR
    var xhr = new XMLHttpRequest();
    //ouverture de la connexion
    xhr.open('GET', 'http://localhost:5629'+ressourceUrl);
    // tache à effectuer à chaque changement de readystate (passage d'une etape de reception)
    // 1 -> open    2-> send    3-> en cours de reception   4-> fin de reception
    xhr.onreadystatechange = function (evt) {
        if (evt.currentTarget.readyState < XMLHttpRequest.DONE) { return; }
        var objt = JSON.parse(evt.currentTarget.response);
        console.log(objt);
    }
    //envoie de la requete
    xhr.send();
}

get('/postit/1');