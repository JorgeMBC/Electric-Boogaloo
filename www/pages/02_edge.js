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
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: '_02_02',
                type: 'image',
                rect: ['0px', '1246px','1280px','674px','auto', 'auto'],
                opacity: 0,
                fill: ["rgba(0,0,0,0)",im+"02_02.png",'0px','0px']
            },
            {
                id: '_02_03',
                type: 'image',
                rect: ['69px', '64px','1141px','815px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"02_03.jpg",'0px','0px']
            },
            {
                id: '_02_062',
                type: 'image',
                rect: ['69px', '889px','1141px','550px','auto', 'auto'],
                opacity: 0,
                fill: ["rgba(0,0,0,0)",im+"02_062.png",'0px','0px']
            },
            {
                id: '_02_032',
                type: 'image',
                rect: ['118px', '105px','162px','52px','auto', 'auto'],
                opacity: 1,
                fill: ["rgba(0,0,0,0)",im+"02_03.png",'0px','0px']
            },
            {
                id: '_02_07',
                type: 'image',
                rect: ['118px', '158px','211px','88px','auto', 'auto'],
                opacity: 1,
                fill: ["rgba(0,0,0,0)",im+"02_07.png",'0px','0px']
            },
            {
                id: '_02_11',
                type: 'image',
                rect: ['151px', '248px','178px','62px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"02_11.png",'0px','0px']
            },
            {
                id: '_02_14',
                type: 'image',
                rect: ['861px', '786px','233px','77px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"02_14.png",'0px','0px']
            },
            {
                id: '_02_18',
                type: 'image',
                rect: ['304px', '989px','187px','37px','auto', 'auto'],
                opacity: 0,
                fill: ["rgba(0,0,0,0)",im+"02_18.png",'0px','0px']
            },
            {
                id: '_02_22',
                type: 'image',
                rect: ['695px', '1246px','148px','38px','auto', 'auto'],
                opacity: 0,
                fill: ["rgba(0,0,0,0)",im+"02_22.png",'0px','0px']
            },
            {
                id: '_02_26',
                type: 'image',
                rect: ['693px', '1339px','151px','73px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"02_26.png",'0px','0px']
            },
            {
                id: '_02_30',
                type: 'image',
                rect: ['431px', '1492px','144px','61px','auto', 'auto'],
                opacity: 0,
                fill: ["rgba(0,0,0,0)",im+"02_30.png",'0px','0px']
            },
            {
                id: '_02_34',
                type: 'image',
                rect: ['592px', '1710px','124px','73px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"02_34.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${__02_18}": [
                ["style", "top", '999px'],
                ["style", "opacity", '0'],
                ["style", "left", '304px']
            ],
            "${__02_30}": [
                ["style", "top", '1492px'],
                ["style", "opacity", '0'],
                ["style", "left", '431px']
            ],
            "${__02_22}": [
                ["style", "top", '1246px'],
                ["style", "opacity", '0'],
                ["style", "left", '695px']
            ],
            "${__02_032}": [
                ["style", "top", '105px'],
                ["style", "opacity", '0'],
                ["style", "left", '128px']
            ],
            "${__02_34}": [
                ["style", "top", '1710px'],
                ["style", "opacity", '0'],
                ["style", "left", '592px']
            ],
            "${__02_26}": [
                ["style", "top", '1339px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '693px']
            ],
            "${__02_02}": [
                ["style", "top", '1246px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${__02_11}": [
                ["style", "top", '248px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '171px']
            ],
            "${__02_07}": [
                ["style", "top", '158px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '138px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1920px'],
                ["style", "width", '1280px']
            ],
            "${__02_062}": [
                ["style", "top", '929px'],
                ["style", "opacity", '0'],
                ["style", "left", '69px']
            ],
            "${__02_03}": [
                ["style", "top", '64px'],
                ["style", "opacity", '0'],
                ["style", "left", '129px']
            ],
            "${__02_14}": [
                ["style", "top", '786px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '861px']
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
                { id: "eid31", tween: [ "style", "${__02_26}", "opacity", '1', { fromValue: '0'}], position: 3250, duration: 500, easing: "easeInQuad" },
                { id: "eid7", tween: [ "style", "${__02_032}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500, easing: "easeInQuad" },
                { id: "eid33", tween: [ "style", "${__02_30}", "opacity", '1', { fromValue: '0'}], position: 4750, duration: 130, easing: "easeInQuad" },
                { id: "eid22", tween: [ "style", "${__02_14}", "opacity", '1', { fromValue: '0.000000'}], position: 1250, duration: 500, easing: "easeInQuad" },
                { id: "eid14", tween: [ "style", "${__02_11}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 250 },
                { id: "eid16", tween: [ "style", "${__02_11}", "left", '151px', { fromValue: '171px'}], position: 1000, duration: 250 },
                { id: "eid23", tween: [ "style", "${__02_062}", "opacity", '1', { fromValue: '0'}], position: 2500, duration: 500, easing: "easeInQuad" },
                { id: "eid27", tween: [ "style", "${__02_062}", "top", '889px', { fromValue: '929px'}], position: 2250, duration: 750, easing: "easeInQuad" },
                { id: "eid12", tween: [ "style", "${__02_07}", "left", '118px', { fromValue: '138px'}], position: 500, duration: 750, easing: "easeInQuad" },
                { id: "eid37", tween: [ "style", "${__02_18}", "top", '989px', { fromValue: '999px'}], position: 2000, duration: 500, easing: "easeInQuad" },
                { id: "eid35", tween: [ "style", "${__02_34}", "opacity", '1', { fromValue: '0'}], position: 4750, duration: 250, easing: "easeInQuad" },
                { id: "eid29", tween: [ "style", "${__02_22}", "opacity", '1', { fromValue: '0'}], position: 3000, duration: 500, easing: "easeInQuad" },
                { id: "eid9", tween: [ "style", "${__02_07}", "opacity", '1', { fromValue: '0.000000'}], position: 750, duration: 500, easing: "easeInQuad" },
                { id: "eid5", tween: [ "style", "${__02_03}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 750 },
                { id: "eid20", tween: [ "style", "${__02_032}", "left", '118px', { fromValue: '128px'}], position: 250, duration: 750, easing: "easeInQuad" },
                { id: "eid32", tween: [ "style", "${__02_02}", "opacity", '1', { fromValue: '0'}], position: 4000, duration: 750, easing: "easeInQuad" },
                { id: "eid28", tween: [ "style", "${__02_18}", "opacity", '1', { fromValue: '0'}], position: 2250, duration: 500, easing: "easeInQuad" },
                { id: "eid3", tween: [ "style", "${__02_03}", "left", '69px', { fromValue: '129px'}], position: 0, duration: 750, easing: "easeInQuad" }            ]
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
})(jQuery, AdobeEdge, "EDGE-807357463");
