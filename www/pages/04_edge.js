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
                id: '_04_03',
                type: 'image',
                rect: ['66px', '60px','1147px','290px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"04_03.jpg",'0px','0px']
            },
            {
                id: '_04_06',
                type: 'image',
                rect: ['66px', '368px','1149px','719px','auto', 'auto'],
                opacity: 0,
                fill: ["rgba(0,0,0,0)",im+"04_06.jpg",'0px','0px']
            },
            {
                id: '_04_10',
                type: 'image',
                rect: ['106px', '1104px','1147px','769px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"04_10.png",'0px','0px']
            },
            {
                id: '_04_032',
                type: 'image',
                rect: ['535px', '183px','211px','54px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"04_03.png",'0px','0px']
            },
            {
                id: '_04_07',
                type: 'image',
                rect: ['378px', '582px','152px','47px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"04_07.png",'0px','0px']
            },
            {
                id: '_04_11',
                type: 'image',
                rect: ['345px', '636px','217px','92px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"04_11.png",'0px','0px']
            },
            {
                id: '_04_15',
                type: 'image',
                rect: ['717px', '1506px','206px','116px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"04_15.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${__04_03}": [
                ["style", "top", '60px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '66px']
            ],
            "${__04_10}": [
                ["style", "top", '1104px'],
                ["style", "opacity", '0'],
                ["style", "left", '136px']
            ],
            "${__04_06}": [
                ["style", "top", '428px'],
                ["style", "opacity", '0'],
                ["style", "left", '66px']
            ],
            "${__04_11}": [
                ["style", "top", '636px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '345px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "width", '1280px'],
                ["style", "height", '1920px'],
                ["style", "overflow", 'hidden']
            ],
            "${__04_07}": [
                ["style", "top", '562px'],
                ["style", "opacity", '0'],
                ["style", "left", '378px']
            ],
            "${__04_15}": [
                ["style", "top", '1506px'],
                ["transform", "scaleY", '0.85'],
                ["transform", "scaleX", '0.85'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '717px']
            ],
            "${__04_032}": [
                ["style", "top", '183px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '535px']
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
                { id: "eid14", tween: [ "style", "${__04_10}", "left", '66px', { fromValue: '136px'}], position: 4750, duration: 250, easing: "easeInBack" },
                { id: "eid2", tween: [ "style", "${__04_03}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 1750 },
                { id: "eid9", tween: [ "style", "${__04_07}", "top", '582px', { fromValue: '562px'}], position: 2000, duration: 750 },
                { id: "eid4", tween: [ "style", "${__04_032}", "opacity", '1', { fromValue: '0'}], position: 485, duration: 1015 },
                { id: "eid5", tween: [ "style", "${__04_06}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 1000 },
                { id: "eid22", tween: [ "transform", "${__04_15}", "scaleY", '1', { fromValue: '0.85'}], position: 4750, duration: 250, easing: "easeInBack" },
                { id: "eid11", tween: [ "style", "${__04_07}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 750 },
                { id: "eid13", tween: [ "style", "${__04_11}", "opacity", '1', { fromValue: '0.000000'}], position: 3500, duration: 1000 },
                { id: "eid21", tween: [ "transform", "${__04_15}", "scaleX", '1', { fromValue: '0.85'}], position: 4750, duration: 250, easing: "easeInBack" },
                { id: "eid18", tween: [ "style", "${__04_15}", "opacity", '1', { fromValue: '0.000000'}], position: 4750, duration: 250, easing: "easeInBack" },
                { id: "eid16", tween: [ "style", "${__04_10}", "opacity", '1', { fromValue: '0'}], position: 4540, duration: 210, easing: "easeInBack" },
                { id: "eid7", tween: [ "style", "${__04_06}", "top", '368px', { fromValue: '428px'}], position: 1000, duration: 2000, easing: "easeInQuad" }            ]
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
})(jQuery, AdobeEdge, "EDGE-807736534");
