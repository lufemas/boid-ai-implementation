var $,
$alignPerceptionDistanceRange,
$alignPerceptionDistanceRangeSpan,
$alignIntensityRange,
$alignIntensityRangeSpan,

$cohesionPerceptionDistanceRange,
$cohesionPerceptionDistanceRangeSpan,
$cohesionIntensityRange,
$cohesionIntensityRangeSpan,

$separationPerceptionDistanceRange,
$separationPerceptionDistanceRangeSpan,
$separationIntensityRange,
$separationIntensityRangeSpan;



window.addEventListener("load", (e) => {

    $ = document;

    $alignPerceptionDistanceRange = $.getElementById("align-perception-distance-range");
    $alignPerceptionDistanceRangeSpan = $.getElementById("align-perception-distance-range-span");
    $alignIntensityRange = $.getElementById("align-intensity-range");
    $alignIntensityRangeSpan = $.getElementById("align-intensity-range-span");

    $cohesionPerceptionDistanceRange = $.getElementById("cohesion-perception-distance-range");
    $cohesionPerceptionDistanceRangeSpan = $.getElementById("cohesion-perception-distance-range-span");
    $cohesionIntensityRange = $.getElementById("cohesion-intensity-range");
    $cohesionIntensityRangeSpan = $.getElementById("cohesion-intensity-range-span");

    $separationPerceptionDistanceRange = $.getElementById("separation-perception-distance-range");
    $separationPerceptionDistanceRangeSpan = $.getElementById("separation-perception-distance-range-span");
    $separationIntensityRange = $.getElementById("separation-intensity-range");
    $separationIntensityRangeSpan = $.getElementById("separation-intensity-range-span");

    
    $alignPerceptionDistanceRange.addEventListener(`input`, 
    (e) => {
        changeValue(e,$alignPerceptionDistanceRangeSpan);
    })

    $alignIntensityRange.addEventListener(`input`, 
    (e) => {
        changeValue(e,$alignIntensityRangeSpan);
    })


        
    $cohesionPerceptionDistanceRange.addEventListener(`input`, 
    (e) => {
        changeValue(e,$cohesionPerceptionDistanceRangeSpan);
    })

    $cohesionIntensityRange.addEventListener(`input`, 
    (e) => {
        changeValue(e,$cohesionIntensityRangeSpan);
    })


        
    $separationPerceptionDistanceRange.addEventListener(`input`, 
    (e) => {
        changeValue(e,$separationPerceptionDistanceRangeSpan);
    })

    $separationIntensityRange.addEventListener(`input`, 
    (e) => {
        changeValue(e,$separationIntensityRangeSpan);
    })


});


function changeValue(e, target){
    target.innerText = e.srcElement.value;
}

function chamar(){
    console.log($);
}
