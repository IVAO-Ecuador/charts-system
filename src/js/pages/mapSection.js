import {regions} from '../maps/regions.js';
import {airports} from '../maps/airports.js';

export const mapSectionInfo = `

<div class='map-section-box'>
    <img src="./src/assets/logo_charts.png" alt="" srcset="" class="charts_logo">
    <p>Seleccione una providencia para ver las cartas aeronáuticas de la zona:</p>
    ${airports}
    <div class="buttonsSelector">
        <button class="buttonSelect active" id="chartPlaces">Provincias</button>
        <button class="buttonSelect" id="chartAirports">Aeropuertos</button>
    </div>
</div>`