import { chartsSectionInfo } from "./pages/chartsSection.js";

export const finder = () =>{

    const filterInput = document.querySelector("#filterInput")
    const filterButton = document.querySelector("#filterButton");

    filterButton.addEventListener('click', () => {
        if(filterInput.value != ""){
            const placeToFind = filterInput.value
            chartsSectionInfo(placeToFind);
            console.log("buscando");
        }
    })

    filterInput.addEventListener('keyup', function(e) {
        var keycode = e.keyCode || e.which;
        if (keycode == 13 && filterInput.value != "") {
            const placeToFind = filterInput.value
            chartsSectionInfo(placeToFind);
            console.log("buscando");
        }
      });

}

