'use strict';

import { finder } from "./finder.js";
import { chartsSectionInfo } from "./pages/chartsSection.js";
import { mapSectionInfo } from "./pages/mapSection.js";

/* Login */

const infoSection = document.querySelector("#infoSection");
const mapSection = document.querySelector("#mapSection");
const loginSection = document.querySelector("#loginSection");
const chartSection = document.querySelector("#chartSection");
const rightSide = document.querySelector("#right-side");

let param = new URLSearchParams(location.search);
var token = param.get('IVAOTOKEN');
let userInfo = [];

if(token != null){
    fetch(`./getUser/${token}`)
    .then(data => data.json())
    .then(data => {
        userInfo = data;
        if(userInfo.vid != null){
            infoSection.style.display = "none";
            loginSection.style.display = "none";
            mapSection.style.display = "block";
            chartSection.style.display = "block";
            rightSide.style.backgroundImage = "none";

            mapSectionInfo();
            chartsSectionInfo();
            finder();
            
        }else{
            showLoginPage()
        };
    });
}else{
    showLoginPage();
}
