/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
 
var el = document.getElementById('ster').getAttribute('src');
 
el = document.getElementById('ster').setAttribute('src', 'image/sterUit.png');
 
function changeimage(){
     
    var huidig = document.getElementById('ster').getAttribute('src');

    if (huidig == 'image/sterUit.png'){
         
        el = document.getElementById('ster').setAttribute('src', 'image/sterAan.png');
         
    } else {
        el = document.getElementById('ster').setAttribute('src', 'image/sterUit.png');
    }

}
 
var bestand = document.getElementById('ster');
bestand.addEventListener('click', changeimage , false);