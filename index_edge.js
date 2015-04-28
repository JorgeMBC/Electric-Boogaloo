/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-2.0.3.min.js",
            "librerias/EdgeCommons.js"
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "width",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: '_00A',
                            type: 'image',
                            rect: ['0', '0', '1280px', '1920px', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",im+"00A.jpg",'0px','0px']
                        },
                        {
                            id: '_00BCopy',
                            type: 'image',
                            rect: ['247', '245', '910px', '436px', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",im+"00B.png",'0px','0px']
                        },
                        {
                            id: '_00C',
                            type: 'image',
                            rect: ['0', '1', '1280px', '91px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"00C.jpg",'0px','0px']
                        },
                        {
                            id: 'espanolbtn',
                            symbolName: 'espanolbtn',
                            type: 'rect',
                            rect: ['907', '1044px', '437', '100', 'auto', 'auto']
                        },
                        {
                            id: 'ensglishbtn',
                            symbolName: 'ensglishbtn',
                            type: 'rect',
                            rect: ['907px', '1220px', 'undefined', 'undefined', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1280px', '1920px', 'auto', 'auto'],
                            sizeRange: ['0px','','',''],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid439",
                            "opacity",
                            0,
                            1000,
                            "easeOutQuart",
                            "${_00A}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid441",
                            "opacity",
                            1000,
                            500,
                            "easeOutQuart",
                            "${_00BCopy}",
                            '0.000000',
                            '1'
                        ]
                    ]
                }
            },
            "espanolbtn": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '437px', '100px', 'auto', 'auto'],
                            borderRadius: ['20px', '20px', '20px', '20px 20px'],
                            id: 'RoundRect',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,0.71)']
                        },
                        {
                            rect: ['-1964px', '-450px', '4365px', '1000px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.1', '0.1']],
                            id: 'espanol2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/espanol.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '437px', '100px']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: true,
                    data: [
                        [
                            "eid448",
                            "opacity",
                            0,
                            250,
                            "easeOutQuart",
                            "${espanol2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid449",
                            "opacity",
                            1250,
                            250,
                            "easeOutQuart",
                            "${espanol2}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "ensglishbtn": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '437px', '100px', 'auto', 'auto'],
                            borderRadius: ['20px', '20px', '20px', '20px 20px'],
                            id: 'RoundRect',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,0.71)']
                        },
                        {
                            rect: ['-1964px', '-450px', '4365px', '1000px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.1', '0.1']],
                            id: 'english2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/english.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '437px', '100px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid445",
                            "opacity",
                            500,
                            250,
                            "easeOutQuart",
                            "${english2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid446",
                            "opacity",
                            1750,
                            250,
                            "easeOutQuart",
                            "${english2}",
                            '1',
                            '0'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-2246004");
