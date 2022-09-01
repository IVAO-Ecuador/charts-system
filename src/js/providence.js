import { chartsSectionInfo } from "./pages/chartsSection.js";

export const providence = () => {
    const azuay = document.querySelector("#azuay");
    const elOro = document.querySelector("#elOro");
    const loja = document.querySelector("#loja");
    const chinchipe = document.querySelector("#chinchipe");
    const bolivar = document.querySelector("#bolivar");
    const cotopaxi = document.querySelector("#cotopaxi");
    const guayas = document.querySelector("#guayas");
    const losRios = document.querySelector("#losRios");
    const manabi = document.querySelector("#manabi");
    const moronaSantiago = document.querySelector("#moronaSantiago");
    const orellana = document.querySelector("#orellana");
    const pichincha = document.querySelector("#pichincha");
    const pastaza = document.querySelector("#pastaza");
    const napo = document.querySelector("#napo");
    const tungurahua = document.querySelector("#tungurahua");
    const esmeraldas = document.querySelector("#esmeraldas");
    const carchi = document.querySelector("#carchi");
    const imbabura = document.querySelector("#imbabura");
    const sucumbios = document.querySelector("#sucumbios");
    const santaElena = document.querySelector("#santaElena");
    const santoDomingo = document.querySelector("#santoDomingo");
    const galapagos = document.querySelector("#galapagos");
    
    const providenceArray = [azuay, elOro, loja, chinchipe, bolivar, cotopaxi, guayas,
    losRios,manabi,moronaSantiago,orellana,pichincha,pastaza,napo,tungurahua,esmeraldas,
    carchi,imbabura,sucumbios,santaElena,santoDomingo,galapagos]

    providenceArray.forEach(element => {
        element.addEventListener('click', () => {
            chartsSectionInfo(element.id)
        })
    });

}


