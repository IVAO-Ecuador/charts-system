'use strict';

// Loading Page module

const circles = [   document.getElementById("c1"),
                    document.getElementById("c2"),
                    document.getElementById("c3"),
                    document.getElementById("c4")];

var i = 0;

let loadingPage = setInterval(() => { 
  
    for(var n = 0; n <= 3; n++){
        if(circles[n] != circles[i]){
            circles[n].style.background = "#2F3241"
        }
    }

    circles[i].style.background = "#FFF";

    i < 3 ? i++ : i = 0;

}, 300);

/* Login */

let param = new URLSearchParams(location.search);
var token = param.get('IVAOTOKEN');

if(token != null){
    fetch(`./getUser/${token}`)
    .then(data => data.json())
    .then(data => console.log(data));
}