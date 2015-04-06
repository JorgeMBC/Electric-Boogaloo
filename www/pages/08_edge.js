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
                id: '_08',
                type: 'image',
                rect: ['0px', '-1px','1280px','1920px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"08.jpg",'0px','0px']
            },
            {
                id: '_08Copy',
                type: 'image',
                rect: ['0px', '-1px','1280px','1920px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"08.jpg",'0px','0px']
            },
            {
                id: '_08_03',
                type: 'image',
                rect: ['482px', '384px','315px','55px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"08_03.png",'0px','0px']
            },
            {
                id: '_08_07',
                type: 'image',
                rect: ['454px', '750px','371px','168px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"08_07.png",'0px','0px']
            },
            {
                id: '_08_11',
                type: 'image',
                rect: ['309px', '1672px','662px','117px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"08_11.png",'0px','0px']
            },
            {
                id: '_08_012',
                type: 'image',
                rect: ['236px', '402px','910px','436px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"08_01.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${__08Copy}": [
                ["style", "left", '0px'],
                ["style", "top", '-1px']
            ],
            "${__08}": [
                ["style", "left", '0px'],
                ["style", "top", '-1px']
            ],
            "${__08_11}": [
                ["style", "left", '309px'],
                ["style", "top", '1672px']
            ],
            "${__08_07}": [
                ["style", "top", '750px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '454px']
            ],
            "${__08_012}": [
                ["style", "left", '236px'],
                ["style", "top", '402px']
            ],
            "${__08_03}": [
                ["style", "top", '384px'],
                ["style", "opacity", '0.008130'],
                ["style", "left", '482px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "width", '1280px'],
                ["style", "height", '1920px'],
                ["style", "overflow", 'hidden']
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
                { id: "eid4", tween: [ "style", "${__08_07}", "opacity", '1', { fromValue: '0.000000'}], position: 500, duration: 1000 },
                { id: "eid2", tween: [ "style", "${__08_03}", "opacity", '1', { fromValue: '0.008130'}], position: 0, duration: 750 }            ]
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
})(jQuery, AdobeEdge, "EDGE-808087423");
