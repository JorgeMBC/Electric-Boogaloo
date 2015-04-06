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
                id: '_07_03',
                type: 'image',
                rect: ['65px', '58px','1150px','754px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"07_03.jpg",'0px','0px']
            },
            {
                id: '_07_07',
                type: 'image',
                rect: ['65px', '820px','400px','373px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"07_07.jpg",'0px','0px']
            },
            {
                id: '_07_09',
                type: 'image',
                rect: ['644px', '820px','348px','373px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"07_09.jpg",'0px','0px']
            },
            {
                id: '_07_12',
                type: 'image',
                rect: ['998px', '821px','387px','371px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"07_12.jpg",'0px','0px']
            },
            {
                id: '_07_18',
                type: 'image',
                rect: ['65px', '1203px','1146px','633px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"07_18.png",'0px','0px']
            },
            {
                id: '_07_30',
                type: 'image',
                rect: ['687px', '1629px','315px','168px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"07_30.png",'0px','0px']
            },
            {
                id: '_07_26',
                type: 'image',
                rect: ['928px', '1312px','200px','32px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"07_26.png",'0px','0px']
            },
            {
                id: '_07_15',
                type: 'image',
                rect: ['901px', '1192px','241px','65px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"07_15.png",'0px','0px']
            },
            {
                id: '_07_11',
                type: 'image',
                rect: ['680px', '492px','193px','50px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"07_11.png",'0px','0px']
            },
            {
                id: '_07_072',
                type: 'image',
                rect: ['286px', '274px','173px','32px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"07_07.png",'0px','0px']
            },
            {
                id: '_07_032',
                type: 'image',
                rect: ['146px', '184px','140px','68px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"07_03.png",'0px','0px']
            },
            {
                id: '_07_20',
                type: 'image',
                rect: ['572px', '1187px','173px','34px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"07_20.png",'0px','0px']
            },
            {
                id: '_07_18_1',
                type: 'image',
                rect: ['188px', '1147px','229px','30px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"07_18_1.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${__07_072}": [
                ["style", "top", '274px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '276px']
            ],
            "${__07_18_1}": [
                ["style", "top", '1187px'],
                ["style", "opacity", '0'],
                ["style", "left", '188px']
            ],
            "${__07_07}": [
                ["style", "top", '820px'],
                ["style", "opacity", '0'],
                ["style", "left", '195px']
            ],
            "${__07_15}": [
                ["style", "top", '1192px'],
                ["style", "opacity", '0'],
                ["style", "left", '901px']
            ],
            "${__07_09}": [
                ["style", "top", '820px'],
                ["style", "opacity", '0'],
                ["style", "left", '644px']
            ],
            "${__07_20}": [
                ["style", "top", '1187px'],
                ["style", "opacity", '0'],
                ["style", "left", '572px']
            ],
            "${__07_26}": [
                ["style", "top", '1312px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '928px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1920px'],
                ["style", "width", '1280px']
            ],
            "${__07_12}": [
                ["style", "top", '821px'],
                ["style", "opacity", '0'],
                ["style", "left", '998px']
            ],
            "${__07_18}": [
                ["style", "top", '1203px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '65px']
            ],
            "${__07_03}": [
                ["style", "top", '58px'],
                ["style", "opacity", '0.024390'],
                ["style", "left", '65px']
            ],
            "${__07_30}": [
                ["style", "top", '1629px'],
                ["transform", "scaleY", '0.6'],
                ["transform", "scaleX", '0.6'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '687px']
            ],
            "${__07_032}": [
                ["style", "top", '184px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '126px']
            ],
            "${__07_11}": [
                ["style", "top", '492px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '680px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5500,
            autoPlay: true,
            timeline: [
                { id: "eid9", tween: [ "style", "${__07_072}", "opacity", '1', { fromValue: '0.000000'}], position: 500, duration: 500 },
                { id: "eid11", tween: [ "style", "${__07_072}", "left", '286px', { fromValue: '276px'}], position: 500, duration: 500 },
                { id: "eid23", tween: [ "style", "${__07_07}", "opacity", '1', { fromValue: '0'}], position: 2250, duration: 155 },
                { id: "eid27", tween: [ "style", "${__07_12}", "opacity", '1', { fromValue: '0'}], position: 2750, duration: 500 },
                { id: "eid49", tween: [ "transform", "${__07_30}", "scaleX", '1', { fromValue: '0.6'}], position: 5000, duration: 250, easing: "easeInExpo" },
                { id: "eid38", tween: [ "style", "${__07_15}", "top", '1112px', { fromValue: '1192px'}], position: 3000, duration: 500 },
                { id: "eid40", tween: [ "style", "${__07_15}", "opacity", '1', { fromValue: '0'}], position: 3000, duration: 351 },
                { id: "eid33", tween: [ "style", "${__07_20}", "top", '1147px', { fromValue: '1187px'}], position: 2630, duration: 250 },
                { id: "eid51", tween: [ "style", "${__07_30}", "top", '1497px', { fromValue: '1629px'}], position: 5000, duration: 250 },
                { id: "eid4", tween: [ "style", "${__07_032}", "opacity", '1', { fromValue: '0.000000'}], position: 250, duration: 750 },
                { id: "eid50", tween: [ "transform", "${__07_30}", "scaleY", '1', { fromValue: '0.6'}], position: 5000, duration: 250, easing: "easeInExpo" },
                { id: "eid7", tween: [ "style", "${__07_032}", "left", '146px', { fromValue: '126px'}], position: 250, duration: 750 },
                { id: "eid46", tween: [ "style", "${__07_30}", "opacity", '1', { fromValue: '0.000000'}], position: 5000, duration: 500 },
                { id: "eid30", tween: [ "style", "${__07_18_1}", "top", '1147px', { fromValue: '1187px'}], position: 2500, duration: 250 },
                { id: "eid13", tween: [ "style", "${__07_11}", "opacity", '1', { fromValue: '0.000000'}], position: 1500, duration: 500 },
                { id: "eid37", tween: [ "style", "${__07_20}", "opacity", '1', { fromValue: '0'}], position: 2630, duration: 250 },
                { id: "eid44", tween: [ "style", "${__07_26}", "opacity", '1', { fromValue: '0.000000'}], position: 4250, duration: 500 },
                { id: "eid42", tween: [ "style", "${__07_18}", "opacity", '1', { fromValue: '0.000000'}], position: 4000, duration: 1000 },
                { id: "eid2", tween: [ "style", "${__07_03}", "opacity", '1', { fromValue: '0.024390'}], position: 0, duration: 750 },
                { id: "eid21", tween: [ "style", "${__07_12}", "left", '828px', { fromValue: '998px'}], position: 2750, duration: 500 },
                { id: "eid20", tween: [ "style", "${__07_09}", "left", '474px', { fromValue: '644px'}], position: 2500, duration: 500 },
                { id: "eid32", tween: [ "style", "${__07_18_1}", "opacity", '1', { fromValue: '0'}], position: 2500, duration: 250 },
                { id: "eid19", tween: [ "style", "${__07_07}", "left", '67px', { fromValue: '195px'}], position: 2250, duration: 250 },
                { id: "eid25", tween: [ "style", "${__07_09}", "opacity", '1', { fromValue: '0'}], position: 2500, duration: 260 }            ]
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
})(jQuery, AdobeEdge, "EDGE-807963095");
