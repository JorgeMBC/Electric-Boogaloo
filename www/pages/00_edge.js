/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "both",
    centerStage: "horizontal",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: '_00A',
                type: 'image',
                rect: ['0px', '0px','1280px','1920px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"00A.jpg",'0px','0px']
            },
            {
                id: '_00C',
                type: 'image',
                rect: ['0px', '1px','1280px','91px','auto', 'auto'],
                opacity: 1,
                fill: ["rgba(0,0,0,0)",im+"00C.jpg",'0px','0px']
            },
            {
                id: '_00B',
                type: 'image',
                rect: ['247px', '245px','910px','436px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"00B.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "width", '1280px'],
                ["style", "height", '1920px'],
                ["style", "overflow", 'hidden']
            ],
            "${__00A}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '0px']
            ],
            "${__00B}": [
                ["style", "top", '245px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '247px']
            ],
            "${__00C}": [
                ["style", "top", '1px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1500,
            autoPlay: true,
            timeline: [
                { id: "eid9", tween: [ "style", "${__00B}", "opacity", '1', { fromValue: '0.000000'}], position: 1000, duration: 500, easing: "easeOutQuart" },
                { id: "eid10", tween: [ "style", "${__00A}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 1000, easing: "easeOutQuart" }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-800674447");
