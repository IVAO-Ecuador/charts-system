import { finder } from "../finder.js";

export const chartsSectionInfo = (condition = "all") => { 

    const chartSection = document.querySelector("#chartSection");
    
    const airports = [
        {
            icao: "SEQM",
            city: "Quito",
            chartImg: "./src/assets/airports/SEQM.jpg",
            chartLink: "chart/seqm",
            providenceName: "Pichincha",
            providenceCode: "pichincha"
        },
        {
            icao: "SEGU",
            city: "Guayaquil",
            chartImg: "./src/assets/airports/SEGU.jpg",
            chartLink: "",
            providenceName: "Guayas",
            providenceCode: "guayas"
        },
        {
            icao: "SEMT",
            city: "Manta",
            chartImg: "./src/assets/airports/SEMT.jpg",
            chartLink: "",
            providenceName: "Manabi",
            providenceCode: "manabi"
        },
        {
            icao: "SEST",
            city: "San Cristóbal",
            chartImg: "./src/assets/airports/SEST.jpg",
            chartLink: "",
            providenceName: "Galápagos",
            providenceCode: "galapagos"
        },
        {
            icao: "SEGS",
            city: "Galápagos",
            chartImg: "./src/assets/airports/SEGS.jpg",
            chartLink: "",
            providenceName: "Galápagos",
            providenceCode: "galapagos"
        }
        ,
        {
            icao: "SECU",
            city: "Cuenca",
            chartImg: "./src/assets/airports/SECU.jpg",
            chartLink: "",
            providenceName: "Azuay",
            providenceCode: "azuay"
        },
        {
            icao: "SERO",
            city: "Santa Rosa",
            chartImg: "./src/assets/airports/SERO.jpg",
            chartLink: "",
            providenceName: "El Oro",
            providenceCode: "eloro"
        },
        {
            icao: "SELT",
            city: "Latacunga",
            chartImg: "./src/assets/airports/SELT.jpg",
            chartLink: "",
            providenceName: "Cotopaxi",
            providenceCode: "cotopaxi"
        },
        {
            icao: "SENL",
            city: "Lago Agrario",
            chartImg: "./src/assets/airports/SENL.jpg",
            chartLink: "",
            providenceName: "Nueva Loja",
            providenceCode: "sucumbios"
        },
        {
            icao: "SECO",
            city: "Coca",
            chartImg: "./src/assets/airports/SECO.jpg",
            chartLink: "",
            providenceName: "Orellana",
            providenceCode: "orellana"
        },
        {
            icao: "SESM",
            city: "Shell",
            chartImg: "./src/assets/airports/SESM.jpg",
            chartLink: "",
            providenceName: "Pastaza",
            providenceCode: "pastaza"
        },
        {
            icao: "SEMC",
            city: "Macas",
            chartImg: "./src/assets/airports/SEMC.jpg",
            chartLink: "",
            providenceName: "Morona Santiago",
            providenceCode: "moronasantiago"
        },
        {
            icao: "SEJD",
            city: "Jumandy",
            chartImg: "./src/assets/airports/SEJD.jpg",
            chartLink: "",
            providenceName: "Napo",
            providenceCode: "napo"
        },
        {
            icao: "SETN",
            city: "Esmeraldas",
            chartImg: "./src/assets/airports/SETN.jpg",
            chartLink: "",
            providenceName: "Esmeraldas",
            providenceCode: "esmeraldas"
        },
        {
            icao: "SETU",
            city: "Tulcán",
            chartImg: "./src/assets/airports/SETU.jpg",
            chartLink: "",
            providenceName: "Carchi",
            providenceCode: "carchi"
        },
        {
            icao: "SESA",
            city: "Salinas",
            chartImg: "./src/assets/airports/SESA.jpg",
            chartLink: "",
            providenceName: "Santa Elena",
            providenceCode: "santaelena"
        },
        {
            icao: "SECA",
            city: "Catamayo",
            chartImg: "./src/assets/airports/SECA.jpeg",
            chartLink: "",
            providenceName: "Loja",
            providenceCode: "loja"
        }
    ];

    let title;
    let airportSelected = [];

    if(condition != "all"){
        let counter = 0;
        airports.forEach(element => {
            if(element.providenceCode == condition.toLowerCase()  || element.icao == condition.toUpperCase() 
                || element.city == condition){

                airportSelected.push(element);
                title = `Mostrando las cartas de ${element.city}`
                counter++

            }
        });
        if(counter == 0) title = "No hay cartas para esa ubicación";
    }else{
        title = "Mostrando todas las cartas";
    }

    chartSection.innerHTML = `
    <div class='find-bar'>
        <h3 class='charts-title'>${title}</h3>  
        <input type='text' id='filterInput' placeholder='Nombre de ciudad o ICAO para filtrar...'>
        <button id='filterButton'><img src='./src/assets/lupa.png'></button>
    </div>
    <div class='charts-box'>

    </div>
    `;

    const createButton = () => {
        const showAll = document.createElement("div");
        showAll.id = "showAllButton";
        showAll.innerHTML = "<button class='showAllButton'>Mostrar todo</button>"
        chartSection.append(showAll);

        const showAllButton = document.querySelector("#showAllButton");
        showAllButton.addEventListener('click', () => {
            chartsSectionInfo("all");

            const regions = document.querySelectorAll(".regions path")
            regions.forEach(element => {
                element.style.fill = "#7124ef";
            });

            const airports = document.querySelectorAll(".airports circle")
            airports.forEach(element => {
                element.style.fill = "#0d1323";
            });
        })
    }

    const chartBox = document.querySelector(".charts-box");

    if(airportSelected.length == 0 && condition != "all"){

        const chartNotFound = document.createElement("div");
        chartNotFound.className = "chartNotFound"
        chartNotFound.innerHTML = 'No hay aeropuertos con cartas disponibles en esta ubicación';
        chartSection.append(chartNotFound);

        createButton();

    }else if(airportSelected.length != 0){

        airportSelected.forEach(element => {
            const chartCard = document.createElement("div");
            chartCard.className = "chart-card";
            chartCard.innerHTML = `
             <img src='${element.chartImg}'>
             <div class="chartbox-text">
                 <p class='airportName'>${element.city}</p>
                 <p class='icaoCode'>${element.icao}</p>
                 <a href="../sources/charts/SEGS - BALTRA.pdf" target="blank">Ver cartas de ${element.city}</a>
             </div>`
     
             chartBox.append(chartCard);
         });

        createButton();

    }else{

        airports.forEach(element => {
            const chartCard = document.createElement("div");
            chartCard.className = "chart-card";
            chartCard.innerHTML = `
             <img src='${element.chartImg}'>
             <div class="chartbox-text">
                 <p class='airportName'>${element.city}</p>
                 <p class='icaoCode'>${element.icao}</p>
                 <a href="../sources/charts/SEGS - BALTRA.pdf" target="blank">Ver cartas de ${element.city}</a>
             </div>`
     
             chartBox.append(chartCard);
         });

    }
    
    finder();
}