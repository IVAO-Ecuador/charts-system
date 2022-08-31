export const chartsSectionInfo = () => { 

    const chartSection = document.querySelector("#chartSection");
    
    const airports = [
        {
            icao: "SEQM",
            city: "QUITO",
            chartImg: "./src/assets/airports/SEQM.jpg",
            chartLink: "chart/seqm",
            providence: "Pichincha"
        },
        {
            icao: "SEGU",
            city: "GUAYAQUIL",
            chartImg: "./src/assets/airports/SEGU.jpg",
            chartLink: "",
            providence: "Guayas"
        },
        {
            icao: "SEMT",
            city: "Manta",
            chartImg: "./src/assets/airports/SEMT.jpg",
            chartLink: "",
            providence: "Manabi"
        },
        {
            icao: "SEST",
            city: "San Cristóbal",
            chartImg: "./src/assets/airports/SEST.jpg",
            chartLink: "",
            providence: "Galápagos"
        },
        {
            icao: "SEGS",
            city: "Galápagos",
            chartImg: "./src/assets/airports/SEGS.jpg",
            chartLink: "",
            providence: "Galápagos"
        }
        ,
        {
            icao: "SECU",
            city: "Cuenca",
            chartImg: "./src/assets/airports/SECU.jpg",
            chartLink: "",
            providence: "Azuay"
        },
        {
            icao: "SERO",
            city: "Santa Rosa",
            chartImg: "./src/assets/airports/SERO.jpg",
            chartLink: "",
            providence: "El Oro"
        },
        {
            icao: "SELT",
            city: "Latacunga",
            chartImg: "./src/assets/airports/SELT.jpg",
            chartLink: "",
            providence: "Cotopaxi"
        },
        {
            icao: "SENL",
            city: "Lago Agrario",
            chartImg: "./src/assets/airports/SENL.jpg",
            chartLink: "",
            providence: "Nueva Loja"
        },
        {
            icao: "SECO",
            city: "Coca",
            chartImg: "./src/assets/airports/SECO.jpg",
            chartLink: "",
            providence: "Orellana"
        },
        {
            icao: "SESM",
            city: "Shell",
            chartImg: "./src/assets/airports/SESM.jpg",
            chartLink: "",
            providence: "Pastaza"
        },
        {
            icao: "SEMC",
            city: "Macas",
            chartImg: "./src/assets/airports/SEMC.jpg",
            chartLink: "",
            providence: "Pastaza"
        },
        {
            icao: "SEJD",
            city: "Jumandy",
            chartImg: "./src/assets/airports/SEJD.jpg",
            chartLink: "",
            providence: "Tena"
        },
        {
            icao: "SETN",
            city: "Esmeraldas",
            chartImg: "./src/assets/airports/SETN.jpg",
            chartLink: "",
            providence: "Esmeraldas"
        },
        {
            icao: "SETU",
            city: "Tulcán",
            chartImg: "./src/assets/airports/SETU.jpg",
            chartLink: "",
            providence: "Carchi"
        },
        {
            icao: "SESA",
            city: "Salinas",
            chartImg: "./src/assets/airports/SESA.jpg",
            chartLink: "",
            providence: "Santa Helena"
        },
        {
            icao: "SECA",
            city: "Catamayo",
            chartImg: "./src/assets/airports/SECA.jpeg",
            chartLink: "",
            providence: "Loja"
        }
    ];

    chartSection.innerHTML = `
    <div class='find-bar'>
        <h3 class='charts-title'>Mostrando todas las cartas</h3>  
        <input type='text' id='filterInput' placeholder='Nombre de aeropuerto o ICAO para filtrar...'>
        <button id='filterButton'><img src='./src/assets/lupa.png'></button>
    </div>
    <div class='charts-box'>

    </div>
    `;

    const chartBox = document.querySelector(".charts-box");

    airports.forEach(element => {
       const chartCard = document.createElement("div");
       chartCard.className = "chart-card";
       chartCard.innerHTML = `
        <img src='${element.chartImg}'>
        <div class="chartbox-text">
            <p class='airportName'>${element.city}</p>
            <p class='icaoCode'>${element.icao}</p>
            <a href="../sources/charts/SEGS - BALTRA.pdf" target="blank">Ver Carta de ${element.city}</a>
        </div>`

        chartBox.append(chartCard);
    });





    
}