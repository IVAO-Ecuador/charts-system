import { chartsSectionInfo } from "./pages/chartsSection.js";

export const airportsOptions = () => {
    const SEQM = document.querySelector("#SEQM");
    const SEGU = document.querySelector("#SEGU");
    const SEMT = document.querySelector("#SEMT");
    const SEST = document.querySelector("#SEST");
    const SEGS = document.querySelector("#SEGS");
    const SECU = document.querySelector("#SECU");
    const SERO = document.querySelector("#SERO");
    const SELT = document.querySelector("#SELT");
    const SENL = document.querySelector("#SENL");
    const SECO = document.querySelector("#SECO");
    const SESM = document.querySelector("#SESM");
    const SEMC = document.querySelector("#SEMC");
    const SEJD = document.querySelector("#SEJD");
    const SETN = document.querySelector("#SETN");
    const SETU = document.querySelector("#SETU");
    const SESA = document.querySelector("#SESA");
    const SECA = document.querySelector("#SECA");

    const airportsArray = [SEQM, SEGU, SEMT, SEST, SEGS, SECU, SERO, SELT
    , SENL, SECO, SESM, SEMC, SEJD, SETN, SETU, SESA, SECA]

    airportsArray.forEach(element => {
        element.addEventListener('click', () => {
            chartsSectionInfo(element.id)
        })
    })
}
