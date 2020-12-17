/**
 * Constante de base d'url de l'appli
 */
var BASE_URL = 'http://localhost:5629';
/**
 * Objet permettant les appels http
 * @param {Url} baseurl base de l'url des ressources
 */
var Crud = function (baseurl) {
    /**
     * Permet l'appel HTTP avec XMLHttpRequest
     * @param {Uri} ressourceUrl chemin de la ressource
     */
    function get(ressourceUrl) {
        //instanciation de XHR
        var xhr = new XMLHttpRequest();
        //ouverture de la connexion
        xhr.open('GET', baseurl + ressourceUrl);
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
    /**
     * Permet l'envoi en POST d'une ressource sur ressourceUrl
     * @param {Uri} ressourceUrl chemin du post
     * @param {Object} ressource data a envoyer
     */
    function post(ressourceUrl, ressource) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', baseurl + ressourceUrl);
        //specification du type contenu
        xhr.setRequestHeader('Content-Type', 'application/json');
        //specification de ce qui est attendu en retour
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.onreadystatechange = function (evt) {
            if (xhr.readyState < 4) { return; }
            console.log(JSON.parse(xhr.response));
        }
        //tranformation en JSON du contenu Objet
        xhr.send(JSON.stringify(ressource));
    }
    /**
     * suppression d'une ressource sur ressourceUrl
     * @param {Uri} ressourceUrl 
     */
    function remove(ressourceUrl) {
        var xhr = new XMLHttpRequest();
        xhr.open('DELETE', baseurl + ressourceUrl);
        xhr.onreadystatechange = function (evt) {
            if (xhr.readyState < 4) { return; }
            console.log(JSON.parse(xhr.response));
        };
        xhr.send();
    }
    /**
     * Mise à jour d'une ressource sur ressourceUrl
     * @param {Uri} ressourceUrl 
     * @param {Object} ressource 
     */
    function put(ressourceUrl, ressource) {
        var xhr = new XMLHttpRequest();
        xhr.open('PUT', baseurl + ressourceUrl);
        //specification du type contenu
        xhr.setRequestHeader('Content-Type', 'application/json');
        //specification de ce qui est attendu en retour
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.onreadystatechange = function (evt) {
            if (xhr.readyState < 4) { return; }
            console.log(JSON.parse(xhr.response));
        };
        //tranformation en JSON du contenu Objet
        xhr.send(JSON.stringify(ressource));
    }

}


