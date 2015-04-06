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
                id: '_05_03',
                type: 'image',
                rect: ['67px', '29px','1146px','709px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"05_03.jpg",'0px','0px']
            },
            {
                id: '_05_06',
                type: 'image',
                rect: ['67px', '751px','1146px','1156px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"05_06.png",'0px','0px']
            },
            {
                id: '_05_032',
                type: 'image',
                rect: ['84px', '275px','285px','457px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"05_03.png",'0px','0px']
            },
            {
                id: '_05_11',
                type: 'image',
                rect: ['178px', '469px','323px','69px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"05_11.png",'0px','0px']
            },
            {
                id: '_05_08',
                type: 'image',
                rect: ['708px', '509px','323px','223px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"05_08.png",'0px','0px']
            },
            {
                id: '_05_14',
                type: 'image',
                rect: ['435px', '787px','369px','631px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"05_14.png",'0px','0px']
            },
            {
                id: '_05_18',
                type: 'image',
                rect: ['435px', '1516px','196px','84px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"05_18.png",'0px','0px']
            },
            {
                id: '_05_05',
                type: 'image',
                rect: ['467px', '275px','273px','457px','auto', 'auto'],
                opacity: 0,
                fill: ["rgba(0,0,0,0)",im+"05_05.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${__05_032}": [
                ["style", "top", '275px'],
                ["style", "opacity", '0'],
                ["style", "left", '84px']
            ],
            "${__05_06}": [
                ["style", "top", '751px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '67px']
            ],
            "${__05_11}": [
                ["style", "top", '469px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '178px']
            ],
            "${__05_08}": [
                ["style", "top", '509px'],
                ["style", "opacity", '0.008130'],
                ["style", "left", '708px']
            ],
            "${__05_03}": [
                ["style", "top", '29px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '67px']
            ],
            "${__05_18}": [
                ["style", "top", '1516px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '435px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1920px'],
                ["style", "width", '1280px']
            ],
            "${__05_05}": [
                ["style", "top", '275px'],
                ["style", "opacity", '0'],
                ["style", "left", '467px']
            ],
            "${__05_14}": [
                ["style", "top", '787px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '435px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5000,
            autoPlay: true,
            timeline: [
                { id: "eid13", tween: [ "style", "${__05_14}", "opacity", '1', { fromValue: '0.000000'}], position: 2250, duration: 750, easing: "easeInQuad" },
                { id: "eid2", tween: [ "style", "${__05_03}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 750 },
                { id: "eid7", tween: [ "style", "${__05_05}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500, easing: "easeInQuad" },
                { id: "eid11", tween: [ "style", "${__05_06}", "opacity", '1', { fromValue: '0.000000'}], position: 2500, duration: 1250, easing: "easeInQuad" },
                { id: "eid9", tween: [ "style", "${__05_08}", "opacity", '1', { fromValue: '0.008130'}], position: 1500, duration: 500, easing: "easeInQuad" },
                { id: "eid4", tween: [ "style", "${__05_032}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 250, easing: "easeInQuad" },
                { id: "eid15", tween: [ "style", "${__05_18}", "opacity", '1', { fromValue: '0.000000'}], position: 4250, duration: 750, easing: "easeInQuad" },
                { id: "eid6", tween: [ "style", "${__05_11}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 750, easing: "easeInQuad" }            ]
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
})(jQuery, AdobeEdge, "EDGE-807819582");
