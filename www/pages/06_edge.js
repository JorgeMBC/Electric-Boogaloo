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
                id: '_06_03',
                type: 'image',
                rect: ['67px', '56px','1146px','769px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"06_03.jpg",'0px','0px']
            },
            {
                id: '_06_06',
                type: 'image',
                rect: ['67px', '840px','1146px','290px','auto', 'auto'],
                opacity: 0,
                fill: ["rgba(0,0,0,0)",im+"06_06.jpg",'0px','0px']
            },
            {
                id: '_06_09',
                type: 'image',
                rect: ['65px', '1144px','1148px','718px','auto', 'auto'],
                opacity: 0,
                fill: ["rgba(0,0,0,0)",im+"06_09.png",'0px','0px']
            },
            {
                id: '_06_032',
                type: 'image',
                rect: ['578px', '142px','237px','88px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"06_03.png",'0px','0px']
            },
            {
                id: '_06_07',
                type: 'image',
                rect: ['548px', '230px','222px','44px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"06_07.png",'0px','0px']
            },
            {
                id: '_06_11',
                type: 'image',
                rect: ['603px', '274px','212px','69px','auto', 'auto'],
                opacity: 0,
                fill: ["rgba(0,0,0,0)",im+"06_11.png",'0px','0px']
            },
            {
                id: '_06_15',
                type: 'image',
                rect: ['568px', '965px','182px','40px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"06_15.png",'0px','0px']
            },
            {
                id: '_06_19',
                type: 'image',
                rect: ['982px', '1790px','198px','37px','auto', 'auto'],
                opacity: 0,
                fill: ["rgba(0,0,0,0)",im+"06_19.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${__06_15}": [
                ["style", "top", '965px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '568px']
            ],
            "${__06_06}": [
                ["style", "top", '840px'],
                ["style", "opacity", '0'],
                ["style", "left", '67px']
            ],
            "${__06_032}": [
                ["style", "top", '142px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '578px']
            ],
            "${__06_03}": [
                ["style", "top", '56px'],
                ["style", "opacity", '0'],
                ["style", "left", '133px']
            ],
            "${__06_11}": [
                ["style", "top", '274px'],
                ["style", "opacity", '0'],
                ["style", "left", '603px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "width", '1280px'],
                ["style", "height", '1920px'],
                ["style", "overflow", 'hidden']
            ],
            "${__06_09}": [
                ["style", "top", '1174px'],
                ["style", "opacity", '0'],
                ["style", "left", '65px']
            ],
            "${__06_07}": [
                ["style", "top", '220px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '548px']
            ],
            "${__06_19}": [
                ["style", "top", '1790px'],
                ["style", "opacity", '0'],
                ["style", "left", '982px']
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
                { id: "eid7", tween: [ "style", "${__06_03}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
                { id: "eid13", tween: [ "style", "${__06_07}", "top", '230px', { fromValue: '220px'}], position: 1000, duration: 250 },
                { id: "eid22", tween: [ "style", "${__06_09}", "top", '1144px', { fromValue: '1174px'}], position: 3250, duration: 1750 },
                { id: "eid9", tween: [ "style", "${__06_032}", "opacity", '1', { fromValue: '0.000000'}], position: 500, duration: 500 },
                { id: "eid18", tween: [ "style", "${__06_09}", "opacity", '1', { fromValue: '0'}], position: 3750, duration: 1250 },
                { id: "eid23", tween: [ "style", "${__06_19}", "opacity", '1', { fromValue: '0'}], position: 4250, duration: 750 },
                { id: "eid15", tween: [ "style", "${__06_06}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 2000 },
                { id: "eid17", tween: [ "style", "${__06_15}", "opacity", '1', { fromValue: '0.000000'}], position: 2000, duration: 750 },
                { id: "eid5", tween: [ "style", "${__06_03}", "left", '72px', { fromValue: '133px'}], position: 0, duration: 750 },
                { id: "eid14", tween: [ "style", "${__06_11}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 500 },
                { id: "eid11", tween: [ "style", "${__06_07}", "opacity", '1', { fromValue: '0.000000'}], position: 1000, duration: 250 }            ]
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
})(jQuery, AdobeEdge, "EDGE-807889718");
