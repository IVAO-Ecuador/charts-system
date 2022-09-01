import {regions} from '../maps/regions.js';
import {airports} from '../maps/airports.js';
import { providence } from '../providence.js';
import { airportsOptions } from '../airport.js';

export const mapSectionInfo = () => {

    const mapSection = document.querySelector("#mapSection");
    mapSection.innerHTML = `

    <div class='map-section-box'>
        <img src="./src/assets/logo_charts.png" alt="" srcset="" class="charts_logo">
        <p>Seleccione una providencia para ver las cartas aeronáuticas de la zona:</p>
        <div id='mapBox'>
            ${regions}
        </div>
        <div class="buttonsSelector">
            <button class="buttonSelect active" id="chartPlaces">Provincias</button>
            <button class="buttonSelect" id="chartAirports">Aeropuertos</button>
        </div>
    </div>
    `
    providence();
    const buttonProvidence = document.querySelector("#chartPlaces");
    const buttonAirports = document.querySelector("#chartAirports");
    const mapBox = document.querySelector("#mapBox")

    buttonProvidence.addEventListener("click", () => {
        mapBox.innerHTML = regions;
        providence();
        if(buttonProvidence.classList.contains("active")){
            buttonAirports.classList.remove("active")
        }else{
            buttonProvidence.classList.add("active")
            buttonAirports.classList.remove("active")
        }
    })

    buttonAirports.addEventListener("click", () => {
        mapBox.innerHTML = airports;
        airportsOptions();
        if(buttonAirports.classList.contains("active")){
            buttonProvidence.classList.remove("active")
        }else{
            buttonAirports.classList.add("active")
            buttonProvidence.classList.remove("active")
        }
    })
}